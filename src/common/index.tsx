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
    minimumInputLength: number;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    language: string;
    onOptionsClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void;
    loadOptions: (inputValue: any) => Promise<{data: JSonResult[]}>;
}

export interface ISelect2State {
    showingStyle: number;
    data: JSonResult[];
    isValueSelected: boolean;
    inputValue: string;
    isTyping: boolean;
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
