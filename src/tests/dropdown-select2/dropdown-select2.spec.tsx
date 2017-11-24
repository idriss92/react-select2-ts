// import * as React from 'react';
// import { shallow, configure } from 'enzyme';
// import { test } from 'ava';
// import * as Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter()})
// import { Select2Properties } from '../../common';
// import { Select2 } from '../../dropdown-select2'

// test("init", t => {
    
//     const props: Select2Properties = {
//         allowClearButton: true,
//         maximumInputLength: 3,
//         maximumSelectionLength: 2,
//         className: '',
//         isMultiple: true,
//         url:'',
//         useCache: true,
//         idKey: '',
//         labelKey: '',
//         id: 'unique',
//         language: 'en',
//         minimumInputLength: 3,
//         placeholder: 'placeholder',
//         clickHandler: () => console.log('hello')
//     };

//     const wrapper = shallow(<Select2 {...props}  />)

//     t.is(wrapper.find('select').text(), props.placeholder)
// })