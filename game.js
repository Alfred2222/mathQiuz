
player1_score=0
player2_score=0

name_player1=localStorage.getItem("player1_name")
name_player2=localStorage.getItem("player2_name")

document.getElementById("player1_name").innerHTML=name_player1+":"
document.getElementById("player1_score").innerHTML=player1_score

document.getElementById("player2_name").innerHTML=name_player2+":"
document.getElementById("player2_score").innerHTML=player2_score

number1_input=document.getElementById("num1").value;
localStorage.setItem("num1",num1)

number2_input=document.getElementById("num2").value;
localStorage.setItem("num2",num2)

number1=localStorage.getItem(num1)
number2=localStorage.getItem(num2)
actual_answer=parseInt(number1)*parseInt(number2)


function submit(){
qnum= number1+" x "+number2
question="<h4 id-'num_display'>Q:- "+qnum+"</h4>"
input_box="</br> Answer: <input type='text' id='input_check_box'>";
check_button="</br></br><button class='btn btn-info' onclick='check()'> CHECK </button>";
row=question + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}

