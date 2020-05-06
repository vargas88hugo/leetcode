#  First Unique Character in a String
class Solution:
    def firstUniqChar(self, s: str) -> int:
        if s is "" or s is None:
            return -1
        
        for i, j in enumerate(s):
            if s.count(j) is 1:
                return i
            
        return -1