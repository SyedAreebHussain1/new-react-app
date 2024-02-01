import React from 'react';
import { ConfigProvider } from 'antd';
import Dashboard from './components/Dashboard';
import "./App.css"
const App: React.FC = () => {
  return (
    <ConfigProvider>
    <Dashboard />
    </ConfigProvider>
  );
};
export default App;
