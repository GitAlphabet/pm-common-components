import React from 'react';
var EmptyWrap = function (_a) {
    var value = _a.value, prefix = _a.prefix, suffix = _a.suffix, _b = _a.emptyContent, emptyContent = _b === void 0 ? '--' : _b;
    if (value === undefined || value === null) {
        return React.createElement(React.Fragment, null, emptyContent);
    }
    return (React.createElement(React.Fragment, null,
        prefix,
        value,
        suffix));
};
export default React.memo(EmptyWrap);
