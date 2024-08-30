    
  const apiKey="5a9ae29678583c43a6ddb0f5ecd31b13";
//const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric"
  const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

  const searchBar= document.querySelector(" .search  input") //why is this working class name k beech itna space diya hai maine
  const searchBtn= document.querySelector(" .search  button")
  const weatherIcon=document.querySelector(".weather_icon")
  const card = document.querySelector(".card");

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
          console.log("Setting background color to clouds");
          card.style.background="linear-gradient(175deg,#f5e57e,#eeebe0,ORANGE)";
          card.style.background="linear-gradient(175deg,skyblue,#eeebe0,skyblue)";
          card.style.color="grey";
          
       }
       else if(data.weather[0].main=="Clear"){
          weatherIcon.src="images/clear.png";
         card.style.background="linear-gradient(45deg,#fe0000,#ffd500)";
         card.style.background="linear-gradient(175deg,#eeebe0,#f5e57e)";
         console.log("Setting background color to clear");
         
       } 
       else if(data.weather[0].main=="Rain"){
          weatherIcon.src="images/rain.png";
          console.log("Setting background color to rain.");
          card.style.background="linear-gradient(45deg,#fe0000,#ffd500)";
          card.style.background= "background:linear-gradient(-185deg,rgb(141, 196, 248),skyblue,rgb(187, 237, 240),rgb(195, 226, 247),rgb(207, 207, 238),rgb(154, 154, 221),rgb(117, 117, 196))"; 
         
       }
       else if(data.weather[0].main=="Drizzle"){
          weatherIcon.src="images/drizzle.png";
          console.log("Setting background color to drizzle");
          card.style.background="linear-gradient(45deg,#fe0000,#ffd500)";
         //  card.style.backgroundColor="red";
       }
       else if(data.weather[0].main=="Mist"){
          weatherIcon.src="images/mist.png";
          console.log("Setting background color to mist");
        
          card.style.background="linear-gradient(175deg,#eeebe0,#f5e57e,ORANGE)";
          
          card.style.background="linear-gradient(135deg,white,skyblue,rgb(33, 33, 95))";
          
         // card.style.backgroundColor="yellow";
       }
       else if(data.weather[0].main=="Haze"){
         weatherIcon.src="images/haze.png";
         console.log("Setting background color to rain.");
         card.style.background="linear-gradient(45deg,#fe0000,#ffd500)";
         card.style.background="linear-gradient(-185deg,#eeebe0,rgb(155, 153, 153),rgb(180, 184, 151))";  
         card.style.color="white";
      }
  
    document.querySelector(".weather").style.display="block";
    //document.querySelector(".error").style.display="none";

      }

     

  }

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
  })

  