//recreates airplane constructor and adds 10 to each maximumSpeed
function airplane (model, seatingCapacity, maximumSpeed)
  {
    this.model = model;
    this.seatingCapacity = seatingCapacity;
    this.maximumSpeed = maximumSpeed;
    this.print = function()
      {
        return "model: " + this.model + "; seating capacity: " + this.seatingCapacity + " ; maximum speed: " + this.maximumSpeed + "mph";}
//adds 10 to maximumSpeed
    this.maximumSpeed = maximumSpeed + 10;
//deletes model
    delete this.model;
//adds property averageSpeed and assigns value of 600
    this.averageSpeed = 600;
  }
  
//creates 3 vars and passes their values through airplane constructor
  var plane1 = new airplane("paper", 0, 1);
  var plane2 = new airplane("hand-glider", 1 , 100);
  var plane3 = new airplane("jet", 20 , 500);
 
 //logs vars to console
  console.log(plane1.print());
  console.log(plane2.print());
  console.log(plane3.print());
