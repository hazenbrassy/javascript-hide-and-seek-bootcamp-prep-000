function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function find(array,criteriaFN) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFN(current)){
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
      next.push(current[i])
      }
    }
    current =next.shift()
  }
  return null
}

function nestedTarget() {
  var tmpParent = document.getElementById('nested')
  var tmpChild = tmpParent.children
  find(tmpChild,'target')
  console.log("Current" + current)
}

function increaseRankBy(n) {

}

function deepestChild() {

}
