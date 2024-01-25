<template>
    <div class="product-detail">
        <h2>{{ getCurrentProduct.name }}</h2>
        <img :src="getCurrentProduct.image" alt=""/>
        <br>
        <span class="product-item-price">{{ getCurrentProduct.price }}{{ getCurrentProduct.currency }}</span>
        <br>
        <div class="product-item-params">
            Params: <br>
            <span class="product-item-param">Weight: {{ getCurrentProduct.weight }}</span>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'ProductDetail',
    computed: {
        ...mapGetters([
            'getCurrentProduct',
            'getProducts'
        ])
    },
    methods: {
      ...mapActions([
          'setCurrentProduct'
      ])
    },
    mounted() {
        if(this.$route.params.id) {
            const currentProduct = this.getProducts.find(product => product.id === Number(this.$route.params.id))
            this.setCurrentProduct(currentProduct)
        }
    },
    beforeDestroy() {
        this.setCurrentProduct({})
    }
}
</script>
