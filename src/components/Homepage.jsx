import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import {Routes, Link, Route} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Cryptocurrencies, News} from './index'
import Loader from './Loader'
const Homepage = () => {
  const {data, isFetching}=useGetCryptosQuery(10);
  console.log(data);
  if(isFetching) return <Loader/>
  const globalStats=data?.data?.stats;
  return (
   <>
   <Typography.Title level={2} className='heading'>
    Global Crypto Stats
   </Typography.Title>
   <Row>
    <Col span={12}><Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)}/></Col>
    <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
    <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
    <Col span={12}><Statistic title='Total 24hrs Volume' value={millify(globalStats.total24hVolume)}/></Col>
   </Row>
  <div className='home-heading-container'>
    <Typography.Title level={2}>Top 10 Cryptocurrencies in the World</Typography.Title>
    <Typography.Title level={3}><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
  </div>
   <Cryptocurrencies simplified/>
   <div className='home-heading-container'>
    <Typography.Title level={2}>Cryptocurrency news around the world</Typography.Title>
    <Typography.Title level={3}><Link to='/news'>Show More</Link></Typography.Title>
     </div>
     <News simplified/>
   </>
  
  )
}

export default Homepage