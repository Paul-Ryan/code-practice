
def quicksort(arr)
  return arr if arr.length <= 1

  pivot = arr.pop # random selection would be better
  left = arr.select { |el| el <= pivot }
  right = arr.reject { |el| el < pivot }

  quicksort(left) + [pivot] + quicksort(right)
end

arr = (0..25).to_a.shuffle!
puts "Unsorted: #{arr}"
sorted_arr = quicksort(arr)
puts "Sorted: #{sorted_arr}"
