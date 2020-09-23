<template>
  <div id="app">
    <div id="nav" v-show="isLogged">
      <router-link to="/sobre" tag="span" v-show="isLogged">Sobre</router-link>
      <router-link to="/" tag="span">Home</router-link>
      <p v-for="(u,k) in user" :key="k">{{u.name}}</p>
      <button @click="logout()" tag="span" v-show="isLogged">Sair</button>
    </div>

    <div id="aside" v-show="isLogged">
      <aside></aside>
    </div>
   <Nav/>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
import Nav from '../src/components/Nav'
export default {
  name: 'App',
  component:{
    Nav
  },
  created() {
    this.$store.dispatch('Login/loginList')
  },
 computed: {
    ...mapGetters( {isLogged:'Login/isLogged'}),
     ...mapState('Login',{user:state => state.user}),
  },

  methods: {
    logout () {
      this.$store.dispatch('Login/logout')
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    height: 100vh;
    width: 100vw;
    
}
 
*{
  margin:0;
  padding: 0;
}
#nav{
  height: 50px;
  width: 100vw;
  background-color:blueviolet;
  color:'#fff';
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#nav span,p{
  cursor: pointer;
  color:cornsilk;
}
</style>
