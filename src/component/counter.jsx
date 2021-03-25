import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags: ['tag1','tag2','tag3']
    };

    styles={
        fontSize: 20,
        fontWeight: 'bold'
    };

    handleIncrement(){
        console.log('Increment clicked')
    }

    render() { 
        let classes = this.getBadgeClasses();
        return (  <div>
                    <span style={this.styles} className={classes}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
                </div>
                );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.state.count === 0? "Zero" : this.state.count;
    }
}


 
export default Counter;