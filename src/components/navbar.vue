 <!-- <template lang="">
   <div id="nav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/userProfile">User Profile</router-link>
    </nav>
    <div class="login">
      <button type="submit" class="fgt">
        <a href="#">Forgot Password ?</a>
      </button>
      <label for="login">login</label>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button type="submit">login</button>
    </div>
    <div id="signUp">
      <div v-if="showModal">
        <div class="backdrop">
          <div class="modal-content">
            <form id="register">
              <label for="fullName">Full Name</label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                id="fullname"
                v-model="fullname"
              />
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email..."
                id="email"
                v-model="email"
              />
              <label for="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                id="password"
                v-model="password"
              />
              <label for="phone">Phone Number</label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                id="phoneNumber"
                v-model="phoneNumber"
              />
              <label for="country">Country of Residence</label>
              <input
                type="text"
                name="country"
                placeholder="Country of Residence"
                id="country"
                v-model="country"
              />
              <label for="_address">Street Address</label>
              <input
                type="text"
                name="_address"
                placeholder="Street Address"
                id="str_Address"
                v-model="_address"
              />
              <label for="second_address">Street Address 2</label>
              <input
                type="text"
                name="second_address"
                placeholder="Street Address 2"
                id="scnd_str_Address"
              />
              <button type="submit" class="submit">Submit</button>
            </form>
            <button class="closeButton" @click="toggleModal">
              <div class="icon">
                <font-awesome-icon icon="xmark" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <button class="openButton" @click="toggleModal">Sign Up</button>
    </div>
  </div>
 </template>
 <script>
 export default {
    
 }
 </script>
 <style scoped>
    
    #nav {
  display: flex;
  justify-content: space-between;
  padding: 25px;
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
}
.closeButton .icon {
  color: white;
}
 </style> -->