<template>
        <!-- KHACH HANG -->
        <div 
            v-if="this.rule.localeCompare('khach hang') === 0"
        >

            <div class="grid wide"> 
            <div class="home hide-on-mobile-tablet">
            </div>
            <div class="row app__content">
                
                <div class="row " id="anhquangcao" style="margin-top: 15px;">
                    <div class=" col-sm-2  hide-on-mobile">
                    <div class="menu ">
                        <li class="meunu_li " ><span class="dropdown-item-text">Danh Mục</span></li>
                        <li @click="filterProduct('Chuột')" class="meunu_li">
                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-solid fa-computer-mouse" style="margin-right: 10px;"></i>
                                Chuột
                            </a>
                        </li>
                        <li @click="filterProduct('Bàn phím')" class="meunu_li">

                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-sharp fa-regular fa-keyboard"  style="margin-right: 10px;"></i>
                                Bàn phím
                            </a>
                        </li>
                        <li @click="filterProduct('Loa')" class="meunu_li">
                            
                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-sharp fa-solid fa-music"  style="margin-right: 10px;"></i>
                                Loa
                            </a>
                        </li>
                        <li @click="filterProduct('Tai nghe')" class="meunu_li">

                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-solid fa-headphones"  style="margin-right: 10px;"></i>
                                Tai nghe
                            </a>
                        </li>
                        <li @click="filterProduct('Quạt tản nhiệt')" class="meunu_li">

                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-solid fa-fan"  style="margin-right: 10px;"></i>
                                Quạt tản nhiệt
                            </a>
                        </li>
                        <li @click="filterProduct('Cáp kết nối')" class="meunu_li">

                            <a class="dropdown-item" href="#" style=" text-align: left; ">
                                <i class="fa-solid fa-network-wired" style="margin-right: 10px;"></i>
                                
                                Cáp kết nối
                            </a>
                        </li>
                    </div>
                        
                    </div>
                    <div class=" col-sm-7  " id="khunganhqclon">
                        <div id="carouselExampleControls" class="rounded border border-light carousel slide"
                            data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/images/ANHQUANCAO2.jpg" class="d-block w-100" alt="saturn" height="295px">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/anhQC1.PNG" class="d-block w-100" alt="jupiter" height="295px">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/anhqc2.PNG" class="d-block w-100" alt="uranus" height="295px">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/anhQC2.jpg" class="d-block w-100" alt="uranus" height="295px">
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="/images/anhQC1.jpg" class="d-block w-100" alt="uranus" height="295px">
                                    
                                </div>
                            </div>       
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                    </div>

                        
                </div>
                <div class="highlight-img  col-sm-3 hide-on-mobile-tablet " id="khunganhqclon">
                    <div class="row pb-2 ">
                        <div class="l-12 "><img data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Loa Siêu ấm" class="rounded w-100 border border-light"
                                src="/images/anhloa2.jpg" alt="mercury" height="145.5px"></div>
                        
                    </div>
                    <div class="row pt-2 ">
                        <div class="l-12 "><img data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Tai nghe siêu rẻ" class="rounded w-100 border border-light"
                                src="/images/tainghe2.jpg" alt="neptune" height="145.5px"></div>
                        
                    </div>
                </div>

                <div class="col l-12 m-12 c-12 ">
                    <div class="home-filter hide-on-mobile-tablet">
                        <span class="home-filter__label">Sắp xếp theo</span>
                        <button class="home-filter__btn btn">Phổ biến</button>
                        <button class="home-filter__btn btn btn--primary">Mới nhất</button>
                        <button class="home-filter__btn btn">Bán chạy</button>

                        <div class="select-input">
                            <InputSearch v-model="searchText" />
                        </div>

                        <div class="home-filter__page">
                            <span class="home-filter__page-num">
                                <span class="home-filter__page-current">1</span>/1
                            </span>
                            <div class="home-filter__page-control">
                                <a href="" class="home-filter__page-btn home-filter__page-btn--disabled">
                                    <i class="home-filter__page-icon fas fa-angle-left"></i>
                                </a>
                                <a href="" class="home-filter__page-btn">
                                    <i class="home-filter__page-icon fas fa-angle-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                    <ProductList
                        v-if="filteredProductsCount > 0"
                        :products="filteredProducts"
                        v-model:activeIndex="activeIndex"
                    />

                    <ul class="pagination home-product__pagination">
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item__icon fas fa-chevron-left"></i>
                            </a>
                        </li>
                        <li class="pagination-item pagination-item--active">
                            <a href="" class="pagination-item__link">1</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">2</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">3</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">4</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">5</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">...</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">14</a>
                        </li>
                        <li class="pagination-item">
                            <a href="" class="pagination-item__link">
                                <i class="pagination-item-icon fas fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        </div>
        <!-- Chat messenger-->

        <div class="container__chat">
            <a href="" class="container__messenger">
               <span class="chat__number">55</span>
                <div class=" btn-chat">
                    <div class="chat-icon"><i class="far fa-comments"></i></div>
                    <span class="chat">Chat</span>
                </div>
            </a>
        </div>


        </div>


        <!-- EMPLOYEE -->
        <OrdersConfirmationInvoicing 
            v-if="this.rule.localeCompare('nhan vien') === 0"
            :orders="orders"
            :ordersLength="ordersLength"
        />

         <!-- ADMIN -->
        <RevenueReport 
            v-if="this.rule.localeCompare('admin') === 0"
            :products="products"
            :productsLength="productsLength"
            :orders="orders"
            :ordersLength="ordersLength"
            :outOfStock="outOfStock"
            :TotalRevenue="TotalRevenue"
        />

