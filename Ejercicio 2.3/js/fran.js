let string = "213a321";
//array {2,1,3,a,3,2,1}
//orden(posiciones) {0,1,3,a,3,2,1}
//array[3] = a
for(var i= 0; i<string.length; i++){
    console.log(string[i])
}

let arrayNum = [1,3,4,5,8,12,25];
for(num in arrayNum){
    console.log(arrayNum[num])
}

function recorrerNum(num){
    for(num in arrayNum){
        console.log(arrayNum[num])
    }
}

recorrerNum(4)

