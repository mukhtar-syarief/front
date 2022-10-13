import { baseUrl } from "../const/base.js";
import { navArticle } from "../createNav.js";


const getArticle = function(){
    $.get(baseUrl+'/api/category/article', function (results){
        return navArticle(results);
    });
}


const getArticleCategory = function(){
    $.get(baseUrl+`/api/category/article/${key}`, function(results){
        
    });
}

export { getArticle }