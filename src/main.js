import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

let app

var firebaseConfig = {
    apiKey: "AIzaSyDzjDDKVDqTT_0Ql613NN-O5YQGjuD2h-g",
    authDomain: "egci427lab.firebaseapp.com",
    databaseURL: "https://egci427lab.firebaseio.com",
    projectId: "egci427lab",
    storageBucket: "egci427lab.appspot.com",
    messagingSenderId: "734903128173",
    appId: "1:734903128173:web:9791a161ed1118048d6f64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user)=>{
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

