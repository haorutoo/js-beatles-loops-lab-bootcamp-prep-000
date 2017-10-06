function theBeatlesPlay(musicians,instruments){
  var obj = { musicians, instruments}
  //var newObj = Object.assign({}, obj)
  var newObj //= Object.assign({})

  for (i = 0, i < obj.length, i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    var musician = musicians[i]
    var instrument = instruments[i]
    newObj.push('${musician} plays ${instrument}')
  }

  return newObj

}
