/// 
///Keep this in mind!
    $(document).ready(function() {
    
   get.JSON(
       "http://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=384b90ab8ec4f24f794710df80764a4a"
      
       function(response) {
        console.log(response);
        $("body").append("<img src=" + response.data.visibility.wind.speed.deg.gust + ">");
      });
      
     function info {
         
     }
});