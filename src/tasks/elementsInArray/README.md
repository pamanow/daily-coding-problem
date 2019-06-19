##Find the element that appears once in an array where every other element appears twice

Given an array of integers. All numbers occur twice except one number which occurs once. 
Find the number in O(n) time & constant extra space.

Example :
Input:  `arr[] = [ 7, 3, 5, 4, 5, 3, 4 ]`
Output: `7`

One solution is to check every element if it appears once or not. 
Once an an element with single occurrence is found, return it.