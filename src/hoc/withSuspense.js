import React, { Suspense } from 'react';

const SuspenceComponent = (Component) => {
  return (props) => (<div>
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props}/>
  </Suspense> </div>
  )
}

export default SuspenceComponent;