<script>
export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    computed: {
        selectedIndex() {
            return this.activeIndex;
        },
    },
    methods: {
        select(index) {
            this.$emit("update:activeIndex", index);
        },
    },
};
</script>

<template>
    <!-- <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(contact, index) in contacts"
            :key="contact.id"
            :class="{ active: index === selectedIndex }"
            @click="select(index)"
        >
            {{ contact.name }}
        </li>
    </ul> -->
    <div class="home-product">
        <div class="grid__row" >    
            <div class='col l-2-4 m-4 c-6' 
                style="margin: 0!important;"

                v-for="product in products"
                :key="product.code"

            >
                <router-link 
                    :to="{name: 'product.detail', 
                        params: { id: product.id }}"   
                    class="home-product-item"
                    style="text-decoration: none;"
                >
                    <!--  params: { code: product.code }-->  
                   
                 
                    <!-- <div class="home-product-item"> -->
                        <div class="home-product-item__img c-6">
                            <img :src="`/images/${product.images[0]}`" :alt="product.name" class="img" style="max-width: 239px; height: 199px;"/> 
                        </div>
                        <h4 class="home-product-item__name">{{ product.name }}</h4>
                        <div class="home-product-item__price">
                            <!-- <span class="home-product-item__price-old">{{ product.price }}</span> -->
                            <span class="home-product-item__price-current">{{ product.price }}đ</span>
                            <!-- <div class="home-product-item__action">
                                <span class="home-product-item__like home-product-item__like--liked">
                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                </span>
                                <div class="home-product-item__rating">
                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                    <i class="home-product-item__star--silver fas fa-star"></i>
                                </div>
                                <span class="home-product-item__sold">Đã bán ${e.sold} <br> </span> <br>
                            </div> -->
                            <!-- <div class="home-product-item__origin">
                                <span class="home-product-item__origin-name">${e.address}</span>
                            </div> -->
                            <div class="home-product-item__favourite">
                                <i class="fas fa-check"></i>
                                <span>Yêu thích</span>
                            </div>
                            <!-- <div class="home-product-item__sale-off">
                                <span class="home-product-item__sale-off-percent">46%</span>
                                <span class="home-product-item__sale-off-label">GIẢM</span>
                            </div> -->
                        </div>
                    <!-- </div> -->
                </router-link>
            </div>
                
                                                   
        </div>
    </div>
</template>