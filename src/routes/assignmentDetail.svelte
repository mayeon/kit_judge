<script lang="ts">
    import { axiosInstance } from "../functions/source.js";
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Card, { Content } from "@smui/card";
    import Testcase from "../component/Testcase.svelte";
    import { onMount } from "svelte";
    import Button from "@smui/button";
    import { push } from "svelte-spa-router";

    export let params = {};

    const elevation = 10;
    let assigmentInfo = {};
    let testcaseInfo = [];

    onMount(async () => {
        console.log("assignment detail request");
        await axiosInstance.get(`/assignment/${params.assignmentId}`)
            .then(res => {
                assigmentInfo = res.data;
                console.log(assigmentInfo)
            }).catch(err => {
                console.log("assignment detail request fail : " + err);
            }).finally(() => {
                console.log("assignment detail request end");
            });

        console.log("assignment detail testcase request");
        await axiosInstance.get(`/assignment/${params.assignmentId}/testcase`)
            .then(res => {
                let testcase = res.data;
                for (let i = 0; i < testcase.length; i++) {
                    if (testcase[i].enable) {
                        testcaseInfo = [
                            ...testcaseInfo,
                            {"input": testcase[i].input, "output": testcase[i].output}
                        ]
                    } 
                }
                console.log(testcaseInfo)
            }).catch(err => {
                console.log("assignment detail testcase request fail : " + err);
            }).finally(() => {
                console.log("assignment detail testcase request end");
            });
    });

    function convertDateFormat(source) {
        return (source + '').substring(0, 19).replace("T", " ");
    }
</script>

<div class="paper-container">
    <Paper {elevation}>
        <Title>{assigmentInfo.title}</Title>
        <Subtitle>기간 : {`${convertDateFormat(assigmentInfo.start_date)} ~ ${convertDateFormat(assigmentInfo.end_date)}`}</Subtitle>
        <Content>{assigmentInfo.desc}</Content>

        <Subtitle>테스트 케이스</Subtitle>
        {#each testcaseInfo as testcase}
            <!-- <Testcase input={testcase.input} output={testcase.output} score={testcase.score}/> -->
            <Testcase input={testcase.input} output={testcase.output}/>
            <br />
        {/each}
        
        {#if sessionStorage.getItem("type") == 2}
            <Button variant="raised" class="code-submit-button button-shaped-round" on:click={() => push("/assignment/edit/" + params.assignmentId)}>수정</Button>
        {/if}

        {#if sessionStorage.getItem("type") == 2}
            <Button variant="raised" class="code-submit-button button-shaped-round" on:click={() => push("/assignment/submission/" + params.assignmentId)}>제출자 확인</Button>
        {/if}

        {#if sessionStorage.getItem("type") == 1}
            <Button variant="raised" class="code-submit-button button-shaped-round" on:click={() => push("/code/attach/" + params.assignmentId)}>제출</Button>
        {/if}

        {#if sessionStorage.getItem("type") == 1}
            <Button variant="raised" class="code-submit-button button-shaped-round" on:click={() => push("/assignment/testcase-result/" + params.assignmentId)}>결과 확인</Button>
        {/if}
    </Paper>
</div>

<style>
    .paper-container {
        margin: 10px;
    }
</style>
