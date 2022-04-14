<script>
    export let name;
    export let class_name;
    export let explain;
    export let d_day;
    export let is_star;

    import Paper, { Title, Subtitle, Content } from "@smui/paper";
</script>

<Paper>
    <Title>과제이름 {name}</Title>
    <Subtitle>과목명 {class_name}</Subtitle>
    <Content>설명 {explain}</Content>
    <Subtitle>디데이 {d_day}</Subtitle>

    {#if is_star}
        ⭐
    {:else}
        ☆
    {/if}
</Paper>
