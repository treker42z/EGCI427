<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div id='app'>
    <div id='nav'>
        <router-link to="/users">List of Users</router-link> |  
        <router-link to="/home">Home</router-link> |  
        <router-link to="/about">About</router-link>  |  
        <router-link to="/signup">Sign Up</router-link>  |  
        <button class="btn btn-success" @click="logout">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',
  methods : {
    logout() {
        firebase.auth().signOut()
          .then(()=> {
            this.$router.replace('/signin')
          })
          .catch( error => {
              console.log(error.message)
          })
          
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
