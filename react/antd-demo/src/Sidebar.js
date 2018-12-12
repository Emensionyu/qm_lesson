import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { sidebarData, groupKey } from './SidebarData';

const { Sider } = Layout;
const { SubMenu, Item} = Menu;
class Sidebar extends Component {
  state = {
    openKeys: [''],
    selectedKeys: [''],
    itemName: '',
    rootSubmenuKeys: groupKey
  }
  render () {
    const { openKeys, selectedKeys } = this.state;
    const SideTree = sidebarData.map(item => (
      <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.title.icon}/>
            <span>{item.title.text}</span>
          </span>
        }>
        {
          item.children && item.children.map(menuItem => (
            <Item
              key={menuItem.key}
              onClick={()=>{
                  this.setState({
                      selectedKeys:[menuItem.key]
                  });
                  document.title=menuItem.text;
              }

              }
              >
              <Link to={menuItem.path}>{menuItem.text}</Link>
            </Item>
          ))
        }
      </SubMenu>
    ));
    return (
      <Sider
        collapsible
        breakpoint="lg">
        <Menu 
          subMenuOpenDelay={0.3}
          theme="dark"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          onOpenChange={this.OpenChange}
          >
          {SideTree}
        </Menu>
      </Sider>
    )
  }
  OpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }
}
export default Sidebar
