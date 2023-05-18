<template>
    <div class="app__cantainer" style="background-color: #c0dbe6;">
        <div class="home__shop">
            <router-link :to="{name: 'product.detail'}" style="text-decoration: none; color: #fd7e14;">
                <i class="home__shop-icon fas fa-chevron-left"></i>
                TRỞ LẠI
            </router-link>
        </div>
              
        <div class="main-cart-container" v-if="product">
                <div class="container">
                    <h1 class="text-center">Đặt hàng và Thanh toán</h1>
                    <div class="magiamgia">
                        <h4 >
                            <div class="MGG__text"> Nhập mã giảm giá: </div>      
                        </h4>
                        <select class="form-select" aria-label="Default select example" v-model="titleOrder.discountCode">
                            <option value="" selected>----Chọn mã giảm giá----</option>
                            <option value="discount5k">Giảm 5k</option>
                            <option value="discount10k">Giảm 10k</option>
                            <option value="discount15k">Giảm 15k</option>
                        </select>
                    </div>
                    <div class="form">
                        <div class="form_TT" >
                            <div class="hoten">
                                <span style="margin: 10px">Họ Tên:</span>
                                <input type="text" id="name" v-model="currentUser.userName">
                            </div>
            
                            <div class="sdt">
                                <span style="margin: 10px;">Số Điện Thoại:</span>
                                <input type="number" id="phone" v-model="currentUser.userPhone">
                            </div>
            
                            <div class="email">
                                <span style="margin: 10px;">Email:</span>
                                <input type="email" id="email" height="150px" v-model="currentUser.userEmail">
                            </div>
                        </div>
            
                        <div class="form_text">
                            <div class="txtx">
                                <span style="margin: 10px;">Địa Chỉ:</span>
                                <div><textarea name="" id="adress" cols="30" rows="10" v-model="currentUser.userAddress"></textarea></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <h3 style="margin: 10px;">Thông Tin Đơn Hàng:</h3>
                    <table style="border: 2px solid #17171b;" >
                        <tr style="border: 2px solid #17171b;">
                            <th class="Cottieude" style="border: 2px solid #17171b;">STT</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">ẢNH</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">TÊN SẢN PHẨM</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">MÃ SẢN PHẨM</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">SỐ LƯỢNG</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">GIÁ</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">TỔNG TIỀN</th>
                            <th class="Cottieude" style="border: 2px solid #17171b;">XÓA</th>
                            
                        </tr>
                        <tr style="border: 2px solid #17171b;">
                            <td style="border: 2px solid #17171b; font-size: 14px;">001</td>
                            <td style="border: 2px solid #17171b; font-size: 14px;"><img :src="`/images/${product.images[0]}`" style="max-width: 100px;"/></td>
                            <td style="border: 2px solid #17171b; font-size: 14px;">{{ product.name }}</td>
                            <td style="border: 2px solid #17171b; font-size: 14px;">{{ product.code }}</td>
                            <td style="border: 2px solid #17171b; font-size: 14px;">
                                <input type="number" id="number" placeholder="1" @click="numberOfProducts" v-model="priceProduct.quantityProduct">
                            </td>
                            <td style="border: 2px solid #17171b;font-size: 14px;">{{ product.price }}</td>
                            <td style="border: 2px solid #17171b;font-size: 14px;">{{ totalPrice }}</td>
                            <td style="border: 2px solid #17171b;"><button v-on:click="deleteProduct">Xóa</button></td>
                        </tr>
                        
                    </table>
                    <h3 style="margin: 10px;">Phương Thức Thanh Toán: </h3>
                    <div class="PTTT">
                        <div class="cach1">
                            <input name="payment" value="Payment on delivery" type="radio" class="radio1" checked style="color:#fd7e14">
                            <span style="line-height: 40px;">Thanh toán khi nhận hàng</span>
                        </div>
                        <div class="cach2">
                            <input name="payment" value="Transfer" type="radio" class="radio2" style="color:#fd7e14">
                            <span>
                                Chuyển khoản:   
                                <select class="select2">
                                    <option>STK: 0123456789</option>
                                    <option>STK: 0965184273</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div class="bnt">
                        <button style="font-size: 16px; margin-bottom: 20px;" @click="createOrder()">Hoàn Tất</button>
                    </div>
                </div>
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

            titleOrder: {
                orderCode: "",
                discountCode: "",
            },
            currentUser: {
                userName: "",
                userPhone: 0,
                userEmail: "",
                userAddress: "",
            },
            priceProduct: {
                quantityProduct: 1,
                totalPriceProduct: 0,
                paymentMethods: "",
                isConfirm: false,
            },
            order: {}

        };
    },
    methods: {
        async getProduct(id) {
            try {   
                this.product = await ShopService.get(id);
                //console.log(this.product);
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
            this.priceProduct.totalPriceProduct = this.totalPrice;
        },

        numberOfProducts(){
            var element = document.getElementById('number').value;
            this.totalPrice = element * this.product.price ;  
            this.priceProduct.totalPriceProduct = this.totalPrice;
        },

        getCurrentUser() {
                var storedUser = localStorage.getItem('user');
                this.currentUser = JSON.parse(storedUser);
        },

        generateOrderCode() {
            var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            this.titleOrder.orderCode = retVal;
            //console.log("orderCode là: ", this.titleOrder.orderCode);
            return retVal;
        },
        displayRadioValue() {
            var ele = document.getElementsByName('payment');
            //console.log("ele la: ", ele.length);
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    console.log("checked", i)
                    this.priceProduct.paymentMethods = ele[i].value;
                    break;
                }
            }
        },

        async createOrder() { // tao don hang
            try {
                this.order = { ...this.titleOrder, ...this.currentUser, ...this.product, ...this.priceProduct };
                console.log(this.order);
                await ShopService.createOrder(this.order);
                this.message = "Tạo đơn hàng thành công";
            } catch (error) {
                this.message = "Lỗi không thể tạo đơn hàng";
                console.log(error);
            }
        },

        deleteProduct(){
            
            this.product = null;
            console.log(this.product);
        },
        // numberOfProducts(){
        //     var element = document.getElementById('number').value;
        //     this.totalPrice = element * this.product.price ;  
        // }

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
        this.getCurrentUser();
        this.getProduct(this.id);
        this.generateOrderCode();
        this.displayRadioValue();
        this.message = "";
    },
};
</script>
  
  <style>
      input[type="radio"] {
          display: block;
      }
      body {
          font-family: Arial, sans-serif;
          /* font-size: 14px; */
          line-height: 1.5;
          margin: 0;
          padding: 0;
      }
      .container{
          max-width: 1200px;
      }
      h1{
          align-items: center;
          justify-content: center;
          color: #141532;
          
      }
      input{
          border: 2px solid #2f32db;
          font-size: 20px;
      }
      .magiamgia{
          display:flex;
          align-items: center;
          width: 477px;
          text-align: center;
          
      }
      h4{
          border-radius: 5px;
          border: #2f32db;
          background-image: linear-gradient(0,#100f13,#1b0b3e);
          color: white;
          margin-right: 20px;
          height: 37px;
          text-align:left;
          margin-top: 7px;
      }
      .MGG__text{
          display: flex;
          align-items: center;
          font-size: 20px;
          margin-top: 5px;
      }
      span{
          display: block;
          font-size: 20px;
      }
      
      table{
          width: 100%;
      }
      th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
          
      }
      td{
          align-items: center;
         
      }
      th{
          background-image: linear-gradient(0,#100f13,#1b0b3e);
          color: white;
      }
      textarea{
          width: 500px;
          height: 120px;
          border: 2px solid #2f32db;
          font-size: 20px;
      }
      .container{
          display: block;
      }
      .form-select{
          font-size: 20px;
          width: 250px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border: 2px solid #2f32db;
      }
      button{
          
          background-color: var(--primary-color);
          border-radius: 5px;
          border: none;  
          color: white;  
          padding: 11px 25px;  
          text-align: center;  
          text-decoration: none;  
          display: inline-block;
          
      }
      .bnt{
          margin-top: 20px;
      }
      .form{
          display: flex;
          
          
      }
      
  
      .form_text{
  
          margin-left: 100px;
      }
      .PTTT{
          display: flex;
      }
      .cach1{
          display: flex;
      }
      .cach2{
          margin-left: 50px;
          display: flex;
      }
      .radio1{
          margin-right: 10px;
      }
      .select2{
          width: 205px;
          height: 40px;
          border: 2px solid #2f32db;
          border-radius: 5px;
      }
  
  </style>
  
  