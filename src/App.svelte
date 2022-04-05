<script>
    import Header from "./component/header.svelte";
    import Router from "svelte-spa-router";
    import Login from "./component/login.svelte";
    import Main from "./component/main.svelte";

    const routes = {
        "/": Login,
        "/main/": Main,
    };
</script>

<main>
    <Header />
    <Router {routes} />
</main>
