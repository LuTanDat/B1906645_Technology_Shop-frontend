var currencyFormat=(num)=>{
    return Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(num)
}

var showProducts=()=>{
    var prodContainer = $('.home-product>div.grid__row')
    for(i in products){
        let e = products[i]
        let prodItem=$(`<div class='col l-2-4 m-4 c-6' title='${e.name}' "></div>`)
                    .append(`<a href="./sanpham.html?pid=${e.code}" class="home-product-item">
                                <div class="home-product-item__img" style="background-image: url(${e.img[0]})"></div>
                                <h4 class="home-product-item__name">${e.name}</h4>
                                <div class="home-product-item__price">
                                    <span class="home-product-item__price-old">${currencyFormat(e.oldPrice)}</span>
                                    <span class="home-product-item__price-current">${currencyFormat(e.newPrice)}</span>
                                    <div class="home-product-item__action">
                                        <span class="home-product-item__like home-product-item__like--liked">
                                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                        </span>
                                        <div class="home-product-item__rating">
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--silver fas fa-star"></i>
                                        </div>
                                        <span class="home-product-item__sold">Đã bán ${e.sold} <br> </span> <br>
                                    </div>
                                    <div class="home-product-item__origin">
                                        <span class="home-product-item__origin-name">${e.address}</span>
                                    </div>
                                    <div class="home-product-item__favourite">
                                        <i class="fas fa-check"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <div class="home-product-item__sale-off">
                                        <span class="home-product-item__sale-off-percent">46%</span>
                                        <span class="home-product-item__sale-off-label">GIẢM</span>
                                    </div>
                                </div>
                            </a>`)

        prodContainer.append(prodItem)
                    
    }
}

var initCart=()=>{
    if(!window.localStorage.getItem('cart')){
        let cart={}
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }
}

var updatePrdNum=()=>{
    let cart=JSON.parse(window.localStorage.cart)
    let prodNum=Object.keys(cart).length
    $('.header__cart-notice').text(prodNum)
    
    let noCartMsg=$('.header__cart-list-no-cart-msg')
    let noCartImg=$('.header__cart-no-cart-img')
    let noCartHide=$('.no-cart-hide')
    if(prodNum==0) {
        noCartMsg.show()
        noCartImg.show()
        if(noCartHide) noCartHide.hide()
    }
    else {
        noCartMsg.hide()
        noCartImg.hide()
        if(noCartHide) noCartHide.show()
    }

    let total = 0;
    for(e in cart){
        total+=products[e].newPrice*cart[e].quantity
    }
    
    let totalNum=$('.total-num')
    if(totalNum) totalNum.text(currencyFormat(total))

}

var order=(prodCode, num, itemSize)=>{
    if(products[prodCode]){
         let cart = JSON.parse(window.localStorage.getItem('cart'))
         if(!cart[prodCode]){
             cart[prodCode]={code: prodCode, quantity: num, size: itemSize}
             window.localStorage.setItem('cart',JSON.stringify(cart))
         }
         else {
             cart[prodCode].quantity+=num
             cart[prodCode].size=itemSize
             window.localStorage.setItem('cart',JSON.stringify(cart))
         }
    }

    updatePrdNum()

 }

var showCart=()=>{
    var cartContainer=$('.header__cart-list-item')
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    for(e in cart){
        let prodItem=products[e]
        let cartItem=$(`<li id="${e}" class="header__cart-item">
                            <img src="${prodItem.img[0]}"  alt="${prodItem.name}" class="header__cart-img">
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">${prodItem.name}</h5>
                                    <div class="header__cart-item-price-wrap">
                                        <span class="header__cart-item-price">${currencyFormat(prodItem.newPrice)}</span>
                                        <span class="header__cart-item-multiply">x</span>
                                        <span class="header__cart-item-qnt">${cart[e].quantity}</span>
                                    </div>
                                    <div style='display: none' class="main-cart-item-option">
                                        <div><span class="option">Giá: </span><span class="header__cart-item-price">${currencyFormat(prodItem.newPrice)}</span></div>
                                        <div><span class="option">Số lượng: </span><span class="item-quantity">${cart[e].quantity}</span></div>
                                        <div><span class="option">Màu: </span><span class="item-size">${cart[e].size}</span></div>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">
                                        Phân loại: ${prodItem.type}
                                    </span>
                                    <span onclick="cancelOrder('${e}')" class="header__cart-item-remove">Xóa</span>
                                </div>
                            </div>
                        </li>`)

        cartContainer.append(cartItem)
    }

    updatePrdNum()
}

var cancelOrder=(prodCode)=>{
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    cart[prodCode]=undefined
    window.localStorage.setItem('cart',JSON.stringify(cart))
    let e=$('.header__cart-list-item #' + prodCode).fadeOut(200)
    setTimeout(() => {
        e.remove()
        updatePrdNum()
    },200);
}

var dplayUserAccount=()=>{
    let userName = window.localStorage.getItem('username')

    let signUpTag = $('#signup')
    let logoutTag = $('#logout')
    let loginTag = $('#login')
    let usernameTag = $('#username')
    let userAvt = $('#useravt')
    if(userName) {
        logoutTag.show()
        loginTag.hide()
        signUpTag.hide()
        usernameTag.text(userName).show()
        userAvt.show()
    }
    else{
        signUpTag.show()
        logoutTag.hide()
        loginTag.show()
        usernameTag.hide()
        userAvt.hide()
    }
}

var logOut =()=>{
    window.localStorage.removeItem('username')
    dplayUserAccount()
}

var showMobileInterface =()=>{
    $('.header__search-btn.mobile').click(()=>{
        $('.header__search').toggleClass('show-search-animation')
        $('.dark-layer').toggleClass('show')
    })
}

$(document).ready(()=>{
    dplayUserAccount()
    showProducts()
    initCart()
    showCart()
    showMobileInterface()
})

