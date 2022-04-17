<script lang="ts">
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    const elevation = 10;
</script>

<div class="paper-container">
    <Paper {elevation}>
        <Title>과제 이름</Title>
        <Subtitle>과목 이름</Subtitle>
        <Subtitle>기간 : 2020/12/12 ~ 2102/21/12</Subtitle>
        <Content>설명</Content>
    </Paper>
</div>

<style>
    .paper-container {
        margin: 10px;
    }
</style>
