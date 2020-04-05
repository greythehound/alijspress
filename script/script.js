document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const cartBtn = document.getElementById('cart');
    const wishListBth = document.getElementById('wishlist');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');
    const category = document.querySelector('.category');

    let wishList = [];

    const loading = () => {
        goodsWrapper.innerHTML = `<div id="spinner"><div class="spinner-loading"><div><div><div></div>
        </div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div>`
    }

    const createCardGoods = (id, title, price, img) => {
        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
                                <div class="card-img-wrapper">
                                    <img class="card-img-top" src="${img}" alt="">
                                    <button class="card-add-wishlist" data-goods-id="${id}"></button>
                                </div>
                                <div class="card-body justify-content-between">
                                    <a href="#" class="card-title">${title}</a>
                                    <div class="card-price">${price} </div>
                                    <div>
                                        <button class="card-add-cart" data-goods-id="${id}">Add to cart</button>
                                    </div>
                                </div>
                            </div>`
        return card;
    };
    
    
    const openCart = (event) => {
        event.preventDefault();
        cart.style.display = 'flex';
        document.addEventListener('keyup', closeCart);
    };


    const closeCart = (event) => {
        const target = event.target;
        const pressKey = event.keyCode;
        const clickCartCloseBtn = target.classList.contains('cart-close');
        
        if (target === cart || clickCartCloseBtn || pressKey === 27){
            cart.style.display = '';
            document.removeEventListener('keyup', closeCart);
        }
    };

    const renderCard = goods => {
        goodsWrapper.textContent = '';

        if (goods.length) {
            goods.forEach(({id, title, price, imgMin}) => {
                goodsWrapper.appendChild(createCardGoods(id, title, price, imgMin));

            });
        } else {
            goodsWrapper.textContent = '❌ Sorry, the good was not found! ❌';
        }
    }

    const getGoods = (handler, filter) => {
        loading();
        fetch('db/db.json')
            .then(response => response.json())
            .then(filter)
            .then(handler)
    };

    const randomSort = (item) => item.sort(() => Math.random() - 0.5);

    const chooseCategory = (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('category-item')) {
            const cat = target.dataset.category;
            getGoods(renderCard, goods => goods.filter(item => item.category.includes(cat)));
        }
    };

    const searchGoods = event => {
        event.preventDefault();

        const input = event.target.elements.searchGoods;
        const inputValue = input.value.trim();

        if (inputValue !== ''){
            const searchString = new RegExp(inputValue, 'i');
            getGoods(renderCard, goods => goods.filter(item => searchString.test(item.title)));
        } else {
            search.classList.add('error');
            setTimeout( () => {
                search.classList.remove('error');
            }, 2000); 
        }
        input.value = '';
    };

    const toggleWishList = (id, elem) => {
        if (wishList.indexOf(id) + 1) {
            wishList.splice(wishList.indexOf(id), 1);
            elem.classList.remove('active');
        }else{
            wishList.push(id);
            elem.classList.add('active');
        }
        console.log(wishList);
    };

    const handlerGoods = event => {
        const target = event.target;

        if (target.classList.contains('card-add-wishlist')) {
            // console.log(target.dataset.goodsId);
            toggleWishList(target.dataset.goodsId, target);
        }
    };
    
    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    category.addEventListener('click', chooseCategory);
    search.addEventListener('submit', searchGoods);
    goodsWrapper.addEventListener('click', handlerGoods);

    getGoods(renderCard, randomSort);
    
});
