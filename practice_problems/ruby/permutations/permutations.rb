# Given a collection of distinct numbers, return all possible permutations.
#
# For example,
# [1,2,3] have the following permutations:
# [
#   [1,2,3],
#   [1,3,2],
#   [2,1,3],
#   [2,3,1],
#   [3,1,2],
#   [3,2,1]
# ]


def permutations(arr)
  return [arr] if arr.length <= 1

  answer = []
  pivot = arr.shift

  perms = permutations(arr)
  perms.each do |perm|
    (0..perm.length).each do |i|
      answer << perm[0...i] + [pivot] + perm[i..-1]
    end
  end

  answer
end

p permutations([1, 2, 3]) # => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [3, 1, 2], [1, 3, 2], [3, 2, 1]]

# return an empty array if the array is empty [[]]
# remove an element
# call permutations on teh remaining elements
# and insert the removed element into each position of the returned perm call
