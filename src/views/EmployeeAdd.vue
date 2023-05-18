<template>

    <main v-if="employee" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>QUẢN LÝ NHÂN VIÊN / TẠO MỚI NHÂN VIÊN</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Thêm sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Tạo mới nhân viên</h3>
                <div class="tile-body">
                    <EmployeeForm
                        :employee="employee"
                        @submit:employee="createEmployee"
                    />
                </div>
                <h3 class="p-3 yellow">{{message}}</h3>
            </div>
        </div>
  </main>

</template>

<script>
import EmployeeForm from "@/components/EmployeeForm.vue";
import ShopService from "@/services/shop.service";
import { array } from 'yup/lib/locale';

export default {
    components: {
        EmployeeForm,
    },
    data() {
        return {
            employee: {
                code: "",
                name: "",
                pw: "",
                email: "",
                address: "",
                dateOfBirth: "",
                sex: "",
                phone: "",
                position: "nhan vien",
                images: [],
            },
            message: "",
        };
    },
    methods: {
        async createEmployee(data) {
            try {
                await ShopService.createEmployee(data);
                this.message = "Thêm mới Nhân viên thành công.";
            } catch (error) {
                this.message = "Lỗi thêm mới Nhân viên";
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
            this.employee.pw = retVal;
            // console.log("pw là: ", this.employee.pw);
            return retVal;
        }
    },
    mounted() {
        this.generatePassword();
    },
};
</script>