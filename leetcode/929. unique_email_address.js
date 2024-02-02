/**
 * Tags: Arrays, Strings, Hash Table
 * Difficulty: Easy
 *
 * Time complexity: O(M * N)
 * Space complexity: O(M) + O(N)
 *
 */

var numUniqueEmails = function (emails) {
	let count = 0;
	cleanEmails(emails);
	return new Set(emails).size;
};

function cleanEmails(emails) {
	for (let i = 0; i < emails.length; i++) {
		let split = emails[i].split("@");
		let local = split[0];
		let domain = split[1];
		let newLocal = "";
		for (let j = 0; j < local.length; j++) {
			if (local[j] === ".") {
				continue;
			} else if (local[j] === "+") {
				break;
			} else {
				newLocal += local[j];
			}
		}
		emails[i] = newLocal + "@" + domain;
	}
}
