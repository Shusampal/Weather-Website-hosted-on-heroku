const city_name = document.getElementById('city');
const submit = document.getElementById('submit');
const no_output = document.getElementById('no_output');
 
const temp_1 = document.getElementById('temp');
const condition_1 = document.getElementById('condition');


const getInfo = async(event)=>{
    event.preventDefault();
    let val = city_name.value;
    if(val==='')
    {
        condition_1.innerText ='';
        temp_1.innerText ='';
        no_output.innerHTML=`<h3 style='color:white; font-size:29px'> Please Enter a city name before search</h3>`;
    }
    else{
        try{
            temp_1.innerHTML = `<div class="rotate"></div>`;
            
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=019e4f24f851f9ec78ddc828de419a2e&units=metric`;
            const response = await fetch(url);
            const data = await response.json();

            no_output.innerText ='';

            temp_1.innerHTML = `<h3 style='color:white; font-size:29px'> The Temparature is ${data.main.temp}</h3>`;

            condition_1.innerHTML = `<h3 style='color:white; font-size:29px'> The Weather Condition is ${data.weather[0].description}</h3>`;


        }
        catch{
            temp_1.innerText ='';
            temp_1.innerHTML = `<h3 >Please Enter the city Name Properly</h3>`;
            no_output.innerText ='';
        }
        
    }
}

submit.addEventListener('click',getInfo);