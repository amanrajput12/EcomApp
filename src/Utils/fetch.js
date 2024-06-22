export default function  fetchData(url,options){
    console.log("options in fetch",options);
return new Promise(async(resolve)=>{
const response =  await fetch(`${url}`,options)
console.log(url);
const dataproduct = await response.json()
console.log(dataproduct);

resolve({dataproduct})

}
)
}