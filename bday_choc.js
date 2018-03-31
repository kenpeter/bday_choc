
function getChoBarVal(start, arr, groupLen) {
	var finalVal = 0;
	for(var i=0; i<groupLen; i++) {
		var item = arr[start+i];
		finalVal += item;
	}

	return finalVal;
}

function solve(n, s, d, m){
	var arrLen = n;
	var arr = s;
	var equalVal = d;
	var groupLen = m;

	var start = 0;
	var count = 0;
	while(start + groupLen <= arrLen) {
		var choBarVal = getChoBarVal(start, arr, groupLen);
		if(choBarVal == equalVal) {
			count += 1;
		}
	
		start += 1;
	}

	return count;
}


var n = 5;
var s = [ 1, 2, 1, 3, 2 ];
var d = 3;
var m = 2;
var out;

out = solve(n, s, d, m);
console.log(out);
