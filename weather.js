    
  const apiKey="5a9ae29678583c43a6ddb0f5ecd31b13";
//const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric"
  const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

  const searchBar= document.querySelector(" .search  input") //why is this working class name k beech itna space diya hai maine
  const searchBtn= document.querySelector(" .search  button")
  const weatherIcon=document.querySelector(".weather_icon")
 
  async function checkWeather(cityName){
      const response= await fetch(apiUrl + cityName + `&appid=${apiKey}`);
      if(response.status==404){
        //document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="block";

        document.querySelector(".city").innerHTML="Invalid city ";
        document.querySelector(".temp").innerHTML="-";
        document.querySelector(".humidity").innerHTML="";
        document.querySelector(".wind").innerHTML="-";

      }
      else{

        var data=await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
  
        //to update the image
       if(data.weather[0].main=="Clouds"){
          weatherIcon.src="images/clouds.png";
       }
       else if(data.weather[0].main=="Clear"){
          weatherIcon.src="images/clear.png";
       } 
       else if(data.weather[0].main=="Rain"){
          weatherIcon.src="images/rain.png";
       }
       else if(data.weather[0].main=="Drizzle"){
          weatherIcon.src="images/drizzle.png";
       }
       else if(data.weather[0].main=="Mist"){
          weatherIcon.src="images/mist.png";
       }
  
    document.querySelector(".weather").style.display="block";
    //document.querySelector(".error").style.display="none";

      }

     

  }

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
  })

  