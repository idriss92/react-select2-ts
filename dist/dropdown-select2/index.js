"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
require("../styles/dropdown-select2.css");
var _ = require("lodash");
var initialState = {
    defaultHttpCallValue: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue: '',
    typingTimeOut: 0,
    data: [{ id: 0, selected: false, text: 'hello' }, { id: 1, selected: false, text: 'hello' }, { id: 2, selected: false, text: 'hello' }, { id: 3, selected: false, text: 'hello' }]
};
var Select2 = (function (_super) {
    tslib_1.__extends(Select2, _super);
    function Select2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.onChangeInput = _this.onChangeInput.bind(_this);
        return _this;
    }
    Select2.prototype.componentDidUpdate = function () {
        this.callAjax();
    };
    Select2.prototype.renderOptions = function (data) {
        return (React.createElement("div", { className: "dropdown-content" },
            React.createElement("ul", null, _.map(data).map(function (x) {
                return React.createElement("option", { value: x.id, key: x.id }, x.text);
            }))));
    };
    Select2.prototype.callAjax = function () {
        console.log('callAjax ' + this.state.defaultHttpCallValue);
        this.props.httpCall(this.state.defaultHttpCallValue).then(function () { return console.log('helo'); });
    };
    Select2.prototype.onChangeInput = function (event) {
        console.log(event.target.value);
        this.setState({ defaultHttpCallValue: event.target.value });
    };
    Select2.prototype.render = function () {
        var _a = this.props, id = _a.id, placeholder = _a.placeholder;
        if (this.state.showingStyle === 0) {
            return React.createElement("input", { type: "text", id: id, placeholder: placeholder });
        }
        else if (this.state.showingStyle === 1) {
            return (React.createElement("div", { className: "dropdown" },
                React.createElement("input", { className: "dropdown-input", placeholder: placeholder, name: id, type: "text", value: this.state.defaultHttpCallValue, onChange: this.onChangeInput }),
                this.renderOptions(this.state.data)));
        }
        return (React.createElement("div", null));
    };
    return Select2;
}(React.Component));
exports.Select2 = Select2;
