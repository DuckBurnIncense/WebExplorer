import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        supportType: {
            ppt: 'doc',
            pptx: 'doc',
            doc: 'doc',
            docx: 'doc',
            xls: 'doc',
            xlsx: 'doc',
            exe: 'exe',
            mp4: 'video',
            zip: 'zip',
            rar: 'zip',
            // html: 'html',
            txt: 'txt',
            css: 'txt',
            js: 'txt',
            php: 'txt',
            mp3: 'music',
            wav: 'music',
            m4a: 'music',
            jpg: 'img',
            png: 'img',
            jpeg: 'img',
            webp: 'img',
            ico: 'img',
            dbi: '50058'
        },
        path: ''
    },
    getters: {
    },
    mutations: {
        CHANGE_PATH(state, v) {
            state.path = v;
        }
    },
    actions: {
        changePath(context, v) {
            document.title = 'WebExplorer://' + v
            context.commit('CHANGE_PATH', v);
        }
    },
    modules: {
    }
});
