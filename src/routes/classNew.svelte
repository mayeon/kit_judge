<script>
    import { link } from "svelte-spa-router";
    import {
        useForm,
        Hint,
        HintGroup,
        validators,
        required,
        minLength,
    } from "svelte-use-form";
    import {
        passwordMatch,
        containNumbers,
    } from "../functions/customValidators";

    const form = useForm();
    const requiredMessage = "필수 항목입니다.";
    let type = false;
</script>

<main>
    <form use:form id="register">
        <h1>강의실 추가</h1>

        <div class="input-box">
            <input
                type="text"
                class="form-control"
                name="id"
                use:validators={[required]}
                placeholder="강의실 아이디"
            />
            <div class="hint">
                <HintGroup for="id">
                    <Hint on="required">{requiredMessage}</Hint>
                </HintGroup>
            </div>
        </div>
    </form>
    <br />
    <button
        form="register"
        id="register-btn"
        class="btn btn-outline-secondary"
        disabled={!$form.valid}
        on:click|preventDefault
    >
        제출
    </button>
</main>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }

    main {
        display: block;
        text-align: center;
        width: 100%;
        max-width: 15rem;
        padding: 1rem;
        margin: auto;
        margin-top: 3rem;
    }

    #register-btn {
        float: right;
        margin-top: -1rem;
    }

    #register h1 {
        padding-bottom: 1rem;
    }

    #register .input-box {
        margin-bottom: 2rem;
    }

    #register input {
        margin-bottom: -1px;
    }

    .hint {
        position: absolute;
        height: 1.5rem;
        padding-left: 0.5rem;
        color: red;
    }
</style>
