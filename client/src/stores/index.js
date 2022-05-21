import { createStore } from 'vuex'

export default createStore({
    state: {
        token: "",
        isLoggedIn: false,
        isAdmin: false,
        user: []
    },
    getters: {
        checkRole: async () => {
            //Check the role of the user
        }
    },
    mutations: {
        LOGIN: (state, payload) => {
            state.user = payload.data;
            if (payload.data.role == "Admin") {
                state.isAdmin = true;
            }
            state.isLoggedIn = true
        },
    },
    actions: {
        login: async (context, payload) => {

        }
    },
})