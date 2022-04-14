<script>
    import { push } from "svelte-spa-router";

    let selected;
    let options = [
        { id: 1, text: `강의실 1` },
        { id: 2, text: `강의실 2` },
        { id: 3, text: `강의실 2` },
    ];

    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

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
            <form>
                <select bind:value={selected}>
                    {#each options as option}
                        <option value={option}>
                            {option.text}
                        </option>
                    {/each}
                </select>
            </form>
        </Section>
    </Row>
</TopAppBar>
