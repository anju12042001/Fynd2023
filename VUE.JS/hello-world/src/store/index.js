import {createStore} from "vuex";

export default createStore({
    state: {
        data1: "hello, this is data1",
        data2: "hello, this is data2"
    },
    getters: {
        firstWordData1:state=>{
            return state.data1.split(' ')[0]
        }
    },
    mutations: {
        changeData1(state, payload){
            state.data1= payload
        },
        changeData1T2(state, payload){
            state.data1=payload.data1
        },
        changeData2(state, payload){
            state.data2= payload.data2
        }
    },
    actions: {
        changeData2Action(context,payload){
            setTimeout(() => {
                context.commit("changeData2", payload)
            
            }, 2000)
        }
    }
});