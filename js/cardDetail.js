import {baseUrl} from "./const/base.js"

const cardDetail = function(){
    const stardCardDetail = `<div class="container py-5">
    <div class="card" style="width: 100%;">
        <div class="card-body">`
    const endCardDetail = `</div></div></div>`
    
    let key = $(this).attr('key');
    $.get(baseUrl+`/api/recipe/${key}`, function(results){
        let title = results['results']['title'];
        let author = results['results']['author']['user'];
        let published = results['results']['author']['datePublished'];
        let time = results['results']['time'];
        let serving = results['results']['serving'];
        let difficulty = results['results']['difficulty'];
        let thumb = results['results']['thumb'];
        let desscription = results['results']['desc'];
        let items = results['results']['needItem'];
        let ingredients = results['results']['ingredient'];
        let process = results['results']['step'];

        const itemList = [];
        let itemStart = `<li class="container d-flex flex-row align-items-center">`;
        let itemEnd = `</li>`;
        $.each(items, function(key ,value){
            itemList.push(itemStart+`<p>${value['item_name']}</p><img src="${thumb_item}" alt="SariWangi Milk Tea Caramel">`+itemEnd)
        });

        const ingredientsList = [];
        $.each(ingredients, function(value){
            ingredientsList.push(`<li class="container d-flex">${value}</li>`)
        });

        const processList = []
        $.each(process, function(value){
            processList.push(`<li class="container d-flex">${value}</li>`)
        });

        let bg_color;
        if(difficulty == 'Mudah') {
            bg_color = 'bg-info'
        }
        else if(difficulty == 'Cukup Rumit') {
            bg_color = 'bg-warning'
        }
        else {
            bg_color = 'bg-danger'
        }

        let cardTitle = `<h5 class="card-title">${title}</h5>`;
        let cardSubtitle = `<h6 class="card-subtitle mb-2 text-muted">Oleh : ${author}</h6>
                            <p class="card-subtitle mb-2 text-muted">${published}</p>`
        let cardInformation = `<div class="information container d-flex flex-row justify-content-around">
                                    <p class="porsi">Porsi : ${serving}</p>
                                    <p class="Waktu">Waktu : ${time}</p>
                                    <p class="kesulitan">Kesulitan : <span class="${bg_color} p-1 rounded">${difficulty}</span></p>
                                </div>`;
        let cardDescription = `<div class="container d-flex flex-row">
                                <img src="${thumb}" alt="" class="w-50">
                                <div class="container ms-3">
                                    <h6>Description :</h6>
                                    <p class="card-text">${desscription}</p>
                                </div>`;
        let itemsAndIngredients = `<div class="tools_ingredients container d-flex flex-row">
                                    <div class="ingredients container">
                                        <h5>Item yang diperlukan :</h5>
                                        <ul>`+itemList.join("")+`</ul>
                                        </div><div class="container bumbu">
                                        <h5>Bahan yang diperlukan :</h5>
                                        <ul>`+ingredientsList.join("")+`</ul>
                                        </div>
                                      </div>`;
        let cardProcess = `<div class="container proses">
                        <h5>Proses Pembuatan :</h5> 
                        <ul class="container">`+processList.join("")+`</ul></div>`;


        $('.base').html(detail).addClass('');
    })
}

export { cardDetail }