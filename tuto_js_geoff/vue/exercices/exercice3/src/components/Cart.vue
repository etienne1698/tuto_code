
<template>
  <div>
    <h2>Cart</h2>
    <p>Total price :</p> {{computeTotalPrice}}
    <ul>
      <li v-for="product, index in $store.state.cartProducts">
        {{product.id}}
        {{product.name}}
        {{product.price}} €
        qty{{ product.qty }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    computeTotalPrice() {
      let total = 0;
      this.$store.state.cartProducts.forEach(function(elem, index){
        total = total + (elem.price * elem.qty);
      });
      return total;
    }
  },
}
</script>


