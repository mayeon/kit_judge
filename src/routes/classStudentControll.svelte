<script>
    import List, {
        Item,
        Graphic,
        Meta,
        Text,
        PrimaryText,
        SecondaryText,
    } from "@smui/list";

    let options = [
        {
            name: "Bruce Willis",
            description: "20190909",
            disabled: false,
        },
        {
            name: "Austin Powers",
            description: "20190909",
            disabled: true,
        },
        {
            name: "Thomas Edison",
            description: "20190909",
            disabled: false,
        },
    ];
    let selection = "Stephen Hawking";
    let selectionIndex = "";
</script>

<div class="container">
    <div id="request-participation">
        <h1>참여 희망 학생</h1>
        <List
            class="demo-list"
            twoLine
            avatarList
            singleSelection
            bind:selectedIndex={selectionIndex}
        >
            {#each options as item}
                <Item
                    on:SMUI:action={() => (selection = item.name)}
                    disabled={item.disabled}
                    selected={selection === item.name}
                >
                    <Graphic
                        style="background-image: url(https://place-hold.it/40x40?text={item.name
                            .split(' ')
                            .map((val) => val.substring(0, 1))
                            .join('')}&fontsize=16);"
                    />
                    <Text>
                        <PrimaryText>{item.name}</PrimaryText>
                        <SecondaryText>{item.description}</SecondaryText>
                    </Text>
                    <Meta class="material-icons">add</Meta>
                </Item>
            {/each}
        </List>
    </div>
    
    <div id="participated-student">
        <h1>참여 학생</h1>
        <List
            class="demo-list"
            twoLine
            avatarList
            singleSelection
            bind:selectedIndex={selectionIndex}
        >
            {#each options as item}
                <Item
                    on:SMUI:action={() => (selection = item.name)}
                    disabled={item.disabled}
                    selected={selection === item.name}
                >
                    <Graphic
                        style="background-image: url(https://place-hold.it/40x40?text={item.name
                            .split(' ')
                            .map((val) => val.substring(0, 1))
                            .join('')}&fontsize=16);"
                    />
                    <Text>
                        <PrimaryText>{item.name}</PrimaryText>
                        <SecondaryText>{item.description}</SecondaryText>
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
        width: calc((var(--element-participation-container-width) + var(--element-participation-container-margin) * 2) * 2);
        position: relative;
        top: 2rem;
    }

    #request-participation, #participated-student {
        display: inline-block;
        margin: calc(var(--element-participation-container-margin) / 2);
        width: var(--element-participation-container-width);
    }
</style>
