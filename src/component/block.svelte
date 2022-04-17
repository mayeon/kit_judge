<script>
    export let name;
    export let class_name;
    export let explain;
    export let d_day;

    import "svelte-material-ui/bare.css";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
    import Button, { Label } from "@smui/button";

    let toggleClicked = 0;
    let initialOff = false;
</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />
</svelte:head>
<div class="paper">
    <Paper>
        <Title>과제이름 {name}</Title>
        <IconButton
            on:click={() => toggleClicked++}
            toggle
            bind:pressed={initialOff}
        >
            <Icon class="material-icons" on>star</Icon>
            <Icon class="material-icons">star_border</Icon>
        </IconButton>
        <Subtitle>과목명 {class_name}</Subtitle>
        <Content>설명 {explain}</Content>
        <Subtitle>디데이 {d_day}</Subtitle>
    </Paper>
</div>

<style>
    .paper {
        margin: 10px;
    }
</style>
