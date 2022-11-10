//parent Vehicle class

class Vehicle {
    constructor(manufacturer,model,color){
        this.manufacturer = manufacturer
        this.model = model
        this.color = color 
        this.miles = 0
    }
    
    Drive(){
        this.miles += 10
        console.log(`You drove your ${this.model} and it now has ${this.miles} miles on it`)
    }
    parentFunction(){
        return 'This is coming from the parent !'
    }
}
   




class M5 extends Vehicle {
    constructor(color){
        //super is a special function that allows us to call the constructor
        //of the parent class (Vehicle)
        //Vehicle class expects 3 arguments
        //manufacturer,model and color
        super("BMW","M5",color)
        this.hp = 616
        this.tq = 553
    }
    printSpecSummary() {
        console.log(
            `BMW M5 with a 4.4L V8 twin turbo engine packin ${this.hp}HP and ${this.tq}LBS of torque.`
            )
        }
        childFunction(){
            const message = super.parentFunction()
            console.log(message)
        }
    }
    
