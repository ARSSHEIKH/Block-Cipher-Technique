export default function Right_LShiftpermut(rightpermut, mid) {
    let temp = rightpermut[0]
    for (let i = 0; i < rightpermut.length; i++) {
  
      if (i === mid - 1) {
        rightpermut[i] = temp;
      }
      else {
        rightpermut[i] = rightpermut[i + 1]
      }
    }
    console.log(rightpermut);
    return rightpermut;
  }