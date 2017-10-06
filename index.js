function theBeatlesPlay(musicians,instruments){
  var array = []//{ musicians, instruments}
  //var newObj = Object.assign({}, obj)
  for (let i = 0; i < musicians.length; i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push('${musician} plays ${instrument}')
  }

  return array

}
