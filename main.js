import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

const producto1 = new Product("Camisa niño azul", "Sprint", 7000, 2, "BK33")
const producto2 = new Product("Chaqueta niño verde", "Hello World", 5600, 2, "BK19")
const producto3 = new Product("Falda niña rosa", "Frankie Charlie", 6200, 3, "GK41")
const producto4 = new Product("Blusa amarilla", "Emmet the Sun", 5800, 1, "GK11")

const producto1version2 = new Product("Camisa blanca", "Hermes", 7200, 1, "BK34")

// PRUEBA DEL PROGRAMA

const productManager = new ProductManager('./products.json') 

productManager.addProduct(producto1)
productManager.addProduct(producto2)
productManager.addProduct(producto3) 
productManager.addProduct(producto4)

// creación de productos exitosa

// productManager.getProducts() 
// Obtención de archivos exitosa

// productManager.getProductsById('737306bd9b2f035a057a')
// Obtención de productos por Id exitosa

// productManager.updateProduct('737306bd9b2f035a057a', producto1version2)
// Actualización de productos exitosa

// productManager.deleteProduct('737306bd9b2f035a057a')
// Eliminación de productos exitosa
