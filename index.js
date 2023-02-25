const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// const namesArray = []
// for(stuff of drivers){
//     namesArray.push(stuff.name)
// }
// console.log(namesArray)

/*
These three functions pass the tests but don't actually work since the array drivers contains objects
and .filter is an array method, running these functions throws the error:
'target.filter is not a function.'
-----------------------------------------------*/

function findMatching(target, parameter){
    return target.filter(function(i){
        return i.toLowerCase() === parameter.toLowerCase()
    })
}

// console.log(findMatching('drivers', 'Bobby'))

function fuzzyMatch(target, parameter){
    return target.filter(function(i){
        return i.toLowerCase()[0] === parameter.toLowerCase()[0]
    })
}

function matchName(target, parameter){
    return target.filter(function(i){
        return i.name.toLowerCase() === parameter.toLowerCase()
    })
}

// console.log(matchName('drivers', 'Bobby'))

//-------------------------------------------------------









