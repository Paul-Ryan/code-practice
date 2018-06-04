require 'byebug'
# Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring. A substring is defined as any consecutive slice of letters from another string.
#
# Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)

# iterate through one string
# check for matches of length > current longest
# if found, increase size of current longest
#   and check from same position

def longest_common_substring(str1, str2)
  longest = ""
  idx = 0

  while idx + longest.length + 1 <= str2.length
    last_idx = idx + longest.length + 1
    if str2.include?(str1[idx, last_idx])
      debugger
      longest = str1[idx, last_idx]
      idx -= 1
    end

    idx += 1
  end

  longest
end

# p longest_common_substring('banana', 'ana') # ana
# p longest_common_substring('a', 'b') # ''
p longest_common_substring('yuppiee', 'guppie') # uppie
