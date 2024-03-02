/**
 * Tags: Arrays, Two pointers, binary search, bit manipulation
 * Difficulty: Easy
 * 
 * Appraoch: Floyd's hare and tortoise algorithm
 * TC: O(N)
 * SC: O(1)
 *  
 */

function findDuplicate(nums) {
    let hare = nums[0];
    let tortoise = nums[0];

    // Since both of them are at nums[0], we cannot say they collided.
    // We have to make them jump atleast once.
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]]; // Similar to hare = nums[hare]; hare = nums[hare];
    } while (tortoise != hare); // Check if collided or not.

    hare = nums[0]; // Moving hare to starting point.

    // When collision found, we want them to take same steps until they collide back
    while(tortoise != hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return tortoise; // Anyone will work as both are on same position
}