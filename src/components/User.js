

const User = (props) => {

    console.log('user',props);
    return(
        <div>
            User
            <button type='button' onClick={() => props.history.goBack()}>返回</button>
        </div>
    )
    
}

export default User