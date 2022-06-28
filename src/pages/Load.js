import React, { Component, useRef } from 'react';
 
import LoadingBar from 'react-top-loading-bar';

const Loader = () => {
  

  return (
    <> 
        <LoadingBar ref={ref} height={2} color="red" /> 
    </>
  );
};

export default Load;
