import elementCreator from "./elementCreator.js";


const liBeranda = elementCreator('li', {
    'class': "nav-item"
});

const beranda = elementCreator('a', {
    'class': "nav-link active",
    'aria-current': "page",
    'href': "#"
}, 'Beranda');

liBeranda.appendChild(beranda)

$('.navigation_item').html(beranda);

const navCategory = function(results){

    var liNavDropdown = elementCreator('li', {
        'class': "nav-item dropdown active"
    });
    
    
    var ulNavDropdownMenu = elementCreator('ul', {
        'class': "dropdown-menu"
    })

    var navigationCategory = elementCreator('a', {
        'class': 'nav-link dropdown-toggle',
        'role': 'button',
        'data-bs-toggle': "dropdown"
    }, 'Category');

    for (var k in results['results']){
        var li = elementCreator('li')
        var dropdownItem = elementCreator('a', {
            'class': "dropdown-item category_item",
            'key': `${results['results'][k]['key']}`
        }, `${results['results'][k]['category']}`)

        li.appendChild(dropdownItem)
        ulNavDropdownMenu.appendChild(li)
    }

    liNavDropdown.appendChild(navigationCategory);
    liNavDropdown.appendChild(ulNavDropdownMenu);
    document.querySelector('.navigation_item').appendChild(liNavDropdown);
}


const navArticle = function (results) {
    
    var liNavDropdown = elementCreator('li', {
        'class': "nav-item dropdown active"
    });
    
    
    var ulNavDropdownMenu = elementCreator('ul', {
        'class': "dropdown-menu"
    })
    
    var navigationCategory = elementCreator('a', {
        'class': 'nav-link dropdown-toggle',
        'role': 'button',
        'data-bs-toggle': "dropdown"
    }, 'Article');

    for (var k in results['results']){
        var li = elementCreator('li')
        var dropdownItem = elementCreator('a', {
            'class': "dropdown-item category_item",
            'key': `${results['results'][k]['key']}`
        }, `${results['results'][k]['title']}`)

        li.appendChild(dropdownItem)
        ulNavDropdownMenu.appendChild(li)
    }

    liNavDropdown.appendChild(navigationCategory);
    liNavDropdown.appendChild(ulNavDropdownMenu);
    document.querySelector('.navigation_item').appendChild(liNavDropdown);
};

export { navCategory , navArticle}


// const navStart = `<li class="nav-item dropdown active">`
    
//     const navMiddle= `<ul class="dropdown-menu">`

    
//     const navEnd = `</ul></li>`


// $.each(categories['results'], function(key, value){
//     navList.push(`<li>
//         <a class="dropdown-item category_item" key="${value['key']}">${value['category']}</a>
//     </li>`)
// });
// let category = navStart+navName+navMiddle+navList.join("")+navEnd;
// $(category).appendTo('.navigation_item');