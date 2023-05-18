<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import SidebarAdmin from "@/components/SidebarAdmin.vue";
import SidebarEmployee from "@/components/SidebarEmployee.vue";
import Verification from "@/components/Verification.vue";

export default {
    data() {
        return {
            rule: "",
        }
    },

    components: {
        AppHeader,
        AppFooter,
        SidebarAdmin,
        SidebarEmployee,
        Verification
    },

    computed: {
        checkRuleLogin() {
            // console.log(this.rule)
            if (this.rule.localeCompare('admin') === 0) {
                return 1;
            }
            else if (this.rule.localeCompare('nhan vien') === 0){
                return 2;
            }
            else if (this.rule.localeCompare('khach hang') === 0){
                return 3;
            }
        }
    },
    methods: {
        loadOldRule() {
            // console.log(localStorage.getItem('rule'))
            if(localStorage.getItem('rule')){
                this.rule = localStorage.getItem('rule')// co thi lay, ko thi null
            }    
        },
    },
    mounted() {
        this.loadOldRule();
    },
         
};
</script>
<template>
    <div id="app">
        <Verification 
            v-if="!rule"
            v-model="rule"
        />

        <!-- Khach hang -->
        <div v-if="checkRuleLogin === 3">
            <AppHeader />
            <div class="container mt-3">
                <router-view />
            </div>
            <div class="container mt-3" >
                 <AppFooter />
            </div>
        </div>


        <!-- Nhan vien -->
        <div v-if="checkRuleLogin === 2">
            <SidebarEmployee />
            <div>
                <router-view />
            </div>
        </div>

        <!-- Admin -->
        <div v-if="checkRuleLogin === 1">
            <SidebarAdmin />
            <div>
                <router-view />
            </div>
        </div>
    </div>
</template>
<style>

</style>