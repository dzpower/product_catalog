<template>
    <div
        class="product-item"
        @click.stop="openProduct"
    >
        <img class="product-item-image" :src="product.image" alt=""/>
        <span class="product-item-name">{{ product.name }}</span>
        <span class="product-item-price">{{ product.price }}{{ product.currency }}</span>
        <div class="product-item-params">
            Params:
            <span class="product-item-param">Weight: {{ product.weight }}</span>
        </div>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "ProductItem",
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        ...mapActions([
            'setCurrentProduct'
        ]),
        async openProduct() {
            await this.setCurrentProduct(this.product)
            await this.$router.push(`/product/${this.product.id}`)
        }
    }
}
</script>

<style scoped lang="scss">
    .product-item {
        width: 100%;
        max-width: 240px;
        margin-left: 1.5%;
        margin-right: 1.5%;
        border: 2px solid #2c3e50;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        &-image {
            width: 100%;
            margin-bottom: 16px;
        }

        &-price {
            width: 100%;
            text-align: left;
            font-size: 16px;
            font-weight: bolder;
            margin-bottom: 16px;
        }

        &-name {
            margin-bottom: 16px;
            font-size: 24px;
            font-weight: bold;
            text-align: left;
            width: 100%;
        }

        &-params {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }

        &-param {
            font-weight: bold;
            font-size: 16px;
        }
    }
</style>
