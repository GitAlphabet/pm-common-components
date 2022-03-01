import React, { useMemo } from 'react';
import classNames from 'classnames';
import _compact from 'lodash/compact';
import _head from 'lodash/head';
import _tail from 'lodash/tail';
import { Divider, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './index.less';
var defaultActions = [];
var OtherActionList = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? [] : _b;
    var menu = (React.createElement(Menu, { className: styles.menuWrapper }, actions.map(function (action, index) { return (React.createElement(Menu.Item, { key: index }, action)); })));
    return (React.createElement(React.Fragment, null,
        React.createElement(Divider, { type: "vertical" }),
        React.createElement(Dropdown, { placement: "bottomCenter", overlay: menu, trigger: ['click'] },
            React.createElement("a", { className: classNames('ant-dropdown-link', styles.actionLink), href: "#" },
                React.createElement(DownOutlined, null)))));
};
var ActionList = function (_a) {
    var _b = _a.actions, actions = _b === void 0 ? defaultActions : _b;
    var computedActions = _compact(actions);
    var firstAction = _head(computedActions);
    var otherActions = _tail(computedActions);
    var renderOtherActions = useMemo(function () {
        var len = otherActions.length;
        switch (len) {
            case 0:
                return null;
            case 1:
                return (React.createElement(React.Fragment, null,
                    React.createElement(Divider, { type: "vertical" }),
                    otherActions[0]));
            default:
                return React.createElement(OtherActionList, { actions: otherActions });
        }
    }, [otherActions]);
    return (React.createElement(React.Fragment, null,
        firstAction,
        renderOtherActions));
};
export default React.memo(ActionList);
