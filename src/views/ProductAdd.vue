<template>

    <main v-if="product" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>QUẢN LÝ SẢN PHẨM / TẠO MỚI SẢN PHẨM</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Thêm sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Tạo mới sản phẩm</h3>
                <div class="tile-body">
                    <ProductForm
                        :product="product"
                        @submit:product="createProduct"
                    />
                </div>
                <h3 class="p-3 yellow">{{message}}</h3>
            </div>
        </div>
  </main>

</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import ShopService from "@/services/shop.service";
import { array } from 'yup/lib/locale';

export default {
    components: {
        ProductForm,
    },
    data() {
        return {
            product: {
                code: "",
                name: "",
                quantity: "",
                price: "",
                category: "",
                images: [],
                description: "",
            },
            message: "",
        };
    },
    methods: {
        async createProduct(data) {
            try {
                await ShopService.createProduct(data);
                this.message = "Thêm mới Sản Phẩm thành công.";
            } catch (error) {
                this.message = "Lỗi thêm mới Sản Phẩm";
                console.log(error);
            }
        },
    },
};
</script>