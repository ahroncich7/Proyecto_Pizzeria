const apiData = [
    ["Return all categories","https://laomingcode-node-mysql.herokuapp.com/api/category"],
    ["Return category by id","https://laomingcode-node-mysql.herokuapp.com/api/category/:id","Example: https://laomingcode-node-mysql.herokuapp.com/api/category/1"],
    ["Return all products","https://laomingcode-node-mysql.herokuapp.com/api/product"],
    ["Return product by id","https://laomingcode-node-mysql.herokuapp.com/api/product/:id","Example: https://laomingcode-node-mysql.herokuapp.com/api/product/1"],
    ["Return product by category","https://laomingcode-node-mysql.herokuapp.com/api/product/category/:category_id","Example: https://laomingcode-node-mysql.herokuapp.com/api/product/category/1"],
    ["Post category *required 'name' in the body","https://laomingcode-node-mysql.herokuapp.com/api/category/"],
    ["Post product *required 'name,description,price,foto,available,category_id' in the body","https://laomingcode-node-mysql.herokuapp.com/api/product/"]

]
console.table(apiData);