## Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given `n = 16`, return `3` since we can make it with `a 10¢, a 5¢, and a 1¢.`

# Used algorithm
1) Initialize result as empty.
2) find the largest denomination that is 
   smaller than V.
3) Add found denomination to result. Subtract 
   value of found denomination from V.
4) If V becomes 0, then print result.  
   Else repeat steps 2 and 3 for new value of V