<template>
    
</template>
<script>
import userService from "@/services/user.service";
export default {
    name: "user",
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        userService.getUserDashboard().then((response) =>{
            this.content = response.data;
        },
        (error) => {
            this.content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        })
    }
}
</script>