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

        const actions = ['in_theaters', 'coming_soon', 'top250'];

        // this.getOneByOne(actions);

        // this.getAllFillAll(actions);

        this.getAllFillOneByOne(actions);

    },
    methods: {

        getOneByOne(actions) {
            //依次获取、依次填充
            actions.reduce((curr, next) => {

                return curr.then(() => {

                    return Model.getMovie(next).then((res) => {

                        this.modules.push({
                            name: next,
                            title: res.data.title.split('-')[0],
                            total: res.data.total,
                            list: res.data.subjects
                        });

                        res.data.subjects.forEach((item) => {
                            this.words.push({ title: item.title, id: item.id });
                        });

                        sessionStorage.hotwords = JSON.stringify(this.words);

                        this.loadingRouteData = false;
                    })
                })

            }, Promise.resolve());
        },

        getAllFillOneByOne(actions) {
            //同时触发、依次填充
            actions.map(url => {
                return Model.getMovie(url)
            }).reduce((curr, next) => {

                return curr.then(() => {
                    return next;
                }).then((res) => {
                    
                    this.modules.push({
                        name: '',
                        title: res.data.title.split('-')[0],
                        total: res.data.total,
                        list: res.data.subjects
                    });

                    res.data.subjects.forEach((item) => {
                        this.words.push({ title: item.title, id: item.id });
                    });
                    
                })

                }, Promise.resolve()).then(() => { 
                    sessionStorage.hotwords = JSON.stringify(this.words);

                    this.loadingRouteData = false;
                })

        },

        getAllFillAll(actions) {
            // 同时获取，无序填充
            Promise.all(actions.map((item) => {

                return Model.getMovie(item);

            })).then((res) => {

                res.forEach(item => {

                    this.modules.push({
                        name: item.name, //这个值取不到
                        title: item.data.title.split('-')[0],
                        total: item.data.total,
                        list: item.data.subjects
                    });

                    item.data.subjects.forEach((o) => {
                        this.words.push({ title: o.title, id: o.id });
                    });
                });

                sessionStorage.hotwords = JSON.stringify(this.words);

                this.loadingRouteData = false;

            });
        }

    },

    components: {
        headerBar,
        loading
    }


}