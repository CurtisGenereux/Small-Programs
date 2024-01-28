/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    var l = 0, r = height.length - 1;

    var currentArea = 0;
    var maxArea = 0;

    while (l < r) {

        distance = r - l;

        if (height[l] > height[r]) {
            currentArea = height[r]*distance;
        } else {
            currentArea = height[l]*distance;
        }

        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }

    }

    return maxArea;

};
