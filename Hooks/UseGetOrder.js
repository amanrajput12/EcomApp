import fetchData from "../src/Utils/fetch.js"


const GetOrder = (token,user,dispatch,orders)=>{

    const options = {
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'token':token,
            'user':user
        },
        body:JSON.stringify({
            user:user
        }),
 credentials: 'include'
       }

       fetchData('/v1/order/get',options).then((data)=>{
        dispatch(orders(data.dataproduct))
        console.log("on order get",data)}
    )
}

export default GetOrder