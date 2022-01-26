SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Pizzas'),
(2, 'Empanadas'),
(3, 'Bebidas'),
(4, 'Postres');

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `available` tinyint(1) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `product` (`id`, `name`, `description`, `price`, `foto`, `available`, `category_id`) VALUES
(1, 'Pizza Jamon y Morron', 'Ingredientes: Jamon, Pimiento morron, Aceitunas, Masa don remolo ', 15, NULL, 1, 1),
(2, 'Pizza Muzzarella', 'Ingredientes: Queso mozzarella, Aceitunas, Masa don remolo', 15, NULL, 1, 1),
(3, 'Pizza Napolitana', 'Ingredientes: Tomate fresco, Aceitunas, Queso parmesano, Masa don remolo', 17, NULL, 1, 1),
(4, 'Empanada de Atun', 'Ingredientes: Atun especial, Masa don remolo', 6, NULL, 1, 2),
(5, 'Empanada de Carne', 'Ingredientes: Carne especial, Masa don remolo', 8, NULL, 1, 2),
(6, 'Empanada de Jamon y Queso', 'Ingredientes: Jamon especial, Queso Mozzarella, Masa don remolo', 10, NULL, 1, 2),
(7, 'Agua Vital', 'Agua Vital 500ml', 3, NULL, 1, 3),
(8, 'Cerveza Brahma', 'Cerveza Brahma 330ml', 5, NULL, 1, 3),
(9, 'Gaseosa Pepsi', 'Gaseosa Pepsi 330ml', 4, NULL, 1, 3),
(10, 'Postre Almendrado', 'Ingredientes: Almendras, Harina, Huevos', 12, NULL, 1, 4),
(11, 'Bombones de Chocolate', 'Ingredientes: Chocolate Real, Matizante comestible', 20, NULL, 1, 4),
(12, 'Paleta Helada', 'Paleta Helada con cubierta de chocolate', 4, NULL, 1, 4);

ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE;
COMMIT;

