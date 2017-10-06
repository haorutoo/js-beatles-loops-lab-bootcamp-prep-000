function theBeatlesPlay(musicians,instruments){
  var array = {}//{ musicians, instruments}
  //var newObj = Object.assign({}, obj)
  var newObj //= Object.assign({})

  for (i = 0, i < 3, i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    var musician = musicians[i]
    var instrument = instruments[i]
    array.push('${musician} plays ${instrument}')
  }

  return array

}
