<template>
  <div id="nav">
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/userProfile">User Profile</router-link>
  </nav>
  <div class="login">
    <label for="login">login</label>
    <input type="text" placeholder="username">
    <input type="text" placeholder="password">
    <button type="submit">login</button>
  </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.login input{
  margin: 5px;
}
</style>
