import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './containers/App.vue'
import Index from './containers/Index.vue'
import Authors from './containers/Authors.vue'
import Books from './containers/Books.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/authors',
            component: Authors
        },
        {
            path: '/books',
            component: Books
        }
    ],
    mode: 'history'
});

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
});
