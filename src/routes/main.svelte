<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Block from "../component/block.svelte";
</script>

<h1>진행중인과제</h1>
<LayoutGrid>
    {#each Array(10) as _unused, i}
        <Cell span={2} align="top">
            <Block
                name="연결리스트"
                class_name="자료구조"
                explain="ㄹㄴㅇㄹㄹㄴㅇ"
                d_day="D-20"
            />
        </Cell>
    {/each}
</LayoutGrid>

<style>
</style>
