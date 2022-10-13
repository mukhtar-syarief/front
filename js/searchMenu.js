import { baseUrl } from "./const/base.js";

const searchMenu = function(){
    let keyword = document.getElementById('keyword').value;
    $.get(baseUrl+`/api/search/?q=${keyword}`, function(results){
        const cards = [];
        $.each(results['results'], function(key, value){
            let bg_color;
            if (value['difficulty'] == 'Mudah'){
                bg_color = `bg-success`;
            }
            else if (value['difficulty'] == 'Cukup Rumit'){
                bg_color = `bg-warning`;
            }
            else {
                bg_color = `bg-danger`;
            }
            cards.push(`<div class="card" style="width: 18rem;">
                <img src="${value['thumb']}" class="card-img-top" alt="${value['title']}">
                <div class="card-body">
                    <h5 class="card-title">${value['title']}</h5>
                    <div>
                        <p class="time">Time : <span>${value['times']}</span></p>
                        <p class="serving">Serving : <span>${value['serving']}</span></p>
                        <p>Difficulty : <span class="p-1 rounded ${bg_color} difficulty">${value['difficulty']}</span></p>
                    </div>
                    <p class="btn btn-primary recipe_detail" key="${value['key']}">Detail</p>
                </div>
            </div>`)
        });
        $('.base').html(cards.join("")).addClass('d-flex flex-row flex-wrap justify-content-around p-5 hasil_search');
    })
}


export {searchMenu}