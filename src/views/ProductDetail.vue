<template>
   <div class="grid wide container" v-if="product">
           <div class="row">
                <div class="home__shop">
                    <router-link :to="{name: 'main.shop'}" style="text-decoration: none; color: #fd7e14;">
                        <i class="home__shop-icon fas fa-chevron-left"></i>
                        TRỞ LẠI
                    </router-link>
                </div>
            <!-- <div class="gom"> -->
                <!-- <div class="left l-6 m-6 c-12"> -->
                    <div class="main_img col l-5 m-12 l-o-1 m-o-1 item" >
                        <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel"  >
                            <div class="main_img carousel-inner ">
                                <div class="carousel-item active " >
                                <img :src="`/images/${product.images[0]}`" class="img_main"  style=" max-width: 450px;    max-height: 450px;">
                                </div>
                                <div class="carousel-item" >
                                <img :src="`/images/${product.images[1]}`"  class="img_main"  style=" max-width: 450px;    max-height: 450px;">
                                </div>
                                <div class="carousel-item">
                                <img :src="`/images/${product.images[2]}`"  class="img_main"  style=" max-width: 450px;    max-height: 450px;">
                                </div>
                                <div class="carousel-item" >
                                <img :src="`/images/${product.images[3]}`"  class="img_main"  style=" max-width: 450px;    max-height: 450px;">
                                </div>
                                <div class="carousel-item" >
                                <img :src="`/images/${product.images[4]}`"  class="img_main"  style=" max-width: 450px;    max-height: 450px;">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <!-- <img :src="`/images/${product.images[0]}`" id="main" class="img_main" style="margin-top: 20px; max-width: 450px;    max-height: 450px;" />  -->
                        
                        <div class="color_img" style="margin-top: px;">
                            <img class="color_img-item" :src="`/images/${product.images[0]}`"  /> 
                            <img class="color_img-item" :src="`/images/${product.images[1]}`" /> 
                            <img class="color_img-item" :src="`/images/${product.images[2]}`" /> 
                            <img class="color_img-item" :src="`/images/${product.images[3]}`" /> 
                            <img class="color_img-item" :src="`/images/${product.images[4]}`" /> 
                        </div>
                    </div>
                <!-- </div> -->
                <div class="right item col l-5  m-12 c-12" >
                    <div class="product_description" >
                        <h1 style="display: block;">{{ product.name }}</h1>
                        <h2 class="code_SP">Mã sản phẩm: {{ product.code }}</h2>
                        <p class="code_SP">Số lượng còn: {{ product.quantity }}</p>
                        
                        <hr>
                        <div class="price_product" style=" margin-bottom: 20px;">
                            <span class="old-price"></span>
                            <span class="new-price">{{ product.price }}đ</span>
                        </div>
                    </div>
                    <div class="product_selection" style="margin-bottom: 30px;">
                        <!-- <p>Màu :</p>
                        <div class="product_size">
                            
                            <div data-value="đen" class="den">
                                <input class="checkbox-tools" type="radio" name="option" value="đen" id="đen">
                                <label for="đen">đen </label>
                            </div>
                            
                            <div data-value="trắng" class="trang">
                                <input class="checkbox-tools" type="radio" name="option" value="trắng" id="trắng">
                                <label for="trắng">trắng </label>
                            </div>
                            
                        </div> -->
                        
                        <div class="product-order">
                            <!-- <div class="quantity buttons_added">
                                <input type="button" value="-" class="minus">
                                <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty"
                                    class="input-text qty text" size="4" pattern="" inputmode="" id="quantity">
                                <input type="button" value="+" class="plus">
                            </div> -->
                            <!-- <button class="btn_add_cart">
                                <i class="fa-sharp fa-solid fa-cart-plus"></i>
                                 Thêm vào giỏ hàng
                            </button> -->

                            

                            <router-link
                                :to="{
                                    name: 'product.payment', 
                                    params: { id: this.id},
                                }"
                               
                                class="btn_add_cart" 
                               
                                style="
                                        margin-left: 0px;
                                        width: 200px;
                                        color: aliceblue;
                                        text-decoration: none;
                                        text-align: center;
                                        height: 37px;
                                        font-weight: 500;
                                        padding-top: 7px;
                                        border-radius: 5px;
                                        text-decoration: none;
                                        "
                             >
                                 MUA NGAY
                            </router-link>

                            <router-link
                                :to="{
                                    name: 'product.cart', 
                                    params: { id: this.id},
                                }"
                                class="btn_add_cart" 
                                style="
                                        margin-left: 20px;
                                        width: 200px;
                                        color: aliceblue;
                                        text-decoration: none;
                                        text-align: center;
                                        height: 37px;
                                        font-weight: 500;
                                        padding-top: 7px;
                                        border-radius: 5px;                          
                                        text-decoration: none;
                                        "
                             >
                                <i class="fa-sharp fa-solid fa-cart-plus"></i>
                                Thêm vào giỏ hàng
                            </router-link>
                        </div>
    
    
    
                    </div>
                    <hr>
                    <div class="hot_line" style="margin-top: 20px;">
                        <div class="mota" style="border: 1px solid #4a4545; border-radius: 10px;color: black; margin-bottom: 20px;">
                            <h4 style="margin-left: 10px;">Mô Tả chi tiết:</h4>
                            <div class="text_mota" style="margin-left: 20px;"><p style="left: 20px;">{{ product.description }}</p></div>
                        </div>
                        Tư Vấn:
                        <a href="tel:0120210212"> 0366679567</a>
                        <router-link
                                :to="{
                                    name: 'product.comment', 
                                    params: { id: this.id}
                                }"
                                class="btn_add_cart" 
                                style="
                                        margin-left: 20px;
                                        width: 200px;
                                        color: aliceblue;
                                        text-decoration: none;
                                        text-align: center;
                                        height: 37px;
                                        font-weight: 500;
                                        padding-top: 7px;
                                        border-radius: 5px;
                                        background-color: #0d6efd;
                                        text-decoration: none;
                                        "
                             >
                                 Bình Luận và đánh giá
                            </router-link>
                    </div>
                    
                </div>
            <!-- </div> -->
           </div>
            
            
               
    
            
                

               
        
   </div>
