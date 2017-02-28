import Model from '../model';
import headerBar from '../components/headerBar.vue';
import loading from '../components/loading.vue';
import star from '../components/star.vue';

export default {
    data() {
        return {
            title: '详情',
            image: '',
            genres: [],
            casts: [],
            score: 0,
            countries: [],
            summary: '',
            directors: [],
            loadingRouteData: true
        }
    },

    mounted() {
        const id = this.$route.params.id 

        Model.getSubject(id, (res) => {

            document.title = this.title = res.data.title
            this.image = res.data.images.large
            this.genres = res.data.genres
            this.casts = res.data.casts
            this.score = res.data.rating.average
            this.countries = res.data.countries
            this.summary = res.data.summary
            this.directors = res.data.directors
            this.loadingRouteData = false;
        })
    },

    components: {
        headerBar,
        loading,
        star
    }


}