<script>
    import { link } from "svelte-spa-router";

    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        email,
        required,
    } from "svelte-use-form";

    const form = useForm();
</script>

<form use:form>
    <h1>로그인</h1>

    <input type="text" name="id" use:validators={[required]} />
    <HintGroup for="id">
        <Hint on="required">This is a mandatory field</Hint>
    </HintGroup>

    <input type="password" name="password" use:validators={[required]} />
    <Hint for="password" on="required">This is a mandatory field</Hint>

    <button disabled={!$form.valid}>Login</button>
</form>
<a href="/user-register" use:link>회원가입</a>

<pre>
{JSON.stringify($form, null, " ")}
</pre>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>
