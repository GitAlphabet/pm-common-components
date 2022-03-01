var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Typography } from 'antd';
var Text = Typography.Text;
var TypographyText = function (_a) {
    var value = _a.value, _b = _a.width, width = _b === void 0 ? 100 : _b, config = _a.config, _c = _a.ellipsisConfig, ellipsisConfig = _c === void 0 ? false : _c;
    return (React.createElement(Text, __assign({}, config, { ellipsis: typeof ellipsisConfig === 'boolean'
            ? ellipsisConfig
            : __assign(__assign({}, ellipsisConfig), { tooltip: value }), style: { width: width } }), value));
};
export default React.memo(TypographyText);
