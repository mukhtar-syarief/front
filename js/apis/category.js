import { baseUrl } from "../const/base.js";
import { navCategory } from "../createNav.js";


const getCategory = function(){
    $.get(baseUrl+'/api/category/recipes', function (results){
        return navCategory(results);
    });
}

export { getCategory }