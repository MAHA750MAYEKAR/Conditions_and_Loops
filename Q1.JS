//SWITCH STATEMENT



let day="SUNDAY";
let day1=day.toLowerCase();//since user can give input in upper or lower case

switch (day1) {
    case "monday":
        console.log("its begining of the week.");
        
        break;
    case "tuesday":
    case "wednesday":    
    case "thusday":
            console.log("its working day of the week.");
            
            break;  //breaks statement is important otherwise code below is also rendered
    case "friday":
        console.log("its almost a weekend");  
        break;  
    case "saturday":
    case "sunday":
        console.log("its weekend");  
        break;        

    default:
        console.log("its default case")
        break;
}



//ELSE IF CONDITION

let number="0"
number1=parseInt(number)
if (number1>0) {
    console.log("its positive no");    
}
else if( number1<0){
    console.log("its negative no");
}
else{
    console.log("its zero");
}