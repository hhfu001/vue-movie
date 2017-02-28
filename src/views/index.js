import Model from '../model';
import headerBar from '../components/headerBar.vue';
import loading from '../components/loading.vue';

export default {
    data() {
        return {
            title: '电影',
            modules: [],
            words: [],
            loadingRouteData: true
        }
    },

    mounted() {
        document.title = this.title;

        const actions = ['in_theaters', 'coming_soon', 'top250']

        actions.map((item, index) => {

            Model.getMovie(item, function (res) {

                this.modules.push({
                    name: item,
                    title: res.data.title.split('-')[0],
                    total: res.data.total,
                    list: res.data.subjects
                });

                res.data.subjects.forEach((item) => {
                    this.words.push({ title: item.title, id: item.id });
                });

                sessionStorage.hotwords = JSON.stringify(this.words);

                this.loadingRouteData = false;

            }.bind(this))
        })
    },

    components: {
        headerBar,
        loading
    }


}