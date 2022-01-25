import { crearTablas } from "./crearTablasProductos.js";

let url = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/";
let urlPizzas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/1"
let urlPostres = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/4"
let urlEmpanadas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/2"


crearTablas("pizzas", urlPizzas)
crearTablas("postres", urlPostres)
crearTablas("empanadas", urlEmpanadas)