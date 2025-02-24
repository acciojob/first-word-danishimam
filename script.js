function firstWord(s) {
  // your code here
	s = s.trim();
	
	if (s === "") {
		return s;
	}
	
	let result = "";
	
	for (let i=0; i<s.length; i++) {
		if (s[i] === " ") {
			break;
		} 
		result += s[i];
	}
	return result;
}

// Do not change the code below  
 
// const s = prompt("Enter String:");
// alert(firstWord(s));    
