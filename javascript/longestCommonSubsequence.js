// LCS Problem Statement: Given two sequences, find the length of longest subsequence present in both of them.

// LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.



function lcs(str1, str2) {
	const subs1 = subsets(str1);
	const subs2 = subsets(str2);
	let longest = 0;

	for (var i = 0; i < subs1.length; i++) {
		let sub = subs1[i];
		if (subs2.indexOf(sub) !== -1 && sub.length > longest) {
			longest = sub.length;
		}
	}

	return longest;
}

function subsets(str) {
	if (str.length === 0) {
		return [[]];
	}

	const first = str[0];
	const rest = subsets(str.slice(1));
	const withFirst = [];

	for (var i = 0; i < rest.length; i++) {
			withFirst.push(first + rest[i]);
	}

	return withFirst.concat(rest);
}

// console.log(subsets("abc"));

console.log(lcs("ABCDGH", "AEDFHR")); // "ADH"  => 3
console.log(lcs("AGGTAB", "GXTXAYB")); // "GTAB"  => 4
