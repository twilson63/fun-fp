
module.exports = (count,list) => {
  var newList = []
  for(var i = 0; i < count; i++){
    newList.push(list[i])
  }
  return newList
}
