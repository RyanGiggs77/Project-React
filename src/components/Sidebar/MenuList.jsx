import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const iconComponents = {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
};

const MenuList = ({ items, collapsed }) => {
  const navigate = useNavigate(); // Gunakan navigate untuk pindah halaman

  return (
    <Menu
      mode="inline"
      className="text-white h-full px-3"
      style={{ background: '#ECF4E9' }}
      onClick={({ key }) => {
        const menuItem = items.find((item) => item.key === key);
        if (menuItem && menuItem.path) {
          navigate(menuItem.path); // Navigasi ke path yang di-set
        }
      }}
    >
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          icon={iconComponents[item.icon] && React.createElement(iconComponents[item.icon])}
          className="px-8 flex items-center hover:bg-costum-greenL rounded-md"
        >
          {!collapsed && item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuList;
