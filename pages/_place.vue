<template>
  <section class="section">
    <h1>{{ this.place }}</h1>
    <div class="is-mobile">
      <div id="map-wrap" style="height: 100vh">
    <client-only>
        <l-map :zoom=13 :center="[55.9464418,8.1277591]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
        </l-map>
    </client-only>
    </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'Place',

   async asyncData({ params, app, $http }) {
    const places = await app.$getPlaceData(params.place)
    console.log(places)
    /*const geohash = await app.$getGeoHash(location, 6)
    const stops = await $http.$get('https://kkh91b05a8.execute-api.eu-west-2.amazonaws.com/staging/stops/'+geohash)
    return { stops }*/

    const place = params.place
    return {place}
  },

  components: {
    Card
  }
}
</script>
