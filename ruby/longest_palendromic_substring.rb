require 'byebug'

# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:
#
# Input: "cbbd"
# Output: "bb"

#

def longest_p_sub(str)

end

def is_palindrome?(str)
  start_idx = 0
  end_idx = str.length - 1

  while start_idx < end_idx
    return false unless str[start_idx] == str[end_idx]
    start_idx += 1
    end_idx -= 1
  end

  true
end

p is_palindrome?('abcdedcba')  # true
p is_palindrome?('abcdeedcba')  # true
p is_palindrome?('abzcba')  # false
p is_palindrome?('')  # true
p is_palindrome?('a')  # true
p is_palindrome?('ah')  # false
