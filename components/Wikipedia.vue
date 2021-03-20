<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          {{ description.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        description: {}
      }
    },
    watch: {
    '$route.query': '$fetch'
      },

    async fetch() {
      console.log("Wikipedia fetch hook")
      let url = `https://api.wikimedia.org/core/v1/wikipedia/en/page/${this.name}/description`;
      console.log("url", url)
      //this.description = await $http.$get(url)
      this.description = await fetch( url ).then(res =>
            res.json()
        )
    }
  }
</script>
