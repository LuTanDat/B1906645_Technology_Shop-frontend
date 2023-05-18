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
                    <!-- <router-link :to="{name: 'main.shop'}" style="text-decoration: none;"> -->
                        <a  href="/" class="app-menu__item haha" style="text-decoration: none">
                            <i class="app-menu__icon fa-solid fa-screwdriver-wrench"></i>
                            <span class="app-menu__label">ADMIN</span>
                        </a>
                    <!-- </router-link> -->
                </li>
                <li>
                    <router-link :to="{name: 'employee.manager'}" style="text-decoration: none;">
                        <div class="app-menu__item 1">
                            <i class='app-menu__icon fa-solid fa-credit-card'></i>
                            <span class="app-menu__label">Quản lý nhân viên</span>
                        </div>
                    </router-link>    
                </li>
                <li>
                    <router-link :to="{name: 'customer.management'}" style="text-decoration: none;">
                        <div class="app-menu__item 2">
                            <i class='app-menu__icon fa-brands fa-intercom'></i>
                            <span class="app-menu__label">Quản lý khách hàng</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'product.management'}" style="text-decoration: none;">
                        <div class="app-menu__item 3">
                            <i class="app-menu__icon fa-brands fa-product-hunt"></i>
                            <span class="app-menu__label">Quản lý sản phẩm</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'main.shop'}" style="text-decoration: none;">
                        <div class="app-menu__item 4">
                            <i class="app-menu__icon fa-solid fa-chart-simple"></i>
                            <span class="app-menu__label">Báo cáo doanh thu</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'post.moderation'}" style="text-decoration: none;">
                        <div class="app-menu__item 5">
                            <i class="app-menu__icon fa-solid fa-check-to-slot"></i>
                            <span class="app-menu__label">Duyệt bài đăng</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <a href="/" style="text-decoration: none;">
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
