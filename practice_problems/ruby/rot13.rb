require 'byebug'

def rot13(secret_messages)
    letters = 'abcdefghijklmnopqrstuvwxyz'
    message = secret_messages.chars

    code = message.map do |char|
        upper = char === char.upcase

        char_idx = letters.index(char.downcase)

        if char_idx === nil
          new_char = char
        else
          new_idx = (char_idx + 13) % letters.length
          new_char = letters[new_idx]
          new_char.upcase! if upper
        end

        new_char
    end
    code.join('')
end


p rot13("Why did the chicken cross the road?")
# Jul qvq gur puvpxra pebff gur ebnq?

p rot13("Jul qvq gur puvpxra pebff gur ebnq?")
# Why did the chicken cross the road?
