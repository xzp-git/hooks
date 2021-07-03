import React from 'react';
import ReactDOM from 'react-dom';

//自定义hooks,只要说一个函数以use开头并且里面调用了别的hooks
function useRequest(url) {
  let limit = 5 //每页的条数
  let [offset,setOffset] = React.useState(0) //偏移量
  let [data,setData] = React.useState([])//列表

  function loadMore() {
    setData(null) //?????
    fetch(`${url}?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    .then(pageData => {
      setData([...data,...pageData]);
      setOffset(offset+pageData.length)
    }) 
  }
  //第一次渲染的时候，先调用一次loadMore加载第一页
  React.useEffect(loadMore,[])
  return [data, loadMore ]
}

function App() {
  const [users, loaderMore] = useRequest('http://localhost:8000/api/users')
  
  if (users === null) {
    return <div>加载中.......</div>

  }

  return (
    <div>
       <ul>
        {
          users.map((user,index) => <li key={user.id}>{user.id}:{user.name}</li>)
        }
      </ul>
      <button onClick={loaderMore}>加载更多</button>
    </div>
    )

}

ReactDOM.render(<App />,document.getElementById('root'))