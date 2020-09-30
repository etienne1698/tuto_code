<template>
  <div>
    <h2>products list</h2>
    <ul>
      <li v-for="product in products">
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
      this.$emit('addProduct', {product, qty: this.currentQty})
    }
  },
  data: () => {
    return {
      currentQty: 1,
      products: [
        {
          "id": 1,
          "name": "Bananes",
          "price": 1.2
        },
        {
          "id": 2,
          "name": "Pommes",
          "price": 1.45
        },
        {
          "id": 3,
          "name": "Fraises",
          "price": 2.25
        }
      ],
    };
  }

}
</script>


