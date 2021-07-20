import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionType'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handelChange = this.handelChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return (  
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} value={this.state.inputValue} onChange={this.handelChange}  style={{width:'250px'}} />
                    <Button type="primary" onClick={this.handleClick}>123</Button>
                </div>
                <div>
                    <List bordered  dataSource={this.state.list} renderItem={(item, index)=>(<List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}></List>
                </div>
            </div>
        );
    }
    handelChange(e) {
        const action = {
            type:CHANGE_INPUT,
            value:e.target.value,
        }
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
    handleClick() {
        const action = {
            type:ADD_ITEM,
        }
        store.dispatch(action)
    }
    handleDeleteItem(index) {
        const action = {
            type:DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }
}
export default TodoList;