<script>
    import Header from "./component/header.svelte";
    import Router from "svelte-spa-router";
    import Main from "./component/main.svelte";
    import UserRegister from "./component/userRegister.svelte";
    import Login from "./component/login.svelte";

    const routes = {
        "/": Login,
        "/main/": Main,
        "/login": Login,
        "/user-register": UserRegister,
    };
</script>

<main>
    <Header />
    <Router {routes} />
</main>
