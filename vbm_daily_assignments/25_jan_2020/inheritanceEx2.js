var Weapon = function(damage,kill,illegal){
    this.damage = damage;
    this.kill = kill;
    this.illegal = illegal;
}

var Knife = function(type,sharp,damage){
    this.type = type;
    this.sharp = sharp;
    this.damage = damage;
}

var t = new Weapon(10,true,"maybe");
var t__proto__ = new Knife("metal","Very Sharp",100);
console.log(t.damage);
console.log(t__proto__.damage);