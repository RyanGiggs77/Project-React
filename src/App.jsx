import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Promo from './pages/promo'; // Import the Promo component
import Dashboard from './pages/Dashboard'; // Import the Dashboard component

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState([]);

  console.log(user);

  const handleAddUser = (newUser) => {
    setUser([...user, {
      id: user.length + 1,
      ...newUser
    }]);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 576);
      setCollapsed(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const marginLeft = isMobile ? 0 : collapsed ? 80 : 192;

  return (
    <Router>
      <Layout className="min-h-screen">
        <Sidebar 
          collapsed={collapsed} 
          collapsedWidth={isMobile ? 0 : 80}
          onCollapse={setCollapsed}
        />
        
        <Layout className='bg-costum-white' style={{ marginLeft }}>
          <Layout.Header style={{ 
            background: '#fff', 
            padding: 0, 
            position: 'sticky', 
            top: 0, 
            zIndex: 1,
            transition: 'margin 0.2s'
          }}>
            <Header isMobile={isMobile} />
          </Layout.Header>
          
          <Content style={{ 
            margin: '24px 16px 0', 
            overflow: 'initial',
            transition: 'margin 0.2s'
          }}>
            <div style={{ 
              padding: 24, 
              background: '#fff', 
              minHeight: 'calc(100vh - 112px)',
              borderRadius: 8 
            }}>
              <Routes>
                
                <Route path="/promo" element={<Promo user={user} onAddUser={handleAddUser}/>} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
