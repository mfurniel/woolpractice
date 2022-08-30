const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCart) => {
    addToCart.addEventListener('click',addToCartClicked);
})

const shoppingCartItemsContainer =document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event){
    const button = event.target
    const producto = button.closest('.producto');
   
    const productonombre = producto.querySelector('.nombre_p').textContent;
    // const productocantidad = producto.querySelector('.cantidad');
    const productoimagen = producto.querySelector('.imagen_p').src;
    const productovalor = producto.querySelector('.valor').textContent;
    // console.log('asdsa: addToCartClicked -> cantidad',
    // productonombre,
    // productovalor,
    // productoimagen,);

    addItemToShoppingCart(productoimagen,productonombre,productovalor);

}

function  addItemToShoppingCart(productoimagen,productonombre,productovalor){
    // console.log(productoimagen,productonombre,productovalor);
    const shoppingCartRow = document.createElement('div');
    
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart">
                <img src=${productoimagen} class="shopping-cart-image">
                <h6 class="shoppig-cart-item-tittle">${productonombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price">
                <p class="item-price">${productovalor}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-quantity">
                <input  class="shopping-cart-quantity-input" value="1">
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow)
}





var i;

function contadormas(iddeinput){ 
    var cant = document.getElementById(iddeinput); 
    if(cant.value>1){
        i = cant.value;
    }else{
        i = 1;
    }
    i++; 
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

