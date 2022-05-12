<script>
    import Paper, { Title, Subtitle, Content } from "@smui/paper";

    export let input;
    export let output;
    export let score;
</script>

<Paper class="testcase-paper">
    <div>
        <Subtitle>입력</Subtitle>
        <Content>
            {input}
        </Content>
    </div>
    <div>
        <Subtitle>출력</Subtitle>
        <Content>
            {output}
        </Content>
    </div>
    <div>
        <Subtitle>점수</Subtitle>
        <Content>
            {score}
        </Content>
    </div>
    <slot />
</Paper>

<style>
    :global(.testcase-paper) {
        display: flex;
        justify-content: space-around;
    }
</style>
