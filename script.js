// Menu Scrolling Bar

const tabs = document.querySelectorAll(".menu-header a");
const rightArrow = document.querySelector(".menu-header .right-arrow svg");
const leftArrow = document.querySelector(".menu-header .left-arrow svg");
const menuList = document.querySelector(".menu-header ul");
const leftArrowContainer = document.querySelector(".menu-header .left-arrow");
const rightArrowContainer = document.querySelector(".menu-header .right-arrow");

const removeActive = () => {
   tabs.forEach((tab) => {
    tab.classList.remove("active");
   }
   )
}

const icons = () => {
    if (menuList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
    } else{
        leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = menuList.scrollWidth - menuList.clientWidth - 20;
    console.log("scroll width: ", menuList.scrollWidth);
    console.log("client width: ", menuList.clientWidth);

    if (menuList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else {
        rightArrowContainer.classList.add("active");
    }

}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeActive();
      tab.classList.add("active");
    });
});

rightArrow.addEventListener("click", ()=> {
    menuList.scrollLeft += 350;
    icons ();
});

leftArrow.addEventListener("click", ()=> {
    menuList.scrollLeft -= 350;
    icons ();
});

menuList.addEventListener("scroll", icons);

/*Products Section */

const iconCart = document.querySelector('.icon-cart');
const cartTab = document.querySelector('.cartTab');
const closeCart = document.querySelector('.close');
let listProductAppsHTML = document.querySelector('.ListProductsApps');
let listProductSoupHTML = document.querySelector('.ListProductsSoup');
let listProductLunchHTML = document.querySelector('.ListProductsLunch');
let listProductsNoodlesHTML = document.querySelector('.ListProductsNoodles');
let listProductsTeriyakiHTML = document.querySelector('.ListProductsTeriyaki');
let listProductsWokHTML = document.querySelector('.ListProductsWok');
let listProductsEntreeHTML = document.querySelector('.ListProductsEntree');
let listProductsSushiEntreeHTML = document.querySelector('.ListProductsSushiEntree');
let listProductsSushiHTML = document.querySelector('.ListProductsSushiEntree');
let listProductsRollHTML = document.querySelector('.ListProductsRoll');
let listProductsVeggieHTML = document.querySelector('.ListProductsVeggie');
let listProductsSpecialHTML = document.querySelector('.ListProductsSpecial');
let listCartHTML = document.querySelector('.listCart');
let listTotalHTML = document.querySelector('.total')
let iconCartSpan = document.querySelector('.icon-cart span')

/* open close cart*/ 

iconCart.addEventListener('click', ()=>{
    cartTab.classList.add('cart-active');
});

closeCart.addEventListener('click', () => {
    cartTab.classList.remove('cart-active');
});

/*Products */

let carts = [];
let listProductsApps = [];
let listProductsSoup = [];
let listProductLunch = [];
let listProductsNoodles = [];
let listProductsTeriyaki = [];
let listProductsWok = [];
let listProductsEntree = [];
let listProductsSushiEntree = [];
let listProductsSushi = [];
let listProductsRoll = [];
let listProductsVeggie = [];
let listProductsSpecial = [];

