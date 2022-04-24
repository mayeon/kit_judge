<script>
    import { link } from "svelte-spa-router";
    import {
        useForm,
        Hint,
        HintGroup,
        validators,
        required,
        minLength,
        email,
    } from "svelte-use-form";
    import {
        passwordMatch,
        containNumbers,
    } from "../functions/customValidators";
    const form = useForm();
    const requiredMessage = "필수 기입 항목입니다.";
    let type = false;
</script>

<main>
    <form use:form id="register">
        <h1>회원가입</h1>

        <div class="form-check form-switch switch">
            <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                name="type"
                bind:checked={type}
            />
            <label class="form-check-label" for="type">교수자</label>
        </div>

        {#if !type}
            <div class="input-box">
                <input
                    type="number"
                    class="form-control"
                    name="studentNum"
                    use:validators={[required, minLength(8)]}
                    placeholder="학번"
                />
                <div class="hint">
                    <HintGroup for="studentNum">
                        <Hint on="required">{requiredMessage}</Hint>
                        <Hint on="minLength" hideWhenRequired let:value>
                            학번은 {value}자리 입니다.
                        </Hint>
                    </HintGroup>
                </div>
            </div>
        {/if}

        <div class="input-box">
            <input
                type="text"
                class="form-control"
                name="id"
                use:validators={[required]}
                placeholder="아이디"
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
                name="name"
                use:validators={[required]}
                placeholder="이름"
            />
            <div class="hint">
                <HintGroup for="name">
                    <Hint on="required">{requiredMessage}</Hint>
                </HintGroup>
            </div>
        </div>

        <div class="input-box">
            <input
                type="password"
                class="form-control"
                name="password"
                use:validators={[required, minLength(5), containNumbers(2)]}
                placeholder="비밀번호"
            />
            <div class="hint">
                <HintGroup for="password">
                    <Hint on="required">{requiredMessage}</Hint>
                    <Hint on="minLength" hideWhenRequired let:value>
                        최소 {value}자 이상이여야 합니다.
                    </Hint>
                    <Hint on="containNumbers" hideWhen="minLength" let:value>
                        최소 {value}개의 숫자가 필요합니다.
                    </Hint>
                </HintGroup>
            </div>
        </div>

        <div class="input-box">
            <input
                type="password"
                class="form-control"
                name="passwordConfirmation"
                use:validators={[required, passwordMatch]}
                placeholder="비밀번호 확인"
            />
            <div class="hint">
                <HintGroup for="passwordConfirmation">
                    <Hint on="required">{requiredMessage}</Hint>
                    <Hint on="passwordMatch" hideWhenRequired>
                        Passwords do not match
                    </Hint>
                </HintGroup>
            </div>
        </div>
        <br />
    </form>
    <button
        form="register"
        id="register-btn"
        class="btn btn-outline-secondary"
        disabled={!$form.valid}
        on:click|preventDefault
    >
        제출
    </button>

    <!-- <pre>
		{JSON.stringify($form, null, 1)}
        교수자 : {type}
	</pre> -->
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

    .switch {
        float: right;
        padding: 0;
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

    /* pre {
        height: 80vh;
        overflow: auto;
        font-size: 12px;
    } */
</style>
