/**
 * Tags: Math, Binary search
 * Difficulty: Easy
 * 
 * Approach: Linear search
 * TC: O(x^1/2)
 * SC: O(1)
 */

function sqrt(x) {
    if(x === 0) return 0;
    let ans = 1;
    for(let i = 0; i < x; i++) {
        if(i * i <= x) ans = i;
        else break;
    }

    return ans;
}

/**
 * Approach: Binary search
 * TC: O(logx)
 * SC: O(1)
 */

function sqrt(x) {
    if(x === 0) return 0;
    let ans = 1, low = 1, high = x-1;

    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if(mid * mid == x) return mid;
        else if(mid * mid > x) high = mid - 1;
        else {
            low = mid + 1;
            ans = mid;
        }
    }

    return ans;
}