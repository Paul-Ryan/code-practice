# // Ruby

def diagonalDifference(a)
    d1 = 0
    d2 = 0
    n = a.length

    (0..n-1).each do |i|
        d1 = d1 + a[i][i]
        d2 = d2 + a[-i-1][i]
    end

    (d1-d2).abs
end

# JavaScript
#
# function processData(input) {
#     var lines = input.split("\n");
#     var N = parseInt(lines[0]);
#     var ans = 0;
#     for(i = 1; i <= N; i++) {
#         var line = lines[i].split(" ");
#         ans += parseInt(line[i - 1]) - parseInt(line[N - i]);
#     }
#     console.log(Math.abs(ans));
# }
#
# process.stdin.resume();
# process.stdin.setEncoding("ascii");
# _input = "";
# process.stdin.on("data", function (input) {
#     _input += input;
# });
#
# process.stdin.on("end", function () {
#    processData(_input);
# });
