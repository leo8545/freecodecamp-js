function telephoneCheck(str) {
	var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return regex.test(str);
}

telephoneCheck("1 (555 555-5555");
