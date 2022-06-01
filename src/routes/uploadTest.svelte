<script>
    import axios from "axios";
    import Button from "@smui/button";

    const url = "http://localhost:3000/testDB";
    
    async function axiosPost(url, data, header = {"content-type": "application/json; charset=UTF-8",}) {
        try {
            return await axios.post(url, data, header);
        } catch (e) {
            console.log(e);
        }
    }

    function uploadFile() {
        let file = document.getElementById("file-data").files[0];

        // file preview
        let preview = document.getElementById("file-preview");
        preview.src = URL.createObjectURL(file);
        console.log(preview.src);

        // create formData & check file
        let formData = new FormData();
        formData.append("uploadFile", file, file.name);
        console.log(formData.get("uploadFile"))

        const config = {
            headers: { "Content-Type" : "multipart/form-data"}
        };
        
        axiosPost(url, {data: formData}, config).then((res) => console.log(res));
    }

    function uploadText() {
        let text = document.getElementById("text-data").value;
        axiosPost(url, {data: text}).then((res) => console.log(res));
    }
</script>

<div>
    <input type="file" name="file" id="file-data" />
    <br>
    <Button class="test-button" on:click={uploadFile}>전송</Button>

    <br>

    <input type="text" name="text" id="text-data"/>
    <br>
    <Button class="test-button" on:click={uploadText}>전송</Button>
</div>

<img id="file-preview" />