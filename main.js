let productGalery = [
    {
        photo: './assets/cart.png',
        product: "CART",
        description: "Mini descripcion",
        amount: 11
    },
    {
        photo: './assets/tofu.png',
        product: "TOFU",
        description: "Mini descripcion",
        amount: 5
    },
    {
        photo: './assets/portada.png',
        product: "PORTADA",
        description: "Mini descripcion",
        amount: 12
    },
    {
        photo: './assets/tofu.png',
        product: "TOFU",
        description: "Mini descripcion",
        amount: 5
    },
    {
        photo: './assets/portada.png',
        product: "PORTADA",
        description: "Mini descripcion",
        amount: 12
    },
    {
        photo: './assets/cart.png',
        product: "CART",
        description: "Mini descripcion",
        amount: 11
    },
];
let position = 0;

let containerSlider = document.getElementById('slider');
let menu = document.getElementById('menuMovil');


document.addEventListener('DOMContentLoaded', function () {
    slider();
});
window.addEventListener('scroll', function () {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (const item of elements) {
        let element = item;

        if (element.getBoundingClientRect().top < screenSize - 100) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    }

});
function openMenu() {
    let menuState =  menu.style.display;
    menu.style.display = menuState === 'block' ? 'none' : 'block';
}
function slider() {
    let bgClassHighProduct = 'relative block bg-azulBasico h-80 card  mt-4 rounded-3xl shadow-lg transition-all';
    let bgClassLowProduct = 'relative bg-red-400 h-80 card m-auto mt-4 rounded-3xl shadow-lg transition-all';
    let imgClass = 'rounded-full h-1/2 absolute left-1/2 -translate-x-1/2 top-2 transition-all hover:scale-105';
    let divInfoClass = 'bg-white border-gray-200 border-2 absolute w-full bottom-0 rounded-3xl flex flex-wrap justify-center p-2 gap-2';
    let descriptionClass = 'text-grisBasico texto-portada block w-full';
    let buttomHighProduct = 'bg-azulBasico text-gray-100 texto-portada w-8/12 h-6  rounded-sm md:h-8  hover:opacity-75';
    let buttomLowProduct = 'bg-red-400 text-white texto-portada w-8/12 h-6  rounded-sm md:h-8  hover:opacity-75';

    for (const element of productGalery) {
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


        containerSlider.appendChild(item);
    }


}

function moveSlider(direction) {
    if (direction) {
        position -= 16.6667;
        if (position < -100) position = 0;
        containerSlider.style.transform = `translateX(${position}%)`;

    } else {
        position += 16.6667;
        if (position > 0) position = -83.333;
        containerSlider.style.transform = `translateX(${position}%)`;
    }


}


