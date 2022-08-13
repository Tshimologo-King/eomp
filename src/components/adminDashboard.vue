<template>
    <h2>{{content}}</h2>
</template>
<script>
import userService from '@/services/user.service';
export default {
     name: "admin",
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        userService.getAdminDashboard().then((response) =>{
            this.content = response.data;
        },
        (error) => {
            this.content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        })
    }
}
</script>