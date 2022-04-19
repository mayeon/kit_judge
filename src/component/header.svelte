<script>
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    const prominent = false;
    const dense = true;
</script>

<TopAppBar variant="static" {prominent} {dense}>
    <Row>
        <Section>
            <Title on:click={() => push("/")}>금오공대 과제 채점 시스템</Title>
        </Section>
        <Section>
            <a href="/class" use:link> 강의실 </a>
        </Section>
    </Row>
</TopAppBar>
