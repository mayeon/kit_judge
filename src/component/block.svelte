<script>
    export let name;
    export let class_name;
    export let explain;
    export let d_day;

    import "svelte-material-ui/bare.css";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import IconButton, { Icon } from "@smui/icon-button";
    import Button, { Label } from "@smui/button";

    let toggleClicked = 0;
    let initialOff = false;
</script>

<div class="paper">
    <Paper>
        <div class="title">
            <!-- <div id="assignment">
                <Title>과제이름:</Title>
            </div> -->
    
            <div id="assignment-name">
                <Title class="assignment-paper-title">{name}</Title>
            </div>
        </div>

        <div id="star-button">
            <IconButton
            on:click={() => toggleClicked++}
            toggle
            bind:pressed={initialOff}
            >

            <Icon class="material-icons" on>star</Icon>
            <Icon class="material-icons">star_border</Icon>
        </IconButton>
        </div>

        <div id="sub-title">
            <Subtitle>과목명: {class_name}</Subtitle>
        </div>

        <Content>설명</Content>
        <div id="explain">
            <Content class="assignment-paper-explain">{explain}</Content>
        </div>

        <div id="d-day">
            <Subtitle>디데이 {d_day}</Subtitle>
        </div>
    </Paper>
</div>

<style>
    :root {
        /* "과제이름"을 포함시켰을 경우*/
        /* --element-assignment-paper-width: 25rem;   */
        --element-assignment-paper-width: 20rem;
    }

    .paper {
        display: inline-block;
        position: relative;
        max-width: var(--element-assignment-paper-width);
        width: var(--element-assignment-paper-width);
        margin: 10px;
    }

    #assignment {
        display: inline-block;
        margin: 0;
    }

    #assignment-name {
        left: 7.5rem;
        display: block;
        margin: 0;
        /* max-width: calc(var(--element-width) - 11.5rem); */
        max-width: calc(var(--element-assignment-paper-width) - 5rem);
        max-height: 2rem;
        width: 100%;
    }

    #star-button {
        display: inline-block;
        position: absolute;
        top: 1.2rem;
        left: calc(var(--element-assignment-paper-width) - 4rem) ;
    }

    #sub-title, #explain, #d-day {
        margin-top: 0rem;
    }

    #explain {
        max-height: 4.5rem;
        height: 4.5rem;
        line-height: 1.5rem;
    }


</style>
