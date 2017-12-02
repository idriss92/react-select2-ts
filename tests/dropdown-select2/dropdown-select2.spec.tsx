import * as React from 'react';
import { create } from 'react-test-renderer';
import * as sinon from 'sinon';
import { ISelect2Properties, ISelect2State } from '../../src/common/index';
import { Select2 } from '../../src/dropdown-select2/';


// // import { test } from 'ava';
// import { expect } from 'chai';
// import * as React from 'react';
// import { shallow /*, configure*/ } from 'enzyme';
// import * as sinon from 'sinon';
// // import * as Adapter from 'enzyme-adapter-react-16';
// // configure({ adapter: new Adapter()});
// import { ISelect2Properties, ISelect2State } from '../../common';
// import { Select2 } from '../../dropdown-select2';

// describe('init', () => {

//     const loadOptions = (input: any) => {
//         return Promise.resolve({data: []} );
//     };
//     const onOptionsClick = sinon.spy();
//     const initialState: ISelect2State = {
//         hideUl: false,
//         inputValue: '',
//         isLoading: false,
//         isValueSelected: false,
//         data: []
//     };

//     const props: ISelect2Properties = {
//         allowClearButton: true,
//         maximumInputLength: 3,
//         maximumSelectionLength: 2,
//         id: 'unique',
//         language: 'en',
//         minimumInputLength: 3,
//         placeholder: 'placeholder',
//         loadOptions: loadOptions,
//         onOptionsClick: onOptionsClick
//     };

//     const wrapper = shallow(<Select2 {...props} {...initialState}  />);
//     wrapper.simulate('click');
//     expect(wrapper.find('div')).to.have.length(1);
//     // t.is(wrapper.find('div').text(), props.placeholder)
// });

// show components
test('Select', () => {
  const loadOptions = (input: any) => {
    return Promise.resolve({ data: [] });
  };
  const onOptionsClick = sinon.spy();
  const initialState: ISelect2State = {
    hideUl: false,
    inputValue: '',
    isLoading: false,
    isValueSelected: false,
    data: []
  };

  const props: ISelect2Properties = {
    allowClearButton: true,
    maximumInputLength: 3,
    maximumSelectionLength: 2,
    id: 'unique',
    language: 'en',
    minimumInputLength: 3,
    placeholder: 'placeholder',
    loadOptions: loadOptions,
    onOptionsClick: onOptionsClick
  };

  const component = create(
    <Select2 {...props} {...initialState} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
// test('Simple sum', () => {
//     expect(3 + 5).toBe(8);
//   });