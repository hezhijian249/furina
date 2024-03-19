import React from 'react';
import { DatabaseOutlined, AlignRightOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import styles from '../styles/leftPanel.module.less';
import { ComponentLibrary } from '@/pages/Design/components/ComponentLibrary';

export const LeftPanel: React.FC = () => {
  const items = [
    {
      key: '1',
      label: '',
      children: '',
      icon: <AlignRightOutlined />,
    },
    {
      key: 'componentLibrary',
      label: '',
      children: <ComponentLibrary />,
      icon: <DatabaseOutlined />,
    },
  ];
  return (
    <Tabs
      className={styles.tabs}
      defaultActiveKey="componentLibrary"
      tabPosition={'left'}
      items={items}
    />
  );
};
