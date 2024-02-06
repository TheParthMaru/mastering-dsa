/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let pre = -1;
    let next = 1;

    for (let i = 0; i < flowerbed.length; i++, pre++, next++) {
        if ((getValue(flowerbed, pre) + getValue(flowerbed, i) + getValue(flowerbed, next)) == 0) {
            flowerbed[i] = 1;
            count++;
        }
    }

    return count >= n;
};

var getValue = function(flowerbed, i) {
    if (i < 0 || i >= flowerbed.length) {
        return 0;
    }
    return flowerbed[i];
};