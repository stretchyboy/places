import Vue from 'vue'

const components = {
  Card: () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Wikipedia: () => import('../../components/Wikipedia.vue' /* webpackChunkName: "components/wikipedia" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
