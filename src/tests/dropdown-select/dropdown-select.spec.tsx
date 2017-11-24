// import * as React from 'react';
// import { shallow, configure } from 'enzyme';
// import { test } from 'ava';
// import * as Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter()})
// import { SelectProperties, JSonResult } from '../../common';
// import { Select } from '../../dropdown-select'

// test("init", t => {
//     const data: JSonResult[] = [{id:'1', text:'h'},{id:'2', text:'f'}];
//     const props: SelectProperties = {
//         data: data,
//         searchable: true,
//         uniqueName: 'unique',
//         className: 'className',
//         placeholder: 'placeholder'
//     };

//     const wrapper = shallow(<Select {...props}  />)

//     t.is(wrapper.find('select').text(), props.placeholder)
// })