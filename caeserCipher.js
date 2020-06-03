function rot13(str) {
	const alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
	let res = [];
	for (ch of str.toUpperCase().split("")) {
		if (alphabets.includes(ch)) {
			let index = alphabets.indexOf(ch);
			var i = 0;
			if (alphabets[index + 13] === undefined) {
				i = 13 - (alphabets.length - index);
			}

			res.push(
				alphabets[index + 13] !== undefined
					? alphabets[index + 13]
					: alphabets[i]
			);
		} else {
			res.push(ch);
		}
	}
	return res.join("");
}

rot13("SERR PBQR PNZC");
