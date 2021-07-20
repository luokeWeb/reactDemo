import React, { Component } from 'react';
import PropTypes from 'prop-types';


class XiaojiejieItem extends Component {
    state = {  }
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    //组件第一次存在dom中,函数不会被执行
    //如果已经存在dom中函数才能执行
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
    // componentWillUnmount() {
    //     console.log('child-componentWillReceiveProps')
    // }
    shouldComponentUpdate(nextProps,nextState) {
        return nextProps.content !== this.props.content
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.avname}{this.props.content}</li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number
}
XiaojiejieItem.defaultProps={
    avname:'3333'
}
export default XiaojiejieItem;