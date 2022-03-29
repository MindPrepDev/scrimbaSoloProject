let inputVal = document.getElementById("input-value")

//length
let m = document.querySelector("span[id='m']");
let ft = document.querySelector("span[id='ft']");
//volume
let lt = document.querySelector("span[id='lt']");
let gal = document.querySelector("span[id='gal']");
//mass
let kg = document.querySelector("span[id='kg']");
let pound = document.querySelector("span[id='pound']");

inputVal.addEventListener("input", unitConverter);


//Creating a function that convertLength(), convertVolume() & convertMass()
function unitConverter() {
   //Get input from user
   let input = document.querySelector("input").value;
      //length converter
      let meters = (input * 3.28084).toFixed(3);
      m.textContent = input + " meters" + " = " + meters + " feet";
      let feet = (input/3.28084).toFixed(3);
      ft.textContent = input + " feet" + " = " + feet + " meters";
      //volume converter
      let volGal = (input / 4.546).toFixed(3);
      lt.textContent = input + " litres" + " = " + volGal + " gallons";
      let  voLt= (input*4.546).toFixed(3);
      gal.textContent = input + " gallons" + " = " + voLt + " litres";
       //mass converter
       let pd = (input*2.20462).toFixed(3);
       kg.textContent = input + " kilograms" + " = " + pd + " pounds";
       let  kilo = (input/2.20462).toFixed(3);
       pound.textContent = input + " pounds" + " = " + kilo + " kilograms";
      
}
