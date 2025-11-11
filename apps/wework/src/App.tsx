import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  FileOutline,
  SetOutline,
  ExclamationCircleOutline
} from 'antd-mobile-icons';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import TasksPage from './pages/TasksPage.tsx';
import RequestsPage from './pages/RequestsPage.tsx';
import AlertsPage from './pages/AlertsPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';

const tabs = [
  {
    key: '/tasks',
    title: '待办',
    icon: <AppOutline />
  },
  {
    key: '/requests',
    title: '需求',
    icon: <FileOutline />
  },
  {
    key: '/alerts',
    title: '预警',
    icon: <ExclamationCircleOutline />
  },
  {
    key: '/settings',
    title: '设置',
    icon: <SetOutline />
  }
];

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
      <TabBar activeKey={location.pathname} onChange={(key) => navigate(key)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

export default App;
