<template>
  <div id="app">
    <ProductList />
    <Cart  />
  </div>
</template>

<script>

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default {
  name: 'App',
  components: {
    ProductList,
    Cart
  }
}
</script>


