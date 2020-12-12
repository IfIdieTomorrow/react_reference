import React, { Component } from 'react';

class LifeSycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props로 받아온 값을 state에 동기화 시키는 용도로 사용한다.
    // 컴포넌트가 마운트, 업데이트 될 때 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color !== prevState.color) {
            //조건에 따라 특정 값 동기화
            return { color: nextProps.color };
        }
        return null;
    }

    // 이곳에서 프레임워크의 함수 호출, 이벤트 등록, 네트워크 요청같은 비동기 작업을 처리
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props또는 state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메서드.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않습니다.
        return nextState.number & (10 !== 4);
    }

    // 컴포넌트를 DOM에서 제거할 때 실행.
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };

    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링을 완료한 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트 되기 전 색상', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color,
        };

        return (
            <div>
                {this.state.missing.value}
                <h1 style={style} ref={(ref) => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeSycleSample;
