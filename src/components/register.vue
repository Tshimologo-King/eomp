<template>
    <form @submit="register" :validation-schema="schema" action="https://node-eom-2.herokuapp.com/users/register">
        <h2>User Information</h2>
        <div v-if="!successful">
          <label for="title">Title</label>
          <Field name="title" id="title">
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Sr">Sr</option>
          </Field>
          <label for="fullname"> Full Name</label>
          <Field type="text" placeholder="Name & Surname"/>
          <label for="email">Email Address</label>
          <Field type="text" placeholder="Email Address"/>
          <label for="password">Password</label>
          <Field type="text" placeholder="Password"/>
          <h2>Contact Information</h2>
          <label for="address">Address</label>
          <Field type="text" placeholder="Address"/>
          <label for="city">City</label>
          <Field type="text" placeholder="City"/>
          <label for="country">Country</label>
          <Field type="text" placeholder="Country"/>
          <label for="postalCode">Postal Code</label>
          <Field type="text" placeholder="Postal Code"/>
          <button type="submit">Submit</button>
        </div>
    </form>
    <div id="signUp">
        <div v-if="showModal">
            <div class="backdrop">
              <div class="modal-content">
                <button class="closeButton" @click="toggleModal">
                  Close Modal
                </button>
              </div>
            </div>
      </div>
      <button class="openButton" @click="toggleModal">Sign Up
      </button>
      <div v-if="message" class="Erroralert" :class="successful ? 'alert-success' : 'alert-danger'">
        {{ message }}
      </div>
    </div>
</template>

<script>

//Object schema based validation and parsing library
import { Form, Field} from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
  },
  data() {

    //Validating JSON documents
    const schema = yup.object().shape({
        //Collecting data from the inputs in the form 
        //Username && Password
      username: yup
        .string()
        .username("Please enter a valid username!")
        .max(25, "Username must be at least 25 characters long.")
        .required("Username is required!"),
      email: yup
        .string()
        .required("Email is required!!")
        .email("Email is invalid!")
        .max(50, "Email has a max of 50 characters."),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long.")
        .required("Password is required!"),
    });
    return {
      successful: false,
      loading: false,
      message: "Please fill in the correct input fields...",
      schema,
    };
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },

  //Router to home page
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },

  //Register function. 
  //IF the user has a successfull validation then route the user to the home page ELSE show ERR Message
  methods: {
    register(user) {
      this.message = "";
      this.loading = true;
      this.successful = false;

      //Verify user
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.$router.push("/");
          this.successful = true;
          this.loading = false;
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
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
