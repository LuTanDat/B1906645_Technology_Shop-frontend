<template>
      <div class="app">
        <div class="appcontainer">
            <a v-if="!isLogin" href="/" class="back">
                <i class="fas fa-chevron-left"></i>
                Quay lại
            </a>
            <div v-if="!isLogin" class="form-heading">
                <h2>Đăng ký</h2>
            </div>
            <div v-else class="form-heading">
                <h2>Đăng nhập</h2>
            </div>
            <div id="sub-container">
                <div class="illustration-container" style="width: 600px; height: 500px; margin-top: -50px;">
                    <img src="../assets/img/LOGO2.png" alt="" >
                    <div class="illustration-text">
                       Mua sắm thả ra không lo cháy túi <div class="icon1">&#128081</div>
                    </div>
                </div>

                <SignupForm
                    v-if="!isLogin"
                    :customer="customer"
                    v-model="isLogin"
                    @submit:customer="createCustomer"
                />

                <LoginForm
                    v-if="isLogin"
                    :customer="customer"
                    v-model="isLogin"
                    @submit:customer="checkRule"
                />

            </div>
        </div>
    </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import ShopService from "@/services/shop.service";

export default {
    components: {
        SignupForm,
        LoginForm
    },
    emits: ["submit", "update:modelValue"],
    props: {
        modelValue: { type: String, default: ""}
    },
    data() {
        return {
            isLogin: true,// show form login
            customer: {
                code: "",
                name: "",
                pw: "",
                email: "",
                address: "",
                dateOfBirth: "",
                sex: "",
                phone: "",
                position: "",
                images: [],
            },

            employees: [],// lay ds nhan vien
            customers: [], // lay ds khach hang
            accounts: [], // ghep 2 mang tren lai
            rule: "", // xac dinh quyen cua tai khoan vua dang nhap

            message: "",
        }
    },
    methods: {
        updateModelValue(e) {
            // console.log("hihi")
            this.$emit("update:modelValue", this.rule);// gan gia tri rule cho modelValue
            // console.log("rule: ", this.modelValue);
        },
        submit() {
            this.$emit("submit");
        },

        async createCustomer(data) {
            try {
                // console.log(data);
                await ShopService.createCustomer(data);
                this.message = "Tạo tài khoản thành công";
                this.isLogin = true;
            } catch (error) {
                this.message = "Lỗi không thể tạo tài khoản";
                console.log(error);
            }
        },

        async retrieveEmployees() {
            try {
                this.employees = await ShopService.getAllEmployees();
                // console.log(this.employees);
            } catch (error) {
                console.log(error);
            }
        },
        async retrieveCustomers() {
            try {
                this.customers = await ShopService.getAllCustomers();
                // console.log(this.customers);
            } catch (error) {
                console.log(error);
            }
        },
        checkRule(data) {
            // console.log(data);
            this.accounts = this.customers.concat(this.employees)
            // console.log(this.accounts);
            for (var i = 0; i < this.accounts.length; i++) {
                if(data.name.localeCompare(this.accounts[i].name) === 0){
                    if(data.pw.localeCompare(this.accounts[i].pw) === 0){
                        this.rule = this.accounts[i].position;

                        var user = {
                            userName : this.accounts[i].name,
                            userPhone: this.accounts[i].phone,
                            userEmail : this.accounts[i].email,
                            userAddress : this.accounts[i].address,
                        }
                        var json = JSON.stringify(user);
                        localStorage.setItem('user', json);

                        localStorage.setItem('rule' ,this.rule);//save rule for localstorage

                        alert("Đăng nhập thành công!")
                        // console.log(this.rule);
                        break;
                    }
                }
            }

            this.updateModelValue();

        },

        generateCode() {
            var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            this.customer.code = retVal;
            // console.log("pw là: ", this.customer.pw);
            return retVal;
        }
    },
    mounted() {
        this.generateCode();
        this.retrieveEmployees();
        this.retrieveCustomers();
    },
}
</script>

<style>
    @import "@/assets/css/accountform.css";
    @import "@/assets/css/signup.css";
    @import "@/assets/css/login.css";

    .signup-nav:hover {
        cursor: pointer;
    }
</style>