
const url=`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`


fetch(url).then((response)=>{
  
    return response.headers.get('content-type');
}).then((data1)=>{
    console.log("data 1",data1)
    return {"name":"aasutosh",data:data1}
}).then((data2)=>{
    console.log("data 2",data2)
    return {"name":"bas name"}
})
.then((data3)=>{
    console.log("data 3",data3)
}).catch((err)=>{
    console.log("error ",err)

})