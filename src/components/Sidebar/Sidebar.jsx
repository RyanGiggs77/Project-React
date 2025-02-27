// components/Sidebar/Sidebar.js
import React from 'react';
import { Layout } from 'antd';
import LogoC from '../../assets/symbol.svg';
import MenuList from './MenuList';
import { menuItems } from './menuItems'

const { Sider } = Layout;

const Sidebar = ({ collapsed, collapsedWidth, onCollapse }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth={collapsedWidth}
      breakpoint="md"
      width={192}
      trigger={null}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#ECF4E9',
        transition: 'all 0.2s',
      }}
    >
      <div className="flex items-center justify-center text-costum-green text-2xl font-bold p-4">
        <img src={LogoC} alt="logo" className="w-8 h-8 px-1 mr-1" />
        {!collapsed && 'COINEST'}
      </div>
      <MenuList  items={menuItems} collapsed={collapsed} />
    </Sider>
  );
};

export default Sidebar;