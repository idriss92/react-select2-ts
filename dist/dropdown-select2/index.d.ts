/// <reference types="react" />
import * as React from 'react';
import '../styles/dropdown-select2.css';
import { Select2Properties, Select2State, JSonResult } from '../common';
export declare class Select2 extends React.Component<Select2Properties, Select2State> {
    constructor(props: Select2Properties);
    componentDidUpdate(): void;
    renderOptions(data: JSonResult[]): JSX.Element;
    callAjax(): void;
    onChangeInput(event: any): void;
    render(): JSX.Element;
}
