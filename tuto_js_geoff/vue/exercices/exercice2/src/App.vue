<template>
  <div id="app">
    <ProductList @addProduct="addToCart" />
    <Cart :products="cart" />
  </div>
</template>

<script>

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default {
  name: 'App',
  data: () => {
    return {
      cart: [
        {
          "id": 1,
          "name": "Bananes",
          "price": 1.2,
          "qty": 1
        },
      ]
    };
  },
  methods: {

    addToCart(params) {
      /*
      //EXEMPLE "..."
      let a = [1, 2];
      let b = [3, 4];

      console.log([...a, ...b]); // [1, 2, 3, 4];
      console.log([a, ...b]); // [[1, 2], 3, 4];
      */
      let productFound = this.cart.find(elem => {
        return elem.id == params.product.id;
      });

      if (productFound) {
        this.cart[this.cart.indexOf(productFound)].qty += Number.parseInt(params.qty);
      } else {
        this.cart.push({...params.product, qty: Number.parseInt(params.qty)});
      }
    }
  },
  components: {
    ProductList,
    Cart
  }
}
</script>


