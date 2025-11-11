import { Card, Progress, Table } from 'antd';

const monitors = [
  { key: '1', name: '市场波动监控', frequency: '5分钟', status: '正常', completion: 78 },
  { key: '2', name: '量化策略回测', frequency: '15分钟', status: '预警', completion: 52 }
];

const columns = [
  { title: '监控任务', dataIndex: 'name', key: 'name' },
  { title: '执行频率', dataIndex: 'frequency', key: 'frequency' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  {
    title: '完成度',
    dataIndex: 'completion',
    key: 'completion',
    render: (value: number) => <Progress percent={value} size="small" status={value < 60 ? 'exception' : 'active'} />
  }
];

function MonitoringPage() {
  return (
    <Card title="策略监控概览">
      <Table columns={columns} dataSource={monitors} pagination={false} />
    </Card>
  );
}

export default MonitoringPage;
