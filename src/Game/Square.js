import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => {this.setState({value: 'X'})}}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;