const addDataToHTML = () => {
    const productAppsEnd = 27;
    const productSoupEnd = 36;
    const productNoodleEnd = 43;
    const productTeriyakiEnd = 53;
    const productWokEnd = 73;
    const productEntreeEnd = 88;
    const productSushiEntreeEnd = 104;
    const productSushiEnd = 126;
    const productRollEnd = 148;
    const productVeggieEnd = 159;
    const productSpecialEnd = 185;
    const productLunchEnd = 223;

    listProductLunchHTML.innerHTML = '';
    if (listProductLunch.length > 0) {
        listProductLunch.slice(productSpecialEnd, productLunchEnd).forEach((product, index) => {
            let newProductLunch = document.createElement('div');
            newProductLunch.classList.add('item');
            newProductLunch.dataset.id = product.id;
            newProductLunch.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductLunchHTML.appendChild(newProductLunch);
        });
    };

    listProductAppsHTML.innerHTML = '';
    if (listProductsApps.length > 0) {
        listProductsApps.slice(0, productAppsEnd).forEach((product, index) => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductAppsHTML.appendChild(newProduct);
        });
    };

    listProductSoupHTML.innerHTML = '';
    if (listProductsSoup.length > 0) {
        listProductsSoup.slice(productAppsEnd, productSoupEnd).forEach((product, index) => {
            let newProductSoup = document.createElement('div');
            newProductSoup.classList.add('item');
            newProductSoup.dataset.id = product.id;
            newProductSoup.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductSoupHTML.appendChild(newProductSoup);
        });
    };

    listProductsNoodlesHTML.innerHTML = '';

    if (listProductsNoodles.length > 0) {
        listProductsNoodles.slice(productSoupEnd, productNoodleEnd).forEach((product, index) => {
            let newProductNoodle = document.createElement('div');
            newProductNoodle.classList.add('item');
            newProductNoodle.dataset.id = product.id;
            newProductNoodle.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductsNoodlesHTML.appendChild(newProductNoodle);
        });
    };

    listProductsTeriyakiHTML.innerHTML = '';
    if (listProductsTeriyaki.length > 0) {
        listProductsTeriyaki.slice(productNoodleEnd, productTeriyakiEnd).forEach((product, index) => {
            let newProductTeriyaki = document.createElement('div');
            newProductTeriyaki.classList.add('item');
            newProductTeriyaki.dataset.id = product.id;
            newProductTeriyaki.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductsTeriyakiHTML.appendChild(newProductTeriyaki);
        });
    };

    listProductsWokHTML.innerHTML = '';

    if (listProductsWok.length > 0) {
        listProductsWok.slice(productTeriyakiEnd, productWokEnd).forEach((product, index) => {
            let newProductWok = document.createElement('div');
            newProductWok.classList.add('item');
            newProductWok.dataset.id = product.id;
            newProductWok.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductsWokHTML.appendChild(newProductWok);
        });
    };

    listProductsEntreeHTML.innerHTML = '';

    if (listProductsEntree.length > 0) {
        listProductsEntree.slice(productWokEnd, productEntreeEnd).forEach((product, index) => {
            let newProductEntree = document.createElement('div');
            newProductEntree.classList.add('item');
            newProductEntree.dataset.id = product.id;
            newProductEntree.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductsEntreeHTML.appendChild(newProductEntree);
        });
    };

    listProductsSushiEntreeHTML.innerHTML = '';

    if (listProductsSushiEntree.length > 0) {
        listProductsSushiEntree.slice(productEntreeEnd, productSushiEntreeEnd).forEach((product, index) => {
            let newProductSushiEntree = document.createElement('div');
            newProductSushiEntree.classList.add('item');
            newProductSushiEntree.dataset.id = product.id;
            newProductSushiEntree.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
            listProductsSushiEntreeHTML.appendChild(newProductSushiEntree);
        });
    };
    
    listProductsSushiHTML.innerHTML = '';

    if (listProductsSushi.length > 0) {
        listProductsSushi.slice(productSushiEntreeEnd, productSushiEnd).forEach((product, index) => {
            let newProductSushi = document.createElement('div');
            newProductSushi.classList.add('item');
            newProductSushi.dataset.id = product.id;
            newProductSushi.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
                listProductsSushiHTML.appendChild(newProductSushi);
        });
    };

    listProductsRollHTML.innerHTML = '';

    if (listProductsRoll.length > 0) {
        listProductsRoll.slice(productSushiEnd, productRollEnd).forEach((product, index) => {
            let newProductRoll = document.createElement('div');
            newProductRoll.classList.add('item');
            newProductRoll.dataset.id = product.id;
            newProductRoll.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
                listProductsRollHTML.appendChild(newProductRoll);
        });
    };

    listProductsVeggieHTML.innerHTML = '';

    if (listProductsVeggie.length > 0) {
        listProductsVeggie.slice(productRollEnd, productVeggieEnd).forEach((product, index) => {
            let newProductVeggie = document.createElement('div');
            newProductVeggie.classList.add('item');
            newProductVeggie.dataset.id = product.id;
            newProductVeggie.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
                listProductsVeggieHTML.appendChild(newProductVeggie);
        });
    };

    listProductsSpecialHTML.innerHTML = '';

    if (listProductsSpecial.length > 0) {
        listProductsSpecial.slice(productVeggieEnd, productSpecialEnd).forEach((product, index) => {
            let newProductSpecial = document.createElement('div');
            newProductSpecial.classList.add('item');
            newProductSpecial.dataset.id = product.id;
            newProductSpecial.innerHTML = `
                <div class="food-product-row1">
                    <h1 class="food-title">${product.name}</h1>
                    <img class="${product.class}" src="${product.image}">
                    <img class="${product.class2}" src="${product.image2}">
                </div>
                <p class="food-description">${product.description}</p>
                <div class="bottom">
                    <p class="food-price">$${product.price.toFixed(2)}</p>
                </div>
                <button class="addCart"> + </button>`;
                listProductsSpecialHTML.appendChild(newProductSpecial);
        });
    };

};


