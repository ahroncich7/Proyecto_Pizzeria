const _API_URL = `https://laomingcode-node-mysql.herokuapp.com`;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let _name = document.getElementById('name')
let description = document.getElementById('description')
let price = document.getElementById('price')
let picture = document.getElementById('img_picture')



//Obtiene los datos del producto a editar 
fetch(`${_API_URL}/api/product/${id}`)
  .then((response) => response.json())
  .then((data) => {
        _name.value = data.name
        description.value = data.description
        price.value = data.price
        picture.setAttribute('src',data.picture)
    });

document.forms['update_form'].action = `${_API_URL}/api/put/product/${id}`


//Envia los datos del formulario



