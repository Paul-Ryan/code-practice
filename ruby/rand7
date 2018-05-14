# rand7
# Write a method to generate a random integer (0...7), given a method that generates a random integer between (0...5). The resulting rand7 distribution must be uniform.

def rand5
  rand(0...5)
end

def rand7
  # get a num btw 0 - 24
  # 0,5,10,15,20 + 1,2,3,4
  num = 5 * rand5 + rand5

  # 0-20 % 7 gives even dist of (0...7)
  return num % 7 if num < 21
end


count = Hash.new(0)
10000.times do
  count[rand7] += 1
end

p count
