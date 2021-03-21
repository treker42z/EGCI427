<template>
    <div class="container">
        <h2>SignUp</h2>
        <br><br>
        <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
                <input type="email" v-model="formData.email" class="form-control" placeholder="email">
                <br>
                <input type="password" v-model="formData.password" class="form-control" placeholder="password">
                <br>
                <!-- <router-link to="/users"> -->
                  <button class="btn btn-success" @click="signUp">SignUp</button>
                <!-- </router-link> -->
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3"/>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'SignUp',
    data () {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signUp() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    this.formData.email,
                    this.formData.password
                )
                .then(user => {
                    this.$router.replace('/users')
                })
                .catch( error => {
                    console.log(error.message)
                })
        }
    }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>