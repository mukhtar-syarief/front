import { baseUrl } from "./const/base.js";
import { searchMenu } from "./searchMenu.js";
// import { cardDetail } from "./cardDetail.js";
import { createCard } from "./createCard.js";
import { otherFood } from "./otherFood.js";
// import elementCreator from "./elementCreator.js";
import { getCategory } from "./apis/category.js";
import { getArticle } from "./apis/article.js";


$(document).ready(function(){

    getCategory();
    getArticle();

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
// $('#keyword_search').click(() => {
//     var container = document.querySelector("#new_recipe");

//     var btn = elementCreator("button", {
//         class: "btn btn-outline-success",
//         id: "btn-first",
//         type: "button",
//         onclick: () => console.log("saya diklik")
//     }, "Saya Tombol Yang akan Di Klik");

//     container && container.appendChild(btn);

// }); 

$('.page').click(function(){
    $('.page.active').removeClass('active');
    $(this).addClass('active');
});

