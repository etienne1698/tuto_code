<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  name: 'App',
  data: {
    panier: []
  },
  methods: {
    addToCart(produit){
      var productFound = this.panier.find(elem => {
        return elem.id == produit.id;
      });
      if (productFound) {
        this.panier[this.panier.indexOf(productFound)].qty += Number.parseInt(this.currentQty);
        this.$set(this.panier, this.panier.indexOf(productFound), this.panier[this.panier.indexOf(productFound)]);

      } else {
        produit.qty = Number.parseInt(this.currentQty);
        this.panier.push(produit);
        this.$set(this.panier, this.panier.indexOf(productFound), this.panier[this.panier.indexOf(productFound)]);

      }
      Vue.nextTick();//refresh
    }
  }
}
</script>

