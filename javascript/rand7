// rand7
// Write a method to generate a random integer (0...7), given a method that generates a random integer between (0...5). The resulting rand7 distribution must be uniform.

function rand5() {
  return Math.floor(Math.random() * 5);
}

function rand7() {

  while (true) {
    // generate random num btw 0-24
    // (0, 5, 10, 15, 20 ) + (1, 2, 3, 4)
    let num = 5 * rand5() + rand5();

    // reject above 20, so we get even dist and 0-6 three times (0..20) % 7
    if (num < 21) return num % 7;
  }
}



const count = {};
for (let i = 0; i < 1000; i++) {
  let random = rand7();
  if (count[random]) {
    count[random]++;
  } else {
    count[random] = 1;
  }
}
console.log(count);
