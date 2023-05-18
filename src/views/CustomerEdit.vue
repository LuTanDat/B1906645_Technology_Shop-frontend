<template>

    <main v-if="customer" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>Quản lý Khách hàng / Sửa Thông tin Khách hàng</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Sửa sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Sửa Thông tin Khách hàng</h3>
                <div class="tile-body">
                    <CustomerForm
                        :customer="customer"
                        @submit:customer="updateCustomer"
                        @delete:customer="deleteCustomer"
                    />
                </div>
                <h3 class="p-3 yellow">{{message}}</h3>
            </div>
        </div>
  </main>
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";
import ShopService from "@/services/shop.service";

export default {
    components: {
        CustomerForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            customer: null,
            message: "",
        };
    },
    methods: {
        async getCustomer(id) {
            try {
                this.customer = await ShopService.getCustomer(id);
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

        async updateCustomer(data) {
            try {
                await ShopService.updateCustomer(this.customer.id, data);
                this.message = "Cập nhật thành công thông tin Khách hàng.";
            } catch (error) {
                console.log(error);
            }
        },

        // async deleteCustomer() {
        //     if (confirm("Bạn có chắc chắn muốn xóa Khách hàng này?")) {
        //         try {
        //             await ShopService.deleteCustomer(this.customer.id);
        //             this.$router.push({ name: "customer.management" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getCustomer(this.id);
        this.message = "";
    },
};
</script>