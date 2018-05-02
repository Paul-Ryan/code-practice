def merge_sort(arr)
  return arr if arr.length <= 1

  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[(mid..-1)]

  sorted_left = merge_sort(left)
  sorted_right = merge_sort(right)

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = []

  while !left.empty? && !right.empty?
    if left.first <= right.first
      merged.push(left.shift)
    else
      merged.push(right.shift)
    end
  end

  merged + left + right
end


arr = (0..25).to_a.shuffle!
puts "Unsorted: #{arr}"
sorted_arr = merge_sort(arr)
puts "Sorted: #{sorted_arr}"
