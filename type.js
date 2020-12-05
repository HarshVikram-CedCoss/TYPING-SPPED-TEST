const testWrapper=document .querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const origiontext=document.querySelector("#origion-text p").innerHTML;
const time= document.querySelector(".timer");
const resetButton= document.querySelector("#reset");
 var tim=[0,0,0,0];
 var te1;
 var or1;
 var interval;
 var runtime=false;
 

//  function help for tim zero
function zero(time){
	if(time <= 9){
		time = " 0" + time ;
	}
	return time;
}

//function to calculate a standard time i.e minutes,seconds,hnderreadth//
function runtim(){
	time.innerHTML = tim;
	let currentTime=zero(tim[0]) +":" + zero(tim[1]) + ":" + zero(tim[2]);
	time.innerHTML=currentTime;
	tim[0]=Math.floor((tim[3]/100)/60);   // to get hundread minutes and in minutes also
	tim[1]=Math.floor((tim[3]/100) - (tim[0] * 60));   // to get every seconds in every time
	tim[2]=Math.floor(tim[3]-(tim[1]*100) - (tim[0 *6000]));  // when counting reach hundread we don't count it there
	tim[3]++;
	spellchecking();

}


//start tim
function start(){
	let te1Length=testArea.value.length;
	if (te1Length=== 0 && !runtime){
		runtime= true;
		interval=setInterval(runtim,10);
	}
	
}


//function spellcheck
function spellchecking(){
te1= testArea.value;
or1 = origiontext.substring(0,te1.length);
if (te1==or1){
	
	testArea.style.borderColor="green";
	
}
else {
		testArea.style.borderColor="#C71585";
	}	
	if (te1===origiontext) {
		clearInterval(interval);

	}
}


//reset 
function reset(){
	clearInterval(interval);
	interval=null;
	tim=[0,0,0,0];
	runtime=false;
	testArea.value="";
	time.innerHTML="00:00:00";
	testArea.style.borderColor="black"
}


//Event listener
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellchecking,false);
resetButton.addEventListener("click",reset,false);


