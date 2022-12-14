import React from 'react'
import { Row, Col, Typography } from 'antd'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import millify from 'millify'



const {Title}=Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice=[];
  const coinTimeStamp=[];
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i+=1) {
    coinPrice.push(coinHistory?.data?.history?.[i].price);
    coinTimeStamp.push(new Date((coinHistory.data.history[i].timestamp*1000)).toLocaleDateString());
   
    
  }
  
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
   <>
   <Row className='chart-header'>
    <Title level={2} className='chart-title'>{coinName} Price chart </Title>
    <Col className='price-change'> Change: {coinHistory?.data?.change}</Col>
    <Col className='current-price'> Current {coinName} Price : {currentPrice}</Col>
   
   </Row>
   <Line  data={data} options={options} />

   </>
  )
}

export default LineChart