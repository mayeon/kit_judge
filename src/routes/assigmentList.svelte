<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import { beforeUpdate, onMount } from "svelte";
    import { axiosInstance, sourceURL } from "../functions/source";

    export let params = {};

    let assigmentList = [];
    onMount(async () => {
        await axiosInstance
            .get(`${sourceURL}/classroom/${params.classId}/assignment`)
            .then((response) => {
                assigmentList = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    function handleClick(assignmentId) {
        push("/assignment/detail/" + assignmentId);
    }
</script>

<div class="main-assignments-container">
    <h1>과제목록</h1>

    <LayoutGrid>
        {#each assigmentList as assigment, i}
            <Cell span={3}>
                <Paper on:click={() => handleClick(assigment.id)}>
                    <!-- <Paper> -->
                    <Title>{assigment.title}</Title>
                    <Subtitle
                        >시작일: {assigment.start_date.split("T")[0]}</Subtitle
                    >
                    <Subtitle
                        >종료일: {assigment.end_date.split("T")[0]}</Subtitle
                    >
                </Paper>
            </Cell>
        {/each}
    </LayoutGrid>
</div>

<style>
</style>
