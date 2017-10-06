function theBeatlesPlay(musicians,instruments){
  //var obj = { musicians, instruments}
  //var newObj = Object.assign({}, obj)
  var newObj //= Object.assign({})

  for (i = 0, i < musicians.length, i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    newObj.push('${musicians[i]} plays ${instruments[i]}')
  }

  return newObj

}
