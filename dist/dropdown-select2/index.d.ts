/// <reference types="react" />
import * as React from 'react';
import '../styles/dropdown-select2.css';
import { Select2Properties, Select2State, JSonResult } from '../common';
import Throttler from './Throttler';
export declare class Select2 extends React.Component<Select2Properties, Select2State> {
    inputThrottler: Throttler;
    constructor(props: Select2Properties);
    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>): void;
    onClick(event: React.SyntheticEvent<HTMLAnchorElement>): void;
    onFocus(event: React.SyntheticEvent<HTMLDivElement>): void;
    onBlur(event: React.SyntheticEvent<HTMLDivElement>): void;
    renderOptions(data: JSonResult[]): JSX.Element;
    render(): JSX.Element;
}
