<script>
    export let name;
    export let class_name;
    export let explain;
    export let d_day;
    export let assignment_id;

    import { axiosInstance } from "../functions/source.js";
    import "svelte-material-ui/bare.css";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
    import Button, { Label } from "@smui/button";

    let toggleClicked = 0;
    let initialOff = false;

    async function deleteAssignment() {
        try {
            const assignmentId = "";

            console.log("request delete assignment request");
            await axiosInstance.delete("/assignment" + assignmentId)
            .catch(err => {
                console.log("request delete assignment request fail : " + err);
            }).finally(() => {
                console.log("request delete assignment request end");
            })
        } catch(err) {
            console.log(err);
        }
    }
</script>

<div class="paper">
    <Paper>
        <div class="title">
            <div id="assignment-name">
                <Title class="assignment-block-title">{name}</Title>
            </div>
        </div>

        <div id="sub-title">
            <Subtitle>과목명: {class_name}</Subtitle>
        </div>

        <Content>설명</Content>
        <div id="explain">
            <Content class="assignment-block-explain">{explain}</Content>
        </div>

        <div id="d-day">
            <Subtitle>디데이 {d_day}</Subtitle>
        </div>

        <Button on:click={deleteAssignment}>삭제</Button>
    </Paper>
</div>

<style>
    .paper {
        display: inline-block;
        position: relative;
        max-width: 20rem;
        width: 20rem;
        margin: 1rem;
    }

    #assignment-name {
        left: 7.5rem;
        display: block;
        margin: 0;
        /* max-width: calc(var(--element-width) - 11.5rem); */
        max-width: 17rem;
        max-height: 2rem;
        width: 100%;
    }

    #sub-title, #explain, #d-day {
        margin-top: 0rem;
    }

    #explain {
        max-height: 4.5rem;
        height: 4.5rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }
</style>
