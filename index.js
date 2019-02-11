function rotateImage(a) {
        let newArr=[];

    for(let i = 0; i < a.length; i++){
        newArr[i]=[]
      for(let j = 0; j<a.length;j++){
          newArr[i].unshift(a[j][i])
      }

    }
    return newArr
}
let arr= [[1,2,3],[4,5,6],[7,8,9]]
console.log("given array = ",arr, " rotated array = ", rotateImage(arr))
let arr2= [[10,9,6,3,7],[6,10,2,9,7],[7,6,3,8,2],[8,9,7,9,9],[6,8,6,8,2]]
console.log("given array = ",arr2, " rotated array = ", rotateImage(arr2))
