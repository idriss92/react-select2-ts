/// <reference types="react" />
import * as React from 'react';
import '../styles/dropdown-select2.css';
import { Select2Properties, Select2State, JSonResult } from '../common';
import Throttler from './Throttler';
export declare class Select2 extends React.Component<Select2Properties, Select2State> {
    inputThrottler: Throttler;
    constructor(props: Select2Properties);
    renderOptions(data: JSonResult[]): JSX.Element;
    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
