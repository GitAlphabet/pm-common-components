import React from 'react';
import { Modal } from 'antd';
import type { ModalProps } from 'antd/lib/modal';

export type ModalTypeProps = {
  children: React.ReactNode;
} & ModalProps;

const Index: React.FC<ModalTypeProps> = ({ children, ...rest }) => {
  return (
    <Modal maskClosable={false} {...rest}>
      {children}
    </Modal>
  );
};

export default React.memo(Index);
