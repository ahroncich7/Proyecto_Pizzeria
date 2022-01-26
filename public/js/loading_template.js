const API_URL = `https://laomingcode-node-mysql.herokuapp.com`;
const HTMLResponse = document.getElementById("category_id");

fetch(`${API_URL}/api/category`)
  .then((response) => response.json())
  .then((data) => {
    const myData = Object.values(data);
    myData.forEach((category) => {
      for (let i = 0; i < category.length; i++) {
        //console.table(category[i]);
        const option = category.map((categ) => `<option value="${categ.id}">${categ.name}</option>`);
        HTMLResponse.innerHTML = `${option}`;
      }
    });
  });
