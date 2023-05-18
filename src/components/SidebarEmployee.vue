<template>
    <!-- Sidebar menu-->
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <aside class="app-sidebar">
            <div class="app-sidebar__user">
                <div>
                    <h4 class="app-sidebar__user-designation">TECHNOLOGY SHOP</h4>
                </div>
            </div>
            <hr>
            <ul class="app-menu">
                <li>
                    <!-- <router-link :to="{name: 'main.shop'}" style="text-decoration: none"> -->
                        <a href="/" class="app-menu__item haha" style="text-decoration: none">
                            <i class="app-menu__icon fa-solid fa-screwdriver-wrench"></i>
                            <span class="app-menu__label">NHÂN VIÊN</span>
                        </a>
                    <!-- </router-link> -->
                </li>
                    <hr>
                <li>
                        <a  href="/" class="app-menu__item" style="text-decoration: none">
                            <i class="app-menu__icon fa-solid fa-money-bill"></i>
                            <span class="app-menu__label">Xác nhận đơn hàng, <br/>lập hóa đơn</span>
                        </a>
                </li>
                <!-- <li><a class="app-menu__item" href="Doi-tra-hang.html"><i class="app-menu__icon fa-solid fa-comments-dollar"></i><span
                    class="app-menu__label">Đổi trả hàng</span></a></li> -->
                <li>
                    <a href="/" style="text-decoration: none">
                        <div class="app-menu__item" @click="logOut">
                            <i class="app-menu__icon fa-solid fa-right-from-bracket"></i>
                            <span class="app-menu__label">Đăng xuất</span>
                        </div>
                    </a>
                </li>
            </ul>
        </aside>
</template>

<style scoped>

</style>

<script>
export default {
    methods: {
        logOut() {
            localStorage.removeItem('rule');
            localStorage.removeItem('user');
            location.reload() 
        }
    }
}
</script>
