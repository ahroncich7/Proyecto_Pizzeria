const API_URL = `https://laomingcode-node-mysql.herokuapp.com`;
const select = document.getElementById("category_id");

//Carga en un select la lista de categorias.
fetch(`${API_URL}/api/category`)
  .then((res) => res.json())
  .then((data) => {
      const info = data.map((category) =>`
        <option id=${category.id}>${category.name}</option>
      `)
      select.innerHTML = info
  });


//Obtiene el url de la pagina actual
let URL_ = window.location
let location_ = document.getElementById('url')
location_.value = URL_
// console.log(location_);
