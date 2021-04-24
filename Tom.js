class Tom{
    constructor(name,weight,speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    Say(){
        console.log("meomeo")
    }
    catchJerry(jerry){
        if(this.speed >= jerry.speed){
            if (jerry.status){
                console.log("Tom catch Jerry")
                jerry.Say()
                tom.weight++
            } else {
                console.log("Chuot da chet")
            }
         } else {
            console.log("Meo khong bat duoc chuot")
        }

    }
}