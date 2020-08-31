let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

const chooseStations = function (stations) {
  // Your code in here ...
  let approStations = [];
  for (let station of stations) {
    // be careful with the combination with || and &&, which would make the && meaningless 
    //because only one operand beside the || is true, the whole statement became true  
    if(station[1] >= 20 && station[2] === 'school' || station[1] >= 20 && station[2] === 'community centre'){
      approStations.push(station[0]);
    }
  }
  return approStations;
}


console.log(chooseStations(stations));
