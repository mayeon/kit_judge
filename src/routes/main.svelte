<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Block from "../component/block.svelte";
</script>

<div class="main-assignments-container">
    <h1>진행중인과제</h1>

    <div class="main-assignments">
        <Block name="연결리스트" />
        <Block name="트리" class_name="자료구조" explain="설명"/>
        <Block name="큐" class_name="자료구조" explain="설명"/>
        <Block name="창의융합프로젝트2 교과목 프로젝트" class_name="창의융합프로젝트2" explain="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl tristique turpis viverra ultricies. Quisque nibh diam, venenatis a semper vestibulum, aliquam in dui."/>
        
        <Block is_star="true" />
    </div>
</div>

<style>

</style>
