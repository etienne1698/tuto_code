<template>
  <div>
    <h2>products list</h2>
    <ul>
      <li v-for="product in $store.state.products">
        {{product.id}}
        {{product.name}}
        {{product.price}} €

        <!-- v-on:click = @click -->
        <button @click="addToCart(product)">
          Add
        </button>
      </li>
    </ul>
    QTY : <input type="number" min="1" v-model="currentQty"/>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  methods: {
    addToCart(product) {
      this.$store.commit('addProductToCart', {product, qty: this.currentQty});
    }
  },
  data: () => {
    return {
      currentQty: 1,
    };
  }

}
</script>


