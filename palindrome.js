function palindrome(str) {
	let _str = str.toLowerCase().replace(/[^0-9a-z]/gi, ""); // Removes all non-alphanumeric characters
	let _rev = _str.split("").reverse().join("");
	return _str === _rev;
}
palindrome("My age is 0, 0 si ega ym.");
