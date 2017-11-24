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
    isMultiple?: boolean;
    allowClearButton?: boolean;
    id: string;
    placeholder?: string;
    className?: string;
    minimumInputLength?: number;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    language?: string;
    loadOptions?: any;
    clickHandler?: (event: any) => void;
    httpCall: (inputValue: any) => Promise<IJSonResult[]>;
}
export interface Select2State {
    showingStyle: number;
    data: JSonResult[];
    selectedValue: string;
    defaultHttpCallValue: string;
    isTyping: boolean;
    typingTimeOut: number;
}
export interface OptionsProps {
    options: JSonResult[];
}
export interface SelectProperties {
    data: JSonResult[];
    placeholder: string;
    className: string;
    uniqueName: string;
    searchable: boolean;
}
