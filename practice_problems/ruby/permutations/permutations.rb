def permutations(arr)
  return [[]] if arr.empty?

  pivot = arr.take(1)
  pieces = permutations(arr.drop(1))
  results = []

  rest.each do |chunk|

  end
end

p permutations([1, 2, 3]) # => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [3, 1, 2], [1, 3, 2], [3, 2, 1]]

# return an empty array if the array is empty [[]]
# remove an element
# call permutations on teh remaining elements
# and insert the removed element into each position of the returned perm call
