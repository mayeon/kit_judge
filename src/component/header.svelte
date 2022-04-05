<script>
    import { link } from "svelte-spa-router";

    let selected;
    let options = [
        { id: 1, text: `강의실 1` },
        { id: 2, text: `강의실 2` },
        { id: 3, text: `강의실 2` },
    ];
</script>

<header>
    <p>금오공대 과제 채점 시스템</p>
    <a href="/" use:link>Home</a>
    <form>
        <select bind:value={selected}>
            {#each options as option}
                <option value={option}>
                    {option.text}
                </option>
            {/each}
        </select>
    </form>
</header>

<style>
    header {
        background-color: gray;
        margin: 0;
        display: flex;
    }

    p {
        margin: 0;
    }
</style>
