<script>
    export let name;
    export let class_name;
    export let explain;
    export let d_day;
    export let is_star;
</script>

<div>
    <h1>과제이름 {name}</h1>
    <h2>과목명 {class_name}</h2>
    <h2>설명 {explain}</h2>
    <h2>디데이 {d_day}</h2>

    {#if is_star}
        ⭐
    {:else}
        ☆
    {/if}
</div>

<style>
    div {
        border: 1px black solid;
    }
</style>
