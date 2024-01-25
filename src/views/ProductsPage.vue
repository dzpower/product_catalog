<template>
    <div class="products-page">
        <div class="container">
            <Filters/>
            <ProductList/>
        </div>
    </div>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";
import Filters from "@/components/filters/Filters.vue";

export default {
    name: 'ProductsPage',
    components: {
        Filters,
        ProductList
    }
}
</script>

<style lang="scss" scoped>
.products-page {
    width: 100%;

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }
}
</style>
