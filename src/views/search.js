import Model from '../model';
import loading from '../components/loading.vue';

export default {
    data() {
        return {
            title: '搜索',
            keywords: '',
            hotwords: [],
            suggest: [],
            loadingRouteData: false
        }
    },
    watch: {
        keywords(val, old) { 
            
            if (val.trim()) { 
                this.loadingRouteData = true;

                Model.getSearch(val, (res) => { 
                    this.suggest = res.data.subjects;
                    this.loadingRouteData = false;
                });

            } else {
                this.suggest = [];
             }
        }

    },
    methods: {
        cancel() { 
            history.back();
        },
        
        clear() { 
            this.keywords = '';
            this.$refs.keywords.focus();
        }
    },

    mounted() {
        document.title = this.title;
        this.hotwords = JSON.parse(sessionStorage.hotwords);
        this.$refs.keywords.focus();
    },

    components: {
        loading
    }


}