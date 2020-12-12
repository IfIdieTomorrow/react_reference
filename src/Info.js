import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
        // 특정 값이 업데이이트될 때만 실행하고 싶을때는
        // useEffect함수에서 받는 빈 배열 안에 검사하고 싶은 값을 넣어준다.
    }, [name]);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeNickname = (e) => setNickname(e.target.value);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
