// import * as React from 'react';
// import * as $ from 'jquery';
// import 'select2';
// import 'select2/dist/css/select2.min.css';
// import './index'
// import * as _ from 'lodash';
// import { SelectProperties } from '../common';


// export class Select extends React.Component<SelectProperties, {}>{
//     constructor(props: SelectProperties) {
//         super(props);
//     }

//     componentDidMount() {
//         this.initilizeConf();
//     }

//     renderOptions() {
//         const { data } = this.props;
//         return _.map(data, x => {
//             return <option key={x.id} value={x.id}>{x.text}</option>
//         });
//     }

//     initilizeConf() {
//         const { uniqueName, placeholder, data, searchable } = this.props;
//         if (searchable) {
//             $(`#${uniqueName}`).select2({
//                 placeholder: placeholder,
//                 data: data,
//                 theme: 'classic'
//             });
//         }
//     }

//     render() {
//         const { data, className, uniqueName, searchable } = this.props;
//         if (!searchable && data.length > 0) {

//             return (
//                 <select className={className} name={uniqueName} id={uniqueName}>
//                     {this.renderOptions()}
//                 </select>
//             )
//         }
//         return (
//             <select className={className} name={uniqueName} id={uniqueName}>
//             </select>
//         )
//     }
// }