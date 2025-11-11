import { Button, Form, Input, TextArea } from 'antd-mobile';

function RequestsPage() {
  return (
    <div style={{ padding: '16px' }}>
      <Form
        footer={
          <Button block type="submit" color="primary">
            提交需求
          </Button>
        }
      >
        <Form.Item label="策略名称" name="name" rules={[{ required: true }]}> 
          <Input placeholder="请输入策略名称" />
        </Form.Item>
        <Form.Item label="策略目标" name="objective" rules={[{ required: true }]}> 
          <Input placeholder="请输入策略目标" />
        </Form.Item>
        <Form.Item label="详细描述" name="description">
          <TextArea placeholder="补充策略需求的详细信息" rows={4} />
        </Form.Item>
      </Form>
    </div>
  );
}

export default RequestsPage;
