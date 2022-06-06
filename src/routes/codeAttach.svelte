<script>
    import { axiosInstance } from "../functions/source.js";
    import Button, { Group, Label } from "@smui/button";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import { axios, sourceURL } from "../functions/source.js"
    import { push } from "svelte-spa-router";

    export let params = {};

    let file = new FormData();

    function addFiles() {
        let fileData = document.getElementById("file-data").files;
        if (file.get("file")) {
            alert("이미 파일이 존재합니다.")
        } else {
            addTagInFile(fileData[0]); // 단일 선택이므로 첫 요소만
        }

        file.append("desc", "");
        document.querySelector("input[type=file]").value = "";
    }

    function addTagInFile(uploadFile) {
        file.append("file", uploadFile, uploadFile.name);

        let uploadedFile = document.createElement("div");
        uploadedFile.setAttribute("class", "file");
        uploadedFile.setAttribute("id", "file");

        let uploadedFileName = document.createElement("p");
        uploadedFileName.setAttribute("class", "file-name");
        uploadedFileName.innerHTML = uploadFile.name;
        uploadedFile.appendChild(uploadedFileName);

        let uploadedFileDeleteBtn = document.createElement("a");
        uploadedFileDeleteBtn.setAttribute("class", "file-delete");
        uploadedFileDeleteBtn.innerHTML = "x";
        uploadedFileDeleteBtn.onclick = function() {
            removeFile(this);
        }
        uploadedFile.appendChild(uploadedFileDeleteBtn);

        let attachedFiles = document.getElementById("uploaded-files");
        attachedFiles.appendChild(uploadedFile);
    }

    function removeFile(obj) {
        let p = obj.parentElement;
        file.delete(p.id);
        p.remove();
    }

    function uploadFile() {
        const config = {
            headers: { "Content-Type" : "multipart/form-data" }
        };

        axiosInstance.post(`/assignment/${params.assignmentId}/submit`, file, config)
            .then(res => {
                console.log(res.data)
                push("/class");
            }).catch(err => {
                console.log(err);
                const errStatus = err.response.status;
                if(errStatus == 520) {
                    alert("확장자가 일치하지 않습니다. (.zip, .java)");
                } else if(errStatus == 521) {
                    alert("파일을 업로드하지 않았습니다.");
                }
            }).finally(() => console.log("submit assignment"));
    }
</script>

<div class="code-container">
    <Paper>
        <input name="file" type="file" id="file-data" on:change={addFiles} />

        <div id="uploaded-files"> 

        </div>
        <Button form="submit-assignment" variant="raised" class="code-submit-button button-shaped-round" on:click={uploadFile} >제출</Button>
    </Paper>

</div>

<style>

</style>