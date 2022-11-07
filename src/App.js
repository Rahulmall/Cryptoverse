import logo from './logo.svg';
import './App.css';
import {Routes, Link, Route} from 'react-router-dom'
import { Typography, Space, Layout } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, Exchanges, News, Cryptodetails } from './components/index';
const App=()=> {
  return (
    <div className="App">
    <div className='navbar'><Navbar/></div>
    <div className='main'>
      <Layout>
        <div className='routes'>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/crypto/:coinId' element={<Cryptodetails/>}/>
          </Routes>
        </div>
      </Layout>
    </div>
    <div className="footer">
      <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
      Copyright © 2022 <br/>
      <Link to='/'>Cryptoverse Inc.</Link> <br/>
      All Rights Reserved
      </Typography.Title>
      <Space>
        <Link to='/'>Homepage</Link>
        <Link to='/news'>News</Link>
      </Space>
    </div>
    </div>
  );
}

export default App;
