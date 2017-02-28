import Model from '../model';
import headerBar from '../components/headerBar.vue';
import loading from '../components/loading.vue';
import star from '../components/star.vue';

export default {
    data() {
        return {
            title: '导演',
            image: '',
            gender: '',
            born_place: '',
            works: [],
            loadingRouteData: true
        }
    },

    mounted() {
        const id = this.$route.params.id

        Model.getCelibrity(id, (res) => {

            document.title = this.title = res.data.name
            this.image = res.data.avatars.large
            this.gender = res.data.gender
            this.born_place = res.data.born_place
            this.works = res.data.works
            this.loadingRouteData = false;
        })
    },

    components: {
        headerBar,
        loading,
        star
    }


}