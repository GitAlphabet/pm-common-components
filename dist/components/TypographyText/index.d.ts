import React from 'react';
import type { TextProps } from 'antd/lib/typography/Text';
export declare type TypographyTextProps = {
    value: string;
    width?: number;
    config?: Omit<TextProps, 'ellipsis'>;
    ellipsisConfig?: TextProps['ellipsis'];
};
declare const _default: React.NamedExoticComponent<TypographyTextProps>;
export default _default;
