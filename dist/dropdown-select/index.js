"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var $ = require("jquery");
require("select2");
require("select2/dist/css/select2.min.css");
require("./index");
var _ = require("lodash");
var Select = (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select(props) {
        return _super.call(this, props) || this;
    }
    Select.prototype.componentDidMount = function () {
        this.initilizeConf();
    };
    Select.prototype.renderOptions = function () {
        var data = this.props.data;
        return _.map(data, function (x) {
            return React.createElement("option", { key: x.id, value: x.id }, x.text);
        });
    };
    Select.prototype.initilizeConf = function () {
        var _a = this.props, uniqueName = _a.uniqueName, placeholder = _a.placeholder, data = _a.data, searchable = _a.searchable;
        if (searchable) {
            $("#" + uniqueName).select2({
                placeholder: placeholder,
                data: data,
                theme: 'classic'
            });
        }
    };
    Select.prototype.render = function () {
        var _a = this.props, data = _a.data, className = _a.className, uniqueName = _a.uniqueName, searchable = _a.searchable;
        if (!searchable && data.length > 0) {
            return (React.createElement("select", { className: className, name: uniqueName, id: uniqueName }, this.renderOptions()));
        }
        return (React.createElement("select", { className: className, name: uniqueName, id: uniqueName }));
    };
    return Select;
}(React.Component));
exports.Select = Select;
