function firstWord(s) {
  // your code here
	if (s === "") {
		return s;
	}
	
	// let result = "";
	
	// for (let i=0; i<s.length; i++) {
	// 	if (s[i] === " ") {
	// 		break;
	// 	} 
	// 	result += s[i];
	// }
	// return result;

	let words = s.split(" ");
	return words[0]
}

// Do not change the code below  
 
const s = prompt("Enter String:");
alert(firstWord(s));    
