import React, { useState } from 'react';
import useApiHelper from './useApiHelper';
import Card from './Card';
import './App.css'

const App = () => {
  const [pageNum, setPageNum] = useState(1);
  const debounce = (fn, delay) => {
    let timeoutID;
    return function(...args){
      if(timeoutID){
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  };
  const loadUsers = () => {
    setPageNum(pageNum => pageNum + 1)
    console.log('loaduser');
  };
   const { loading, data } = useApiHelper(pageNum);
  // Binds our scroll event handler
  window.onscroll = debounce(() => {
    if (loading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      loadUsers();
    }
  }, 100);

return (
  <React.Fragment>
    <div className="row">
      {loading && <div>loading</div>}
    {data && data.map(v => <Card data={v} />)}
    </div>
  </React.Fragment>
);
}

export default App;
