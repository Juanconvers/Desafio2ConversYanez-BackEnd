import crypto from 'crypto'
import {promises as fs} from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path;
    }

    async addProduct(newProduct){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))

        if(newProduct.code && newProduct.id && newProduct.title && newProduct.description && newProduct.price && newProduct.thumbnail && newProduct.stock){
            const indice = products.find(product => product.code === newProduct.code)
            if(indice = -1){
                products.push(newProduct);
                await fs.writeFile(this.path, JSON.stringify(products))
                return 'Producto creado exitosamente'
            } else {
                return 'Producto ya existe en el archivo'
            }
        }else{
            return 'Ingrese todos los campos'
        }       
    }

    async getProducts(){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))
        return products;
    }

    async getProductsById(id){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))
        const product = products.find(product => product.id === id)
        if(product){
            return product
        }else{
            return 'El producto no existe'
        }
        
    }

    async updateProduct(id, nuevoProducto){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))
        const indice = products.findIndex(product => product.id === id)
        if(indice != -1){
            products[indice].title = nuevoProducto.title
            products[indice].description = nuevoProducto.description
            products[indice].price = nuevoProducto.price
            products[indice].thumbnail = nuevoProducto.thumbnail
            products[indice].code = nuevoProducto.code
            products[indice].stock = nuevoProducto.stock
            await fs.writeFile(this.path, JSON.stringify(products))
                return 'Producto actualizaco exitosamente'
        }else{
            return 'El producto no existe'
        }
    }

    async deleteProduct(id){
        const products = JSON.parse(await fs.readfile(this.path, 'uft-8'))
        const indice = products.findIndex(product => product.id === id)
        if(indice != -1){
            const productosFiltrados = products.filter(product => product.id != id)
            await fs.writeFile(this.path, JSON.stringify(productosFiltrados))
                return 'Producto eliminado exitosamente'
        }else{
            return 'El producto no existe'
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