</template>

<style scoped>
/* @import "@/assets/main.css"; */
/* @import "https://unpkg.com/boxicons@latest/css/boxicons.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"; */
</style>

<script>

import OrdersConfirmationInvoicing from "@/components/OrdersConfirmationInvoicing.vue";
import RevenueReport from "@/components/RevenueReport.vue";
import ShopService from "@/services/shop.service";

import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";

export default {
    components: {
        RevenueReport,
        OrdersConfirmationInvoicing,

        InputSearch,
        ProductList,
    },
    
    data() {
        return {
            rule: "",
            products: [],
            productsLength: 0,
            outOfStock: 0,

            orders: [],
            ordersLength: 0,
            TotalRevenue: 0,

            totalProductPrice: 0,

            activeIndex: -1,
            searchText: "",
        }
    },

    watch: {
    //     // Giám sát các thay đổi của biến searchText.
    //     //  Bỏ chọn phần tử đang được chọn trong danh sách.
         searchText() {
            this.activeIndex = -1;
        },
    },

    computed: {
    
        productStrings() {
            return this.products.map((product) => {
                const { name, category } = product;
                return [name, category].join("");
            });
        },

    //     // Trả về các products có chứa thông tin cần tìm kiếm.
        
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.products[this.activeIndex];
        },
        // filteredProductsCount() {
        //    return this.filteredProducts.length;
        //  },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
    },

    methods: {
        refreshList() {
            this.retrieveProducts();
            this.retrieveOrders();
            this.activeIndex = -1;
        },

        filterProduct(name){
            this.searchText = name;
        },

        async retrieveProducts() {
            try {
                this.products = await ShopService.getAll();
                this.retrieveProductsCount();
                this.productOutOfStock(); 
            } catch (error) {
                console.log(error);
            }
        },
        retrieveProductsCount() {
            this.productsLength = this.products.length;
        },
        productOutOfStock() {
            this.products.forEach(product => {           
                if(product.quantity === 0) {
                    this.outOfStock += 1;
                }
            });
        },


        async retrieveOrders() {
            try {
                this.orders = await ShopService.getAllOrders();
                this.retrieveOrdersCount();
                this.orderTotalRevenue();
                // console.log(this.orders);
            } catch (error) {
                console.log(error);
            }
        },
        retrieveOrdersCount() {
            this.ordersLength = this.orders.length;
        },
        orderTotalRevenue() {
            for (var i = 0; i < this.orders.length; i++) {
                this.TotalRevenue += this.orders[i].totalPriceProduct;
            }
        },





        loadOldRule() {
            // console.log(localStorage.getItem('rule'))
            if(localStorage.getItem('rule')){
                this.rule = localStorage.getItem('rule')// co thi lay, ko thi null
            }    
        },
    },
    mounted() {
        this.refreshList();
        this.loadOldRule();
    },
}
</script>


<style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    }
    .dropdown-item:focus{
        width: 100%;
        background-color: var(--bs-dropdown-link-hover-bg);
    }

    .dropdown-item.active, .dropdown-item:active {
        color: #fff;
        text-decoration: none;
        /* background-color: #bdbfc3; */
        width: 100%;
    }
    .dropdown-item:focus, .dropdown-item:hover {
        width: 100%;
    }
</style>