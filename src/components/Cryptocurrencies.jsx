import React from 'react'
import { useState, useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Row, Col, Card, Input} from 'antd'
import { Link } from 'react-router-dom'
import { current } from '@reduxjs/toolkit'
import Loader from './Loader'
const Cryptocurrencies = ({simplified}) => {
  const count=simplified? 10 : 50;
  const {data:cryptoslist, isFetching}=useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState()
  const [searchterm, setSearchterm] = useState('')
  useEffect(() => {
    const filtereddata=cryptoslist?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchterm))
    setCryptos(filtereddata)
  }, [searchterm, cryptoslist])
  if (isFetching) return <Loader/>
  console.log(cryptoslist)
  
  
  return (
  <>
 {
  !simplified && (<div className='search-crypto'>
  <Input placeholder='Search' onChange={(e)=>setSearchterm(e.target.value.toLowerCase())} />
</div>)
 } 
  <Row gutter={[8, 8]} className='crypto-card-container'>
  {
  cryptos?.map((currency)=> (

    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
    <Card  title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>} hoverable>
   <p>Price: {millify(currency.price)}</p> 
   <p>Total Market Cap: {millify(currency.marketCap)}</p>
   <p>Total Daily Change: {currency.change}%</p>
    </Card>
    </Link>
    </Col>
  )
  
  )
  }
  </Row>
  
  </>
  )
}

export default Cryptocurrencies