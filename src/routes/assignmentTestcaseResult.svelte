<script>
    import { axiosInstance } from "../functions/source.js";
    import Paper, { Title } from "@smui/paper";
    import Button, { Label } from "@smui/button";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    export let params = {};

    let testcaseResults = [];
    
    let count = 0;

    onMount(async () => {
        console.log("assignment submission list request");
        await axiosInstance.get(`/assignment/${params.assignmentId}/testresult`)
            .then(res => {
                console.log(res.data)
                let testcaseResultsInfo = res.data;
                
                for (let i = 0; i < testcaseResultsInfo.length; i++) {
                    testcaseResults = [
                        ...testcaseResults,
                        {
                            "testcaseId": testcaseResultsInfo[i].testcase_id,
                            "testDate": testcaseResultsInfo[i].date,
                            "isSuccess": testcaseResultsInfo[i].is_success,
                            "isFailure": testcaseResultsInfo[i].fail_cause
                        }
                    ]
                }
                console.log(testcaseResults)
            }).catch(err => {
                console.log("assignment submission list request fail : " + err);
                const errStatus = err.response.status;
                if(errStatus == 440) {
                    alert("과제를 제출하지 않았습니다");
                    push("/assignment/detail/" + params.assignmentId)
                }
            }).finally(() => {
                console.log("assignment submission list request end");
            });
    });

    function getCount() {
        count++;
        return count;
    }
</script>

<Paper>
    <Title>제출 정보</Title>
    <br />
    <DataTable table$aria-label="assigment list" style="max-width: 100%;">
        <Head>
            <Row>
                <Cell>No.</Cell>
                <Cell>테스트 일자</Cell>
                <Cell>성공여부</Cell>
                <Cell>실패여부</Cell>
            </Row>
        </Head>
        <Body>
            {#each testcaseResults as testcaseResult}
                <Row>
                    <Cell>{getCount()}</Cell>
                    <Cell>{testcaseResult.testDate}</Cell>

                    {#if testcaseResult.isSuccess}
                        <Cell>O</Cell>
                    {:else}
                        <Cell></Cell>
                    {/if}

                    {#if testcaseResult.isFailure}
                        <Cell>O</Cell>
                    {:else}
                        <Cell></Cell>
                    {/if}
                </Row>
            {/each}
        </Body>
    </DataTable>
</Paper>

<style>
</style>
