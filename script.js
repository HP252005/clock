//console.log("I am student ")

//var name=prompt(" I am taking input ")
//console.log(name);


//for(let i=1;i<=10;i++){
  //  console.log(i);

//}


//let n=1;
//while(n<=10){
   // console.log(n);
   // n++;
//}
// let n=prompt(" Give me number");
// if(n%2==0){
    // console.log(" i am even");
// }
// else{
    // console.log(" i am odd");
// }

// let marks=prompt(" enter your marks");
// if(marks>80 && marks<90){
    // console.log(" A grade");
// }
// else if (marks>70 && marks<=80){
    // console.log("B grade")
// }
// else if (marks>60 && marks<=70){
    // console.log("C grade")
// }
// else {
    // console.log("D grade");
// }

// let fname=prompt("Give fname");
// let lname=prompt(" give lname");
// let msg="Hello" +fname+" "+lname+" You are using JS!!"
// alert(msg);


//       guess the movie


const favmovie="avengers";
let guess=prompt(" Guess my favourite movie");

while(( guess!= favmovie)&& ( guess!="quit")){
      guess=prompt(" Wrong answer!! Please try again");
}

 if( guess==favmovie){
    console.log(" congrats");

      }
      else{
        console.log(" You Quited");
      }


