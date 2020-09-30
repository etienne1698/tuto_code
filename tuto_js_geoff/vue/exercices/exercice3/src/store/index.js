import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartProducts: [],
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
        ]
    },
    getters: {},
    mutations: {
        addProductToCart(state, {product, qty}) {
            let productFound = state.cartProducts.find(elem => {
                return elem.id == product.id;
            });

            if (productFound) {
                state.cartProducts[state.cartProducts.indexOf(productFound)].qty += Number.parseInt(qty);
            } else {
                state.cartProducts.push({...product, qty: Number.parseInt(qty)});
            }
        }
    },
    actions: {},
    modules: {}
})
