import { List, Tag } from 'antd-mobile';

const alerts = [
  { id: 'a1', title: '策略#21 触发风险阈值', level: '高', triggeredAt: '2024-01-12 11:20' },
  { id: 'a2', title: '策略#6 数据延迟', level: '中', triggeredAt: '2024-01-12 09:52' }
];

function AlertsPage() {
  return (
    <List header="风险预警">
      {alerts.map((alert) => (
        <List.Item
          key={alert.id}
          description={`触发时间：${alert.triggeredAt}`}
          extra={<Tag color={alert.level === '高' ? 'danger' : 'warning'}>{alert.level}</Tag>}
        >
          {alert.title}
        </List.Item>
      ))}
    </List>
  );
}

export default AlertsPage;
