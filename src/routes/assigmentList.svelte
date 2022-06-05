<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import { beforeUpdate, onMount } from "svelte";
    import { axiosInstance, sourceURL } from "../functions/source";

    export let params = {};

    const data = {
        classroom_id: params.classId,
    };

    let assigmentList = [];
    onMount(async () => {
        await axiosInstance
            .get(`${sourceURL}/assigment/`, data)
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
        {#each assigmentList as _assigment, i}
            <Cell span={3}>
                <Paper>
                    <Title>dsa</Title>
                    <Subtitle>과목명: dsa</Subtitle>
                    <Subtitle>디데이 asd</Subtitle>
                    <Subtitle>설명</Subtitle>
                    <Content class="assignment-block-explain">sad</Content>
                </Paper>
            </Cell>
        {/each}
    </LayoutGrid>
</div>

<style>
</style>
