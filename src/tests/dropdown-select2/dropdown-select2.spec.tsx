// import * as React from 'react';
// import { shallow, configure } from 'enzyme';
// import { test } from 'ava';
// import * as Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter()})
// import { Select2Properties, Select2State } from '../../common';
// import { Select2 } from '../../dropdown-select2'

// test("init", t => {
    
//     const loadOptions = (input: any) =>{
//         return Promise.resolve({data: []})
//     }
//     const initialState: Select2State = {
//         hideUl: false,
//         inputValue: '',
//         isTyping: false,
//         showingStyle: 1,
//         isValueSelected: false,
//         typingTimeOut: 0,
//         data:[]
//     }

//     const props: Select2Properties = {
//         allowClearButton: true,
//         maximumInputLength: 3,
//         maximumSelectionLength: 2,
//         id: 'unique',
//         language: 'en',
//         minimumInputLength: 3,
//         placeholder: 'placeholder',
//         loadOptions: loadOptions,
//         onOptionsClick: ()=> console.log('hello'),

//     };

//     const wrapper = shallow(<Select2 {...props} {...initialState}  />)

//     t.is(wrapper.find('select').text(), props.placeholder)
// })