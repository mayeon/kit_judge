<script>
    import Header from "./component/header.svelte";
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<main>
    <Header />
    <Router {routes} />
</main>
