var shoewCount = document.getElementsByClassName("shoewCount")[0]
var counter=0;
function increase(){
counter+=1
shoewCount.innerHTML= 'Count is : ${counter}'
}
