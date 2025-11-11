import { Badge, Button, List } from 'antd';

const approvals = [
  {
    id: '101',
    title: '策略需求：信用风险预警模型优化',
    applicant: 'Chen',
    submittedAt: '2024-01-10 09:30'
  },
  {
    id: '102',
    title: '策略需求：资产配置自动化调度',
    applicant: 'Ding',
    submittedAt: '2024-01-11 10:10'
  }
];

function ApprovalsPage() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={approvals}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button key="approve" type="link">
              通过
            </Button>,
            <Button key="reject" type="link" danger>
              驳回
            </Button>
          ]}
        >
          <List.Item.Meta
            title={<Badge status="processing" text={item.title} />}
            description={`申请人：${item.applicant} · 提交时间：${item.submittedAt}`}
          />
        </List.Item>
      )}
    />
  );
}

export default ApprovalsPage;
