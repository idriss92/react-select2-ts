"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
require("../styles/dropdown-select2.css");
var throttler_1 = require("./throttler");
var initialState = {
    hideUl: false,
    inputValue: '',
    isValueSelected: false,
    typingTimeOut: 0,
    data: []
};
var WAIT_INTERVAL = 500;
var Select2 = (function (_super) {
    tslib_1.__extends(Select2, _super);
    function Select2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.inputThrottler = new throttler_1.default(WAIT_INTERVAL);
        ['onChangeInput', 'onClick', 'onFocus', 'onBlur'].forEach(function (name) {
            _this[name] = _this[name].bind(_this);
        });
        return _this;
    }
    Select2.prototype.onChangeInput = function (event) {
        var _this = this;
        var _a = this.props, loadOptions = _a.loadOptions, minimumInputLength = _a.minimumInputLength;
        var target = event.currentTarget;
        var value = target.value;
        this.setState({ inputValue: value });
        this.inputThrottler.throttle(function () {
            if (minimumInputLength !== undefined && value.trim().length >= minimumInputLength) {
                loadOptions(value)
                    .then(function (x) {
                    _this.setState({ data: x.data });
                });
            }
        });
    };
    Select2.prototype.onClick = function (event) {
        this.props.onOptionsClick(event);
        var inputValue = event.currentTarget.text;
        this.setState({ inputValue: inputValue, isValueSelected: true, hideUl: true });
    };
    Select2.prototype.onFocus = function (event) {
        this.setState({ hideUl: false, isValueSelected: false });
    };
    Select2.prototype.onBlur = function (event) {
        this.state.isValueSelected ? this.setState({ hideUl: true }) : this.setState({ hideUl: true, inputValue: '' });
    };
    Select2.prototype.renderOptions = function (data) {
        var _this = this;
        if (data != null && data.length > 0) {
            return (React.createElement("ul", { className: "dropdown-content", hidden: this.state.hideUl }, data.map(function (item, index) {
                return React.createElement("li", { key: index, className: "dropdown-line" },
                    React.createElement("a", { className: "dropdown-line-content", href: "#", onMouseDown: _this.onClick }, item.text));
            })));
        }
        return (React.createElement("ul", { className: "dropdown-content", hidden: this.state.hideUl },
            React.createElement("li", { className: "dropdown-line" },
                React.createElement("a", { className: "dropdown-line-content" }, "No results founds"))));
    };
    Select2.prototype.render = function () {
        var _a = this.props, id = _a.id, placeholder = _a.placeholder;
        if (this.state.data === undefined || this.state.data.length === 0) {
            return (React.createElement("div", { className: "dropdown", onFocus: this.onFocus, onBlur: this.onBlur },
                React.createElement("input", { className: "dropdown-input", autoComplete: "off", autoCapitalize: "off", type: "text", name: id, id: id, placeholder: placeholder, value: this.state.inputValue, onChange: this.onChangeInput })));
        }
        if (this.state.data.length > 0) {
            return (React.createElement("div", { className: "dropdown", onFocus: this.onFocus, onBlur: this.onBlur },
                React.createElement("input", { className: "dropdown-input", autoComplete: "off", autoCapitalize: "off", placeholder: placeholder, name: id, id: id, type: "text", value: this.state.inputValue, onChange: this.onChangeInput }),
                this.renderOptions(this.state.data)));
        }
        return React.createElement("div", { className: "dropdown", onFocus: this.onFocus, onBlur: this.onBlur });
    };
    return Select2;
}(React.Component));
exports.Select2 = Select2;
