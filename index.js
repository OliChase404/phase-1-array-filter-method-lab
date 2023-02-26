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

console.log(matchName('drivers', 'Bobby'))

//-------------------------------------------------------


/*
These functions produce the desired results as specified by the lab and the indexTest.js file. 
However they do not pass the tests when npm test is run.
----------------------------------------------------------------*/
// function findMatching(target, parameter){
//   const result = []
//   for(let i = target.length -1; i >= 0; i --){
//     if(target[i].name.toLowerCase() === parameter.toLowerCase()){
//       result.push(target[i].name)
//     }
//   }
//   return result
// }
// console.log(findMatching(drivers, 'Bobby'))



// function fuzzyMatch(target, parameter){
//   const result = []
//   for(let i = target.length -1; i >= 0; i --){
//     if(target[i].name[0].toLowerCase() === parameter[0].toLowerCase()){
//       result.push(target[i].name)
//     }
//   }
//   return result
// }
// console.log(fuzzyMatch(drivers, 'sammy'))



// function matchName(target, parameter){
//   const result = []
//   for(let i = target.length -1; i >= 0; i --){
//     if(target[i].name.toLowerCase() === parameter.toLowerCase()){
//       result.push(target[i])
//     }
//   }
//   return result
// }

// console.log(matchName(drivers, 'sammy'))
//------------------------------------------------------------------------------





