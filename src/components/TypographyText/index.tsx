import React from 'react';
import { Typography } from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';

const { Text } = Typography;

export type TypographyTextProps = {
  value: string;
  width?: number;
  config?: Omit<TextProps, 'ellipsis'>;
  ellipsisConfig?: TextProps['ellipsis'];
};

const TypographyText: React.FC<TypographyTextProps> = ({
  value,
  width = 100,
  config,
  ellipsisConfig = false,
}) => {
  return (
      <Text
        {...config}
        ellipsis={
          typeof ellipsisConfig === 'boolean'
            ? ellipsisConfig
            : { ...ellipsisConfig, tooltip: value }
        }
        style={{ width }}
      >
        {value}
      </Text>
  );
};

export default React.memo(TypographyText);
