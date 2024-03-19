import React from 'react';
import styles from '../styles/componentLibrary.module.less';
import { Tabs, TabsProps } from 'antd';
import { BaseComponents } from '@/pages/Design/components/BaseComponents';

export const ComponentLibrary: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '组件',
      children: <BaseComponents />,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={`flex align-center ${styles.title}`}>
        <span className={styles.titleText}>组件库</span>
      </div>
      <Tabs
        className={styles.tabs}
        defaultActiveKey="1"
        items={items}
        tabBarStyle={{
          padding: '0 20px',
          backgroundColor: '#ffffff',
        }}
      />
    </div>
  );
};
