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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href="/build/smui.css" />
</svelte:head>

<main>
    <Header />
    <Router {routes} />
</main>
