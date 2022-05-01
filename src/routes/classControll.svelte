<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
</script>

<LayoutGrid>
    {#each Array(10) as _unused, i}
        <Cell span={2}>
            <Paper>
                <div>
                    <Title>과목{i + 1}</Title>
                    <IconButton
                        class="material-icons"
                        on:click={() => push("/class/student")}
                    >
                        groups
                    </IconButton>
                    <IconButton class="material-icons">delete</IconButton>
                </div>
                <Subtitle>생성일 : 2012/12/12</Subtitle>
                <Subtitle>인원수 : 30</Subtitle>
            </Paper>
        </Cell>
    {/each}
    <Cell span={1}>
        <Paper class="add-paper">
            <IconButton class="material-icons">add</IconButton>
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
