<template>
  <form @submit="login" :validation-schema="schema" action="https://node-eom-2.herokuapp.com/users/login">
    <div class="login">
      <button type="submit" class="fgt">
        <a href="#">Forgot Password ?</a>
      </button>
      <label for="login">login</label>
      <Field type="text" placeholder="username" />
      <ErrorMessage name="username" class="error-feedback" />
      <label for="password">password</label>
      <Field type="text" placeholder="password" />
      <button type="submit">login</button>
    </div>
    <div v-if="message" class="alertMessage">
        {{ message }}
    </div>
  </form>
</template>
<script>

//Object schema based validation and parsing library
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {

    //Validating JSON documents
    const schema = yup.object().shape({
        //Collecting data from the inputs in the form 
        //Username && Password
      username: yup
        .string()
        .username("Please enter a valid username!")
        .max(100)
        .required("Username is required!"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .required("Password is required!"),
    });
    return {
      loading: false,
      message: "Please fill in the correct input fields...",
      schema,
    };
  },

  //The data that is retrieved after the user is logged in.
  //Check whether the user has been validated(status)
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  //Router to home page
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },

  //Login function. 
  //IF the user has a successfull validation then route the user to the home page ELSE show ERR Message
  methods: {
    login(user) {
      this.loading = true;

      //Verify user
      this.$store.dispatch("auth/login", user).then(
        (e) => {
          this.$router.push("/");
        },

        //Error handling
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
