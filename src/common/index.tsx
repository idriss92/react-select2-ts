export interface IJSonResult {
    id: number;
    text: string;
}
export class JSonResult implements IJSonResult{
    id: number;
    text: string;
    selected: boolean;
}

export interface Select2Properties {
    isMultiple?: boolean;
    allowClearButton?: boolean;
    id: string;
    placeholder: string;
    className?: string;
    minimumInputLength: number;
    maximumInputLength?: number;
    maximumSelectionLength?: number;
    language: string;
    selectedValue?: string;
    // clickHandler?: (event: any) => void;
    onOptionsClick:(event: React.SyntheticEvent<HTMLAnchorElement>) => void;
    onSelect?:(event: any) => void;
    httpCall:(inputValue: any) => Promise<{data: JSonResult[]}>;
}

export interface Select2State{
    showingStyle: number;
    data: JSonResult[];
    selectedValue: string;
    httpCallInput: string;
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
