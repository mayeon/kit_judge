<script>
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";
    import { beforeUpdate, onMount } from "svelte";
    import { axiosInstance, sourceURL } from "../functions/source";

    export let params = {};

    let students = [];

    onMount(async () => {
        await axiosInstance
            .get(`${sourceURL}/classroom/${params.classId}/member`)
            .then((response) => {
                students = response.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    let options = [];

    let selection = "Stephen Hawking";
    let selectionIndex = "";
</script>

<div class="container">
    <div id="participated-student">
        <h1>참여 학생</h1>
        <List
            class="demo-list"
            twoLine
            avatarList
            singleSelection
            bind:selectedIndex={selectionIndex}
        >
            {#each students as student}
                <Item
                    on:SMUI:action={() => (selection = student.name)}
                    disabled={student.disabled}
                    selected={selection === student.id}
                >
                    <Graphic
                        style="background-image: url(https://place-hold.it/40x40?text={student.name
                            .split(' ')
                            .map((val) => val.substring(0, 1))
                            .join('')}&fontsize=16);"
                    />
                    <Text>
                        <PrimaryText>{student.name}</PrimaryText>
                        <SecondaryText>학번: {student.student_id}</SecondaryText
                        >
                    </Text>
                    <Meta class="material-icons">info</Meta>
                </Item>
            {/each}
        </List>
    </div>
</div>

<!-- <pre class="status">Selected: {selection}, value of selectedIndex: {selectionIndex}</pre> -->
<style>
    /* * :global(.demo-list) {
        max-width: 600px;
    } */

    .container {
        --element-participation-container-width: 500px;
        --element-participation-container-margin: 20px;
        width: calc(
            (
                    var(--element-participation-container-width) +
                        var(--element-participation-container-margin) * 2
                ) * 2
        );
        position: relative;
        top: 2rem;
    }

    #request-participation,
    #participated-student {
        display: inline-block;
        margin: calc(var(--element-participation-container-margin) / 2);
        width: var(--element-participation-container-width);
    }
</style>
