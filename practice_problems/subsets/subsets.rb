# Write a function that takes an array and returns all of its subsets. How many sets will it return?

# [1, 2, 3] => [1], [1, 2], [1, 2, 3], [2], [2, 3], [3]
# 3 * 2 * 1



def subsets(arr)
  return [[]] if arr.empty?

  val = arr[0]
  subs = subsets(arr.drop(1))
  new_subs = subs.map { |sub| sub + [val]}

  subs + new_subs
end

array = ['a', 'b', 'c']

p subsets(array)
