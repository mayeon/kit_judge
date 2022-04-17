<script>
    import Header from "./component/header.svelte";
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />
</svelte:head>

<main>
    <Header />
    <Router {routes} />
</main>
