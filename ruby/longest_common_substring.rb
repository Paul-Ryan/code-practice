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

  start_idx = 0
  while start_idx < str1.length
    # don't consider strings too short to be longest
    len = longest.length + 1

    while (start_idx + len) <= str1.length
      end_idx = start_idx + len
      substring = str1[start_idx...end_idx]
      longest = substring if str2.include?(substring)

      len += 1
    end

    start_idx += 1
  end

  longest
end

p longest_common_substring('banana', 'ana') # ana
p longest_common_substring('a', 'b') # ''
p longest_common_substring('yuppiee', 'guppie') # uppie
p longest_common_substring('abazzaaabb', 'abaczzaaacc') # zzaaa
