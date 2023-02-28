
let w;
let value2;
let p = fetch("https://goweather.herokuapp.com/weather/NY")
p.then((value1) => {
       return value1.json()
}).then((value2)=>{
      w =value2.wind  
})

function setDaata(){
  document.getElementById("btn1").innerHTML  = w ;
}


