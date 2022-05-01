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
        path: '',
        historyPath: [],
        allHistoryPath: []
    },
    getters: {
    },
    mutations: {
        CHANGE_PATH(state, v) {
            state.path = v;
            state.historyPath.push(v);
            state.allHistoryPath.push(v);
        },
        BACK_PATH(state) {
            state.historyPath.pop();
        }
    },
    actions: {
        changePath(context, v) {
            if (v.charAt(0) == '/') v = v.substr(1);
            v = v.replaceAll('//', '/');
            document.title = 'WebExplorer://' + v
            context.commit('CHANGE_PATH', v);
        },
        backPath(context) {
            context.commit('BACK_PATH');
        }
    },
    modules: {
    }
});
