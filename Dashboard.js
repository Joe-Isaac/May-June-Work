import React from 'react';
import MyList from './myCard';
import LegendChart from './Legend';
import MyPie from './Chart';
import { Col, Row } from 'antd';
import Card from 'antd/lib/card/Card';
import {FacebookFilled, FolderOpenOutlined, InstagramFilled, LinkedinFilled, TwitterCircleFilled} from '@ant-design/icons';
import MyLiquid from './Liquid';
import MyBullet from './MyBullet';

const Dashboard = () => {
  return (
      
    <div>
    <p><strong>Dashboard</strong></p>
    <Row>
    <Col span={8}>
    <MyList/>
    </Col>
    <Col span={16}>
    <Row style={{
        justifyContent: 'space-evenly',
        marginTop: 15,
        marginBottom: 25,
    }}>
        <Card
        hoverable={true}
        size={'small'}
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,
            marginRight: 5,
            height: 150,
            backgroundColor: '#08979c',
            color: 'white',
        }}
        >
            <>
            <p style={{
                fontFamily: 'calibri',
                fontSize: 20,
                fontWeight: 23, 
                marginBottom: 0,
                paddingBottom: 0,
                paddingTop: 10,
            }}><FolderOpenOutlined /> Operation income</p>
            <p style={{fontSize: 30, fontWeight: 45, fontFamily: 'calibri',}}>5,000,000</p>
            </>
        </Card>
        <Card
        hoverable={true}
        size={'small'}
        style={{
            fontFamily: 'calibri',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,
            marginRight: 5,
            height: 150,
            backgroundColor: '#096dd9',
            color: 'white',
        }}>
            <p style={{
                fontFamily: 'calibri',
                fontSize: 20,
                fontWeight: 23, 
                marginBottom: 0,
                paddingBottom: 0,
                paddingTop: 10,
            }}><FolderOpenOutlined /> Pharmacy income</p>
            <p style={{fontSize: 30, fontWeight: 45, fontFamily: 'calibri',}}>2,760,000</p>
        </Card>
        <Card
        hoverable={true}
        size={'small'}
        style={{
            borderRadius: 14,
            marginRight: 5,
            height: 150,
            backgroundColor: '#c41d7f',
            color: 'white',
        }}>
            <p style={{
                fontFamily: 'calibri',
                fontSize: 20,
                fontWeight: 23, 
                marginBottom: 0,
                paddingBottom: 0,
                paddingTop: 10,
            }}><FolderOpenOutlined /> Hospital expenses</p>
            <p style={{fontSize: 30, fontWeight: 45, fontFamily: 'calibri',}}>900,000</p>
        </Card>
    </Row>
    <LegendChart/>
    </Col>
    </Row>
    <br/>
    <br/>
    <Row>
    <Col span={14}>
    <p style={{marginLeft: 46, marginBottom: 0, paddingBottom: 0, fontSize: 30, fontWeight: 50, fontFamily: 'Calibri'}}>Classification of patients by age</p>
    <MyPie/>
    </Col>
    <Col span={10}>
    <p style={{marginLeft: 46, marginBottom: 0, paddingBottom: 0, fontSize: 30, fontWeight: 50, fontFamily: 'calibri'}}>Overall growth progress</p>
    <MyLiquid/>
    </Col>
    </Row>
    <br/>
    <br/>
    <Card>
    <Row>
    
    <Col span={6} >
    <Card hoverable={true} style={{display: 'flex', justifyContent: 'row', alignItems:'row', width:'100%', margin: 0, padding: 0, borderRadius: 13,}}>
        <div 
        style={{fontSize: 18, fontFamily: 'calibri', fontWeight: 50,}}>Social Counter</div>
        <div 
        style={{fontSize: 18, fontFamily: 'calibri', width: 150, margin: 1, }}>
            <FacebookFilled/> <p>1500</p></div>
        <div 
        style={{fontSize: 18, fontFamily: 'calibri', width: 120, margin: 1, }}>
            <InstagramFilled/> <p>900</p></div>
        <div 
        style={{fontSize: 18, fontFamily: 'calibri', width: 120, margin: 1, }}>
            <LinkedinFilled/> <p>233</p></div>
        <div 
        style={{fontSize: 18, fontFamily: 'calibri', width: 120, margin: 1, }}>
            <TwitterCircleFilled/> <p>74</p></div>
    </Card>
    </Col>
    <Col span={14} style={{height: 80}}>
    <MyBullet/>
    <MyBullet/>
    <MyBullet/>
    <MyBullet/>
    </Col>
    </Row>
    </Card>
    </div>
  )
}

export default Dashboard;