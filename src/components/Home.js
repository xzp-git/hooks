

const Home = (props) => {
    console.log('Home',props);
    return(
        <div>Home
            <button onClick={() => props.history.push('/user',{name:'用户中心'})} >跳到user</button>
            <button onClick={() => props.history.push({pathname:'/user',state:{name:'用户中心'}})} >跳到user</button>
        </div>
    )
}

export default Home