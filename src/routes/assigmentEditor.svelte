<script>
    import { onMount } from "svelte";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import Button, { Group, Label } from "@smui/button";

    import Quill from "quill";
    let quill = null;

    onMount(() => {
        let container = document.getElementById("editor");
        quill = new Quill(container, {
            modules: {
                toolbar: [
                    [
                        { header: 1 },
                        { header: 2 },
                        "blockquote",
                        "link",
                        "image",
                        "video",
                    ],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "ordered" }],
                    [{ align: [] }],
                    ["clean"],
                ],
            },
            placeholder: "Type something...",
            theme: "snow", // or 'bubble'
        });
    });

    let title = "";
    let className = "";

    import { DateInput } from "date-picker-svelte";
    let date = new Date();
    let date1 = new Date();

    import Select, { Option } from "@smui/select";

    let classes = ["자연어처리", "알고리즘", "프로그래밍 입문"];
    let value = "";
</script>

<svelte:head>
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<Textfield bind:value={title} label="제목">
    <HelperText slot="helper">Helper Text</HelperText>
</Textfield>
<Select bind:value label="과목명">
    <Option value="" />
    {#each classes as className}
        <Option value={className}>{className}</Option>
    {/each}
</Select>
<h1>시작일</h1>
<DateInput bind:value={date} format="yyyy-MM-dd HH:mm" />
<h1>종료일</h1>
<DateInput bind:value={date1} format="yyyy-MM-dd HH:mm" />
<main>
    <div id="editor" />
</main>
<Button variant="raised" class="button-shaped-round">제출</Button>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    #editor {
        height: 350px;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
