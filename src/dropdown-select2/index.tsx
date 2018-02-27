import * as React from 'react';
import * as classnames from 'classnames';
import '../styles/dropdown-select2.css';
import { ISelect2Properties, ISelect2State, JSonResult } from '../common';
import Throttler from './throttler';

const initialState: ISelect2State = {
    hideUl: false,
    inputValue: '',
    isValueSelected: false,
    isLoading: false,
    data: []
};

const WAIT_INTERVAL = 500;

export class Select2 extends React.Component<ISelect2Properties, ISelect2State> {
    inputThrottler: Throttler;

    constructor(props: ISelect2Properties) {
        super(props);
        this.state = initialState;
        this.inputThrottler = new Throttler(WAIT_INTERVAL);
        ['onChangeInput', 'onClick', 'onFocus', 'onBlur'].forEach(
            name => {
                this[name] = this[name].bind(this);
            }
        );
    }

    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>) {
        const { loadOptions, minimumInputLength } = this.props;
        const target = event.currentTarget;
        let value: string = target.value;
        this.setState({ inputValue: value, isValueSelected: false });
        this.inputThrottler.throttle(() => {
            this.setState({ isLoading: true });
            if (minimumInputLength !== undefined && value.trim().length >= minimumInputLength) {
                loadOptions(value)
                    .then(x => {
                        this.setState({ data: x.data, isLoading: false });
                    });
            }
        });
    }

    onClick(event: React.SyntheticEvent<HTMLAnchorElement>) {
        this.props.onOptionsClick(event);
        const inputValue = event.currentTarget.text;
        this.setState({ inputValue, isValueSelected: true, hideUl: true });
    }

    onFocus(event: React.SyntheticEvent<HTMLDivElement>) {
        this.setState({ hideUl: false, isValueSelected: false });
    }

    onBlur(event: React.SyntheticEvent<HTMLDivElement>) {
        this.state.isValueSelected ?
            this.setState({ hideUl: true }) : this.setState({ hideUl: true, inputValue: '' });
        this.setState({ data: [] });
    }

    renderOptions(data: JSonResult[]) {
        if (data != null && data.length > 0) {
            return (
                <ul className="dropdown-content" hidden={this.state.hideUl}>
                    {data.map((item, index) => {
                        return <li key={index} className="dropdown-line">
                            <a
                                className="dropdown-line-content"
                                key={item.id}
                                id={item.id.toString()}
                                href="#"
                                onMouseDown={this.onClick}
                            >
                                {item.text}
                            </a>
                        </li>;
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
        const { id, placeholder } = this.props;
        const { data, inputValue, isValueSelected } = this.state;
        if (data === undefined || data.length === 0) {
            return (
                <div className={classnames('dropdown')} onFocus={this.onFocus} onBlur={this.onBlur}>
                    <input
                        className={!isValueSelected ? 'dropdown-input' : 'dropdown-input error-input'}
                        autoComplete="off"
                        autoCapitalize="off"
                        type="text"
                        name={id}
                        id={id}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={this.onChangeInput}
                        required={!isValueSelected}
                    />
                </div>
            );
        }
        if (data.length > 0) {
            return (
                <div className={classnames('dropdown')} onFocus={this.onFocus} onBlur={this.onBlur}>
                    <input
                        className={!isValueSelected ? 'dropdown-input' : 'dropdown-input error-input'}
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={placeholder}
                        name={id}
                        id={id}
                        type="text"
                        value={inputValue}
                        onChange={this.onChangeInput}
                        required={!isValueSelected}
                    />
                    {this.renderOptions(data)}
                </div>
            );
        }
        return <div className={classnames('dropdown')} onFocus={this.onFocus} onBlur={this.onBlur} />;
    }
}

