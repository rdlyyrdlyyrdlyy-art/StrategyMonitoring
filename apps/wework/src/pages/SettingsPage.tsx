import { Button, List, Switch } from 'antd-mobile';

function SettingsPage() {
  return (
    <List header="设置">
      <List.Item extra={<Switch defaultChecked />}>消息推送</List.Item>
      <List.Item extra={<Switch />}>免打扰</List.Item>
      <List.Item extra={<Button size="mini" color="primary">同步权限</Button>}>
        同步桌面端权限
      </List.Item>
    </List>
  );
}

export default SettingsPage;
