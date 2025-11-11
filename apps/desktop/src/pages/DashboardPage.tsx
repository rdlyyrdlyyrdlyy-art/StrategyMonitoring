import { Card, Col, Row, Statistic } from 'antd';

const stats = [
  { title: '活跃策略', value: 32 },
  { title: '待审批', value: 8 },
  { title: '风险预警', value: 3 },
  { title: '近7日执行', value: 124 }
];

function DashboardPage() {
  return (
    <Row gutter={[16, 16]}>
      {stats.map((item) => (
        <Col span={6} key={item.title}>
          <Card>
            <Statistic title={item.title} value={item.value} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DashboardPage;
