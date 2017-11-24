/// <reference types="react" />
import * as React from 'react';
import 'select2';
import 'select2/dist/css/select2.min.css';
import './index';
import { SelectProperties } from '../common';
export declare class Select extends React.Component<SelectProperties, {}> {
    constructor(props: SelectProperties);
    componentDidMount(): void;
    renderOptions(): JSX.Element[];
    initilizeConf(): void;
    render(): JSX.Element;
}
