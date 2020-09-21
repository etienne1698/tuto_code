<template>
    <div>
        <h2>Panier</h2>
        <p>Prix total:</p> {{calculTotalPrice}}
        <ul>
            <li v-for="produit, index in panier">
                {{produit.id}}
                {{produit.name}}
                {{produit.price}} €
                qty{{ produit.qty }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Panier",
        methods: { },
        computed: {
            calculTotalPrice(){
                let total = 0;
                this.panier.forEach(function(elem, index){
                    total = total + (elem.price * elem.qty);
                });
                return total;
            }
        }
    }
</script>

<style scoped>

</style>
