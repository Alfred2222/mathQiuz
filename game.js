
player1_score=0
player2_score=0

name_player1=localStorage.getItem("player1_name")
name_player2=localStorage.getItem("player2_name")

document.getElementById("player1_name").innerHTML=name_player1+":"
document.getElementById("player1_score").innerHTML=player1_score

document.getElementById("player2_name").innerHTML=name_player2+":"
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("qturn").innerHTML="Question turn -"+name_player1
document.getElementById("aturn").innerHTML="Answer turn -"+name_player2

number1_input=document.getElementById("number_1").value
console.log(number1_input)

number2_input=document.getElementById("number_2").value
console.log(number2_input)


actual_answer=parseInt(number1_input)*parseInt(number2_input)


function submit(){
qnum= number1_input+" x "+number2_input
console.log(qnum)
question="<h4 id-'num_display'>Q:- "+qnum+"</h4>"
input_box="</br> Answer: <input type='text' id='input_check_box'>";
check_button="</br></br><button class='btn btn-info' onclick='check()'> CHECK </button>";
row=question + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}


question_turn="player1"
answer_turn="player2"

function check(){
    if(actual_answer==input_box){
        if(answer_turn="player2")
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    else{
        player1_score=player1_score+1;
        document.getElementById("player2_score").innerHTML=player1_score
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("qturn").innerHTML="Question turn-"+name_player2
    }
    else{
        question_turn="player1"
        document.getElementById("qturn").innerHTML="Question turn-"+name_player1
        
    }

    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("aturn").innerHTML="Answer turn-"+name_player2
    }
    else{
        answer_turn="player2"
        document.getElementById("aturn").innerHTML="Answer turn-"+name_player1
    }
}

