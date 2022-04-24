<script>
    import Card, { Content } from "@smui/card";
    import Paper, { Title, Subtitle } from "@smui/paper";

    export let input;
    export let output;
</script>

<Card>
    <div class="content-box">
        <Subtitle>입력</Subtitle>
        <Content>
            {input}
        </Content>
        <Subtitle>출력</Subtitle>
        <Content>
            {output}
        </Content>
    </div>
    <slot />
</Card>

<style>
    .content-box {
        display: flex;
    }
</style>
