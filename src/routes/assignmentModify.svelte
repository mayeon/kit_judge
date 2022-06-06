<script>
    import { axiosInstance } from "../functions/source.js";
    import { onMount } from "svelte";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import IconButton from "@smui/icon-button";
    import Button from "@smui/button";
    import { DateInput } from "date-picker-svelte";
    import Select, { Option } from "@smui/select";
    import Card, { Content } from "@smui/card";
    import Testcase from "../component/Testcase.svelte";
    import Paper, { Title, Subtitle } from "@smui/paper";
    import { push } from "svelte-spa-router";

    import Quill from "quill";
    let quill = null;

    export let params = {};

    onMount(async() => {
        console.log(params.assignmentId);
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

        console.log("request prof classroom request");
        await axiosInstance.get("/classroom/").then(res => {
            for (let i = 0; i < res.data.length; i++) {
                classes[i] = {
                    id: res.data[i].id, 
                    className: res.data[i].name
                };
            }
        }).catch(err => {
            console.log("request prof classroom request fail : " + err);
        }).finally(() =>{
            console.log("request prof classroom request end");
        });

        console.log("assignment detail request");
        await axiosInstance.get(`/assignment/${params.assignmentId}`)
            .then(res => {
                let assigmentInfo = res.data;
                title = assigmentInfo.title;
                start = new Date(assigmentInfo.start_date);
                end = new Date(assigmentInfo.end_date);
                console.log(start)
                console.log(end);
                quill.setText(assigmentInfo.desc);
            }).catch(err => {
                console.log("assignment detail request fail : " + err);
            }).finally(() => {
                console.log("assignment detail request end");
            });

        console.log("assignment detail testcase request");
        await axiosInstance.get(`/assignment/${params.assignmentId}/testcase`)
            .then(res => {
                let testcaseInfo = res.data;
                console.log(testcaseInfo)
                for (let i = 0; i < testcaseInfo.length; i++) {
                    console.log(testcaseInfo[i].enable)
                    if (testcaseInfo[i].enable) {
                        testcases = [
                            ...testcases,
                            {id: testcaseInfo[i].id,input: testcaseInfo[i].input, output: testcaseInfo[i].output}
                        ]
                    }
                }
            }).catch(err => {
                console.log("assignment detail testcase request fail : " + err);
            }).finally(() => {
                console.log("assignment detail testcase request end");
            });
    });

    let title = "";
    let classInfo = "";
    let start = new Date();
    let end = new Date();

    let testcases = [];
    let newTestcse = [];
    let testcaseInput = "";
    let testcaseOutput = "";
    let testcaseScore ="";

    function handleKeydown(event) {
        console.log(event.key);

        if (event.keyCode == 13) {
            console.log(testcases);
            addTestCase();
            console.log(testcases);
        }
    }

    function addTestCase() {
        testcases = [
            ...testcases,
            { id: "", input: testcaseInput, output: testcaseOutput, score: testcaseScore },
        ];
        testcaseInput = "";
        testcaseOutput = "";
        testcaseScore = "";

    }

    function deleteCase(testcase) {
        console.log(testcase.id)
        if (testcase.id != "") {
            axiosInstance.delete("/testcase/" + testcase.id)
                .then(res => {
                    console.log("delete test case")
                }).catch(err => {
                    console.log("delete test case fail : " + err)
                }).finally(() => {
                    console.log("delete test case end")
                })
        }
        testcases = testcases.filter((element) => element !== testcase);
    }

    function leftPad(value) {
        if (value >= 10) {
            return value;
        }

        return `0${value}`;
    }

    function convertDateFormat(source) {
        source.setHours(source.getHours() + 9);
        return source.toISOString().substring(0, 23);
    }

    async function addAssignment() {
        try {
            const data = {
                // "classroom_id": classInfo.id,
                "title": title,
                "desc": quill.getText(0, quill.getLength()-1),
                "start_date": convertDateFormat(start), //UTC
                "end_date": convertDateFormat(end), //UTC
                // "parent_id": null
            };
            
            console.log("request prof add assignment request");
            await axiosInstance.put(`/assignment/${params.assignmentId}`, data).then(res => {
                addAssignmentTestCase(params.assignmentId);
                push("/class");
            }).catch(err => {
                console.log("request prof add assignment request fail : " + err);
            }).finally(() =>{
                console.log("request prof add assignment request end");
            });
        } catch(err) {
            console.log(err);
        }
    }

    async function addAssignmentTestCase(assignment_id) {
        try {
            let data = {
                "assignment_id": assignment_id,
            };
            
            console.log("request prof add assignment testcase request");
            for (let i = 0; i < testcases.length; i++) {
                if (testcases[i].id == "") {
                    data = {
                        ...data,
                        "input": testcases[i].input,
                        "output": testcases[i].output,
                    }
                    console.log(data)
                    await axiosInstance.post("/testcase/", data)
                        .catch(err => {
                            console.log("request prof add assignment testcase request fail : " + err);
                        }).finally(() =>{
                            console.log("request prof add assignment testcase request end");
                        });
                }
            }
        } catch(err) {
            console.log(err);
        }
    }
</script>

<svelte:head>
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<!-- <svelte:window on:keydown={handleKeydown}/> -->
<Paper class="assignment-editor-paper">
    <div class="assignment-editor-subject-title"> 
        <Textfield bind:value={title} class="assignment-editor-title">
            <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>
    </div>

    <div class="assignment-editor-start-date">
        <h1>시작일</h1>
        <DateInput bind:value={start} format="yyyy-MM-dd HH:mm" />
    </div>
    
    <div class="assignment-editor-end-date">
        <h1>종료일</h1>
        <DateInput bind:value={end} format="yyyy-MM-dd HH:mm" />
    </div>

    <main>
        <div id="editor" />
    </main>

    <div class="assignment-editor-testcase">
        <Title>테스트 케이스</Title>

        {#each testcases as testcase}
            <Testcase input={testcase.input} output={testcase.output} score={testcase.score}>
                <IconButton class="material-icons" on:click={deleteCase(testcase)}
                    >delete</IconButton
                >
            </Testcase>
            <br />
        {/each}

        <div class="assignment-editor-testcase-input">
            <Textfield
                textarea
                bind:value={testcaseInput}
                label="입력"
                input$rows={4}
                input$cols={24}
                input$resizable={false}
            >
                <HelperText slot="helper">테스트케이스의 입력을 넣어주세요.</HelperText>
            </Textfield>
        </div>

        <div class="assignment-editor-testcase-output">
            <Textfield
                textarea
                bind:value={testcaseOutput}
                label="출력"
                input$rows={4}
                input$cols={24}
                input$resizable={false}
            >
                <HelperText slot="helper"
                    >테스트케이스의 출력을 넣어주세요.</HelperText
                >
            </Textfield>
        </div>

        <!-- <div class="assignment-editor-testcase-score">
            <Textfield
                textarea
                bind:value={testcaseScore}
                label="점수"
                input$rows={4}
                input$cols={7}
                input$resizable={false}
                on:keydown={handleKeydown}
            >
                <HelperText slot="helper"
                    >테스트케이스의 점수를 넣어주세요.</HelperText
                >
            </Textfield>
        </div> -->

        <IconButton class="material-icons assignment-editor-testcase-add" on:click={addTestCase}
            >add</IconButton
        >
    </div>
</Paper>
<br />

<Button variant="raised" class="button-shaped-round" on:click={addAssignment}>제출</Button>

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
