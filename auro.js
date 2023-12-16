/* Header */
function writeHeader(baseurl){
	
	var gap = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	
	document.write("<center><br><h1>Auromine</h1><h4>MINING & STAKING</h4>"	 
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"index.html\";'>Home</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"stake.html\";'>Stake CCD</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"questions.html\";'>Questions</button>"+gap
		+"<br><br>"
		+"");
} 

/* Footer */
function writeFooter(){
	document.write("<center><h2>Got a feedback ?</h2>atlas.node.space@gmail.com<br>We are all ears.<br>"
	);
} 
