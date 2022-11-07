import {React, useState} from 'react'
import { Typography, Avatar, Row, Col, Select, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsapi'
import { useGetCryptosQuery } from '../services/cryptoApi'
const {Text, Title}=Typography;
const {Option}=Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('cryptocurrency')
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory, count:simplified? 6 : 12});
  const {data}=useGetCryptosQuery(50)
  console.log(cryptoNews);
  
  return (
<Row gutter={[8,8]} className='crypto-news-container'>
{
  !simplified && (
    <Col span={24}>
    <Select showSearch className='select-news' placeholder='Select a Crypto' optionFilterProp='children' onChange={(value)=>setNewsCategory(value)}
    filterOption={(input, option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
    <Option value='cryptocurrency'>
    Cryptocurrency
    </Option>
    {
      data?.data?.coins?.map((currency)=>(
<Option value={currency.name} key={currency.uuid}>
{currency.name}
</Option>
      ))
    }
    </Select>
    </Col>
  )
}
    {
      cryptoNews?.value?.map((news, i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
         <Card className='news-card'>
          <a href={news.url} target='_blank' rel='noreferrer'>
          <div className='news-image-container'>
          <Title level={4} className='news-title'>{news.name}</Title>
          <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
          </div>
          <Text>{news.description.length > 100? `${news.description.substring(0, 100)}...` : news.description}</Text>
          <div className='provider-container'>
            <div> <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=''/>
            <Text className='provider-name'>{news.provider[0].name}</Text>
            </div>
            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
          </div>
          </a>
         </Card>
        </Col>
          
          
      ))
    }
</Row>
  )
}

export default News