/* eslint-disable no-useless-constructor */
import React , { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import './style.css'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    // componentWillMount() {
    //     console.log('componentWillMount-----将要挂在')
    // }

    // componentDidMount() {
    //     console.log('componentWillMount-----挂在完成')
    // }
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate-----更新完成渲染完成')
    // }
    
    render(){
        return (
            <Fragment>
                {/* sdf */}
                <div>
                    <label htmlFor="input">增加服务</label>
                    <input ref={(input)=>{this.input=input}} id="input" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {
                        this.state.list.map((item,index) => {
                            return(
                                <XiaojiejieItem content={item} index={index} key={item + index} deleteItem={this.deleteItem.bind(this)} />
                            ) 
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange() {
        this.setState({ inputValue: this.input.value})
    }
    addList(e) {
        this.setState({ 
            list:[this.state.inputValue,...this.state.list],
            inputValue:''
        }, ()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
        
    }
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({ 
            list:list
        })

    }
}

export default Xiaojiejie