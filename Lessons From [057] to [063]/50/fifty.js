function ageInTime(theAge) {
    timeUnites=["seconds","minutes","hours","days","weeks","months","years"]
    operators=[31556926,525948.766,8765.81277,365.242199,52.177457,12,1]
    if(theAge>10 && theAge<100){
        for(let i=0; i<timeUnites.length; i++){
            console.log(`Your age by ${timeUnites[i]} is ${theAge*operators[i]}`)
        }
    }else{
        console.log(`Age Out Of Range`)
    }

  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(20); // Months Example => 456 Months