<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Update User</h4>
        <div class="form-group" >
          <label class="pull-left">First Name: </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.firstName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name: </label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Email: </label>
          <input type="email" class="form-control" placeholder="Email" v-model="User.email">
        </div>
      </div>
      <router-link to="/users">
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="updateToAPI">Submit</button>
        <button class="btn btn-large btn-block btn-success full-width">Back to User Page</button>
      </router-link>
    </form>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateUser',
  props: {
    
  },
  data() {
    return {
        User: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    updateToAPI(){
      console.log(this.$route.params.userId)
      let newUser = {
          firstName: this.User.firstName,
          lastName: this.User.lastName,
          email: this.User.email
      }
      console.log(newUser)
      axios.post('http://localhost:5000/users/'+this.$route.params.userId, newUser)
      .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  },
  mounted() {
    axios.get('http://localhost:5000/users/'+this.$route.params.userId)
    .then((response)=>{
            console.log(response.data)
            this.User = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
  }
}
</script>
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