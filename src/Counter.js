import React, { Component } from 'react';

class Counter extends Component {
    // // 클래스형 컴포넌트에서 state를 사용하려면 생성자를 사용해야 한다.
    // constructor(props) {
    //     super(props);
    //     // state의 초깃값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     };
    // }
    // 생성자를 사용하지 않고 state를 설정
    state = {
        number: 0,
        fixedNumber: 0,
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1,
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    + 1
                </button>
            </div>
        );
    }
}

export default Counter;
