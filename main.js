const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=123casdf&s=frozen
The quick brown fox jumps over the lay dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)