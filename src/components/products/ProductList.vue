<template>
    <div class="product-list">
        <ProductItem
            v-for="product in getProducts"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script>
import ProductItem from "@/components/products/ProductItem.vue"
import { mapGetters } from "vuex";

export default {
    name: "ProductList",
    components: {
        ProductItem
    },
    computed: {
        ...mapGetters([
            "getProducts"
        ])
    }
}
</script>

<style scoped lang="scss">
    .product-list {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
</style>
