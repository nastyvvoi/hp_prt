import Vuex from 'vuex'; 

const store = () => new Vuex.Store({
    state: {
        isMobile: false,
        isMain: true,
        currentPage: { name: '', route: ''},
        itemList: [],
        firstRoute: '',
        secondRoute: '',
    },
    getters: {
        isMobile: state => { return state.isMobile },
        isMain: state => { return state.isMain },
        currentPage: state => { return state.currentPage },
        itemList: state => { return state.itemList },
        firstRoute: state => state.firstRoute,
        secondRoute: state => { return state.secondRoute },
    },
    mutations: {
        setIsMobile: (state, isMobile) => state.isMobile = isMobile,
        setIsMain: (state, isMain) => state.isMain = isMain, 
        setCurrentPage: (state, currentPage) => state.currentPage = currentPage,
        setItemList: (state, itemList) => state.itemList = itemList,
        setFirstRoute: (state, firstRoute) => state.firstRoute = firstRoute,
        setSecondRoute: (state, secondRoute) => state.secondRoute = secondRoute,
    },
    actions: {
        onIsMain({ commit }) {
            commit('setIsMain', true)
        },
        offIsMain({ commit }) {
            commit('setIsMain', false)
        }
    }
}) 

export default store