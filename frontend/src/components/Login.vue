<template>
  <div>
    <form class="md-layout teste" @submit.prevent="login">
                <md-card-header>
                </md-card-header>

            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-content>
                <div class="md-title">
                    Sistema de simples de login em vuejs
                </div>
                  <div class="md-layout md-gutter">
                     <div class="md-layout-item md-small-size-100">
                        <label class="label" for="email">Email</label><br>
                        <md-input type="email" name="email" v-model="email" class="aaa" required/><br>
                     </div>
                 
                     <div class="md-layout-item md-small-size-100">
                        <label class="label" for="password">Senha</label><br>
                        <md-input type="password" name="password" class="aaa" v-model="password" required/>
                     </div>
                     <div class="md-layout-item md-small-size-100 teste1">
                        <md-button type="submit" class="md-raised md-primary" >Entrar</md-button>
                     </div>

                    </div>
                    
                </md-card-content>
            </md-card>
    </form>
  </div>
  
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },

    methods: {
        login() {
            this.$store.dispatch('Login/login',{
                email:this.email,
                password:this.password
            })
            .then(() => {
                this.$router.push({name:'sobre'})
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
    .aaa{
        height:30px;
        border-radius: 4px;
        width: 500px;
    }

    .teste{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .teste1{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 50px;
        margin-top: 20px;
    }

    .label{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 70px;
        margin-top: 10px;
    }
</style>