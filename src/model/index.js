import EventEmitter from 'events';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

let _modelInstance;

class Model extends EventEmitter { 
    constructor() { 
        super();
    }

    static getInstance() { 
        return _modelInstance ? _modelInstance : new Model();
    }

    getMovie(item, cb) { 
        
        Vue.http.jsonp('http://api.douban.com/v2/movie/' + item, { count: 6 }).then((response) => { 
            
            
            this.emit('getMovie'+ item +':success', response);

            cb && cb(response);
        })
    }

    getSubject(id, cb) { 
        
        Vue.http.jsonp('http://api.douban.com/v2/movie/subject/' + id,).then((response) => { 
            
            
            this.emit('getSubject:success', response);

            cb && cb(response);
        })

    }

    getCelibrity(id, cb) { 
        
        Vue.http.jsonp('http://api.douban.com/v2/movie/celebrity/' + id,).then((response) => { 
            
            this.emit('getCelibrity:success', response);

            cb && cb(response);
        })

    }

    getSearch(val, cb) { 
        
        Vue.http.jsonp('http://api.douban.com/v2/movie/search?q=' + val,).then((response) => { 
            
            this.emit('getSearch:success', response);

            cb && cb(response);
        })

    }
}

export default Model.getInstance();