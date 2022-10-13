import { pengumuman } from "./coba.js";

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let hasil = getRandom(10, 30);

let funcs = Array.from(Array(hasil).keys()).map((i) => {
	
    return () => {
    	console.log('murid ' + i)
    }
	
})


//isinya array dari fungsi
// 1. funcs harus dipanggil ketika pengumuman dipanggil
// 2. funcs tidak boleh diimport file coba.js 


funcs


function reply() {
    funcs.forEach(run => run())
};

// reply()






class Reactifity {
    constructor () {
        this.subs = []
    }
    depend () {
        if ( funcs ) {
            this.subs = datas
        }
    }
    notice () {
        this.subs.forEach(run => run())
    }
}



// var change = new Reactifity()

// change.depend()
// change.notice()


let datas = [{
    quantity: 2,
    price: 1000
}, {
    quantity:3,
    price: 1000
}]


Object.defineProperty(datas[0], 'price', {
    get(){
        console.log(datas[0]['price']);
    },
    set(newVal){
        datas['price'] = newVal;
        console.log(datas[0]['price']);
    }
});

datas[0].price = 21



// pengumuman()