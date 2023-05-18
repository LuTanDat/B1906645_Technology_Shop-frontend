<template>
    <div id="isAdmin">

        <main class="app-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="app-title">
                        <ul class="app-breadcrumb breadcrumb">
                            <li class="breadcrumb-item"><a href="#" style="text-decoration: none;color: black;"><b>BÁO CÁO DOANH THU</b></a></li>
                        </ul>
                        <div id="clock"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="widget-small info coloured-icon"><i class='icon bx bxs-purchase-tag-alt fa-3x' ></i>
                        <div class="info">
                            <h4>Tổng sản phẩm còn lại</h4>
                            <p><b>{{productsLength - ordersLength}} Sản phẩm</b></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4" @click="setOrders">
                    <div class="widget-small warning coloured-icon"><i class='icon fa-3x bx bxs-shopping-bag-alt'></i>
                        <div class="info">
                            <h4>Tổng đơn hàng</h4>
                            <p><b>{{ordersLength}} Đơn hàng</b></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="widget-small primary coloured-icon"><i class='icon fa-3x bx bxs-chart' ></i>
                        <div class="info">
                            <h4>Tổng doanh thu</h4>
                            <p><b>{{TotalRevenue}} đ</b></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4" @click="setOutOfStock">
                    <div class="widget-small warning coloured-icon"><i class='icon fa-3x bx bxs-tag-x' ></i>
                        <div class="info">
                            <h4>Hết hàng</h4>
                            <p><b>{{outOfStock}} Hết hàng</b></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="widget-small danger coloured-icon"><i class='icon fa-3x bx bxs-receipt' ></i>
                        <div class="info">
                            <h4>Đơn hàng hủy</h4>
                            <p><b>Processing... đơn hàng</b></p>
                        </div>
                    </div>
                </div>
            </div>


            <!-- CAC DON HANG -->
            <div v-if="isOrders">
                <div class="app-title">
                    <ul class="app-breadcrumb breadcrumb side">
                        <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>CÁC ĐƠN HÀNG</b></a></li>
                    </ul>
                    <div id="clock"></div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="tile">
                            <div class="tile-body">
                            <table v-if="ordersLength > 0" class="table table-hover table-bordered js-copytextarea" cellpadding="0" cellspacing="0" border="0"
                                id="sampleTable">
                                <thead>
                                    <tr>
                                    <th width="10"><input type="checkbox" id="all"></th>
                                    <th width="120">ID Hóa Đơn</th>
                                    <th width="160">Tên khách hàng</th>
                                    <th width="330">Địa chỉ</th>
                                    <th width="125">SĐT</th>
                                    <th>SẢN PHẨM MUA</th>
                                    <th width="115">TỔNG TIỀN</th>
                                    </tr>
                                </thead>
                                <tbody>

                                <tr
                                    v-for="order in orders"
                                    :key="order.code"
                                >
                                    <td width="10"><input type="checkbox" name="check1" value="1"></td>
                                    <td>{{order.orderCode}}</td>
                                    <td>{{order.userName}}</td>
                                    <td>{{order.userAddress}}</td>
                                    <td>{{order.userPhone}}</td>
                                    <td>{{order.name}}</td>
                                    <td>{{order.totalPriceProduct}} đ</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <!-- CAC SAN PHAM HET HANG -->
            <div v-if="isOutOfStock">
                <div class="app-title">
                    <ul class="app-breadcrumb breadcrumb side">
                        <li class="breadcrumb-item active"><a href="#" style="text-decoration: none;color: black;"><b>HẾT HÀNG</b></a></li>
                    </ul>
                    <div id="clock"></div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="tile">
                            <div class="tile-body">
                                <table class="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th width="10"><input type="checkbox" id="all"></th>
                                            <th width="115">ID sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th width="155">Số lượng</th>
                                            <th width="170">Tình trạng</th>
                                            <th width="170">Giá bán</th>
                                            <th width="170">Danh mục</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr 
                                            v-for="product in filteredProducts"
                                            :key="product.code"
                                        >
                                            <td width="10"><input type="checkbox" name="check1" value="1"></td>
                                            <td>{{product.code}}</td>
                                            <td>{{product.name}}</td>
                                            
                                            <td>{{product.quantity}}</td>
                                            <td>
                                                <span class="badge bg-danger">Hết hàng</span>
                                            </td>
                                            <td>{{product.price}} đ</td>
                                            <td>{{product.category}}</td>
                                        </tr>             
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
export default {
    props: {
        products: { type: Array, default: [] },
        productsLength: {type: Number, required: true},
        orders: { type: Array, default: [] },
        ordersLength: {type: Number, required: true},
        outOfStock: {type: Number, required: true},
        TotalRevenue: {type: Number, required: true}
    },
    data() {
        return {
            isOrders: false,
            isOutOfStock: false,
        }
    },
    computed: {
              // Chuyển các đối tượng thành chuỗi để tiện cho tìm kiếm => return mảng các chuỗi
        productStrings() {
            return this.products.map((product) => {
                const { quantity } = product;
                return [quantity].join("");
            });
        },
          // Trả về mảng giá trị có chứa thông tin cần tìm kiếm lưu vô tên hàm
        filteredProducts() {
            return this.products.filter((product, index) =>
                this.productStrings[index] == 0 // "==" string 'this.productStrings[index]' becomes a number this.productStrings[index]
            );
        },
        filteredProductsCount() {
          // console.log(this.filteredProducts)
            return this.filteredProducts.length;
        },
    },
    methods: {
        setOrders() {
            this.isOutOfStock = false;
            this.isOrders =!this.isOrders;
        },
        setOutOfStock() {
            this.isOrders = false;
            this.isOutOfStock =!this.isOutOfStock;
        }
    }
}
</script>

<style>

</style>