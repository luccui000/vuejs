new Vue({
    el: "#app",
    data: { 
        isLogin: false
    }, 
    methods: {
        login() {
            this.isLogin = true;
        },
        register() {
            this.isLogin = false;
        }
    }
})