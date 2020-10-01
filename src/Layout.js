import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import "./App.css";
import "antd/dist/antd.css";
import FormPage from './submitval'
import Disp from './display'
const { Header, Sider, Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout theme="dark">
        <Sider theme="dark" trigger={null} collapsible collapsed={this.state.collapsed} style={{ height:'800px'}}>
          <div className="logo" >
             

          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{marginTop:"60px",height:'100%'}}>
           {/* <h2 style={{color:"white  "}}>Profile</h2> */}

            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>{alert()}}  onClick={()=>{window.location.href = "/display";}}>
             Show Data
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={()=>{window.location.href = "/add";}}>
              Add new Data
            </Menu.Item>
           
          </Menu>
        </Sider>

        
        <Layout className="site-layout">
        

          <Header className="site-layout-background" style={{ paddingLeft: 20, color:"white", position:"fixed", width:"100%"}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
        

          <Content
            className="site-layout-background"
            style={{
         
              padding: 24,
              background:"white"
             
            }}
          >

            <Router>
            <Switch>
                
          
            <Route exact path='/add' component={FormPage}    />
            <Route  path='/display' component={Disp}    />
          

            </Switch>
            </Router>

          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo