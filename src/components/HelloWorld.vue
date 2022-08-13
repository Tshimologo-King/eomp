<template>
  <div class="container">
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
import userService from "@/services/user.service";
export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    userService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
