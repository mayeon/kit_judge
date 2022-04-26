<script>
    import Header from "./component/header.svelte";
    import Router from "svelte-spa-router";
    import routes from "./functions/routes";
</script>

<Header />
<main>
    <Router {routes} />
</main>

<style>
    main {
        padding: 1em;
        max-width: 90%;
        margin: 1em auto;
    }
</style>
