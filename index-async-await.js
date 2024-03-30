
const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`


const myPromose = (res) => {

    return new Promise((resolve, reject) => {
        console.log("----------------1")
        res.json().then((data) => {
            resolve({ data, header: res.headers.get('content-type') })
        })
        console.log("................2")

    })
}

async function myAsyncFun(){
    try {
        const response = await fetch(url);
        const data = await myPromose(response);
        console.log("mydata", data)
    } catch (e) {
        console.error("error", e)
    }
}

myAsyncFun();