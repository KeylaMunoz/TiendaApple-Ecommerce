import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        nombre: "iPhone 14",
        id: "a1",
        precio: 500 ,
        stock: "13",
        color: "azul",
        categoria: "iphone",
        descripcion: "120GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_904279-MLU70351459718_072023-F.webp"
    },
    {
        nombre: "MacBoock Air M2",
        id: "b1",
        precio: 1200 ,
        stock: "8",
        color: "gris",
        categoria: "macbook",
        descripcion: 'una pantalla de 15" (pulgadas) y 250 memoria RAM',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_772278-MLU70486576241_072023-F.webp"
    },
    {
        nombre: "Apple Watch 7",
        id: "c1",
        precio: 500 ,
        stock: "8",
        color: "azul",
        categoria: "watch",
        descripcion: "hasta 24hs de batería",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_704509-MLA48097051039_112021-F.webp"
    },
    {
        nombre: "iPhone 12 Pro",
        id: "a2",
        precio: 700 ,
        stock: "14",
        color: "gris",
        categoria: "iphone",
        descripcion: "164GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_770607-MLM51559385328_092022-F.webp"},
    {
        nombre: "MacBoock Air M1",
        id: "b2",
        precio: 1000 ,
        stock: "10",
        color: "rosa",
        categoria: "macbook",
        descripcion: 'una pantalla de 13.3" (pulgadas) y 150 memoria RAM',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_798982-MLA51356381076_082022-F.webp"
    },
    {
        nombre: "iPhone 13 Pro",
        id: "a3",
        precio: 800 ,
        stock: "12",
        color: "rosa",
        categoria: "iphone",
        descripcion: "256GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_924631-MLA71783367058_092023-F.webp"
    },
    {
        nombre: "Funda 12, 13, 14, 15",
        id: "d4",
        precio: 120 ,
        stock: "18",
        color: "azul, lila, verde, rosa y negro",
        categoria: "accesorios",
        descripcion: "un material antideslizante y resistente contra todo tipo de caídas",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_844488-MLA72123702497_102023-F.webp"
    },
    {
        nombre: "AirPods Max",
        id: "d3",
        precio: 200 ,
        stock: "3",
        color: "negro",
        categoria: "accesorios",
        descripcion: "cancelación de sonido y 8hs de reproducción inalámbrica",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_721876-MLA45714849823_042021-F.webp"
    },
     {
        nombre: "Apple Watch SE",
        id: "c2",
        precio: 480 ,
        stock: "8",
        color: "blanco",
        categoria: "watch",
        descripcion: "hasta 24hs de batería",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_637510-MLB51804344023_102022-F.webp"
    },
    {
        nombre: "MacBoock Air M1",
        id: "b4",
        precio: 1200 ,
        stock: "8",
        color: "gris",
        categoria: "macbook",
        descripcion: 'una pantalla de 16" (pulgadas) y 150 memoria RAM',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_613040-MLA51356222696_082022-F.webp"
    },
    {
        nombre: "AirPods 3ra G",
        id: "d1",
        precio: 250 ,
        stock: "8",
        color: "blanco",
        categoria: "accesorios",
        descripcion: "cancelación de sonido y 8hs de reproducción",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_952326-MLM51650325729_092022-F.webp"
    },
    {
        nombre: "iPhone 14",
        id: "a4",
        precio: 800 ,
        stock: "13",
        color: "azul",
        categoria: "iphone",
        descripcion: "260GB",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp"
    },
    {
        nombre: "Apple Watch Series 8",
        id: "c3",
        precio: 550 ,
        stock: "8",
        color: "negro",
        categoria: "watch",
        descripcion: "hasta 24hs de batería y GPS",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_914414-MLB51804338989_102022-F.webp"
    },
    {
        nombre: "MacBoock Air M2",
        id: "b3",
        precio: 1200 ,
        stock: "10",
        color: "blanco",
        categoria: "macbook",
        descripcion: 'una pantalla de 13.6" (pulgadas) y 100 memoria RAM"',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_798982-MLA51356381076_082022-F.webp"
    },
    {
        nombre: "Apple Watch 8",
        id: "c4",
        precio: 500 ,
        stock: "8",
        color: "rojo",
        categoria: "watch",
        descripcion: "hasta 24hs de batería",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_924759-MLA52127628971_102022-F.webp"
    },
    {
        nombre: "Cargador magnetico",
        id: "d2",
        precio: 350 ,
        stock: "3",
        color: "blanco",
        categoria: "accesorios",
        descripcion: "24hs de duración",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_932228-MLA44446263245_122020-F.webp"
    }
]

const seedProducts = () => {
    productos.map(({id, ...rest}) => {
        addDoc(collection(db, "productos"), rest)
    });
}

seedProducts()