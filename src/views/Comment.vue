<template>
    <div class="home__shop" >
        <router-link :to="{name: 'product.detail'}" style="text-decoration: none; color: #fd7e14;">
            <i class="home__shop-icon fas fa-chevron-left"></i>
            TRỞ LẠI
        </router-link>
    </div>
  <div class="container rating" v-if="product">
                <h2>Đánh giá sản phẩm</h2>
                <div class="img-title">
                    <img :src="`/images/${product.images[0]}`"  style="max-width: 100px;">
                        
                    <div class="name01">
                        <li>
                            <p class="title">{{product.name}}</p>
                        </li>
                        <li class="title-li">
                            <span>Giá: {{ product.price }}đ</span>
                            
                        </li>
                    </div>
                            
                        
            
                </div>
                
                <div class="title_header">
                    <p>Chất lượng sản phẩm:</p>
                    <div class="stars">
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    <span class="star">&#9733;</span>
                    </div>
                </div>
                <form>
                  <div class="form-group">
                    <label for="name">Họ tên:</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Lu Thanh Man" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="man@gmai.com" required>
                  </div>
                  <div class="form-group">
                    <label for="comment">Bình luận:</label>
                    <textarea class="form-control" id="comment" name="comment" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Đăng</button>
                </form>
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
            customer: null,
        };
    },
    methods: {
        async getProduct(id) {
            try {
                
                this.product = await ShopService.get(id);
                console.log(this.product);
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

        setInputCustomer(){
            console.log( document.getElementById('email'))
            document.getElementById('name').value = this.customer.name;
            document.getElementById('email').value = this.customer.email;
        },
        
        

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
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" ;


                button[type="submit"] {
                    padding: 10px;
                    background-color: #eb5317;
                    border: none;
                    border-radius: 5px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                label{
                    left: 0;
                }
                button[type="submit"]:hover{
                    background-color: rgb(188, 77, 18);
                }
                .form-group{
                    display: flex;
                }
                .form-control {
                    display: block;
                    width: 100%;
                    padding: 0.375rem 0.75rem;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.5;
                    color: #212529;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #ced4da;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    border-radius: 0.25rem;
                    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                }
                .input01{
                    width: 100px;
                    justify-content: center;
                }
                .title-li{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 20px;
                }
                li{
                    list-style: none;
                }
                .title{
                   text-align: left;
                   margin-left: 20px;
                }
                .numberSP{
                    display: flex;
                }
                .img-title{
                   display: flex;
                   justify-content: space-evenly;
                }
                .title_header{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                .rating {
                max-width: 500px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 10px;
                box-shadow: 0 0 10px #ccc;
                text-align: center;
                }

                .rating h2 {
                font-size: 24px;
                margin-bottom: 20px;
                }

                .stars {
                font-size: 40px;
                margin-bottom: 20px;
                }

                .star {
                color: #ccc;
                cursor: pointer;
                }

                .star.active {
                color: #ffdd00;
                }

                form {
                display: flex;
                flex-direction: column;
                align-items: center;
                }

                label {
                width: 130px;
                font-size: 18px;
                margin-bottom: 10px;
                border: none;
                box-shadow: none;
                }

                input,
                textarea {
                width: 100%;

                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                }

                button[type="submit"] {
                padding: 10px;
                background-color: rgb(0, 0, rgb(232, 83, 24), 0.9);
                color:#fff;
                border: none;
                border-radius: 5px;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.3s ease;
                }

                button[type="submit"]:hover {
                background-color: rgb(0, rgb(231, 116, 9), 0);
                }
                .star{
                color: #ffdd00;
                }
</style>