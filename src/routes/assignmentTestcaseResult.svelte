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
                testcaseResults = [
                    ...testcaseResults,
                    {
                        "testcaseId": res.data.testcase_id,
                        "testDate": res.data.date,
                        "isSuccess": res.data.is_success,
                        "isFailure": res.data.fail_cause
                    }
                ]
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
                    <Cell>{count++}</Cell>
                    <Cell>{testcaseResult.testDate}</Cell>
                    <Cell>{testcaseResult.isSuccess}</Cell>
                    <Cell>{testcaseResult.isFailure}</Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
</Paper>

<style>
</style>
