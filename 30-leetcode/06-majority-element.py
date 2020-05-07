# Majority Element
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        idx, ctr = 0, 1
        
        for i in range(1, len(nums)):
            if nums[idx] == nums[i]:
                ctr += 1
            else:
                ctr -= 1
                if ctr == 0:
                    idx = i
                    ctr = 1
                    
        return nums[idx]
        