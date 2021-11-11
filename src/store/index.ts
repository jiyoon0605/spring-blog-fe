import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)


const initialSetting = {
    alertInfo: {
        title: '',
        description: '',
        type: 'error',
        isShow: false
    }
}

export const store = new Vuex.Store({
    state: initialSetting,
    getters: {
        getAlertInfo: state => state.alertInfo
    },
    mutations: {
        setAlertInfo: (state, data) => state.alertInfo = data,
        setAlertIsShow: (state, data) => state.alertInfo.isShow = data,
    }
});

