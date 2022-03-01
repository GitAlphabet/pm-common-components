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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Pagination } from 'antd';
import styles from './index.less';
var Index = function (_a) {
    var current = _a.current, pageSize = _a.pageSize, total = _a.total, restProps = __rest(_a, ["current", "pageSize", "total"]);
    var showTotal = function (totalCount) {
        return "\u7B2C" + ((current - 1) * pageSize + 1) + "-" + current * pageSize + "\u6761/\u603B\u5171" + totalCount + "\u6761";
    };
    return (React.createElement("div", { className: styles.wrapper },
        React.createElement(Pagination, __assign({ size: "small", total: total || 0, showTotal: showTotal, showSizeChanger: true, current: current, pageSize: pageSize, pageSizeOptions: ['10', '20', '50'] }, restProps))));
};
export default React.memo(Index);
