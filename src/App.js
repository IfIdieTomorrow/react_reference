import React, { Component } from 'react';
import LifeSycleSample from './LifeSycleSample';
import ErrorBoundary from './ErrorBoundary';

//랜덤 색상을 지정
function getRandom() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000',
    };

    handleClick = () => {
        this.setState({
            color: getRandom(),
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤색상</button>
                <ErrorBoundary>
                    <LifeSycleSample color={this.state.color} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
