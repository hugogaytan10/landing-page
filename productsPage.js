
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

function showForm() {
    // Creamos el contenedor del formulario
    const formContainer = document.createElement('div');
    formContainer.className = 'max-w-md mx-auto my-4 p-4 bg-white rounded-lg shadow-md';
  
    // Creamos el formulario
    const form = document.createElement('form');
    form.className = 'flex flex-wrap gap-4';
  
    // Creamos los campos del formulario
    const claveInput = createInput('Clave', 'text');
    const productoInput = createInput('Producto', 'text');
    const categoriaInput = createInput('Categoría', 'text');
    const existenciaInput = createInput('Existencia', 'number');
    const precioInput = createInput('Precio', 'number');
    const fotoInput = createInput('Foto', 'file');
    const nivelInput = createInput('Nivel de reorden', 'number');
  
    // Creamos el botón de enviar
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Editar';
    submitButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  
    // Agregamos los campos y el botón al formulario
    form.appendChild(claveInput);
    form.appendChild(productoInput);
    form.appendChild(categoriaInput);
    form.appendChild(existenciaInput);
    form.appendChild(precioInput);
    form.appendChild(fotoInput);
    form.appendChild(nivelInput);
    form.appendChild(submitButton);
  
    // Agregamos el formulario al contenedor y luego al cuerpo del documento
    formContainer.appendChild(form);
    document.body.appendChild(formContainer);
  }
  
  function createInput(labelText, inputType) {
    // Creamos el contenedor del campo
    const container = document.createElement('div');
    container.className = 'w-full';
  
    // Creamos la etiqueta del campo
    const label = document.createElement('label');
    label.innerHTML = labelText;
    label.className = 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2';
  
    // Creamos el campo de entrada
    const input = document.createElement('input');
    input.type = inputType;
    input.className = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500';
  
    // Agregamos la etiqueta y el campo al contenedor
    container.appendChild(label);
    container.appendChild(input);
  
    return container;
  }
  