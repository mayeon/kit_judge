<script lang="ts">
    import { push } from "svelte-spa-router";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
    import { axiosInstance, sourceURL } from "../functions/source";
    import { beforeUpdate, onMount } from "svelte";
    import { get } from "svelte/store";
    import { userInfoStore } from "../functions/store.js";

    const userType = sessionStorage.getItem("type");

    const config = {
        method: "get",
        url: `${sourceURL}/classroom/`,
        headers: {},
    };

    let classList = [];
    onMount(async () => {
        await axiosInstance(config)
            .then((response) => {
                classList = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    function handleClick(classRoomId) {
        push(`/class/${classRoomId}/assigment`);
    }

    function handleNewClass() {
        if (userType == "1") {
            //학생
            push("/class/join");
        } else if (userType == "2") {
            // 교수자
            push("/class/new");
        }
    }
</script>

<LayoutGrid>
    {#each classList as classroom, i}
        <Cell span={2}>
            <Paper>
                <Title on:click={() => handleClick(classroom.id)}
                    >{classroom.name}</Title
                >
                {#if userType == "2"}
                    <div>
                        <IconButton
                            class="material-icons"
                            on:click={() =>
                                push(`/class/${classroom.id}/student`)}
                        >
                            groups
                        </IconButton>
                    </div>
                {/if}
                <Subtitle>교수자 : {classroom.professor_name}</Subtitle>
                <Subtitle>년도 : {classroom.year}</Subtitle>
                <Subtitle>학기 : {classroom.semester}</Subtitle>
            </Paper>
        </Cell>
    {/each}
    <Cell span={1}>
        <Paper class="add-paper">
            <IconButton class="material-icons" on:click={handleNewClass}
                >add</IconButton
            >
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
