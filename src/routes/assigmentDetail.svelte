<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Card, { Content } from "@smui/card";

    import Testcase from "../component/Testcase.svelte";

    const elevation = 10;

    let testcases = [
        { input: "12321", output: "12321" },
        { input: "12321", output: "12321" },
    ];
</script>

<div class="paper-container">
    <Paper {elevation}>
        <Title>과제 이름</Title>
        <Subtitle>과목 이름</Subtitle>
        <Subtitle>기간 : 2020/12/12 ~ 2102/21/12</Subtitle>
        <Content>설명</Content>

        {#each testcases as testcase}
            <Testcase input={testcase.input} output={testcase.output} />
        {/each}
    </Paper>
</div>

<style>
    .paper-container {
        margin: 10px;
    }
</style>
