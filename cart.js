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
    }
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

    document.getElementById('cart').addEventListener("click", function() {
        window.location.href = "carrito.html";
    });
});

function showCards(mainProductGalery) {
    let bgClassHighProduct = 'relative flex bg-azulBasico h-40 w-3/4 md:w-2/3 mt-4 rounded-3xl shadow-lg transition-all overflow-hidden';
    let bgClassLowProduct = 'relative flex bg-red-400 h-40 w-3/4 md:w-2/3 mt-4 rounded-3xl shadow-lg transition-all overflow-hidden';
    let divInfoClass = 'bg-white border-gray-200 border-2 absolute md:relative md:w-3/4 rounded-3xl flex flex-wrap items-center p-2 gap-2';
    let descriptionClass = 'text-grisBasico texto-base block w-full';
    let btnLessBlue = 'border-2 border-azulBasico rounded-full w-6 hover:bg-gray-100';
    let btnLessRed = 'border-2 border-red-400 rounded-full w-6 hover:bg-gray-100';
    let btnMoreBlue = 'border-2 border-azulBasico rounded-full w-6 hover:bg-gray-100';
    let btnMoreRed = 'border-2 border-red-400 rounded-full w-6 hover:bg-gray-100';
    let btnDeleteBlue = 'border-2 border-azulBasico rounded-full p-2 hover:bg-gray-100';
    let btnDeleteRed = 'border-2 border-red-400 rounded-full p-2 hover:bg-gray-100';

    //limpiamos el contenido del div
    containerMainGalery.innerHTML = '';
    for (const element of mainProductGalery) {
        const product = element;

        //se crea el contenedor de cada producto
        const item = document.createElement('div');
        item.className = product.amount > 10 ? bgClassHighProduct : bgClassLowProduct;

        const divImg = document.createElement('div');
        divImg.className = 'flex items-center justify-center m-1 w-1/4';
        item.appendChild(divImg);

        //se crea la etiqueta para la imagen y sus clases
        const img = document.createElement('img');
        img.src = product.photo;
        img.className = 'rounded-full h-3/4 hover:scale-105';
        divImg.appendChild(img);

        //se crea el contendor de la informacion
        const infoItem = document.createElement('div');
        infoItem.className = divInfoClass;
        item.appendChild(infoItem);

        const divInfo = document.createElement('div');
        divInfo.className = 'ml-8 mr-8';
        infoItem.appendChild(divInfo);

        const title = document.createElement('p');
        title.innerHTML = product.product;
        title.className = product.amount > 10 ? 'text-azulBasico' : 'text-red-600';
        divInfo.appendChild(title);

        const price = document.createElement('p');
        price.innerHTML = 'Precio: ' + product.price;
        price.className = descriptionClass;
        divInfo.appendChild(price);

        const category = document.createElement('p');
        category.innerHTML = 'Categoría: ' + product.category;
        category.className = descriptionClass;
        divInfo.appendChild(category);

        const amount = document.createElement('p');
        amount.innerHTML = 'Existencia: ' + product.amount;
        amount.className = descriptionClass;
        divInfo.appendChild(amount);

        const details = document.createElement('p');
        details.innerHTML = 'ver detalles';
        details.className = 'text-gray-300 underline cursor-pointer text-sm';
        details.addEventListener('click', () => {
            //document.getElementById('clave').value = product.clave;
            document.getElementById('producto').value = product.product;
            document.getElementById('categoria').value = product.category;
            document.getElementById('existencia').value = product.amount;
            document.getElementById('precio').value = product.price;
            //document.getElementById('nivel').value = product.nivel;
            document.getElementById('modal').classList.remove('hidden');
        });  
        const closeModalButton = document.getElementById('closeModal');
        closeModalButton.addEventListener('click', () => {
            document.getElementById('modal').classList.add('hidden');
        });
        divInfo.appendChild(details);

        //agregamos los botones para aumentar la cantidad de productos y eliminar
        const divButtons = document.createElement('div');
        divButtons.className = 'ml-4';
        infoItem.appendChild(divButtons);

        const divCount = document.createElement('div');
        divCount.className = 'ml-2';
        divButtons.appendChild(divCount);

        const less = document.createElement('button');
        less.innerHTML = '-';
        less.className = product.amount > 10 ? btnLessBlue: btnLessRed;
        divCount.appendChild(less);

        const num = document.createElement('label');
        num.innerHTML = '1';
        num.className = 'ml-1 mr-1';
        divCount.appendChild(num);

        const more = document.createElement('button');
        more.innerHTML = '+';
        more.className = product.amount > 10 ? btnMoreBlue: btnMoreRed;
        divCount.appendChild(more);

        const divDelete = document.createElement('div');
        divDelete.className = 'mt-2';
        divButtons.appendChild(divDelete);

        const erase = document.createElement('button');
        erase.innerHTML = 'Eliminar';
        erase.className = product.amount > 10 ? btnDeleteBlue: btnDeleteRed;
        divDelete.appendChild(erase);

        containerMainGalery.appendChild(item);
    }
}

function searchByKeyboard() {
    const search = searchInput.value.toString().toLowerCase();
    auxProductGalery = search != '' ? mainProductGalery.filter(product => product.product.toLowerCase().includes(search)) : mainProductGalery;
    showCards(auxProductGalery);
}