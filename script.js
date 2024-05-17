function firstWord(s) {
  // your code here
	let str = s.trim();
	let spaceIndex = str.indexOf(' ');
	if(spaceIndex==-1 || str=='')return str;
	else return str.substring(0,spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

