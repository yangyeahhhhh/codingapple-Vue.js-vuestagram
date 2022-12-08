<template>
  <div style="padding : 10px">
  <h4>팔로워{{one}}{{two}}</h4>
  <input placeholder="🔎" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref, toRefs} from 'vue'
import axios from 'axios'

export default{
    name : 'MyPage',
    props:{
        one: Number,
        two: Number,
    },
    setup(props){
        let follower = ref([]);

        let { one, two } = toRefs(props)
        console.log(one.value)
        console.log(two.value)

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data
            })
        })
    
        return {follower}
    },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>