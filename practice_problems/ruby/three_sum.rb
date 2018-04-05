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
  sums = []

  (0...array.length - 2).each do |i|
    num1 = array[i]
    ((i + 1)...array.length - 1).each do |j|
      num2 = array[j]
      ((j + 1)...array.length).each do |k|
        num3 = array[k]
        sums << [num1, num2, num3] if num1 + num2 + num3 == 0
      end
    end
  end

  sums
end

def three_sum(array)
  results = []
  return results if array.length < 3

  i = 0
  front_idx = i + 1
  back_idx = array.length - 1

  sorted = array.sort

  while i < j

  end

end

p three_sum([-1, 0, 1, 2, -1, -4])
# => [[-1, 0, 1], [-1, -1, 2]]
