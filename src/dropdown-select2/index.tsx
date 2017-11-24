import * as React from 'react';
import '../styles/dropdown-select2.css';
import * as  _ from 'lodash';
import { Select2Properties, Select2State, JSonResult } from '../common';
import Options from './Options';
const initialState : Select2State = {
    defaultHttpCallValue: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue:'',
    typingTimeOut: 0,
    data: [{id:0, selected: false,text: 'hello'} as JSonResult, {id:1, selected: false,text: 'hello'} as JSonResult,{id:2, selected: false,text: 'hello'} as JSonResult, {id:3, selected: false,text: 'hello'} as JSonResult]
}

export class Select2 extends React.Component<Select2Properties, Select2State>{    constructor(props: Select2Properties) {
        super(props);
        this.state = initialState;
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    componentDidUpdate(){
        this.callAjax();
    }

    renderOptions(data: JSonResult[]){
        return (
            <div className="dropdown-content">
             <Options options={data} />
            </div>
        );
    }

    callAjax(){
        console.log('callAjax '+ this.state.defaultHttpCallValue)
        this.props.httpCall(this.state.defaultHttpCallValue);        
    }

    onChangeInput(event: any){
        console.log(event.target.value);
        this.setState({defaultHttpCallValue: event.target.value});
    }


    render(){
        const {id,placeholder} = this.props;
        if(this.state.showingStyle === 0){
            return <input type="text" id={id} placeholder={placeholder}></input>
        }
        else if(this.state.showingStyle === 1){
            return(
                <div className="dropdown">
                    <input className="dropdown-input" placeholder={placeholder} name={id} type="text" value={this.state.defaultHttpCallValue}  onChange={this.onChangeInput} />
                    {this.renderOptions(this.state.data)}
                </div>
            );
        }
        return (
            <div></div>
        );
    }
}

