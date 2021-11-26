r_color = "black"
m_color = "black"
theme_reset = 0
function theme(){
	theme_reset = theme_reset + 1
	if (theme_reset==1){
		document.getElementById("theme").innerHTML = "<link rel=stylesheet href='quiz2 style2.css'>"
		r_color = "white"
		m_color = "white"
	}
	else if (theme_reset==2){
		document.getElementById("theme").innerHTML = "<link rel=stylesheet href='quiz2 style.css'>"	
		r_color = "black"
		m_color = "black"
		theme_reset=0
	}
	
	reset = 0
	r1q1a = false
	r1q2a = false
	r1q3a = false
	r1q4a = false
	document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	reset2 = 0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	console.log(theme_reset)
}

//reordering
r1q1a = false // the a stands for "active"
r1q2a = false
r1q3a = false
r1q4a = false
reset = 0
function r1q1(){
	r1q1a = true
	document.getElementsByClassName("4qrcolor")[0].style.color = "red";
	
	if (r1q2a == true){
		r1q1r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r // the r stands for "replace"
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	else if (r1q3a == true){
		r1q1r = document.getElementById('r1q3').textContent.substring(3);
		r1q3r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
	}
	else if (r1q4a == true){
		r1q1r = document.getElementById('r1q4').textContent.substring(3);
		r1q4r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
	}

	reset = reset + 1
	if (reset==2){
		reset=0
		r1q1a = false
		r1q2a = false
		r1q3a = false
		r1q4a = false
		document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	}
}
function r1q2(){
	r1q2a = true
	document.getElementsByClassName("4qrcolor")[1].style.color = "red";
	
	if (r1q1a == true){
		r1q1r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	else if (r1q3a == true){
		r1q3r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q3').textContent.substring(3);
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	else if (r1q4a == true){
		r1q4r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q4').textContent.substring(3);
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	
	reset = reset + 1
	if (reset==2){
		reset=0
		r1q1a = false
		r1q2a = false
		r1q3a = false
		r1q4a = false
		document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	}
}
function r1q3(){
	r1q3a = true
	document.getElementsByClassName("4qrcolor")[2].style.color = "red";

	if (r1q1a == true){
		r1q1r = document.getElementById('r1q3').textContent.substring(3);
		r1q3r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
	}
	else if (r1q2a == true){
		r1q3r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q3').textContent.substring(3);
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	else if (r1q4a == true){
		r1q3r = document.getElementById('r1q4').textContent.substring(3);
		r1q4r = document.getElementById('r1q3').textContent.substring(3);
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
	}
	
	reset = reset + 1
	if (reset==2){
		reset=0
		r1q1a = false
		r1q2a = false
		r1q3a = false
		r1q4a = false
		document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	}
}
function r1q4(){
	r1q4a = true
	document.getElementsByClassName("4qrcolor")[3].style.color = "red";
	
	if (r1q1a == true){
		r1q1r = document.getElementById('r1q4').textContent.substring(3);
		r1q4r = document.getElementById('r1q1').textContent.substring(3);
		document.getElementById("r1q1").innerHTML = "1. "+r1q1r
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
	}
	else if (r1q2a == true){
		r1q4r = document.getElementById('r1q2').textContent.substring(3);
		r1q2r = document.getElementById('r1q4').textContent.substring(3);
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
		document.getElementById("r1q2").innerHTML = "2. "+r1q2r
	}
	else if (r1q3a == true){
		r1q3r = document.getElementById('r1q4').textContent.substring(3);
		r1q4r = document.getElementById('r1q3').textContent.substring(3);
		document.getElementById("r1q3").innerHTML = "3. "+r1q3r
		document.getElementById("r1q4").innerHTML = "4. "+r1q4r
	}
	
	reset = reset + 1
	if (reset==2){
		reset=0
		r1q1a = false
		r1q2a = false
		r1q3a = false
		r1q4a = false
		document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
		document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	}
}

//matching
m1q1a = false
m1q2a = false
m1q3a = false
m1q4a = false
reset2 = 0
m_color_click = "red"
function button_red(){
	m1q1a = true
	document.getElementsByClassName("button_redm")[0].style.color = m_color_click;
	reset2=0
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	
	reset2 = reset2 + 1
	if (reset2==2){
		reset2=0
		m1q1a = false
		m1q2a = false
		m1q3a = false
		m1q4a = false
		document.getElementsByClassName("button_redm")[0].style.color = m_color;
		document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
		document.getElementsByClassName("button_bluem")[0].style.color = m_color;
		document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	}
}
function button_yellow(){
	m1q2a = true
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color_click;
	reset2=0
	m1q1a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;

	reset2 = reset2 + 1
	if (reset2==2){
		reset2=0
		m1q1a = false
		m1q2a = false
		m1q3a = false
		m1q4a = false
		document.getElementsByClassName("button_redm")[0].style.color = m_color;
		document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
		document.getElementsByClassName("button_bluem")[0].style.color = m_color;
		document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	}
}
function button_blue(){
	m1q3a = true
	document.getElementsByClassName("button_bluem")[0].style.color = m_color_click;
	reset2=0
	m1q2a = false
	m1q1a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;

	reset2 = reset2 + 1
	if (reset2==2){
		reset2=0
		m1q1a = false
		m1q2a = false
		m1q3a = false
		m1q4a = false
		document.getElementsByClassName("button_redm")[0].style.color = m_color;
		document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
		document.getElementsByClassName("button_bluem")[0].style.color = m_color;
		document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	}
}
function button_green(){
	m1q4a = true
	document.getElementsByClassName("button_greenm")[0].style.color = m_color_click;
	reset2=0
	m1q2a = false
	m1q3a = false
	m1q1a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	
	reset2 = reset2 + 1
	if (reset2==2){
		reset2=0
		m1q1a = false
		m1q2a = false
		m1q3a = false
		m1q4a = false
		document.getElementsByClassName("button_redm")[0].style.color = m_color;
		document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
		document.getElementsByClassName("button_bluem")[0].style.color = m_color;
		document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	}
}

//changes fruit color
function m1q1(){
	if (m1q1a == true){
		document.getElementById("m1q1").innerHTML = "Kiwi: Red"
	}
	else if (m1q2a == true){
		document.getElementById("m1q1").innerHTML = "Kiwi: Yellow"
	}
	else if (m1q3a == true){
		document.getElementById("m1q1").innerHTML = "Kiwi: Blue"
	}
	else if (m1q4a == true){
		document.getElementById("m1q1").innerHTML = "Kiwi: Green"
	}
	reset2=0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
}
function m1q2(){
	if (m1q1a == true){
		document.getElementById("m1q2").innerHTML = "Cherry: Red"
	}
	else if (m1q2a == true){
		document.getElementById("m1q2").innerHTML = "Cherry: Yellow"
	}
	else if (m1q3a == true){
		document.getElementById("m1q2").innerHTML = "Cherry: Blue"
	}
	else if (m1q4a == true){
		document.getElementById("m1q2").innerHTML = "Cherry: Green"
	}
	reset2=0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
}
function m1q3(){
	if (m1q1a == true){
		document.getElementById("m1q3").innerHTML = "Lime: Red"
	}
	else if (m1q2a == true){
		document.getElementById("m1q3").innerHTML = "Lime: Yellow"
	}
	else if (m1q3a == true){
		document.getElementById("m1q3").innerHTML = "Lime: Blue"
	}
	else if (m1q4a == true){
		document.getElementById("m1q3").innerHTML = "Lime: Green"
	}
	reset2=0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
}
function m1q4(){
	if (m1q1a == true){
		document.getElementById("m1q4").innerHTML = "Banana: Red"
	}
	else if (m1q2a == true){
		document.getElementById("m1q4").innerHTML = "Banana: Yellow"
	}
	else if (m1q3a == true){
		document.getElementById("m1q4").innerHTML = "Banana: Blue"
	}
	else if (m1q4a == true){
		document.getElementById("m1q4").innerHTML = "Banana: Green"
	}
	reset2=0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
}
function m1q5(){
	if (m1q1a == true){
		document.getElementById("m1q5").innerHTML = "Blueberry: Red"
	}
	else if (m1q2a == true){
		document.getElementById("m1q5").innerHTML = "Blueberry: Yellow"
	}
	else if (m1q3a == true){
		document.getElementById("m1q5").innerHTML = "Blueberry: Blue"
	}
	else if (m1q4a == true){
		document.getElementById("m1q5").innerHTML = "Blueberry: Green"
	}
	reset2=0
	m1q1a = false
	m1q2a = false
	m1q3a = false
	m1q4a = false
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color; 
}

//name
function buttonFunctionName(){
	let name = document.getElementById("username").value;
	if (name !== ""){
		document.getElementById("name").innerHTML = "<h3>Hey there <u>"+name+"</u></h3>"	
	}
}

// submit answers and check 
function buttonFunction(){
	document.getElementsByClassName("4qrcolor")[0].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[1].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[2].style.color = r_color;
	document.getElementsByClassName("4qrcolor")[3].style.color = r_color;
	document.getElementsByClassName("button_redm")[0].style.color = m_color;
	document.getElementsByClassName("button_yellowm")[0].style.color = m_color;
	document.getElementsByClassName("button_bluem")[0].style.color = m_color;
	document.getElementsByClassName("button_greenm")[0].style.color = m_color;
	let points=0
	let reorder_points=0
	let matching_points=0

	//wr
	let wrt_ans1 = document.getElementById("questionA1").value;
	if (wrt_ans1 == "Obama"){
		questionA1 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else if (wrt_ans1 == "obama"){
		questionA1 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else {
		questionA1 = "<b>Incorrect</b> - 0/1"
	}
	
	let wrt_ans2 = document.getElementById("questionA2").value;
	if (wrt_ans2 == "2015"){
		questionA2 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else {
		questionA2 = "<b>Incorrect</b> - 0/1"
	}

	let wrt_ans3 = document.getElementById("questionA3").value.toLowerCase();
	if (wrt_ans3 == "white"){
		questionA3 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else {
		questionA3 = "<b>Incorrect</b> - 0/1"
	}
	
	//mc
	let mc1a2 = document.querySelector("#mc1a2").checked;
	if (mc1a2 == true){
		mc1 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else {
		mc1 = "<b>Incorrect</b> - 0/1"
	}
	
	let mc2a1 = document.querySelector("#mc2a1").checked;
	if (mc2a1 == true){
		mc2 = "<b>Correct</b> - 1/1"
		points = points+1
	}
	else {
		mc2 = "<b>Incorrect</b> - 0/1"
	}
	
	//ma
	let ma1a1 = document.querySelector("#ma1a1").checked;
	let ma1a2 = document.querySelector("#ma1a2").checked;
	let ma1a3 = document.querySelector("#ma1a3").checked;
	if (ma1a1 == false & ma1a2 == true & ma1a3 == true){
		ma1 = "<b>Correct</b> - 2/2"
		points = points+2
	}
	else if (ma1a1 == false & ma1a2 == false & ma1a3 == true){
		ma1 = "<b>Correct</b> - 1/2"
		points = points+1
	}
	else if (ma1a1 == false & ma1a2 == true & ma1a3 == false){
		ma1 = "<b>Correct</b> - 1/2"
		points = points+1
	}
	else {
		ma1 = "<b>Incorrect</b> - 0/2"
	}	

	let ma2a1 = document.querySelector("#ma2a1").checked;
	let ma2a2 = document.querySelector("#ma2a2").checked;
	let ma2a3 = document.querySelector("#ma2a3").checked;
	if (ma2a1 == true & ma2a2 == false & ma2a3 == true){
		ma2 = "<b>Correct</b> - 2/2"
		points = points+2
	}
	else if (ma2a1 == true & ma2a2 == false & ma2a3 == false){
		ma2 = "<b>Correct</b> - 1/2"
		points = points+1
	}
	else if (ma2a1 == false & ma2a2 == false & ma2a3 == true){
		ma2 = "<b>Correct</b> - 1/2"
		points = points+1
	}
	else {
		ma2 = "<b>Incorrect</b> - 0/2"
	}	
	
	//reordering
	ra1 = document.getElementById('r1q1').textContent.substring(3)
	ra2 = document.getElementById('r1q2').textContent.substring(3)
	ra3 = document.getElementById('r1q3').textContent.substring(3)
	ra4 = document.getElementById('r1q4').textContent.substring(3)
	
	if (ra1 == "Saturn"){
		reorder_points = reorder_points+1
	}
	if (ra2 == "Neptune"){
		reorder_points = reorder_points+1
	}
	if (ra3 == "Earth"){
		reorder_points = reorder_points+1
	}
	if (ra4 == "Mercury"){
		reorder_points = reorder_points+1
	}	
	
	points = points + reorder_points
	
	if (reorder_points == 4){
		reorder_result = "<b>Correct</b> - 4/4"
	}
	else if (reorder_points == 3){
		reorder_result = "<b>Correct</b> - 3/4"
	}
	else if (reorder_points == 2){
		reorder_result = "<b>Correct</b> - 2/4"
	}
	else if (reorder_points == 1){
		reorder_result = "<b>Correct</b> - 1/4"
	}	
	else if (reorder_points == 0){
		reorder_result = "<b>Incorrect</b> - 0/4"
	}	

	//matching
	mma1 = document.getElementById('m1q1').textContent
	mma2 = document.getElementById('m1q2').textContent
	mma3 = document.getElementById('m1q3').textContent
	mma4 = document.getElementById('m1q4').textContent
	mma5 = document.getElementById('m1q5').textContent
	
	if (mma1 == "Kiwi: Green"){
		matching_points = matching_points+1
	}
	if (mma2 == "Cherry: Red"){
		matching_points = matching_points+1
	}
	if (mma3 == "Lime: Green"){
		matching_points = matching_points+1
	}
	if (mma4 == "Banana: Yellow"){
		matching_points = matching_points+1
	}
	if (mma5== "Blueberry: Blue"){
		matching_points = matching_points+1
	}	
	
	points = points + matching_points
	
	if (matching_points == 5){
		matching_result = "<b>Correct</b> - 5/5"
	}
	else if (matching_points == 4){
		matching_result = "<b>Correct</b> - 4/5"
	}
	else if (matching_points == 3){
		matching_result = "<b>Correct</b> - 3/5"
	}
	else if (matching_points == 2){
		matching_result = "<b>Correct</b> - 2/5"
	}
	else if (matching_points == 1){
		matching_result = "<b>Correct</b> - 1/5"
	}
	else if (matching_points == 0){
		matching_result = "<b>Incorrect</b> - 0/5"
	}	

	//comments
	if (points == 18){
		comment = "You must be smart!"
	}
	else if (18 >= points & points >=13 ){
		comment = "Hey, that's pretty good"
	}
	else if (13 >= points & points >=9 ){
		comment = "Not the worst"
	}
	else if (9 >= points){
		comment = "Better luck next time"
	}

	//display score and comment
	let percent = (points/18)*100
	let rounded_percent = Math.round(percent * 10) / 10
	document.getElementById("results").innerHTML = rounded_percent.toString()+"% - <b><u>Score: "+points.toString()+"/18</u>"+"</b>";
	document.getElementById("comment").innerHTML = comment
	
	//display answers
	document.getElementsByClassName("answer")[0].innerHTML = "Answer: <u>Obama</u> or <u>obama</u>";
	document.getElementsByClassName("answer")[1].innerHTML = "Answer: <u>2015</u>";
	document.getElementsByClassName("answer")[2].innerHTML = "Answer: <u>white</u>";
	document.getElementsByClassName("answer")[3].innerHTML = "Answer: <u>TheFacebook</u>";
	document.getElementsByClassName("answer")[4].innerHTML = "Answer: <u>Dalgona</u>";
	document.getElementsByClassName("answer")[5].innerHTML = "Answer: <u>Avocado, Chocolate</u>";
	document.getElementsByClassName("answer")[6].innerHTML = "Answer: <u>Humpback, Dolphin</u>";
	document.getElementsByClassName("answer")[7].innerHTML = "Answer: <u>1. Saturn, 2. Neptune, 3. Earth, 4. Mercury</u>";
	document.getElementsByClassName("answer")[8].innerHTML = "Answer: <u>Kiwi: Green, Cherry: Red, Lime: Green, Banana: Yellow, Blueberry: Blue</u>";
	
	//display correct or incorrect
	document.getElementsByClassName("check")[0].innerHTML = questionA1;
	document.getElementsByClassName("check")[1].innerHTML = questionA2;
	document.getElementsByClassName("check")[2].innerHTML = questionA3;
	document.getElementsByClassName("check")[3].innerHTML = mc1;
	document.getElementsByClassName("check")[4].innerHTML = mc2;
	document.getElementsByClassName("check")[5].innerHTML = ma1;
	document.getElementsByClassName("check")[6].innerHTML = ma2;
	document.getElementsByClassName("check")[7].innerHTML = reorder_result;
	document.getElementsByClassName("check")[8].innerHTML = matching_result;

	document.getElementById("submit").innerHTML = ""
}
// 0_0'