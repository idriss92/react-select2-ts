import * as React from 'react';
import * as _  from 'lodash';
import {OptionsProps} from '../common';

const Options: React.StatelessComponent<OptionsProps> = props =>{
     _.map(props.options).map(x=> {
        return <option value={x.id} key={x.id}>{x.text}</option>
    });
}

export default Options