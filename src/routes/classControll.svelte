<script lang="ts">
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
</script>

<LayoutGrid>
    {#each Array(10) as _unused, i}
        <Cell>
            <Paper>
                <div>
                    <Title>과목{i + 1}</Title>
                    <IconButton class="material-icons">person_add</IconButton>
                    <IconButton class="material-icons">delete</IconButton>
                </div>
                <Subtitle>생성일 : 2012/12/12</Subtitle>
                <Subtitle>인원수 : 30</Subtitle>
            </Paper>
        </Cell>
    {/each}
    <Cell>
        <Paper>
            <IconButton class="material-icons">add</IconButton>
        </Paper>
    </Cell>
</LayoutGrid>
