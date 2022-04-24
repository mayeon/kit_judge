<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Card, { Content } from "@smui/card";

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
            <div class="card">
                <Card>
                    <div class="content-box">
                        <Content>
                            <h2>입력</h2>
                            {testcase.input}
                        </Content>
                        <Content>
                            <h2>출력</h2>
                            {testcase.output}
                        </Content>
                    </div>
                </Card>
            </div>
        {/each}
    </Paper>
</div>

<style>
    .paper-container {
        margin: 10px;
    }
</style>
