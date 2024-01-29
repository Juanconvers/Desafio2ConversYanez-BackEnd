import crypto from 'crypto'
import {promises as fs} from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async addProduct(newProduct){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))
        const indice = products.find(product => product.code === newProduct.code)
        if(indice = -1){
            products.push(newProduct);
            await fs.writeFile(this.path, JSON.stringify(products))
            
        }
    }


}









//     addProduct(title, description, price, thumbnail, code, stock) {
//         if (!title || !description || !price || !thumbnail || !code || !stock) {
//             console.error("todos los campos deben ser llenados")
//             return;
//         }
//         if (this.products.some(product => product.code === code)) {
//             this.console.error("El producto ya existe");
//             return;
//         }
//         const NEWPRODUCT = { 
//             id: this.products.length + 1, 
//             title, 
//             description, 
//             price, 
//             thumbnail, 
//             code: crypto.randomBytes(10).toString('hex'), 
//             stock 
//         }
//         this.products.push(NEWPRODUCT);
//         console.log("Listo. Producto ", NEWPRODUCT.title, "agregado.")
//     }

//         getProducts(){
//             return(this.products);
//         }

//         getProductById(id){
//             const FINDPRODUCT = this.products.find(product => product.id === id)
//             if (FINDPRODUCT){
//                 return FINDPRODUCT;
//             } else {
//                 console.error("Poducto no encontrado");
//             }
//         }
// }

// const productManager = new ProductManager();

// productManager.addProduct("Producto 1", "Caribe", 20.99, "imagen1.jpg", crypto.randomBytes(10).toString('hex'), 50);

// productManager.addProduct("Producto 2", "Descripción 2", 30.99, "imagen2.jpg", crypto.randomBytes(10).toString('hex'), 30);

// productManager.addProduct("Producto 2", "Descripción 2", 30.99, "imagen2.jpg", crypto.randomBytes(10).toString('hex'), 30);

// console.log("Todos los productos:", productManager.getProducts());

// let productIdToSearch = 2;
// productIdToSearch = 4;
// const FINDPRODUCT = productManager.getProductById(productIdToSearch);
// console.log(`Producto con ID ${productIdToSearch}:`, FINDPRODUCT);

// node ProductManager.js