
let mainProductGalery = [
    {
        photo: './assets/coffe.jpg',
        product: "COFFE",
        description: "Mini descripcion",
        amount: 11,
        category: 'categoria1',
        price: 200
    },
    {
        photo: './assets/tofu.png',
        product: "TOFU",
        description: "Mini descripcion",
        amount: 5,
        category: 'categoria1',
        price: 100
    },
    {
        photo: './assets/queso.jpg',
        product: "QUESO",
        description: "Mini descripcion",
        amount: 12,
        category: 'categoria2',
        price: 200
    },
    {
        photo: './assets/tofu.png',
        product: "TOFU",
        description: "Mini descripcion",
        amount: 5,
        category: 'categoria2',
        price: 400
    },
    {
        photo: './assets/chai.jpg',
        product: "PORTADA",
        description: "Mini descripcion",
        amount: 12,
        category: 'categoria1',
        price: 200
    },
    {
        photo: './assets/queso.jpg',
        product: "CART",
        description: "Mini descripcion",
        amount: 11,
        category: 'categoria2',
        price: 40
    },
];
let auxProductGalery = [];

let menu = document.getElementById('menuMovil');
let containerMainGalery = document.getElementById('containerCards');
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', searchByKeyboard);
function openMenu() {
    let menuState = menu.style.display;
    menu.style.display = menuState === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    showCards(mainProductGalery);
});

function showCards(mainProductGalery) {
    let bgClassHighProduct = 'relative block bg-azulBasico h-80 w-1/2 md:w-1/4   mt-4 rounded-3xl shadow-lg transition-all overflow-hidden';
    let bgClassLowProduct = 'relative bg-red-400 h-80 w-1/2 md:w-1/4  mt-4 rounded-3xl shadow-lg transition-all overflow-hidden';
    let imgClass = 'rounded-full object-cover  h-1/2 absolute left-1/2 -translate-x-1/2 top-2 transition-all hover:scale-105';
    let divInfoClass = 'bg-white border-gray-200 border-2 absolute w-full bottom-0 rounded-3xl flex flex-wrap justify-center p-2 gap-2';
    let descriptionClass = 'text-grisBasico texto-portada block w-full';
    let buttomHighProduct = 'bg-azulBasico text-gray-100 texto-portada w-8/12 h-6  rounded-sm md:h-8  hover:opacity-75';
    let buttomLowProduct = 'bg-red-400 text-white texto-portada w-8/12 h-6  rounded-sm md:h-8  hover:opacity-75';
    //limpiamos el contenido del div
    containerMainGalery.innerHTML = '';
    for (const element of mainProductGalery) {
        const product = element;

        //se crea el contenedor de cada producto
        const item = document.createElement('div');
        item.id = 'cardProduct';
        item.className = product.amount > 10 ? bgClassHighProduct : bgClassLowProduct;

        //se crea la etiqueta para la imagen y sus clases
        const img = document.createElement('img');
        img.src = product.photo;
        img.className = imgClass;
        item.appendChild(img);

        //se crea el contendor de la informacion
        const infoItem = document.createElement('div');
        infoItem.className = divInfoClass;
        item.appendChild(infoItem);

        //se agrega el titulo descripcion y boton de comprar
        const title = document.createElement('p');
        title.innerHTML = product.product;
        title.className = product.amount > 10 ? 'text-azulBasico' : 'text-red-600';
        infoItem.appendChild(title);

        const description = document.createElement('p');
        description.innerHTML = product.description;
        description.className = descriptionClass;
        infoItem.appendChild(description);

        const btnBuy = document.createElement('button');
        btnBuy.innerHTML = 'Comprar';
        btnBuy.className = product.amount > 10 ? buttomHighProduct : buttomLowProduct;
        infoItem.appendChild(btnBuy);

        
        const details = document.createElement('p');
        details.innerHTML = 'ver detalles';
        details.className = 'text-gray-300 underline cursor-pointer text-sm';
        infoItem.appendChild(details);

        containerMainGalery.appendChild(item);
    }
}

function searchByCategory(category) {
    auxProductGalery = [];
    auxProductGalery = category != 'todo' ? mainProductGalery.filter(product => product.category === category) : mainProductGalery;
    showCards(auxProductGalery);
}
function searchByKeyboard() {
    const search = searchInput.value.toString().toLowerCase();
    auxProductGalery = search != '' ? mainProductGalery.filter(product => product.product.toLowerCase().includes(search)) : mainProductGalery;
    showCards(auxProductGalery);
}