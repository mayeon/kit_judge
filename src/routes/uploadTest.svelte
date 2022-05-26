<script>
    import { axiosPost } from "../functions/restAPI";
    import IconButton from "@smui/icon-button";

    const url = "http://localhost:3000/testDB";

    function upload() {
        let file = document.getElementsByName('img')[0].files[0];

        let formData = new FormData();
        formData.append("uploadFile", file, file.name);

        const config = {
            headers: { "Content-Type" : "multipart/form-data"}
        };
        
        axiosPost(url, {data: formData}, config).then((res) => console.log(res));
    }

    function upload2() {
        let text = document.getElementsByName('text').value;
        console.log(text)
        
        axiosPost(url, {data: text}).then((res) => console.log(res));
    }
</script>

<div>
    <input type="file" name="img" />
    <br>
    <IconButton class="test-button" on:click={upload}>전송</IconButton>
    <br>
    <input name="text" /><br>
    <br>
    <IconButton class="test-button" on:click={upload2}>전송</IconButton>
</div>