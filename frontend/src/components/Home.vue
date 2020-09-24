<template>
  <div class="home">
      <h1>Bem vindoooo sistema de login </h1><br>
      <md-button class="md-raised md-primary"><router-link to='/login' tag="span">login</router-link></md-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .home{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 300px;
   flex-direction: column;
 }
</style>