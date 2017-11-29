export interface IJSonResult {
    id: number;
    text: string;
}
export class JSonResult implements IJSonResult {
    id: number;
    text: string;
    selected: boolean;
}

export interface ISelect2Properties {
    allowClearButton?: boolean;
    id: string;
    placeholder: string;
    minimumInputLength?: number;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    multipleSelection?: boolean;
    language: string;
    onOptionsClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void;
    loadOptions: (inputValue: any) => Promise<{data: JSonResult[]}>;
}

export interface ISelect2State {
    data: JSonResult[];
    isValueSelected: boolean;
    inputValue: string;
    typingTimeOut: number;
    hideUl: boolean;
}

export interface ISelectProperties {
    data: IJSonResult[];
    placeholder: string;
    className: string;
    uniqueName: string;
    searchable: boolean;
}
