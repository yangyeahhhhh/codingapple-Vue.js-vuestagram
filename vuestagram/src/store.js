import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      likes : 30,
      좋아요눌렀니 : false,
      more : {},
    }
  },
  mutations :{
    setMore(state, data){
      state.more = data
    },
    like(state){
      if(state.좋아요눌렀니 == false){
      state.likes++
      state.좋아요눌렀니 = true
    } else {
      state.likes--
      state.좋아요눌렀니 = false
    }
  }
 },
 actions : {
  getData(context){
    axios.get(`https://codingapple1.github.io/vue/more0.json`)
    .then((a)=>{
      console.log(a.data);
      context.commit('setMore', a.data)
    })
  }
 }
})

export default store