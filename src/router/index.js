import { createWebHistory, createRouter } from "vue-router";
import MainShop from "@/views/MainShop.vue";

const routes = [
    {
        path: "/",
        name: "main.shop",
        component: MainShop,
    },

    {
        path: "/PersonalInformation/",
        name: "PersonalInformation",
        component: () => import("@/views/PersonalInformation.vue"),
    },

    {
        path: "/PurchaseOrder/",
        name: "PurchaseOrder",
        component: () => import("@/views/PurchaseOrder.vue"),
    },

    {
        path: "/contact/",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
    },

    {
        path: "/introduce/",
        name: "introduce",
        component: () => import("@/views/Introduce.vue"),
    },

    {
        path: "/product/detail/:id",
        name: "product.detail",
        component: () => import("@/views/ProductDetail.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/product/payment/:id",
        name: "product.payment",
        component: () => import("@/views/ProductPayment.vue"),
        props: true
    },
    {
        path: "/product/cart/:id",
        name: "product.cart",
        component: () => import("@/views/ProductCart.vue"),
        props: true
    },

    {
        path: "/product/comment/:id",
        name: "product.comment",
        component: () => import("@/views/Comment.vue"),
        props: true
    },


    {
        path: "/employee/manager/",
        name: "employee.manager",
        component: () => import("@/views/EmployeesManager.vue"),
    },

    {
        path: "/customer/management/",
        name: "customer.management",
        component: () => import("@/views/CustomersManagement.vue"),
    },
    {
        path: "/product/management/",
        name: "product.management",
        component: () => import("@/views/ProductsManagement.vue"),
    },

    {
        path: "/employee/add",
        name: "employee.add",
        component: () => import("@/views/EmployeeAdd.vue"),
    },
    {
        path: "/customer/add",
        name: "customer.add",
        component: () => import("@/views/CustomerAdd.vue"),
    },
    {
        path: "/product/add",
        name: "product.add",
        component: () => import("@/views/ProductAdd.vue"),
    },

    {
        path: "/product/:id",
        name: "product.edit",
        component: () => import("@/views/ProductEdit.vue"),
        props: true
    },
    {
        path: "/employee/:id",
        name: "employee.edit",
        component: () => import("@/views/EmployeeEdit.vue"),
        props: true
    },
    {
        path: "/customer/:id",
        name: "customer.edit",
        component: () => import("@/views/CustomerEdit.vue"),
        props: true
    },



    {
        path: "/post/moderation/",
        name: "post.moderation",
        component: () => import("@/views/PostModeration.vue"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;