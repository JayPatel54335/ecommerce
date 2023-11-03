// Loading.js

import React from 'react';
import {  RingLoader } from 'react-spinners';
import './Loading.css'

const Loading = () => {
  return (
    <div className="loadingmain">
      <div className="loadingchild">
        <RingLoader color={'#123abc'} loading={true} size={50} />
      </div>
    </div>
  );
};

export default Loading;
