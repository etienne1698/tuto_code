<template>
    <div>
        <h2>liste de produits</h2>
        <ul>
            <li v-for="produit in produits">
                {{produit.id}}
                {{produit.name}}
                {{produit.price}} €

                <!-- v-on:click = @click -->
                <button @click="addToCart(produit)">
                    Ajouter
                </button>
            </li>
        </ul>
        QTY : <input v-model="currentQty"/>
    </div>
</template>

<script>
    export default {
        name: "ListeProduits",
        data: {
            produits: [
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
            currentQty: 1,
        }
    }
</script>

<style scoped>

</style>
