import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bullet } from '@ant-design/plots';

const MyBullet = () => {
  const data = [
    {
      title: 'followers',
      ranges: [40, 70, 100],
      followers: [80],
      target: 85,
    },
  ];
  const config = {
    data,
    measureField: 'followers',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],
      measure: '#5B8FF9',
      target: '#39a3f4',
    },
    xAxis: {
      line: null,
    },
    yAxis: false,
    label: {
      target: true,
    },
    // Custom legend
    legend: {
      custom: true,
      position: 'bottom',
      items: [
        {
          value: 'good',
          name: 'Good',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFbcb8',
              r: 5,
            },
          },
        },
        {
          value: 'bad',
          name: 'Bad',
          marker: {
            symbol: 'square',
            style: {
              fill: '#FFe0b0',
              r: 5,
            },
          },
        },
        {
          value: 'Excellent',
          name: 'Excellent',
          marker: {
            symbol: 'square',
            style: {
              fill: '#bfeec8',
              r: 5,
            },
          },
        },
        {
          value: 'target value',
          name: 'Target value',
          marker: {
            symbol: 'square',
            style: {
              fill: '#5B8FF9',
              r: 5,
            },
          },
        },
      ],
    },
  };
  return <Bullet {...config} />;
};

export default MyBullet;
