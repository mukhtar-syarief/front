import { baseUrl } from "./const/base.js";
import { createCard  } from "./createCard.js";


const otherFood = function(){
    $.get(baseUrl+'/api/recipes/1', function(results){
        const cards = [];
        $.each(results['results'], function(key, value){
            cards.push(createCard(value))
        });
        $('#container_other_menu_card').html(cards.join(""));
    });
}

export { otherFood }