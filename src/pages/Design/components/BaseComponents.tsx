import React from 'react';
import { Collapse, CollapseProps } from 'antd';
import { CollapseItem } from '@/pages/Design/components/CollapseItem';

export const BaseComponents: React.FC = () => {
  const collapseList = [
    {
      key: 'tableType',
      label: '表格类',
      component: CollapseItem,
      children: [
        {
          id: 'proTable',
          name: '高级表格',
        },
        {
          id: 'editTable',
          name: '编辑表格',
        },
      ],
    },
    {
      key: 'formType',
      label: '表单类',
      component: CollapseItem,
      children: [
        {
          id: 'proForm',
          name: '高级表单',
        },
        {
          id: 'StepsForm',
          name: '分步表单',
        },
      ],
    },
  ];
  const items: CollapseProps['items'] = collapseList.map((item) => {
    return {
      key: item.key,
      label: item.label,
      children: <item.component dataSource={item.children} />,
    };
  });
  return <Collapse accordion items={items} bordered={false} />;
};
