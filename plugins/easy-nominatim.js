import Nominatim from 'nominatim-geocoder'
import osmGeoJson from 'osm-geojson'


export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    //https://www.openstreetmap.org/#map=17/53.37788/-1.46313
    const getPlaceData = async function(place){
        const geocoder = new Nominatim()
        return geocoder.search( { q: place})
    }

    const getOsmGeoJson = async function(osm_id){
        //console.log("getOsmGeoJson", osm_id)
        return osmGeoJson.get(osm_id)
    }

  inject('getPlaceData', getPlaceData);
  inject('getOsmGeoJson', getOsmGeoJson);
}