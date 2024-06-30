import fetchData from "../src/Utils/fetch.js";


const GetProductDetail = async(token,params,setProductDetail)=>{


    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
             'token':token
        },
        body: JSON.stringify({
            id: params
        }),
credentials: 'include'
    };
     fetchData(`/v1/product/getProductDetail`,options).then((data)=>
        setProductDetail(data.dataproduct.data))
}

export default GetProductDetail