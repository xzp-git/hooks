

const Home = (props) => {
    console.log('Home',props);
    return(
        <div>Home
            <button onClick={() => props.history.push('/user')} >跳到user</button>
        </div>
    )
}

export default Home