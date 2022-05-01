<script>
    import "codemirror/mode/javascript/javascript";
    import "codemirror/mode/clike/clike.js";
    import "codemirror/addon/edit/closebrackets.js";
    import "codemirror/theme/dracula.css";

    import CodeMirror from "../component/codeMirror.svelte";
    import Button, { Group, Label } from "@smui/button";
    import Card from "@smui/card";

    const code = `public class Main {\n\tpublic static void main(String[] args) {\n\t\t\n\t}\n}`;

    const options = {
        matchBrackets: true,
        autoCloseBrackets: true,
        mode: "text/x-java",
        lineNumbers: true,
        lineWrapping: true,
        value: code,
        theme: "dracula",
        indentUnit: 4,
    };
    let codes = [{ id: 1, text: `Main` }, {id: 0, text: '+'}];
    let editor;
</script>

<div class="code-container">
    <Group variant="outlined">
        {#each codes as code}
            <Button class="code-group" on:click={() => {}} variant="outlined">
                <Label>{code.text}</Label>
            </Button>
        {/each}
    </Group>
    <Card class="code-paper">
        <CodeMirror class="editor" bind:editor {options} />
    </Card>
    <Button variant="raised" class="code-submit-button button-shaped-round">제출</Button>

</div>
