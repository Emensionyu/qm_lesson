<template>
  <div id="app">
   
        <p>导航 ：
        <router-link :to="{name:'mensionyu',params:{dream:'sina'}}">mensionyu</router-link>
        
        <router-link to="/">首页</router-link>
        <router-link :to="{name:'hi1',params:{dream:'sina'}}">Hi页面</router-link>
        <router-link to="/params/1997hahahah/mensionyu birth">params</router-link>
        <router-link to='/errorrrr'>找不到</router-link>
        <router-link to='/count'>count</router-link>
        </p>
    <transition name="fade">
      <router-view >
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
