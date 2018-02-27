import * as React from 'react';
import { create } from 'react-test-renderer';
import * as enzyme from 'enzyme';
import * as sinon from 'sinon';
import { ISelect2Properties, ISelect2State, JSonResult } from '../../src/common/index';
import { Select2 } from '../../src/dropdown-select2/';
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter()});

describe('Select2 component', () => {
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
  it('shoud create select2 component', () => {
    const component = create(
      <Select2 {...props} {...initialState} />    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Select2 />', () => {
  const loadOptions = (input: any): Promise<{data: JSonResult[]}> => {
    return Promise.resolve({ data: [{id: 1, text: 'hello'} as JSonResult] });
  };
  const onOptionsClick = sinon.spy();
  const initialState: ISelect2State = {
    hideUl: false,
    inputValue: '',
    isLoading: false,
    isValueSelected: false,
    data: [{id: 1, text: 'hello'} as JSonResult]
  };

  const props: ISelect2Properties = {
    maximumInputLength: 3,
    maximumSelectionLength: 2,
    id: 'unique',
    language: 'en',
    minimumInputLength: 3,
    placeholder: 'placeholder',
    loadOptions: loadOptions,
    onOptionsClick: onOptionsClick
  };

  // it('simulates click events', () => {
  //   const wrapper = enzyme.shallow(<Select2 {...props} {...initialState} />);
  //   wrapper.find('a').simulate('onMouseDown');
  //   expect(onOptionsClick.calledOnce).toEqual(true);
  // });

  it('render the right placeholder', () => {
    const wrapper = enzyme.mount(<Select2 {...props} {...initialState} />);
    expect(wrapper.props().placeholder).toEqual(props.placeholder);
  });
});