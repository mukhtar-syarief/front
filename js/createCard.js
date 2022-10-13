const createCard = function (value){
    let bg_color;
    if (value['difficulty'] == 'Mudah'){
        bg_color = `bg-info`;
    }
    else if (value['difficulty'] == 'Cukup Rumit'){
        bg_color = `bg-warning`;
    }
    else {
        bg_color = `bg-danger`;
    }
    
    let card = `<div class="card" style="width: 18rem;">
                    <img src="${value['thumb']}" class="card-img-top" alt="${value['title']}">
                    <div class="card-body">
                        <h5 class="card-title" title="${value['title']}">${value['title']}</h5>
                        <div>
                            <p class="time">Time : <span>${value['times']}</span></p>
                            <p class="serving">Serving : <span>${value['serving']}</span></p>
                            <p>Difficulty : <span class="p-1 rounded ${bg_color} difficulty text-light fw-bold">${value['difficulty']}</span></p>
                        </div>
                        <p class="btn btn-primary recipe_detail" key="${value['key']}">Detail</p>
                    </div>
                </div>`
    return card 
};

export { createCard }
