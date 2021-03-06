export interface IJSonResult {
    id: number;
    text: string;
}
export class JSonResult implements IJSonResult {
    id: number;
    text: string;
    selected: boolean;
    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.selected = false;
    }
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
    required?: boolean;
    propsValue?: string | number;
    onOptionsClick: (event: React.SyntheticEvent<HTMLAnchorElement>) => void;
    loadOptions: (inputValue: any) => Promise<{data: JSonResult[]}>;
}

export interface ISelect2State {
    data: JSonResult[];
    isValueSelected: boolean;
    inputValue: string | number;
    isLoading: boolean;
    hideUl: boolean;

}
