import { Button, Space, Table, Tag } from 'antd';

const columns = [
  { title: '策略名称', dataIndex: 'name', key: 'name' },
  { title: '负责人', dataIndex: 'owner', key: 'owner' },
  { title: '状态', dataIndex: 'status', key: 'status', render: (status: string) => <Tag>{status}</Tag> },
  { title: '更新时间', dataIndex: 'updatedAt', key: 'updatedAt' },
  {
    title: '操作',
    key: 'actions',
    render: () => (
      <Space>
        <Button type="link">查看</Button>
        <Button type="link">编辑</Button>
      </Space>
    )
  }
];

const data = [
  { key: '1', name: '交易策略优化', owner: 'Alice', status: '草稿', updatedAt: '2024-01-12' },
  { key: '2', name: '风险对冲调整', owner: 'Bob', status: '提交审批', updatedAt: '2024-01-11' }
];

function RequestsPage() {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Space>
        <Button type="primary">新建策略需求</Button>
        <Button>导出</Button>
      </Space>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Space>
  );
}

export default RequestsPage;