</template>

<script>
import ShopService from "@/services/shop.service";

export default {
    components: {
        
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            product: null,
            message: "",
        };
    },
    methods: {
        async getProduct(id) {
            try {
                
                this.product = await ShopService.get(id);
                this.selecImgProduct();
                // console.log(this.product);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },

        selecImgProduct(){
            const imgMain = document.getElementsByClassName("img_main");
            const colorList = document.getElementsByClassName("color_img-item");
            // for(var i = 0; i< colorList.length; i++){
            //     colorList[i].addEventListener("mouseover", () => {
            //         img
            //     })
            // }
            // console.log(imgMain[0])
            // console.log(colorList[0])





            // var element = document.getElementById('main');
            // var colorList = document.querySelectorAll("#main");
            // console.log(colorList);
            // for(var i = 0; i< colorList.length; i++){
            //     colorList[i].onmouseover=function(){
                    
            //     var mainimg = document.querySelector(".left> .main_img> .img_main");
            //     mainimg.src = colorList[i].src;
            //     }
            // }
        }
        // async getAccount(id) {
        //     try {
                
        //         this.product= await ShopService.getAccount(id);
        //         console.log(this.account);
        //     } catch (error) {
        //         console.log(error);
        //         // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        //         this.$router.push({
        //             name: "notfound",
        //             params: {
        //                 pathMatch: this.$route.path.split("/").slice(1)
        //             },
        //             query: this.$route.query,
        //             hash: this.$route.hash,
        //         });
        //     }
        // },

        // async updateProduct(data) {
        //     try {
        //         await ShopService.update(this.product.id, data);
        //         this.message = "Cập nhật thành công thông tin bác sĩ.";
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

        // async deleteProduct() {
        //     if (confirm("Bạn có chắc chắn muốn xóa?")) {
        //         try {
        //             await ShopService.delete(this.product.id);
        //             this.$router.push({ name: "product" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getProduct(this.id);
        this.message = "";
    },
};
</script>

<style>
/* product-page */
.carousel{
    max-width: 353px;
    margin-left: 50px;
}
.carousel-inner {
    position: relative;
    width: 91%;
    overflow: hidden;
    border-radius: 5px;
    height: 400px;
    width: 450px;
    }
.carousel-item img{
    border-radius: 1rem ;
}

.lcarousel-item img{
    width: 65%;
}
.right_container{
    width: 48%;
    float:right;
    margin-top: 2rem;
    height: 100%;
}
.right_container .product_description h3{
        font-size: 2.5rem;
}
.right_container .product_description p{
    margin-bottom:5% 0px;
    font-size: 1.5rem;
}
.right_container .product_description .price_product{
display: flex;
}
.right_container .product_description .price_product span{
    color:orangered;
    font-size: 3rem;
}
.right_container .product_description .price_product .old-price{
    text-decoration: line-through;
    margin-right: 2%;
}

.right_container .product_selection{
    margin-top: 2%;
}
.right_container .product_selection .product_size{
    display: flex;
    width:100%;
    flex-wrap: wrap;
}
.product_size{
    display: flex;
}

.new-price{
    color:orangered;
    font-size: 3rem;
}
/* .right_container .product_selection .product-order{
    margin-top: 20px;
    margin-left: 5px;
} */

input[type="radio"] {
    display: none;
}
input[type="radio"]:not(:disabled) ~ label {
    cursor: pointer;
}
input[type="radio"]:disabled ~ label {
    text-decoration: line-through;
    color: #000e07;
    border-color: #bcc2bf;
    box-shadow: none;
    cursor: not-allowed;
}
label {
    display: block;
    border: 2px solid #c4c0bf;
    border-radius: 20px;
    padding: 1rem 0px;
    margin-bottom: 1rem;
    text-align: center;
    box-shadow: 0px 3px 10px -2px rgba(161, 170, 166, 0.5);
    position: relative;
    min-width: 56px;
    display: flex;
    justify-content: center ;
    align-items: center;
    margin-right:0.5rem;
}
input[type="radio"]:checked + label {
    border-color:#EE4D2D ;
    color: black;
    box-shadow: 0px 0px 20px rgba(241, 80, 5, 0.884);
    }
    
.product_selection p{
    font-size: 2rem;
}

.quantity {
display: inline-block; }
    
.quantity .input-text.qty {
    font-size: 20px;
    width: 35px;
    height: 39px;
    padding: 0 5px;
    text-align: center;
    background-color: transparent;
    border: 1px solid #efefef;
}
    
.quantity.buttons_added {
    text-align: left;
    position: relative;
    white-space: nowrap;
    vertical-align: top; }
    
.quantity.buttons_added input {
    display: inline-block;
    margin: 0;
    vertical-align: top;
    box-shadow: none;
}
    
.quantity.buttons_added .minus,
.quantity.buttons_added .plus {
    font-size: 20px;
    padding: 7px 10px 8px;
    height: 39px;
    background-color: #ffffff;
    border: 1px solid #efefef;
    cursor:pointer;}
    
.quantity.buttons_added .minus {
    border-right: 0; }
    
.quantity.buttons_added .plus {
    border-left: 0; }
    
.quantity.buttons_added .minus:hover,
.quantity.buttons_added .plus:hover {
    background: #eeeeee; }
    
.quantity input::-webkit-outer-spin-button,
.quantity input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    /* -moz-appearance: none; */
    margin: 0; }
    
.quantity.buttons_added .minus:focus,
.quantity.buttons_added .plus:focus {
    outline: none; }
    
.btn_add_cart{
    background-color: #EE4D2D; 
    border: none; 
    color: white; 
    padding: 9px 16px; 
    font-size: 16px; 
    cursor: pointer; 
    border-radius: 5px;
    /* margin-left: 20px; */
    
}
.btn_add_cart:hover{
    background-color: #b93318;
}

.hot_line{
    font-size:2rem;
    color: rgba(241, 80, 5, 0.884);
    margin-top: 10px;
}
.hot_line a{
    color: black;
}


.img_color{
    width: 50px;
    height: 50px;
    display: flex;
    padding: 10px;
    
}
 .gom{
    display: flex;
 }
/* .img_main{
    align-items: center;
    width: 300px;
    height: 300px;
} */
.left{
    align-items: center;
    display: flex;
    justify-content: center;
    
}
.right{
    align-items: center;
    /* display: flex; */
    justify-content: center;
    text-align: left;
    
}
.code_SP{
    font-size: 20px;
}
.bi-basket::before {
    content: "\f180";
}
.bi::before, [class^="bi-"]::before, [class*=" bi-"]::before {
    display: inline-block;
    font-family: bootstrap-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
:before, :after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

</style>