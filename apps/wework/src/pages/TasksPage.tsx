import { List, Tag } from 'antd-mobile';

const tasks = [
  {
    id: 't1',
    title: '审批策略：量化调仓优化',
    status: '待审批',
    createdAt: '2024-01-12 09:12'
  },
  {
    id: 't2',
    title: '处理预警：宏观指标异常',
    status: '处理中',
    createdAt: '2024-01-12 08:32'
  }
];

function TasksPage() {
  return (
    <List header="我的待办">
      {tasks.map((task) => (
        <List.Item
          key={task.id}
          description={`创建时间：${task.createdAt}`}
          extra={<Tag color={task.status === '待审批' ? 'primary' : 'warning'}>{task.status}</Tag>}
        >
          {task.title}
        </List.Item>
      ))}
    </List>
  );
}

export default TasksPage;
