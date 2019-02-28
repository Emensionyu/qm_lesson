<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.a.count}}--{{count}}</h3>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    <p>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
    </p>
    </div>
   
</template>
<script>
    import store from '@/vuex/store'
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{
            // ...mapState(['count']),
            // ...mapGetters(["count"])
            count(){
                return this.$store.state.a.count

            }
        },
        store,
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
           
        }
    }
</script>