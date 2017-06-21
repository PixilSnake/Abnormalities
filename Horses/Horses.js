class Horse {
  constructor(name, stamina) {
    this.name = name;
    this.stamina = stamina; // lower the number, the more
    this.speed = 0;
    this.position = 0;
  }

  accelerate() {
    this.speed += this.stamina;
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
        c.accelerate();
        c.move();


    }
  }

  checkFinish() {
    var Finish = false;
    for (var i = 0; i < this.horses.length; i++) {
      var c = this.horses[i];
      if(c.position > 5000) {
        Finish = true;
      }
    }
    return Finish;
  }

  simulate() {
    while(!this.checkFinish()) {
      this.simulateRound();
    }
    for(var i = 0; i < this.horses.length; i++) {
      console.log(this.horses[i]);
    }
  }
}

var horse1 = new Horse("Fast", 3);
var horse2 = new Horse("SlowNSteady", 1);
var race = new RaceSim([horse1, horse2]);


race.simulate();
