import { baseUrl } from "./const/base.js"
import { searchMenu } from "./search.js";
// import { cardDetail } from "./cardDetail.js";
import { createCard } from "./createCard.js";
import { otherFood } from "./otherFood.js";


$(document).ready(function(){
    const navStart = `<li class="nav-item dropdown active">`
    const navMiddle= `<ul class="dropdown-menu">`
    const navEnd = `</ul></li>`
    const beranda = `<li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Beranda</a></li>`

    $('.navigation_item').html(beranda);


    $.get(baseUrl+'/api/category/recipes', function (result){
        const navName = '<a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Category</a>'
        const navList = [];
        $.each(result['results'], function(key, value){
            navList.push(`<li>
                <a class="dropdown-item category_item" key="${value['key']}">${value['category']}</a>
            </li>`)
        });
        let category = navStart+navName+navMiddle+navList.join("")+navEnd;
        $(category).appendTo('.navigation_item');
    });

    $.get(baseUrl+'/api/category/article', function (result){
        const navName = '<a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Article</a>'
        const navList = [];
        $.each(result['results'], function(key, value){            
            const articleKey = [];
            $.get(baseUrl+`/api/category/article/${value['key']}`, function(results){
                $.each(results['results'], function(key, value){
                    articleKey.push(`<li>
                        <a class="dropdown-item category_item" key="${value['key']}">${value['key'].replace("-"," ")}</a>
                    </li>`);
                });
            });
            navList.push(`<li class="dropend">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" key="${value['key']}">
                    ${value['title']}
                </a>
                <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item category_item" key="">Halo</a>
                </li>
                </ul>
            </li>`);
        });
        let article = navStart+navName+navMiddle+navList.join("")+navEnd;
        $(article).appendTo('.navigation_item');
    });

   
    $.get(baseUrl+'/api/recipes-length/?limit=4',function(results){
        const cards = [];
        $.each(results['results'], function(key, value){
            cards.push(createCard(value))
        });
        $('#container_card').html(cards.join(""));
    });
    otherFood()
});

$('#keyword_search').click(searchMenu); 

$('.page').click(function(){
    $('.page.active').removeClass('active');
    $(this).addClass('active');
});



$('.recipe_detail').on("click",function(){
    console.log('push')
});
console.log($('.category_item'))