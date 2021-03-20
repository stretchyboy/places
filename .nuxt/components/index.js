export { default as Card } from '../../components/Card.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Wikipedia } from '../../components/Wikipedia.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyWikipedia = import('../../components/Wikipedia.vue' /* webpackChunkName: "components/wikipedia" */).then(c => c.default || c)
