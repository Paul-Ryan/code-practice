class Array
  def my_each(&prc)
    self.length.times do |i|
      prc.call(self[i])
    end

    self
  end

  def my_select(&prc)
    selected = []
    self.my_each do |el|
      selected << el if prc.call(el)
    end

    selected
  end

  def my_reject(&prc)
    remaining = []
    self.my_select do |el|
      remaining << el unless prc.call(el)
    end

    remaining
  end

  def my_any?(&prc)
    my_each do |el|
      return true if prc.call(el)
    end

    false
  end

  def my_all?(&prc)
    my_each do |el|
      return false unless prc.call(el)
    end

    true
  end

  def my_flatten
    flattened = []

    self.my_each do |el|
      if el.is_a?(Array)
        flattened.concat(el.my_flatten)
      else
        flattened << el
      end
    end

    flattened
  end

  def my_zip(*args)
    zipped = []

    self.length.times do |idx|
      subzip = [self[idx]]

      args.my_each do |arr|
        subzip << arr[idx]
      end

      zipped << subzip
    end

    zipped
  end
end

# test my_each
# return_value = [1, 2, 3].my_each do |num|
#   puts num
# end.my_each do |num|
#   puts num
# end

# my_select
# a = [1, 2, 3]
# p a.my_select { |num| num > 1 } # => [2, 3]
# p a.my_select { |num| num == 4 } # => []

# my_reject
# a = [1, 2, 3]
# p a.my_reject { |num| num > 1 } # => [1]
# p a.my_reject { |num| num == 4 } # => [1, 2, 3]

# my_any
# a = [1, 2, 3]
# p a.my_any? { |num| num > 1 } # => true
# p a.my_any? { |num| num == 4 } # => false
# p a.my_all? { |num| num > 1 } # => false
# p a.my_all? { |num| num < 4 } # => true

# my_flatten
# p [1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten # => [1, 2, 3, 4, 5, 6, 7, 8]

# my_zip
# a = [ 4, 5, 6 ]
# b = [ 7, 8, 9 ]
# p [1, 2, 3].my_zip(a, b) # => [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
# p a.my_zip([1,2], [8])   # => [[4, 1, 8], [5, 2, nil], [6, nil, nil]]
# p [1, 2].my_zip(a, b)    # => [[1, 4, 7], [2, 5, 8]]
#
# c = [10, 11, 12]
# d = [13, 14, 15]
# p [1, 2].my_zip(a, b, c, d)    # => [[1, 4, 7, 10, 13], [2, 5, 8, 11, 14]]
