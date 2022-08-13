<template>
    <div class="container">
        <h2>{{user.username}}
        </h2>
    </div>
</template>

<script>
export default {
    name: 'userProfile',
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.user) {
            this.$router.push('/login')
        }
    }
};
</script>