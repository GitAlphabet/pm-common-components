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
import React, { useState, useCallback } from 'react';
import ProTable from '@ant-design/pro-table';
var scroll = { x: 'max-content' };
var CommonTable = function (props) {
    var _a = useState('middle'), size = _a[0], setSize = _a[1];
    var handleSizeChange = useCallback(function (s) { return setSize(s); }, []);
    return (React.createElement(ProTable, __assign({ scroll: scroll, rowKey: "id", tableAlertRender: false, rowSelection: false, columnEmptyText: "--", size: size, onSizeChange: handleSizeChange }, props)));
};
var MemodCommonTable = React.memo(CommonTable);
export default MemodCommonTable;
