import React, { useRef, useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const changeFnc = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const resetFnc = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    }
    return (
        <div>
            <input ref={nameInput} name="name" value={name} onChange={changeFnc} placeholder="이름" />
            <input name="nickname" value={nickname} onChange={changeFnc} placeholder="닉네임" />
            <button onClick={resetFnc}>초기화</button>

            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;