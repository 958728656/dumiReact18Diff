import React, { startTransition, useEffect } from 'react';
function UpdatePriorityPage() {
  let [state, setState] = React.useState('');
  useEffect(() => {
    console.log(state);
  }, [state]);
  const update = () => {
    startTransition(() => setState((state) => state + 'A'));
    setState((state) => state + 'B');
    startTransition(() => setState((state) => state + 'C'));
    setState((state) => state + 'D');
  };
  return (
    <>
      lane优先级赛道更新 setState更新打印日志
      <div>{state}</div>
      <button onClick={update}>更新</button>
    </>
  );
}
export default UpdatePriorityPage;
