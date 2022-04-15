<script>
    import "codemirror/mode/javascript/javascript";
    import "codemirror/mode/clike/clike.js";
    import "codemirror/addon/edit/closebrackets.js";
    import "codemirror/theme/dracula.css";

    import CodeMirror from "../component/codeMirror.svelte";
    import Button, { Group, Label } from "@smui/button";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";

    const code = `public class Main {\n\tpublic static void main(String[] args) {\n\t}\n}`;
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
    let codes = [{ id: 1, text: `Main` }];
    let editor;
</script>

<div>
    <Group variant="outlined">
        {#each codes as code}
            <Button on:click={() => {}} variant="outlined">
                <Label>{code.text}</Label>
            </Button>
        {/each}
    </Group>
    <Paper>
        <CodeMirror bind:editor {options} class="editor" />
    </Paper>
    <Button variant="raised" class="button-shaped-round">제출</Button>
</div>
