function theBeatlesPlay(musicians,instruments){
  var array = []//{ musicians, instruments}
  //var newObj = Object.assign({}, obj)
  for (let i = 0; i < musicians.length; i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    var musician = musicians.i
    var instrument = instruments.i
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var i = 0
  while (i < facts.length - 1 ) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}
