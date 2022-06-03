<script>
    import Button, { Group, Label } from "@smui/button";
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import { axios, sourceURL } from "../functions/source.js"

    let formData = new FormData();

    function addFiles() {
        let fileData = document.getElementById("file-data").files;
        console.log(fileData);
        
        let attachedFiles = document.getElementById("uploaded-files");
        for (let i = 0; i < fileData.length; i++) {
            formData.append("uploaded-file-" + i, fileData[i], fileData[i].name);

            let uploadedFile = document.createElement("div");
            uploadedFile.setAttribute("class", "uploaded-file");
            uploadedFile.setAttribute("id", "uploaded-file-" + i);

            let uploadedFileName = document.createElement("p");
            uploadedFileName.setAttribute("class", "uploaded-file-name");
            uploadedFileName.innerHTML = fileData[i].name;
            uploadedFile.appendChild(uploadedFileName);

            let uploadedFileDeleteBtn = document.createElement("a");
            uploadedFileDeleteBtn.setAttribute("class", "uploaded-file-delete");
            uploadedFileDeleteBtn.innerHTML = "x";
            uploadedFileDeleteBtn.onclick = function() {
                removeFile(this);
            }
            uploadedFile.appendChild(uploadedFileDeleteBtn);

            attachedFiles.appendChild(uploadedFile);
        }
        document.querySelector("input[type=file]").value = "";
    }

    function removeFile(obj) {
        let p = obj.parentElement;
        formData.delete(p.id);
        p.remove();
    }

    function uploadFile() {
        const config = {
            headers: { "Content-Type" : "multipart/form-data" }
        };

        axiosPost(sourceURL + "/testDB", {data: formData}, config).then((res) => console.log(res));
    }

    async function axiosPost(url, data, headers = {"content-type": "application/json; charset=UTF-8",}) {
        try {
            return await axios.post(url, data, headers);
        } catch (e) {
            console.log(e);
        }
    }
</script>

<div class="code-container">
    <Paper>
        <!-- TODO input tag -->
        <input type="file" id="file-data" multiple="multiple" on:change={addFiles} />

        <div id="uploaded-files"> 

        </div>
        <Button variant="raised" class="code-submit-button button-shaped-round" on:click={uploadFile} >제출</Button>
    </Paper>

</div>

<style>

</style>