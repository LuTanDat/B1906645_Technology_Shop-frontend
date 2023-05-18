<template>
      <header class="header ">
            <div class="grid wide">
                <nav class="header__navbar hide-on-mobile-tablet">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item header__navbar-item--has--qr header__navbar-item--spask">
                            Vào ứng dụng TECHNOLOGY SHOP
                            <!-- Header qr code -->
                            <div class="header__qr">
                                
                                <img src="/images/QRshoppe.png" alt="QR123" class="header__qr-img">
                                <div class="header__qr-apps">
                                    <a href="" >
                                        <img src="/images/google play.png" alt="Google Play" class="header__qr-download-img header__qr-link" >
                                    </a>
                                    <a href="" >
                                        <img src="/images/39f189e19764dab688d3850742f13718.png" alt="App Store" class="header__qr-download-img header__qr-link" >
                                    </a>
                                </div>

                                
                                
                            </div>
                        </li> 
                       
                        <li class="header__navbar-item header__navbar-item-danhmuc header__navbar-item--spask danhmucan">
                            Danh mục
                            <ul class="menu__danhmuc">  
                                    <div class="menu__danhmuc-item ">
                                        <li class="meunu_li " ><span class="dropdown-item-text">Danh Mục</span></li>
                                        <li class="meunu_li">
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-solid fa-computer-mouse" style="margin-right: 10px;"></i>
                                                Chuột
                                            </a>
                                        </li>
                                        <li class="meunu_li">          
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-sharp fa-regular fa-keyboard"  style="margin-right: 10px;"></i>
                                                Bàn phím
                                            </a>
                                        </li>
                                        <li class="meunu_li">
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-sharp fa-solid fa-music"  style="margin-right: 10px;"></i>
                                                Loa
                                            </a>
                                        </li>
                                        <li class="meunu_li">           
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-solid fa-headphones"  style="margin-right: 10px;"></i>
                                                Tai nghe
                                            </a>
                                        </li>
                                        <li class="meunu_li">
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-solid fa-fan"  style="margin-right: 10px;"></i>
                                                Quạt tản nhiệt
                                            </a>
                                        </li>
                                        <li class="meunu_li">
            
                                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                                <i class="fa-solid fa-network-wired" style="margin-right: 10px;"></i>
                                                Cáp kết nối
                                            </a>
                                        </li>
                                    </div>
                                      
                                   
                               
                            </ul>
                        </li> 
                        <li class="header__navbar-item">
                           <span class="header__navbar-item-title--no-pointer"> Kết nối</span>
                            <a href="" class="header__navbar-icon-link">
                                 <i class="header__navbar-icon fab fa-facebook"></i>
                            </a>
                            <a href="" class="header__navbar-icon-link">
                                 <i class="header__navbar-icon fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
    
                    <ul class="header__navbar-list">
                       
                       <li class="header__navbar-item">
                            <router-link :to="{name: 'introduce'}" style="text-decoration: none;">
                                <div class="header__navbar-item-link">
                                    Giới Thiệu
                                </div>
                            </router-link>
                        </li>
                        <li class="header__navbar-item" >
                            <router-link :to="{name: 'contact'}" style="text-decoration: none;">
                                <div class="header__navbar-item-link"> 
                                    Liên Hệ
                                </div>
                            </router-link>
                            
                        </li>

                        <li class="header__navbar-item header__navbar-user">
                           <!-- <img src="https://cf.shopee.vn/file/4a01a1052e72078a7cc9ac7c4d3bfe10_tn" alt="" class="header__navbar-user-img"> -->
                           <span class="header__navbar-user-name">{{currentUser.userName}}</span>

                           <ul class="header__navbar-user-menu">
                               <li class="header__navbar-user-item">
                                    <router-link :to="{name: 'PersonalInformation'}" style="text-decoration: none;">
                                        Tài khoản của tôi
                                    </router-link>
                               </li>
                               
                               <li class="header__navbar-user-item">
                                    <router-link :to="{name: 'PurchaseOrder'}" style="text-decoration: none;">
                                        Đơn mua hàng
                                    </router-link>
                                    
                               </li>
                               <li class="header__navbar-user-item header__navbar-user-item--separate" @click="logOut">
                                    <a class="log-DX" href="/">Đăng xuất</a>
                               </li>
                           </ul>
                       </li>

                       
                       <!-- <li class="header__navbar-item header__navbar-item--strong ">
                            <a id="signup" href="./dangky.html" class="header__navbar-item-link">                     
                                Đăng Ký
                            </a>
                            <img id="useravt" width="20" height="20" style="border-radius: 50%; margin-right: 8px;" src="../../public/images/user.png" alt="useravt">
                            <b id="username">Lu Thanh Man</b>
                        </li> -->
                       <!-- <li class="header__navbar-item header__navbar-item--strong">
                           <a id="login" href="./dangnhap.html" class="header__navbar-item-link">    
                                Đăng Nhập
                           </a>
                           <span onclick="logOut()" id="logout">Đăng Xuất</span>
                        </li> -->

                      
                    </ul>
                </nav>
                <!-- Nut tim kiem -->
                <div class="header-with-search">
                    <div class="header__logo hide-on-tablet ">
                        
                            <a href="/"><img style="margin-left: 0px;" src="/images/logo_shop.png" alt="logo" class="header__logo-img"></a>
                                             
                    </div>

                    <input type="checkbox" hidden id="mobile-search-checkbox" class="header__search-checkbox">
                    
                    <div class="header__search ">
                        <div class="header__search-input-wrap">
                            <input type="text" class="header__search-input" placeholder="Tiềm kiếm sản phẩm">

                           
                            <div class="header__search-history">
                                <h3 class="header__search-history-header">Lịch sử tìm kiến</h3>
                                <ul class="header__search-history-list">
                                    <li class="header__search-history-item">
                                        <a href="">Chuột có dây</a>
                                    </li>
                                    <li class="header__search-history-item">
                                        <a href="">Bàn phím led</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="header__search-select">
                            <span class="header__search-select-label">Trong Shop</span>
                            <i class="header__search-select-icon fas fa-chevron-down"></i>

                            <ul class="header__search-option">
                                <li class="header__search-option-item header__search-option-item--active">
                                    <span>Trong shop</span>
                                    
                                </li>
                                <li class="header__search-option-item">
                                    <span>Ngoài shop</span>
                                    <i class="fas fa-check"></i>
                                </li>
                            </ul>
                        </div>
                        <button class="header__search-btn">
                            <i class="header__search-btn-icon fas fa-search"></i>
                        </button>
                    </div>
                    <button style="display: none;" class="header__search-btn mobile">
                        <i class="header__search-btn-icon fas fa-search"></i>
                    </button>
                    <!-- cart: giỏ hàng -->
                    <div class="header__cart">
                        <div class="header__cart-wrap">
                            <i class="header__cart-icon fas fa-shopping-cart"></i>
                            <span class="header__cart-notice">0</span>

                            <!-- No cart: header__cart-list--no-cart -->
                            
                            <div style="text-align: center;" class="header__cart-list ">
                                
                                <!-- <div><img src="/images/no-cart01.png" alt="" class="header__cart-no-cart-img"></div>
                                <span class="header__cart-list-no-cart-msg">
                                    Chưa có sản phẩm
                                </span> -->

                               
                                <ul class="header__cart-list-item"> 
                                    <h4 class="header__cart-heading no-cart-hide">Sản phẩm đã thêm vào</h4>     
                                    <li id="p001" class="header__cart-item">
                                        <img src="/images/a1.jpeg" alt="Chuột có dây Gaming Logitech G102 LightSync" class="header__cart-img">
                                        <div class="header__cart-item-info">
                                            <div class="header__cart-item-head">
                                                <h5 class="header__cart-item-name">Chuột có dây Gaming Logitech G102 LightSync</h5>
                                                <div class="header__cart-item-price-wrap">
                                                    <span class="header__cart-item-price">405.000&nbsp;₫</span>
                                                    <span class="header__cart-item-multiply">x</span>
                                                    <span class="header__cart-item-qnt">1</span>
                                                </div>
                                                <div style="display: none" class="main-cart-item-option">
                                                    <div><span class="option">Giá: </span><span class="header__cart-item-price">405.000&nbsp;₫</span></div>
                                                    <div><span class="option">Số lượng: </span><span class="item-quantity">1</span></div>
                                                    <div><span class="option">Màu: </span><span class="item-size">undefined</span></div>
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
                                <router-link 
                                    :to="{
                                        name: 'product.cart', 
                                        params: { id: '123' }
                                    }"
                                    
                                    style="text-decoration: none;" 
                                    class="header__cart-view-cart btn btn--primary"
                                >
                                    Xem giỏ hàng
                                </router-link>
                                <!-- <a href="#" style="text-decoration: none;" 
                                    class="header__cart-view-cart btn btn--primary"> Xem giỏ hàng</a> -->
                            </div>
                        </div>
                        <div class="dark-layer"></div>
                    </div>
                </div>
            </div>
            
            
            
    </header>
    <!-- <nav class="navbar navbar-expand navbar-white bg-white"> -->
        
        <!-- <a href="/"><img src="/images/logo.jpg"></a> -->
        <!-- <div class="navbar-nav">
            <router-link :to="{name: 'doctor'}" 
                class="nav-item nav-link font">Trang chủ</router-link>
        </div>
        <div class="navbar-nav">
            <router-link :to="{name: 'doctor.feedback'}" 
                class="nav-item nav-link font">Liên hệ</router-link>
        </div> -->
    <!-- </nav> -->
</template>

<style scoped>

</style>

<script>
export default {
    data() {
        return {
            currentUser: {
                userName: "",
                userPhone: "",
                userEmail: "",
                userAddress: "",
            },
        }
    },
    methods: {
        logOut() {
            localStorage.removeItem('rule');
            localStorage.removeItem('user');
            location.reload() 
        },


        getCurrentUser() {
            var storedUser = localStorage.getItem('user');
            this.currentUser = JSON.parse(storedUser);
            // console.log(this.currentUser);
        },
    },
    created() {
          this.getCurrentUser();
      },
}
</script>