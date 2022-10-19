const Productos = [
    {
        'id': 1,
        'nombre': 'icon',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/images/firefox-icon.jpg',
        'cantidad': 8,
    },
    {
        'id': 2,
        'nombre': 'icon2',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 100,
    },
    {
        'id': 3,
        'nombre': 'icon3',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 12,
    },
    {
        'id': 4,
        'nombre': 'icon4',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 100,
    },
    {
        'id': 5,
        'nombre': 'icon5',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 35,
    },
    {
        'id': 6,
        'nombre': 'icon6',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 100,
    },
    {
        'id': 7,
        'nombre': 'icon7',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 100,
    },
    {
        'id': 8,
        'nombre': 'icon8',
        'tallas': ['M','L','XL'],
        'valores': [12990,17990,24990],
        'imagen': '/static/img/productos/coyote.png',
        'cantidad': 3,
    }

]


document.addEventListener('DOMContentLoaded', function() {
    Productos.forEach(element => {
        var tarjeta_p = document.createElement('div');
        tarjeta_p.id = 'container';
        const contenido_tarjeta_p = `
            <div class="producto">

                <figure>
                    <img class="imagen_p" src="${element.imagen}" alt="">
                </figure>

                <h2 class="nombre">${element.nombre}</h1>

                <div class="masmenos">
                        <button id="menos" class="menos-mas" onclick="contadormenos('${element.nombre}c')">-</button>
                        <input class="${element.nombre}c" id="${element.nombre}c" type="text" style="text-align: center;" value="1">
                        <button id="mas" class="menos-mas" onclick="contadormas('${element.nombre}c',${element.cantidad})">+</button>
                </div>

                <div class="talla-precio">
                    <label for="talla">${element.tallas[0]}</label><input id="${element.nombre}1" name="${element.nombre}" class="talla" type="radio" onClick="cambiarvalor(${element.id},${element.valores[0]})">
                    <label for="talla">${element.tallas[1]}</label><input id="${element.nombre}2" name="${element.nombre}" class="talla" type="radio" onClick="cambiarvalor(${element.id},${element.valores[1]})">
                    <label for="talla">${element.tallas[2]}</label><input id="${element.nombre}3" name="${element.nombre}" class="talla" type="radio" checked onClick="cambiarvalor(${element.id},${element.valores[2]})">
                    <h2 id=${element.id} class="valor">${element.valores[2]}</h2>
                </div>

                <button type="submit" onclick="agregarcarrito()">Agregar al carrito</button>
            </div>`;

        tarjeta_p.innerHTML = contenido_tarjeta_p;
        document.getElementById("products").appendChild(tarjeta_p);


        // document.getElementById("algo").innerHTML = contenido_tarjeta_p;
        // document.body.appendChild(tarjeta_p);
        // shoppingCartItemsContainer.append(tarjeta_p);
    });
}, false);

function cambiarvalor(id,precio){
    document.getElementById(id).textContent=precio;
}

function agregarcarrito(){

}

var i;

function contadormas(iddeinput,productocant){
    var cant = document.getElementById(iddeinput);
    if(cant.value>1){
        i = cant.value;
    }else{
        i = 1;
    }
    if (cant.value<productocant) {
        i++;
    }
    cant.value = i;
}

function contadormenos(iddeinput){
    var cant = document.getElementById(iddeinput);
    if(cant.value>=2){
        i = cant.value;
        i--;
        cant.value = i;
    }else{
        cant.value="1";
    }
}







// function test(){
//     var texto = document.createElement('div');
//     const contenidot = `
//     <div class="producto">
//       <h1>asdjsad<h1>
//     </div>`;
//     texto.innerHTML=contenidot;
//     document.body.appendChild(texto);
// }



// class Producto{
//     constructor(nombre,valores_tallas,imagen){
//         this.nombre = nombre;
//         this.valores_tallas = valores_tallas;
//         this.imagen = imagen;
//     }
// }

// const IMAGENES = [
//     '/images/firefox-icon.jpg',
//     '/images/firefox-icon2.jpg'
// ];

// let productos;

// for (var i = 0; i < IMAGENES.length; i++) {
//     productos=Producto('icon')
//  }