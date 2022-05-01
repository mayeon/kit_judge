<script>
    import Block from "../component/block.svelte";
</script>

<!-- 메인 + block(설명, 과제 명 일정 글자 넘어가면 희미해지게 수정) -->

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
        max-width: calc((var(--element-assignment-paper-width) + 2rem) * 3);
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