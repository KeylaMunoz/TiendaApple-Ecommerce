const productos = [
    {
        nombre: "iPhone 11",
        id: "a1",
        precio: 500 ,
        stock: "13",
        color: "azul",
        categoria: "iphone",
        descripcion: "120GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp}"
    },
    {
        nombre: "iPhone 12 Pro",
        id: "a2",
        precio: 700 ,
        stock: "14",
        color: "gris",
        categoria: "iphone",
        descripcion: "64GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_722033-MLA75799454493_042024-F.webp"},
    {
        nombre: "iPhone 13 Pro Max",
        id: "a3",
        precio: 800 ,
        stock: "12",
        color: "rosa",
        categoria: "iphone",
        descripcion: "256GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_799292-MLA47779331165_102021-F.webp"},
    {
        nombre: "MacBoock Air M1",
        id: "b1",
        precio: 1000 ,
        stock: "10",
        color: "rosa",
        categoria: "macbook",
        descripcion: '13.3"',
        imagen: "https://7x7.com.ar/wp-content/uploads/2023/08/MacBook-Air-con-M1-1000x600-1.jpg"},
    {
        nombre: "MacBoock Air M2",
        id: "b2",
        precio: 1200 ,
        stock: "8",
        color: "gris",
        categoria: "macbook",
        descripcion: '15"',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_772278-MLU70486576241_072023-F.webp"
    },
    {
        nombre: "MacBoock Air M1",
        id: "b3",
        precio: 1200 ,
        stock: "10",
        color: "blanco",
        categoria: "macbook",
        descripcion: '13.6"',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_798982-MLA51356381076_082022-F.webp"
    },
    {
        nombre: "MacBoock Air M1",
        id: "b4",
        precio: 1200 ,
        stock: "8",
        color: "gris",
        categoria: "macbook",
        descripcion: '15"',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_645799-MLA46516517280_062021-F.webp"
    },
    {
        nombre: "Apple Watch SE",
        id: "c1",
        precio: 480 ,
        stock: "8",
        color: "blanco",
        categoria: "watch",
        descripcion: "",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_637510-MLB51804344023_102022-F.webp"},
    {
        nombre: "Apple Watch Series 9",
        id: "c2",
        precio: 770 ,
        stock: "8",
        color: "rosa",
        categoria: "watch",
        descripcion: "",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_884802-MLA72158544315_102023-F.webp"
    },
    {
        nombre: "Apple Watch Series 8",
        id: "c3",
        precio: 550 ,
        stock: "8",
        color: "negro",
        categoria: "watch",
        descripcion: "",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_914414-MLB51804338989_102022-F.webp"
    }
]

//promise para obtener productos
const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    });
};


export default obtenerProductos;