"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
require("../styles/dropdown-select2.css");
var Throttler_1 = require("./Throttler");
var initialState = {
    hideUl: true,
    httpCallInput: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue: '',
    typingTimeOut: 0,
    data: [{ id: 0, selected: false, text: 'hello1' }, { id: 1, selected: false, text: 'hello2' }, { id: 2, selected: false, text: 'hello3' }, { id: 3, selected: false, text: 'hello4' }]
};
var WAIT_INTERVAL = 500;
var Select2 = (function (_super) {
    tslib_1.__extends(Select2, _super);
    function Select2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.inputThrottler = new Throttler_1.default(WAIT_INTERVAL);
        _this.onChangeInput = _this.onChangeInput.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        return _this;
    }
    Select2.prototype.onChangeInput = function (event) {
        var _this = this;
        var target = event.currentTarget;
        var value = target.value;
        this.setState({ httpCallInput: value });
        this.inputThrottler.throttle(function () {
            if (value.length > 0) {
                _this.props.httpCall(value)
                    .then(function (x) {
                    console.log(x.data);
                    _this.setState({ data: x.data });
                });
            }
        });
    };
    Select2.prototype.onClick = function (event) {
        // console.log(event.currentTarget.text);
        var httpCallInput = event.currentTarget.text;
        this.setState({ httpCallInput: httpCallInput });
    };
    Select2.prototype.onFocus = function (event) {
        // console.log('onFocus event is launched');
        this.setState({ hideUl: false });
    };
    Select2.prototype.onBlur = function (event) {
        // console.log('onBlur event is launched');
        this.setState({ hideUl: true });
    };
    Select2.prototype.renderOptions = function (data) {
        var _this = this;
        if (data != null && data.length > 0) {
            return (React.createElement("ul", { className: "dropdown-content", hidden: this.state.hideUl }, data.map(function (item, index) {
                return React.createElement("li", { key: index, className: "dropdown-line" },
                    React.createElement("a", { className: "dropdown-line-content", href: "#", onClick: _this.onClick }, item.text));
            })));
        }
        return (React.createElement("ul", { className: "dropdown-content", hidden: this.state.hideUl },
            React.createElement("li", { className: "dropdown-line" },
                React.createElement("a", { className: "dropdown-line-content" }, "No results founds"))));
    };
    Select2.prototype.render = function () {
        var _a = this.props, id = _a.id, placeholder = _a.placeholder;
        if (this.state.data == undefined || this.state.data.length == 0) {
            return (React.createElement("div", { className: "dropdown", onFocus: this.onFocus, onBlur: this.onBlur },
                React.createElement("input", { className: "dropdown-input", type: "text", id: id, placeholder: placeholder })));
        }
        else if (this.state.data.length > 0) {
            return (React.createElement("div", { className: "dropdown", onFocus: this.onFocus, onBlur: this.onBlur },
                React.createElement("input", { className: "dropdown-input", placeholder: placeholder, name: id, type: "text", value: this.state.httpCallInput, onChange: this.onChangeInput }),
                this.renderOptions(this.state.data)));
        }
        return (React.createElement("div", { onFocus: this.onFocus, onBlur: this.onBlur }));
    };
    return Select2;
}(React.Component));
exports.Select2 = Select2;
