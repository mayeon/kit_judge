<script>
    import Paper, { Title } from "@smui/paper";
    import Button, { Label } from "@smui/button";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

    let assigments = [
        { id: 1, score: 30 },
        { id: 2, score: 70 },
        { id: 3, score: 70 },
        { id: 4, score: 40 },
    ];
</script>

<Paper>
    <Title>제출 정보</Title>
    <br />
    <DataTable table$aria-label="assigment list" style="max-width: 100%;">
        <Head>
            <Row>
                <Cell>제출번호</Cell>
                <Cell numeric>점수</Cell>
                <Cell>코드보기</Cell>
            </Row>
        </Head>
        <Body>
            {#each assigments as assigment}
                <Row>
                    <Cell>{assigment.id}</Cell>
                    <Cell numeric>{assigment.score}</Cell>
                    <Cell>
                        <Button>
                            <Label>코드보기</Label>
                        </Button>
                    </Cell>
                </Row>
            {/each}
        </Body>
    </DataTable>
</Paper>

<style>
</style>
