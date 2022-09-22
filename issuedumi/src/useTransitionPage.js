import React, { useState, useTransition } from 'react';
function UseTransitionPage() {
  const [resource, setResource] = useState('默认值');
  const [isPending, startTransition] = useTransition();
  return (
    <div>
    <div> useTransition 解构出来的startTransition 问题</div>
      {resource}-{isPending ? 'true' : false}
      <button
        onClick={() => {
          startTransition(() => {
            setResource('改变后');
          });
        }}
      >
        按钮
      </button>
    </div>
  );
}
export default UseTransitionPage;
