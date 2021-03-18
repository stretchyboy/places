import Nominatim from 'nominatim-geocoder'

export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    //https://www.openstreetmap.org/#map=17/53.37788/-1.46313
    const getPlaceData = async function(place){
        const geocoder = new Nominatim()
        return geocoder.search( { q: place})
    }

  inject('getPlaceData', getPlaceData);
}