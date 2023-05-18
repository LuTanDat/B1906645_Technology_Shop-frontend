<template>

    <main v-if="customer" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>QUẢN LÝ KHÁCH HÀNG / TẠO MỚI KHÁCH HÀNG</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Thêm sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Tạo mới Khách hàng</h3>
                <div class="tile-body">
                    <CustomerForm
                        :customer="customer"
                        @submit:customer="createCustomer"
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
import { array } from 'yup/lib/locale';

export default {
    components: {
        CustomerForm,
    },
    data() {
        return {
            customer: {
                code: "",
                name: "",
                pw: "",
                email: "",
                address: "",
                dateOfBirth: "",
                sex: "",
                phone: "",
                position: "khach hang",
                images: [],
            },
            message: "",
        };
    },
    methods: {
        async createCustomer(data) {
            try {
                await ShopService.createCustomer(data);
                this.message = "Tạo tài khoản thành công";
            } catch (error) {
                this.message = "Lỗi không thể tạo tài khoản";
                console.log(error);
            }
        },
        generatePassword() {
            var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            this.customer.pw = retVal;
            // console.log("pw là: ", this.customer.pw);
            return retVal;
        }
    },
    mounted() {
        this.generatePassword();
    },
};
</script>