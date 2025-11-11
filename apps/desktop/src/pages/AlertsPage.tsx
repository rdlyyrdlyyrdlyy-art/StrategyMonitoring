import { List, Tag } from 'antd';

const alerts = [
  { id: 'a1', title: '策略#32 触发预警阈值', level: '高', triggeredAt: '2024-01-12 12:32' },
  { id: 'a2', title: '策略#18 数据延迟', level: '中', triggeredAt: '2024-01-12 10:15' }
];

function AlertsPage() {
  return (
    <List
      dataSource={alerts}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <span>
                {item.title} <Tag color={item.level === '高' ? 'red' : 'orange'}>{item.level}</Tag>
              </span>
            }
            description={`触发时间：${item.triggeredAt}`}
          />
        </List.Item>
      )}
    />
  );
}

export default AlertsPage;
