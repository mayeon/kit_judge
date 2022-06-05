<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
    import { axiosInstance, sourceURL } from "../functions/source";
    import { beforeUpdate, onMount } from "svelte";
    import { get } from "svelte/store";
    import { userInfoStore } from "../functions/store.js";

    const config = {
        method: "get",
        url: `${sourceURL}/classroom/`,
        headers: {},
    };

    let classList = [];
    onMount(async () => {
        await axiosInstance(config)
            .then((response) => {
                classList = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    function handleClick(classRoomId) {
        push(`/class/${classRoomId}/assigment`);
    }

    function handleNewClass() {
        console.log(get(userInfoStore));
        // push("/class/new");
    }
</script>

<LayoutGrid>
    {#each classList as classroom, i}
        <Cell span={2}>
            <Paper on:click={() => handleClick(classroom.id)}>
                <Title>{classroom.name}</Title>
                <Subtitle>교수자 : {classroom.professor_name}</Subtitle>
                <Subtitle>년도 : {classroom.year}</Subtitle>
                <Subtitle>학기 : {classroom.semester}</Subtitle>
            </Paper>
        </Cell>
    {/each}
    <Cell span={1}>
        <Paper class="add-paper">
            <IconButton class="material-icons" on:click={handleNewClass}
                >add</IconButton
            >
        </Paper>
    </Cell>
</LayoutGrid>

<style>
    :global(.add-paper) {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        height: 100%;
    }
</style>
