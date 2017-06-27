function theBeatlesPlay(musicians, instruments) {
  let musiciansInstruments = []
  for (let i = 0; i < 4; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansInstruments
}


function johnLennonFacts(facts) {
  let i = 0
  while (i <= facts.length - 1){
    facts[i] += "!!!"
    i++
  }
  return facts
}


function iLoveTheBeatles (number) {
  let array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
