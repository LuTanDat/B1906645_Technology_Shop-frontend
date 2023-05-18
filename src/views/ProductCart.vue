<template>
  <div class="app__cantainer" >
    <router-link :to="{name: 'product.detail'}" style="text-decoration: none; display: flex;" class="back">
        <i class="home__shop-icon fas fa-chevron-left" style="margin-top: 5px;"></i>
        Quay lại
        <span class="cart-page-title"> Giỏ hàng</span>
    </router-link>
    
    <div class="main-cart-container">
        <div class="main-nocart-containert" v-if="!product">
            <div><img src="/images/no-cart01.png" alt="empty cart" class="header__cart-no-cart-img"></div>
            <span class="header__cart-list-no-cart-msg">
                <h3>Chưa có sản phẩm</h3>
                <a class="shopnow" href="./index.html"><h3>Mua ngay</h3></a>
            </span>
        </div>

       <div v-else>
            <h1 class="header__cart-heading no-cart-hide">Sản phẩm đã thêm vào</h1>
            <ul class="header__cart-list-item">
                <li id="p001" class="header__cart-item">
                    <img :src="`/images/${product.images[0]}`" class="header__cart-img">
                    <div class="header__cart-item-info">
                        <div class="header__cart-item-head">
                            <h5 class="header__cart-item-name">{{product.name}}</h5>
                            <div class="header__cart-item-price-wrap">
                                <span class="header__cart-item-price">{{ product.price }}</span>
                                <span class="header__cart-item-multiply">x</span>
                                <span class="header__cart-item-qnt">{{ product.quantity }}</span>
                            </div>
                            <div style="display: none" class="main-cart-item-option">
                                <div><span class="option">Giá: </span><span class="header__cart-item-price">{{ product.price }}₫</span></div>
                                <div><span class="option">Số lượng: </span><span class="item-quantity"><input type="number" id="number" min="1" value="1" @click="numberOfProducts"></span></div>
                                <!-- <div><span class="option">Màu: </span><span class="item-size">đen</span></div> -->
                                
                            </div>
                        </div>
                        <div class="header__cart-item-body">
                            <span class="header__cart-item-description">
                                Phân loại: tốt
                            </span>
                            <span onclick="cancelOrder('p001')" class="header__cart-item-remove">Xóa</span>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
        <div class="total-container no-cart-hide"><span class="total-title">Tổng thanh toán:</span><span class="total-num">{{ totalPrice }}</span></div>
        <!-- <a href="./thanhtoan2.html" class="pay-btn no-cart-hide">Thanh toán</a> -->
        <router-link
            :to="{
                name: 'product.payment', 
                params: { id: this.id},
            }"
            
            class="btn_add_cart" 
            
            style="
                    margin-left: 20px;
                    
                    color: aliceblue;
                    text-decoration: none;
                    text-align: center;
                    
                    font-weight: 500;
                    padding-top: 7px;
                    border-radius: 5px;
                    text-decoration: none;
                    border: none;
                    color: white;
                    padding: 8px 38px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-left: 2px;
                    "
            >
                THANH TOÁN
        </router-link>
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
            totalPrice: 0,
            // customer: null,
        };
    },
    methods: {
        async getProduct(id) {
            try {
                
                this.product = await ShopService.get(id);
                // console.log(this.product);
                this.setTotalPrice();
                
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
        setTotalPrice() {
            this.totalPrice = this.product.price ;
        },

        numberOfProducts(){
            var element = document.getElementById('number').value;
            this.totalPrice = element * this.product.price ;  
        },

        // async getCustomer(id) {
        //     try {
                
        //         this.customer= await ShopService.getCustomer(id);
        //         // this.setInputCustomer();
        //         console.log(this.customer);
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
.app__cantainer{
    /* max-width: 1200px; */
    padding-bottom: 16px;
    background-color: #fff;
}

.cart-page-title{
    font-size: 22px;
    font-weight: 500;
    color: #FB5831;
    margin-left: 16px;
    padding-left: 16px;
    text-transform: uppercase;
    border-left: 2px solid #FB5831;
    cursor: pointer;
}

.back{
    font-size: 20px;
    color: rgba(0, 0, 0, .7);
    margin-left: 32px;
    text-decoration: none;
    display: block;
    padding-top: 16px;
    display: inline-block;
}

.back:hover{
    color: #FB5831;
}

.main-cart-container .header__cart-heading{
    margin-top: 16px;
}

.main-cart-container{
    width: 80%;
    margin: auto;
}

.main-cart-container .header__cart-list-item{
    max-height: unset !important;
}

.main-cart-container a.shopnow{
    display: inline-block;
    padding: 0px 32px;
    background-color: #FB5831;
    text-decoration: none;
    color: #fff;
}

.main-cart-container a.shopnow h3{
    padding-bottom: 0;
}

.main-cart-container a.shopnow:hover{
    color: #FB5831;
    background-color: #fac9bc;
}

.main-nocart-containert{
    text-align: center;
}

.main-cart-container .header__cart-img{
    height: 100px;
    width: 100px;
}

.main-cart-container .header__cart-item-price-wrap{
    display: none !important;
}

.main-cart-container .main-cart-item-option{
    display: block !important;
}

.main-cart-item-option .option{
    display: inline-block;
    min-width: 64px;
}

.main-cart-item-option .option+span{
    display: inline-block;
    min-width: 100px;
    text-align: right;
}

.main-cart-container .pay-btn{
    display: inline-block;
    margin-top: 8px;
    font-size: 18px;
    padding: 12px 28px;
    background-color: #FB5831;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none
}

.main-cart-container .total-container{
    margin-top: 32px;
    margin-bottom: 24px;
}

.main-cart-container .total-title{
    padding: 13px 30px;
    font-size: 16px;
    color: white;
    background-color: rgb(23, 12, 59);
    max-height: 40px;
}

.main-cart-container .total-num{
    padding: 9px 35px;
    font-size: 20px;
    color: #FB5831;
    border: 1px solid rgb(15, 8, 40);
}


.main-cart-container .pay-btn:active{
    background-color: #f1927b;
}
</style>