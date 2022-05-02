<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Block from "../component/block.svelte";
</script>

<div class="container">
    <h1>진행중인과제</h1>

    <div class="assignments">
        <Block name="연결리스트" />
        <Block name="ㅂㅂ" explain="ㅂㅂㅂㅂ ㅈㅈㅈㅈ ㄷㄷㄷㄷ ㄱㄱㄱㄱ ㅁㅁㅁㅁ ㄴㄴㄴ ㅂㅂㅂㅂㅈㅈㅈㅈ ㄷㄷㄷㄷ" />
        <Block name="창의융합프로젝트2 교과목 프로젝트" class_name="qwqw" explain="ㅂㅂㅂㅂ ㅈㅈㅈㅈ ㄷㄷㄷㄷ ㄱㄱㄱㄱ ㅁㅁㅁㅁ ㄴㄴㄴㄴ ㅇㅇㅇㅇ ㅋㅋㅋㅋ ㅌㅌㅌㅌ ㅊㅊㅊㅊ ㅍㅍㅍㅍ ㅂㅂㅂㅂㅈㅈㅈㅈ ㄷㄷㄷㄷ"/>
        
        <Block is_star="true" />
    </div>
</div>

<style>
    .container {
        position: relative;
        top: 2rem;
        max-width: 66rem;
        margin: 0, auto;
    }

    .container h1 {
        padding-left: 1rem;
    }

    .assignments {
        position: absolute;
        top: 5rem;
    }
</style>
