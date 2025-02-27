import React from 'react';
import { Avatar, Space } from 'antd';
import { MessageOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const Header = ({ isMobile }) => {
  const location = useLocation();

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/promo':
        return 'Promo';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className='flex justify-between bg-white p-4'>
      <div className='flex items-center text-costum-green text-2xl font-bold'>
        {getHeaderTitle()}
      </div>
      
      <div className='flex items-center gap-4'>
        {!isMobile && (
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative flex items-center">
              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-3 pr-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}

        <Space size="middle">
          <Avatar icon={<MessageOutlined />} />
          <Avatar icon={<BellOutlined />} />
          <div className="flex items-center gap-2">
            {!isMobile && (
              <span className="w-[150px] text-costum-green text-lg font-semibold">
                Andrew Forbist
              </span>
            )}
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
              size={40}
            />
          </div>
        </Space>
      </div>
    </div>
  );
};

export default Header;