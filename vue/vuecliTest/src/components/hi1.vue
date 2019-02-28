<template>
 <div class="men">
     <p>{{$route.params.dream}}</p>
 </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    beforeRouteEnter:(to,from,next)=>{
        console.log('准备路由进入');
        next()
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('准备离开这个路由');
        next()
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
