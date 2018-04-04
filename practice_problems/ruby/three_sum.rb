# Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
#
# Note: The solution set must not contain duplicate triplets.
#
# For example, given array S = [-1, 0, 1, 2, -1, -4],
#
# A solution set is:
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]

def three_sum(array)
  result = []
  sums = []

  (0..array.length - 3).each do |i|
    num1 = array[i]
    (i..array.length - 1).each do |j|
      num2 = array[j]
      sums << [num1, num2]
    end
  end
end