/* ADD to Cart */

listProductLunchHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

listProductAppsHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('addCart')){
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id)
  }
})

listProductSoupHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
})


  listProductsNoodlesHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

  listProductsTeriyakiHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  });

listProductsWokHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

listProductsEntreeHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

listProductsSushiEntreeHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

listProductsSushiHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

  listProductsRollHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

  listProductsVeggieHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

  listProductsSpecialHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id)
    }
  })

const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    }else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    console.log(carts);
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

let totalPrice = 0;

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0
    if(carts.length > 0){
        carts.forEach(cart => {
            let positionProductApp = listProductsApps.findIndex(value => value.id == cart.product_id);
            let info = listProductsApps[positionProductApp];
            let totalProductPrice = info.price * cart.quantity;
            totalQuantity = totalQuantity + cart.quantity;
            totalPrice = totalPrice + (info.price * cart.quantity);


            let newCart = document.createElement('div')
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            newCart.innerHTML = `
            <div class="row1">
                <div class="name">${info.name}</div>
                <div class="totalPrice">$${(info.price * cart.quantity).toFixed(2)}</div>
            </div>
        <div class="row2">
            <div class="edit">
                <button class="editBtn">EDIT</button>
            </div>
            <div class="quantity">
                <span class="minus">-
                </span>
                <span>${cart.quantity}</span>
                <span class="plus">+
                  </span>
            </div>
        </div>
        <hr class="itemDivider">`
        listCartHTML.appendChild(newCart);
        })
        
    } else{
        let emptyCart = document.createElement('div')
        emptyCart.innerHTML = `
        <center>
            <img class="emptyImg" src="imgs/0-removebg-preview (3).png">
            <h1 class="emptyText">Your Cart is Empty</h1>
            </center>`

        listCartHTML.appendChild(emptyCart)
    }
    iconCartSpan.innerText = totalQuantity;
    document.getElementById('totalPrice').innerText = '$' + totalPrice.toFixed(2);
}
/*  quantity part */


listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.parentElement.dataset.id;
        let type = 'minus'
        if(positionClick.classList.contains('plus')){
            type = 'plus'
        } 
        changeQuantity(product_id, type);
    }
   
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);

    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }

    addCartToMemory();
    addCartToHTML();
}

const initApp = () => {
    fetch('product.json')
    .then(response => response.json())
    .then(data => {
        listProductLunch = data;
        console.log(listProductLunch);
        listProductsApps = data;
        console.log(listProductsApps);
        listProductsSoup = data;
        console.log(listProductsSoup);
        listProductsNoodles = data;
        console.log(listProductsNoodles);
        listProductsTeriyaki = data;
        console.log(listProductsTeriyaki);
        listProductsWok = data;
        console.log(listProductsWok);
        listProductsEntree = data;
        console.log(listProductsEntree);
        listProductsSushiEntree = data;
        console.log(listProductsSushiEntree);
        listProductsSushi = data;
        console.log(listProductsSushi);
        listProductsRoll = data;
        console.log(listProductsRoll);
        listProductsVeggie = data;
        console.log(listProductsVeggie);
        listProductsSpecial = data;
        console.log(listProductsSpecial);

        addDataToHTML();

        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'))
            addCartToHTML();
        }
    })
};


initApp();
