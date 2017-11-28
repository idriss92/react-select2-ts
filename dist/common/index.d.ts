/// <reference types="react" />
export interface IJSonResult {
    id: number;
    text: string;
}
export declare class JSonResult implements IJSonResult {
    id: number;
    text: string;
    selected: boolean;
}
export interface Select2Properties {
    allowClearButton?: boolean;
    id: string;
    placeholder: string;
    minimumInputLength: number;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    language: string;
    onOptionsClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void;
    loadOptions: (inputValue: any) => Promise<{
        data: JSonResult[];
    }>;
}
export interface Select2State {
    showingStyle: number;
    data: JSonResult[];
    isValueSelected: boolean;
    inputValue: string;
    isTyping: boolean;
    typingTimeOut: number;
    hideUl: boolean;
}
export interface SelectProperties {
    data: IJSonResult[];
    placeholder: string;
    className: string;
    uniqueName: string;
    searchable: boolean;
}
