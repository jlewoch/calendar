import React from 'react';
import Label from './Label';

const TopLabels = ({ dataArr = [] }) => {
  return (
    <div className="container week">
      {dataArr.map(data => (
        <Label key={data} text={data} />
      ))}
    </div>
  );
};

export default TopLabels;
