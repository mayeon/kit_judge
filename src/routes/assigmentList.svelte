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
</script>

<div class="main-assignments-container">
    <h1>과제목록</h1>

    <LayoutGrid>
        {#each assigmentList as assigment, i}
            <Cell span={3}>
                <Paper>
                    <Title>{assigment.title}</Title>
                    <Subtitle>시작일: {assigment.start_date}</Subtitle>
                    <Subtitle>종료일: {assigment.end_date}</Subtitle>
                </Paper>
            </Cell>
        {/each}
    </LayoutGrid>
</div>

<style>
</style>
