let productGalery = [
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

let position = 0;

let containerSlider = document.getElementById('slider');
let menu = document.getElementById('menuMovil');


document.addEventListener('DOMContentLoaded', function () {
    slider();

    document.getElementById('cart').addEventListener("click", function() {
      window.location.href = "cartPage.html";
    });
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
    let bgClassLowProduct = 'relative bg-red-400 h-80 card  mt-4 rounded-3xl shadow-lg transition-all';
    let imgClass = 'rounded-full z-0 h-1/2 absolute left-1/2 -translate-x-1/2 top-2 transition-all hover:scale-105';
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

        const label = document.createElement('img');
        label.src = './assets/label.png';
        label.className = 'h-32 w-32 absolute z-10 -top-4 right-0 label md:-right-10';
        item.appendChild(label);

        const price = document.createElement('p');
        price.innerHTML = product.price;
        price.className = 'text-white z-10 text-3xl shadow-lg absolute right-8 top-10 md:-right-4'
        item.appendChild(price);

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