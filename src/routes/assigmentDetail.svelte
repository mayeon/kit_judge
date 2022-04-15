<script lang="ts">
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";

    let valueA = "";
    let valueB = "";
    let valueC = "";
    let valueD = "";
</script>

<div class="columns margins">
    <div>
        <Textfield bind:value={valueA} label="제목">
            <HelperText slot="helper">Helper Text</HelperText>
        </Textfield>

        <pre class="status">Value: {valueA}</pre>
    </div>
</div>
