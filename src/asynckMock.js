const Productos = [

    {id: 1,
        nombre: "tele",
        precio: 5000,
        categoria: "electro"
    },

    {id: 2,
        nombre: "celular",
        precio: 300,
        categoria: "electro"
    },

    {id: 3,
        nombre: "plancha",
        precio: 2000,
        categoria: "electro"
    },

    {id: 4,
        nombre: "cocina",
        precio: 8000,
        categoria: "electro"
    }


]

/* en este resolve me esta devolviendo justamente el contenido del array Productos... por eso va con mayusculas o identico
al nombhre del array */

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 3000);
    })
}