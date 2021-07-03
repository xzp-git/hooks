import React from 'react';
import ReactDOM from 'react-dom';


function Counter() {
  const [count, setCount] = React.useState(0)
  const latestCount = React.useRef(count)
  React.useEffect(() => {
    latestCount.current = count
    setTimeout(() => {
      console.log(latestCount.current);
    },3000)
  })
  return(
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

ReactDOM.render(<Counter />,document.getElementById('root'))