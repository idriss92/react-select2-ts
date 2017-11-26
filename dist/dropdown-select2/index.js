"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
require("../styles/dropdown-select2.css");
var Throttler_1 = require("./Throttler");
var initialState = {
    httpCallInput: '',
    isTyping: false,
    showingStyle: 1,
    selectedValue: '',
    typingTimeOut: 0,
    data: [{ id: 0, selected: false, text: 'hello' }, { id: 1, selected: false, text: 'hello' }, { id: 2, selected: false, text: 'hello' }, { id: 3, selected: false, text: 'hello' }]
};
var WAIT_INTERVAL = 500;
var Select2 = (function (_super) {
    tslib_1.__extends(Select2, _super);
    function Select2(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.inputThrottler = new Throttler_1.default(WAIT_INTERVAL);
        _this.onChangeInput = _this.onChangeInput.bind(_this);
        return _this;
    }
    Select2.prototype.renderOptions = function (data) {
        if (data != null && data.length > 0) {
            return (React.createElement("ul", { className: "dropdown-content" }, data.map(function (item, index) {
                return React.createElement("li", { key: index, className: "dropdown-line" },
                    React.createElement("a", { className: "dropdown-line-content", href: "#" }, item.text));
            })));
        }
        return (React.createElement("ul", { className: "dropdown-content" },
            React.createElement("li", { className: "dropdown-line" },
                React.createElement("a", { className: "dropdown-line-content" }, "No results founds"))));
    };
    // callAjax() {
    //     console.log('callAjax ' + this.state.defaultHttpCallValue)
    //     this.props.httpCall(this.state.defaultHttpCallValue)
    //         .then(
    //             x=> console.log(x.data)
    //         )
    // }
    Select2.prototype.onChangeInput = function (event) {
        var _this = this;
        var value = event.currentTarget.value;
        this.setState({ httpCallInput: value });
        this.inputThrottler.throttle(function () {
            _this.props.httpCall(value)
                .then(function (x) {
                console.log(x.data);
                _this.setState({ data: x.data });
            });
        });
    };
    Select2.prototype.render = function () {
        var _a = this.props, id = _a.id, placeholder = _a.placeholder;
        if (this.state.showingStyle === 0) {
            return React.createElement("input", { type: "text", id: id, placeholder: placeholder });
        }
        else if (this.state.showingStyle === 1) {
            return (React.createElement("div", { className: "dropdown" },
                React.createElement("input", { className: "dropdown-input", placeholder: placeholder, name: id, type: "text", value: this.state.httpCallInput, onChange: this.onChangeInput }),
                this.renderOptions(this.state.data)));
        }
        return (React.createElement("div", null));
    };
    return Select2;
}(React.Component));
exports.Select2 = Select2;
