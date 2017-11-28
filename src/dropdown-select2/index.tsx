import * as React from 'react';
import '../styles/dropdown-select2.css';
import { Select2Properties, Select2State, JSonResult } from '../common';
import Throttler from './Throttler'

const initialState: Select2State = {
    hideUl: false,
    httpCallInput: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue: '',
    typingTimeOut: 0,
    data:[ { id: 1, text: 'hello1', selected: false}, { id: 2, text: 'hello2', selected: false}]
}

const WAIT_INTERVAL = 500;

export class Select2 extends React.Component<Select2Properties, Select2State>{
    inputThrottler: Throttler;

    constructor(props: Select2Properties) {
        super(props);
        this.state = initialState;
        this.inputThrottler = new Throttler(WAIT_INTERVAL);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>) {
        const {httpCall, minimumInputLength } = this.props;
        console.log('onChange input event');
        let target = event.currentTarget;
        let value: string = target.value;
        this.setState({ httpCallInput: value });
        this.inputThrottler.throttle(() => {
            if (value.trim().length >= minimumInputLength) {
                httpCall(value)
                .then(x => {
                    console.log(x.data);
                    this.setState({ data: x.data });
                });
            }
        });
    }

    onClick(event: React.SyntheticEvent<HTMLAnchorElement>) {
        console.log('onClick')
        console.log(event);
        this.props.onOptionsClick(event);
        console.log(event.currentTarget.text);
        let httpCallInput = event.currentTarget.text; 
        this.setState({ httpCallInput });
    }

    onFocus(event: React.SyntheticEvent<HTMLDivElement>) {
        console.log('onFocus event is launched');
        this.setState({ hideUl: false });
    }

    onBlur(event: React.SyntheticEvent<HTMLDivElement>) {
         console.log('onBlur event is launched');
        this.setState({ hideUl: true, httpCallInput: '' });
    }

    renderOptions(data: JSonResult[]) {
        if (data != null && data.length > 0) {
            return (
                <ul className="dropdown-content" hidden={this.state.hideUl}>
                    {data.map((item, index) => {
                        return <li key={index} className="dropdown-line"><a className="dropdown-line-content" href="#" onClick={this.onClick}>{item.text}</a></li>
                    })}
                </ul>
            );
        }
        return (
            <ul className="dropdown-content" hidden={this.state.hideUl}>
                <li className="dropdown-line"><a className="dropdown-line-content">No results founds</a></li>
            </ul>)
            ;
    }

    render() {
        const { id, placeholder, className } = this.props;
        if (this.state.data == undefined || this.state.data.length == 0) {
            return (
                <div className={className} onFocus={this.onFocus} onBlur={this.onBlur}>
                    <input className="dropdown-input" autoComplete="off" autoCapitalize="off" type="text" name={id} id={id} placeholder={placeholder} value={this.state.httpCallInput} onChange={this.onChangeInput} />
                </div>
            )
        }
        else if (this.state.data.length > 0) {
            return (
                <div className={className} onFocus={this.onFocus} onBlur={this.onBlur}>
                    <input className="dropdown-input" autoComplete="off" autoCapitalize="off" placeholder={placeholder} name={id} id={id} type="text" value={this.state.httpCallInput} onChange={this.onChangeInput} />
                    {this.renderOptions(this.state.data)}
                </div>
            );
        }
        return (
            <div onFocus={this.onFocus} onBlur={this.onBlur}></div>
        );
    }
}

