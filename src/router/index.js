import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser.vue'
import Users from '../views/Users.vue'
import UpdateUser from '../views/UpdateUser.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'
// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory()

const routes = [
  {
    path: '/',
    redirect: '/signin'
  }, 
  {
    path: '/:catchAll(.*)',
    redirect: '/sigin'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue'), /* webpackChunkName: "about" */
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/updateuser/:userId',
    name: 'UpdateUser',
    component: UpdateUser,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    console.log("You are not authorized to access this area.");
    next('signin')
  } else if (!requiresAuth && currentUser) {
    console.log("You are authorized to access this area.");
    next('users')
  } else {
    next()
  }
})

export default router