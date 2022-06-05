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
    import { axiosInstance, sourceURL } from "../functions/source";

    const form = useForm();
    const requiredMessage = "필수 항목입니다.";
    const data = {
        name: "",
        year: "",
        semester: "",
    };

    function handleSubmit() {
        axiosInstance
            .post("/classroom/", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
</script>

<main>
    <form use:form id="register" on:submit|preventDefault={handleSubmit}>
        <h1>강의실 추가</h1>

        <div class="input-box">
            <input
                type="text"
                class="form-control"
                name="name"
                use:validators={[required]}
                placeholder="강의실 이름"
                bind:value={data.name}
            />
            <div class="hint">
                <HintGroup for="id">
                    <Hint on="required">{requiredMessage}</Hint>
                </HintGroup>
            </div>
        </div>
        <div class="input-box">
            <input
                type="text"
                class="form-control"
                name="년도"
                use:validators={[required]}
                placeholder="년도"
                bind:value={data.year}
            />
            <div class="hint">
                <HintGroup for="id">
                    <Hint on="required">{requiredMessage}</Hint>
                </HintGroup>
            </div>
        </div>
        <div class="input-box">
            <input
                type="text"
                class="form-control"
                name="학기"
                use:validators={[required]}
                placeholder="학기"
                bind:value={data.semester}
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
