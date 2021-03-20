<template>
 <div class="main-content columns">
        
  <section class="section column is-9">
    <div class="is-mobile">
      <div id="map-wrap" style="height: 100vh">
        <client-only>
            <l-map :bounds="bounds" >
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-geo-json :geojson="placeGeo"></l-geo-json>
            </l-map>
        </client-only>
      </div>
    </div>
  </section>
  <aside class="column is-3">
      <!--<h1>{{ place }}</h1>-->
      <wikipedia :name="place" />
  </aside>
 </div>
</template>

<script>
import Card from '~/components/Card'
import Wikipedia from '~/components/Wikipedia.vue'

export default {
  name: 'Place',

   async asyncData({ params, app, $http }) {
    const place = params.place
    
    const places = await app.$getPlaceData(params.place)
    var placeData = false
    var  placeGeo = false
    var center = [0,0]
    var bounds = [[0,0],[10,10]]
    if(place && places.length){
        placeData = places[0]
        //console.log(placeData)
        center = [placeData.lat, placeData.lon]
        bounds = [
            [placeData.boundingbox[0],placeData.boundingbox[2]],
            [placeData.boundingbox[1],placeData.boundingbox[3]]
        ]
        placeGeo = await app.$getOsmGeoJson(placeData.osm_id)
        //console.log("placeGeo", placeGeo)
    }
    
    return {place, placeData, placeGeo, center,bounds}
  },

  components: {
    Card,
    Wikipedia
  }
}
</script>
