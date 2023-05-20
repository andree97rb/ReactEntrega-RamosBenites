const products = [
    {
        name: "Monitor Gamer LG UltraGear 23.8'' IPS 144Hz 1ms FreeSync Premium 24GN60R",
        price: 80,
        id: "1",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19439795_01?wid=800&hei=800&qlt=70",
        description: "Juegos perfectamente fluidos con tasa de refresco de 165 Hz. El tiempo de respuesta de 1 ms (MPRT) hace que los comandos sean tan rápidos como tus reflejos. AMD FreeSync Premium hace que la acción hiperrápida se vea perfecta.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Headset HyperX Cloud Alpha",
        price: 100,
        id: "2",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_117683777_1858749_1?wid=1500&hei=1500&qlt=70    ",
        description: "Teclado Mecánico Compacto. 9 Modos de Iluminción LED Rainbow. Teclas de Doble Inyección con Grabado Láser. Pulsadores Azules de Doble Feedback. 12 Teclas con Funciones Multimedia (F1-F12), Accionadas Mediante la Tecla FN. Cable de Nylon Trenzado de 1.8 metros. Filtro de Antielectromagnetismo. Base de Teclas de Aluminio. Distribución de Teclas: Español / España. Idioma: Español Internacional.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Fuente de alimentación Corsair RM850x",
        price: 150,
        id: "3",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_117932740_1917040_1?wid=1500&hei=1500&qlt=70",
        description: "La fuente de alimentación Corsair RM850x ofrece una entrega de energía confiable y eficiente para tu PC gaming. Con certificación 80 Plus Gold, cables totalmente modulares y modo de ventilador sin ruido, esta fuente de alimentación es ideal para sistemas de alto rendimiento.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Monitor Gamer LG UltraGear 23.8'' IPS 144Hz 1ms FreeSync Premium 24GN60R",
        price: 80,
        id: "4",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19439795_01?wid=800&hei=800&qlt=70",
        description: "Juegos perfectamente fluidos con tasa de refresco de 165 Hz. El tiempo de respuesta de 1 ms (MPRT) hace que los comandos sean tan rápidos como tus reflejos. AMD FreeSync Premium hace que la acción hiperrápida se vea perfecta.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Headset HyperX Cloud Alpha",
        price: 100,
        id: "5",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_117683777_1858749_1?wid=1500&hei=1500&qlt=70    ",
        description: "Teclado Mecánico Compacto. 9 Modos de Iluminción LED Rainbow. Teclas de Doble Inyección con Grabado Láser. Pulsadores Azules de Doble Feedback. 12 Teclas con Funciones Multimedia (F1-F12), Accionadas Mediante la Tecla FN. Cable de Nylon Trenzado de 1.8 metros. Filtro de Antielectromagnetismo. Base de Teclas de Aluminio. Distribución de Teclas: Español / España. Idioma: Español Internacional.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Fuente de alimentación Corsair RM850x",
        price: 150,
        id: "6",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_117932740_1917040_1?wid=1500&hei=1500&qlt=70",
        description: "La fuente de alimentación Corsair RM850x ofrece una entrega de energía confiable y eficiente para tu PC gaming. Con certificación 80 Plus Gold, cables totalmente modulares y modo de ventilador sin ruido, esta fuente de alimentación es ideal para sistemas de alto rendimiento.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Monitor Gamer LG UltraGear 23.8'' IPS 144Hz 1ms FreeSync Premium 24GN60R",
        price: 80,
        id: "7",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/19439795_01?wid=800&hei=800&qlt=70",
        description: "Juegos perfectamente fluidos con tasa de refresco de 165 Hz. El tiempo de respuesta de 1 ms (MPRT) hace que los comandos sean tan rápidos como tus reflejos. AMD FreeSync Premium hace que la acción hiperrápida se vea perfecta.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Headset HyperX Cloud Alpha",
        price: 100,
        id: "8",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_117683777_1858749_1?wid=1500&hei=1500&qlt=70    ",
        description: "Teclado Mecánico Compacto. 9 Modos de Iluminción LED Rainbow. Teclas de Doble Inyección con Grabado Láser. Pulsadores Azules de Doble Feedback. 12 Teclas con Funciones Multimedia (F1-F12), Accionadas Mediante la Tecla FN. Cable de Nylon Trenzado de 1.8 metros. Filtro de Antielectromagnetismo. Base de Teclas de Aluminio. Distribución de Teclas: Español / España. Idioma: Español Internacional.",
        idCat: "1",
        category: "gamming"
    },
    {
        name: "Teclado Microsoft Wired 600 Keyboard Alámbrico Negro",
        price: 150,
        id: "9",
        img: "https://falabella.scene7.com/is/image/FalabellaPE/18975316_1?wid=1500&hei=1500&qlt=70",
        description: "La fuente de alimentación Corsair RM850x ofrece una entrega de energía confiable y eficiente para tu PC gaming. Con certificación 80 Plus Gold, cables totalmente modulares y modo de ventilador sin ruido, esta fuente de alimentación es ideal para sistemas de alto rendimiento.",
        idCat: "2",
        category: "oficinaz"
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100)
    })
}

//Creamos una función similar pero que nos retorne un solo item: 

export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 100)
    })
}


//Creamos una función que retorne toda una categoría de productos: 

export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productsCategory);
        }, 100)
    })
}





