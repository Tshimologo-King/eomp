<template>
<div id="nav">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="home"/>
            Home</router-link>
        </li>
        <li>
          <router-link to="/about">
            <font-awesome-icon icon="compass"/>
            About</router-link>
        </li>
        <li>
          <router-link v-if="currentUser" to="/userProfile">
          <font-awesome-icon icon="user"/>
          {{ currentUser.username }}</router-link>
        </li>
        <div v-if="!currentUser" class="register">
          <li>
            <router-link to="/Register">
              <font-awesome-icon icon="user-plus"/>
              Register</router-link>
          </li>
        </div>
        <li>
          <router-link to="/Login">
            <font-awesome-icon icon="sign-in"/>
            Login</router-link>
        </li>
        <li>
          <a @click.prevent="logout">
          <font-awesome-icon icon="sign-out"/>
          Logout</a>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script>
import login from './components/Login.vue';
import register from './components/Register.vue';
export default {
    data() {
        return {
            showModal: false,
        };
    },
    computed: {
      currentUser() {
        return this.$store.state.initialState;
      },
      adminDashboard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('admin')
        }
        else {
          return false;
        }
      }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
        logout() {
          this.$store.dispatch('auth/logout');
          this.$router.push('/login')
        }
    },
    components: { login, register }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    
#nav {
  display: flex;
  justify-content: center;
  padding: 20px;
}

#nav ul{
  display: flex;
}

#nav ul li{
  list-style: none;
}

nav a {
  font-weight: 500;
  color: #2c3e50;
  text-decoration: none;
  margin: 12px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.login input {
  margin: 5px;
}
.login button {
  margin: 2.5px;
}
.login .fgt {
  background: transparent;
  border: none;
}
.login .fgt a {
  color: gray;
}

#signUp {
  width: auto;
  float: right;
}
.backdrop {
  top: 15%;
  left: 30%;
  position: fixed;
  background: transparent;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.modal-content {
  background-color: rgb(255, 255, 255);
  padding: 50px;
  height: 500px;
  width: 500px;
  border-radius: 25px;
  z-index: 100000000;
}
.openButton {
  padding: 5px 10px;
  border-radius: 25px;
}

.closeButton {
  padding: 10px;
  line-height: 20px;
  border-radius: 25px;
  display: flex;
  
}

#register {
  display: flex;
  flex-direction: column;
  width: 100%;
}
#register label {
  font-size: 16px;
  margin-bottom: 5px;
  padding: 5px;
}
#register input {
  padding: 5px;
  margin-bottom: 5px;
}

.submit {
  padding: 0;
  width: 25%;
  margin-inline: auto;
}
.closeButton {
  padding: 0;
  width: 5%;
  margin-top: 1rem;
  background: red;
  display: flex;
  justify-content: center;
  margin-inline: auto;
}
.closeButton .icon {
  color: white;
}
</style>
