const API_URL = `https://laomingcode-node-mysql.herokuapp.com`;
const table = document.getElementById("table-body");

//Carga en un select la lista de categorias.
fetch(`${API_URL}/api/product`)
  .then((response) => response.json())
  .then((data) => {
            const info = data.map((pro) => `
            <tr>
            <th id=${pro.id}>${pro.id}</th>
            <td>${pro.name}</td>
            <td>${pro.description}</td>
            <td>${pro.price}</td>
            <td>${pro.picture}</td>
            <td>
              <a href="edit_products.html?id=${pro.id}" class="btn btn-warning"><i class="fas fa-edit"></i></a>           
            </td>
            <td>
              <a class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>           
            </td>
            </tr>`
            
            );
            
            table.innerHTML = info
          
  });