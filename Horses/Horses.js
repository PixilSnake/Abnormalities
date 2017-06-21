class Horse {
  constructor(name, efficiency) {
    this.name = name;
    this.efficiency = efficiency; // lower the number, the more efficient
    this.energy = 100;
    this.speed = 0;
    this.position = 0;
  }

  accelerate() {
    this.energy -= this.efficiency;
    this.speed += 1;
  }

  brake() {
    this.speed -= 1;
  }

  move() {
    this.position += this.speed;
  }

  stop() {
    this.speed = 0;
  }
}



class RaceSim {
  constructor(horses) {
    this.horses = horses;
  }

  simulateRound() {
    for(var i = 0; i < this.horses.length; i++) {
      var c = this.horses[i];
      if(c.energy > 0) { // if it has fuel
        c.accelerate();
        c.move();
      } else {
        c.stop();
      }
    }
  }

  checkAllOut() {
    var allOut = true;
    for (var i = 0; i < this.horses.length; i++) {
      var c = this.horses[i];
      if(c.fuel > 0) {
        allOut = false;
      }
    }
    return allOut;
  }

  simulate() {
    while(!this.checkAllOut()) {
      this.simulateRound();
    }
    for(var i = 0; i < this.horses.length; i++) {
      console.log(this.horses[i]);
    }
  }
}

var car1 = new Horse("Fast", 3);
var car2 = new Horse("SlowNSteady", 1);
var race = new RaceSim([car1, car2]);

race.simulate();
