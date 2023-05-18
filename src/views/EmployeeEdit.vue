<template>

    <main v-if="employee" class="page app-content">
        <div class="app-title">
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><b>Quản lý Nhân viên / Sửa Thông tin Nhân viên</b></li>
                <!-- <li class="breadcrumb-item"><a href="#">Sửa sản phẩm</a></li> -->
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12 tile">
                <h3 class="tile-title">Sửa Thông tin Nhân viên</h3>
                <div class="tile-body">
                    <EmployeeForm
                        :employee="employee"
                        @submit:employee="updateEmployee"
                        @delete:employee="deleteEmployee"
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

export default {
    components: {
        EmployeeForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            employee: null,
            message: "",
        };
    },
    methods: {
        async getEmployee(id) {
            try {
                this.employee = await ShopService.getEmployee(id);
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

        async updateEmployee(data) {
            try {
                await ShopService.updateEmployee(this.employee.id, data);
                this.message = "Cập nhật thành công thông tin Nhân viên.";
            } catch (error) {
                console.log(error);
            }
        },

        // async deleteEmployee() {
        //     if (confirm("Bạn có chắc chắn muốn xóa?")) {
        //         try {
        //             await ShopService.deleteEmployee(this.employee.id);
        //             this.$router.push({ name: "employee.manager" });
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     }
        // },
    },
    created() {
        this.getEmployee(this.id);
        this.message = "";
    },
};
</script>