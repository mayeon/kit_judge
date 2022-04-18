<script>
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import IconButton, { Icon } from "@smui/icon-button";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    let selected;
    let options = [
        { id: 1, text: `강의실 1` },
        { id: 2, text: `강의실 2` },
        { id: 3, text: `강의실 2` },
    ];

    let prominent = false;
    let dense = true;
    let secondaryColor = false;
</script>

<TopAppBar
    variant="static"
    {prominent}
    {dense}
    color={secondaryColor ? "secondary" : "primary"}
>
    <Row>
        <Section>
            <Title on:click={() => push("/")}>금오공대 과제 채점 시스템</Title>
        </Section>
        <Section>
            <a href="/class" use:link>
                강의실
                <Icon class="material-icons" on>school</Icon></a
            >
        </Section>
    </Row>
</TopAppBar>

<style>
    a {
        color: aliceblue;
    }
</style>
