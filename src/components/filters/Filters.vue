<template>
    <div>
        <input type="text" v-model="localFilters.name" placeholder="Search by name">
        <input type="number" v-model.number="localFilters.minPrice" placeholder="Min price">
        <input type="number" v-model.number="localFilters.maxPrice" placeholder="Max price">
        <input type="number" v-model.number="localFilters.weight" placeholder="Search by weight">
        <button @click="applyFilters">Apply Filters</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Filters",
    data() {
        return {
            localFilters: {
                name: null,
                minPrice: null,
                maxPrice: null,
                weight: null
            }
        };
    },
    methods: {
        ...mapActions([
            "setFilter"
        ]),
        applyFilters() {
            this.setFilter(this.localFilters)
            this.updateURL()
        },
        updateURL() {
            const params = {}
            for (const param in this.localFilters) {
                if (this.localFilters[param]) {
                    params[param] = this.localFilters[param]
                }
            }
            this.$router.push({ query: params })
        }
    },
    mounted() {
        this.setFilter({})
        if (Object.keys(this.$route.query).length) {
            for (const param in this.$route.query) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.localFilters.hasOwnProperty(param)) {
                    this.localFilters[param] = this.$route.query[param];
                }
            }
            this.setFilter(this.localFilters)
        }
    }
}
</script>
