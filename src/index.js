
import store from "./store";

store.subscribe(() => console.log(store.getState()))

store.dispatch(new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({type:'ADD1'})
    },3000)
}))

