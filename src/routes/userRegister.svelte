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
    import { passwordMatch, containNumbers } from "./customValidators";

    const form = useForm();

    const requiredMessage = "This field is required";
</script>

<main>
    <form use:form>
        <h1>회원가입</h1>
        <label for="id">아이디</label>
        <input type="text" name="id" use:validators={[required]} />
        <HintGroup for="id">
            <Hint on="required">{requiredMessage}</Hint>
        </HintGroup>

        <label for="name">이름</label>
        <input type="text" name="name" use:validators={[required]} />

        <label for="studentNum">학번</label>
        <input
            type="number"
            name="studentNum"
            use:validators={[required, minLength(8)]}
        />

        <label for="password">비밀번호</label>
        <input
            type="password"
            name="password"
            use:validators={[required, minLength(5), containNumbers(2)]}
        />
        <HintGroup for="password">
            <Hint on="required">{requiredMessage}</Hint>
            <Hint on="minLength" hideWhenRequired let:value
                >This field must have at least {value} characters.</Hint
            >
            <Hint on="containNumbers" hideWhen="minLength" let:value>
                This field must contain at least {value} numbers.
            </Hint>
        </HintGroup>

        <label for="passwordConfirmation">비밀번호 확인</label>
        <input
            type="password"
            name="passwordConfirmation"
            use:validators={[required, passwordMatch]}
        />
        <HintGroup for="passwordConfirmation">
            <Hint on="required">{requiredMessage}</Hint>
            <Hint on="passwordMatch" hideWhenRequired
                >Passwords do not match</Hint
            >
        </HintGroup><br />

        <button disabled={!$form.valid} on:click|preventDefault> 제출 </button>
    </form>
    <pre>
		{JSON.stringify($form, null, 1)}
	</pre>
</main>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }

    main {
        display: flex;
        justify-content: space-around;
    }

    pre {
        height: 80vh;
        overflow: auto;
        font-size: 12px;
    }
</style>
