var oldmodel = {
    name: "Kia Soltos",
    Wheels: 4,
    seater: 5,
    type: "Petrol",
    Companyname: "Kia Motors"
}

var newmodel = Object.create(oldmodel);

function Create(name,wheels,seater,type,Companyname){
    this.name = name,
    this.wheels = wheels,
    this.seater = seater,
    this.type = type,
    this.Companyname = Companyname
}

var newmodel = new Create("Mustangt","4","2","petrol","Fort");
console.log(newmodel);
