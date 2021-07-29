var marks=[10,20,30,40,50]
var friends=["haresh","harshit","bala","ram","sita"]
var mix=["dhuve",13,true]
console.log(marks)
console.log(friends)
console.log(mix)
console.log(marks[2])


function setup() {
  createCanvas(400, 400);
avg()



}

function draw() {
  background(220);
}


function avg(){
  var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avrg=sum/marks.length
  console.log(avrg)

}