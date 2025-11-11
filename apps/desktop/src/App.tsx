import { Layout, Menu, theme } from 'antd';
import {
  RadarChartOutlined,
  FileAddOutlined,
  TeamOutlined,
  AlertOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.tsx';
import RequestsPage from './pages/RequestsPage.tsx';
import ApprovalsPage from './pages/ApprovalsPage.tsx';
import MonitoringPage from './pages/MonitoringPage.tsx';
import AlertsPage from './pages/AlertsPage.tsx';
import type { MenuItem } from '@strategy/shared';

const { Header, Sider, Content } = Layout;

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    path: '/dashboard',
    icon: 'dashboard'
  },
  {
    id: 'requests',
    label: '策略需求',
    path: '/requests',
    icon: 'file-add'
  },
  {
    id: 'approvals',
    label: '需求审批',
    path: '/approvals',
    icon: 'team'
  },
  {
    id: 'monitoring',
    label: '策略监控',
    path: '/monitoring',
    icon: 'radar'
  },
  {
    id: 'alerts',
    label: '风险预警',
    path: '/alerts',
    icon: 'alert'
  }
];

const iconMap = {
  dashboard: <DashboardOutlined />,
  'file-add': <FileAddOutlined />,
  team: <TeamOutlined />,
  radar: <RadarChartOutlined />,
  alert: <AlertOutlined />
};

function App() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const menu = useMemo(
    () =>
      menuItems.map((item) => ({
        key: item.path,
        icon: iconMap[item.icon as keyof typeof iconMap],
        label: item.label
      })),
    []
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ color: '#fff', padding: 16, fontWeight: 600 }}>
          策略监控平台
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={menu}
          defaultSelectedKeys={['/dashboard']}
          onClick={(info) => navigate(info.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: 8
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/requests" element={<RequestsPage />} />
              <Route path="/approvals" element={<ApprovalsPage />} />
              <Route path="/monitoring" element={<MonitoringPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
