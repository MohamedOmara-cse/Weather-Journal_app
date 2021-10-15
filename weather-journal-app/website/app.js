
/* Global Variables */
const apiKey='&appid=0463aac12728657ef94575df02be8116&units=metric';
const apiUrl='http://api.openweathermap.org/data/2.5/forecast?zip='

// adding Eventlistner 
document.querySelector('#generate').addEventListener('click',generateTask);



function generateTask (){
 const zipCode = document.querySelector('#zip').value;
 console.log(zipCode);
 const feeling =document.querySelector('#feelings').value;
 
 getApiData (apiUrl+zipCode+apiKey). 
 then( data=>{
     console.log(data);
    postData('/postData',{date:d ,content:feelings.value , temp:data.list[0].main.temp})
    updateDataUI('/allData');

 })

}


async function postData(url = '', data = {}) {
    // Default options are marked with *
    console.log(data);
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
        const data=await response.json();
        return data ;
    }
    catch(error)
    {console.log('error',error)}// parses JSON response into native JavaScript objects
  }


const updateUI = async()=>{
const request = await fetch('/all')
try{
const allData = await request.json();
console.log(allData)
document.getElementById('date').innerHTML = Date:${allData.date};
document.getElementById('temp').innerHTML = Temperature:${allData.temp};
document.getElementById('content').innerHTML = I feel:${allData.content};
}catch(err){
console.log('error',err);
}
}

const getApiData =async (url='')=>{
   
    const response=await fetch(url) ;
    try {
        const data=await response.json();
        return data ;
    }
    catch(error)
    {console.log('error',error)
}};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
