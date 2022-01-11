player1_score=0
player2_score=0

name_player1=localStorage.getItem("player1_name")
name_player2=localStorage.getItem("player2_name")

document.getElementById("player1_name").innerHTML=name_player1+":"
document.getElementById("player1_score").innerHTML=player1_score

document.getElementById("player2_name").innerHTML=name_player2+":"
document.getElementById("player2_score").innerHTML=player2_score