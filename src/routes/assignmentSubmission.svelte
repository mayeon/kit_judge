<script>
    import { axiosInstance } from "../functions/source.js";
    import Paper, { Title } from "@smui/paper";
    import Button, { Label } from "@smui/button";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
    import { onMount } from "svelte";

    export let params = {};

    let assignments = [];

    let count = 0;
    
    onMount(async () => {
        console.log("assignment submission list request");
        await axiosInstance.get(`/assignment/${params.assignmentId}/submissions`)
            .then(res => {
                let assigmentInfo = res.data;
                
                for(let i = 0; i < assigmentInfo.length; i++) {
                    assignments = [
                        ...assignments,
                        {
                                "author_name": assigmentInfo[i].author_name, 
                                "submit_date": assigmentInfo[i].date,
                                "score": assigmentInfo[i].score
                        }
                    ]
                }
            }).catch(err => {
                console.log("assignment submission list request fail : " + err);
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
                <Cell>제출번호</Cell>
                <Cell>제출자</Cell>
                <Cell numeric>점수</Cell>
                <Cell>제출일자</Cell>
            </Row>
        </Head>
        <Body>
            {#each assignments as assignment}
                <Row>
                    <Cell>{getCount()}</Cell>
                    <Cell>{assignment.author_name}</Cell>
                    <Cell numeric>{assignment.score}</Cell>
                    <Cell>{assignment.submit_date}</Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
</Paper>

<style>
</style>
