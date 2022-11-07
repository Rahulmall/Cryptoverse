import {React, useState, useEffect} from 'react'
import { Typography, Space, Layout, Menu, Button, Avatar} from 'antd'
import {Routes, Link, Route} from 'react-router-dom'
import icon from '../images/cryptocurrency.png'
import { MenuOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined, HomeOutlined} from '@ant-design/icons'
const Navbar = () => {

  const [activeMenu, setActiveMenu]=useState(true);
  const [screenSize, setScreenSize]=useState(undefined)

  useEffect(() => {
    const handleResize=()=>{
      setScreenSize(window.innerWidth)
      window.addEventListener('resize', handleResize)
      handleResize();
    }
  
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
   if(screenSize < 800){
    setActiveMenu(false)
   }
   else {
    setActiveMenu(true)
   }
  }, [screenSize])
  
  
  return (
    <div className='nav-container'>
      <div className="logo-container">
      <Avatar src={icon} size="large"/> 
        <Typography.Title level={2} className='logo'>
            <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}><MenuOutlined/></Button>
            </div>
      { activeMenu && (<Menu theme="dark">
     <Menu.Item icon={<HomeOutlined/>}>
     <Link to='/'>Homepage</Link>
     </Menu.Item>
     <Menu.Item icon={<FundOutlined/>}>
       <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
     </Menu.Item>
     <Menu.Item icon={<BulbOutlined/>}>
       <Link to='/news'>News</Link>
     </Menu.Item>
     </Menu>)}
  
    </div>
  )
}

export default Navbar