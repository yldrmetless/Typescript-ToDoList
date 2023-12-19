class emptyOrFull<T>{
    private elements: T[] = []
    constructor(private size:number){

    }

    empty():boolean{
        return this.elements.length === 0
    }
    full():boolean{
        return this.elements.length === this.size
    }

    push(element:T):void {
        if(this.elements.length === this.size){
            console.error("Array is full")
        }
        this.elements.push(element)
    }
    pop():T{
        if(this.elements.length === 0){
            console.error("Array is empty")
        }
        return this.elements.pop()
    }
}

let numbers = new emptyOrFull<number>(5)

function randomNumbers(low:number, high:number){
    return Math.floor(Math.random() * (high - low + 1) + low) 
}

while(!numbers.full()){
    let x = randomNumbers(1,10)
    console.log(`Push ${x} into the array`);
    numbers.push(x)
}
while(!numbers.empty()){
    let x = numbers.pop()
    console.log(`Pop ${x} from the array`)
}