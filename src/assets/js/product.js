$(document).ready(function(){

    $('.plus').click(function(e){
        e.preventDefault();
        let quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1); 
    });

    $('.minus').click(function(e){
        e.preventDefault();
        let quantity = parseInt($('#quantity').val());
        if(quantity>1){
            $('#quantity').val(quantity - 1);
        }
    });

    const pid = new URL(window.location.href).searchParams.get('pid')
    let productItem = products[pid]

    let carouselImg = $('.carousel-inner .carousel-item img')
    let productName=$('.product_description h3')
    let productCode=$('.product_description .code')
    let productOldPrice=$('.product_description .old-price')
    let productNewPrice=$('.product_description .new-price')

    carouselImg.each((i,e)=>{
        e.src=productItem.img[0]
    })

    productName.text(productItem.name)
    productCode.text(productItem.code)
    productOldPrice.text(currencyFormat(productItem.oldPrice))
    productNewPrice.text(currencyFormat(productItem.newPrice))
    
    let sizeOption = $('.product_size input[name=option]')
    let size = $('input[name=option][checked]').val()

    var quantity

    
    sizeOption.click((e)=>{
        size=e.currentTarget.value
       
    })

    $('.btn_add_cart').click(()=>{
        quantity = parseInt($('#quantity').val())
        order(pid,quantity,size)
        window.location.reload()
    })

});