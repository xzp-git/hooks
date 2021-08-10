import React from "react";
import actions from "../store/actions/counter1";
import { connect } from "react-redux";

class Counter2 extends React.Component{

    render(){
        const {number} = this.props
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={ this.props.add2}>add2+</button>
                <button onClick={ this.props.minus2}>minus2-</button>

            </div>
        )
    }
}

let mapStateToProps = state => state.Counter2
export default connect(mapStateToProps,actions)(Counter2)
