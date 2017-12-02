/// <reference types="react" />
import * as React from 'react';
import '../styles/dropdown-select2.css';
import { ISelect2Properties, ISelect2State, JSonResult } from '../common';
import Throttler from './throttler';
export declare class Select2 extends React.Component<ISelect2Properties, ISelect2State> {
    inputThrottler: Throttler;
    constructor(props: ISelect2Properties);
    onChangeInput(event: React.SyntheticEvent<HTMLInputElement>): void;
    onClick(event: React.SyntheticEvent<HTMLAnchorElement>): void;
    onFocus(event: React.SyntheticEvent<HTMLDivElement>): void;
    onBlur(event: React.SyntheticEvent<HTMLDivElement>): void;
    renderOptions(data: JSonResult[]): JSX.Element;
    render(): JSX.Element;
}
