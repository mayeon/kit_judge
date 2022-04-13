<script>
    import "codemirror/mode/javascript/javascript";
    import "codemirror/mode/clike/clike.js";
    import "codemirror/theme/dracula.css";

    import CodeMirror from "../component/codeMirror.svelte";
    import { onMount } from "svelte";
    const code = `public class Main {\n\tpublic static void main(String[] args) {\n\t}\n}`;
    const options = {
        matchBrackets: true,
        mode: "text/x-java",
        lineNumbers: true,
        lineWrapping: true,
        value: code,
        theme: "dracula",
    };
    let editor;
    let cursor_activity = false;
    onMount(() => {
        console.log("Editor: ", editor);
    });
</script>

<CodeMirror
    on:activity={() => {}}
    on:change={() => {}}
    bind:editor
    {options}
    class="editor"
/>
