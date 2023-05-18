<template>

    <main v-if="product" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>Quản lý sản phẩm / Sửa sản phẩm</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Sửa sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Sửa sản phẩm</h3>
                <div class="tile-body">
                    <ProductForm
                        :product="product"
                        @submit:product="updateProduct"
                        @delete:product="deleteProduct"
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

export default {
    components: {
        ProductForm,
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

        async updateProduct(data) {
            try {
                await ShopService.update(this.product.id, data);
                this.message = "Cập nhật thành công thông tin Sản phẩm.";
            } catch (error) {
                console.log(error);
            }
        },

        // async deleteProduct() {
        //     if (confirm("Bạn có chắc chắn muốn xóa?")) {
        //         try {
        //             await ShopService.delete(this.product.id);
        //             this.$router.push({ name: "product.management" });
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