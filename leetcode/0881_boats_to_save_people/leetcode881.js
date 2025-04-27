/**
 * Topics: Array, Two pointers, sorting, greedy
 *
 * Approach: Optimal (My bruteforce was optimal)
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */

function solution(people, limit) {
	// Sorting the people array in ascending order
	people.sort((a, b) => a - b);

	let i = 0,
		j = people.length - 1;
	let minBoats = 0;

	while (i <= j) {
		if (people[i] + people[j] <= limit || i == j) {
			i++;
			j--;
		} else {
			j--;
		}
		minBoats++;
	}

	return minBoats;
}
