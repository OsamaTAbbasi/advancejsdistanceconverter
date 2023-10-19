// (function(){


//     'use strict';

//     document.getElementById('convert').addEventListener('submit',function(e){

//         e.preventDefault();
        
//         const distance = parseFloat(document.getElementById('distance').value);
//         // distance = parseFloat(distance);
//         const answer = document.getElementById('answer');
        
//         if(distance){
//           const conversion = (distance * 1.689344).toFixed(3);
//         //   var roundedConversion = conversion.toFixed(3);
//         //   alert(conversion);
        
//         answer.innerHTML="<h2>"+distance+" miles convert to "+conversion+" kilometers</h2>";
        
//         }
//         else{
//           answer.innerHTML = "<h2>Please provide a number!</h2>"
//         }
        
//         });
// })();


var convertType = 'miles';
var heading = document.querySelector('h1');
var intro = document.querySelector('p');
var answerDiv = document.getElementById('answer');
var form = document.getElementById('convert');

document.addEventListener('keydown',function(e){


  var key = e.code;
  
  if(key === 'KeyK'){
     
    convertType = 'kilometers';
    heading.innerHTML = "Kilometer to Miles Converter";
    intro.innerHTML ="Type in a number of kilometers and click the button to convert the distance to miles."; 

  }
  else if(key === 'KeyM'){

    convertType = 'miles';
    heading.innerHTML = "Miles to Kilometers Converter";
    intro.innerHTML ="Type in a number of miles and click the button to convert the distance to kilometers."; 

  }

});

form.addEventListener('submit',function(e){
  
  e.preventDefault();
        
          var distance = parseFloat(document.getElementById('distance').value);
          var answer = document.getElementById('answer');
          
          if(distance){
            
            var conversion;

            if(convertType == "miles"){
             conversion = (distance * 1.689344).toFixed(3);  
             answer.innerHTML="<h2>"+distance+" miles convert to "+conversion+" kilometers</h2>"; 
            }
            else{
              conversion = (distance * 0.621371192).toFixed(3);
              answer.innerHTML="<h2>"+distance+" kilometers convert to "+conversion+" miles</h2>";
            }
          
          
          }
          else{
            answer.innerHTML = "<h2>Please provide a number!</h2>"
          }
          
        

});