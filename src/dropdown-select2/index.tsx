import * as React from 'react';
import '../styles/dropdown-select2.css';
import { Select2Properties, Select2State, JSonResult } from '../common';
import Throttler from './Throttler'

const initialState: Select2State = {
    httpCallInput: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue: '',
    typingTimeOut: 0,
    data: [{ id: 0, selected: false, text: 'hello' } as JSonResult, { id: 1, selected: false, text: 'hello' } as JSonResult, { id: 2, selected: false, text: 'hello' } as JSonResult, { id: 3, selected: false, text: 'hello' } as JSonResult]
}


const WAIT_INTERVAL = 500;
export class Select2 extends React.Component<Select2Properties, Select2State>{
    inputThrottler: Throttler;

    constructor(props: Select2Properties) {
        super(props);
        this.state = initialState;
        this.inputThrottler = new Throttler(WAIT_INTERVAL);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    renderOptions(data: JSonResult[]) {
        if ( data != null &&  data.length > 0) {
            return (
                <ul className="dropdown-content">
                    {data.map((item, index) => {
                        return <li key={index} className="dropdown-line"><a className="dropdown-line-content" href="#">{item.text}</a></li>
                    })}

                </ul>
            );
        }
        return (
            <ul className="dropdown-content">
                <li className="dropdown-line"><a className="dropdown-line-content">No results founds</a></li>
            </ul>)
        ;

    }

    // callAjax() {
    //     console.log('callAjax ' + this.state.defaultHttpCallValue)
    //     this.props.httpCall(this.state.defaultHttpCallValue)
    //         .then(
    //             x=> console.log(x.data)
    //         )
    // }

    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>) {
        let value: string = event.currentTarget.value;
        this.setState({ httpCallInput: value });
        this.inputThrottler.throttle(() => {
            this.props.httpCall(value)
                .then(x => {
                    console.log(x.data);
                    this.setState({ data: x.data });
                });
        });
    }


    render() {
        const { id, placeholder } = this.props;
        if (this.state.showingStyle === 0) {
            return <input type="text" id={id} placeholder={placeholder}></input>
        }
        else if (this.state.showingStyle === 1) {
            return (
                <div className="dropdown">
                    <input className="dropdown-input" placeholder={placeholder} name={id} type="text" value={this.state.httpCallInput} onChange={this.onChangeInput} />
                    {this.renderOptions(this.state.data)}
                </div>
            );
        }
        return (
            <div></div>
        );
    }
}

