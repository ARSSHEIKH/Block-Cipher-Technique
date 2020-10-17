export default function left_LShiftpermut(leftpermut) {

    let temp = leftpermut[0]
    console.log(temp);
  
    for (let i = 0; i < leftpermut.length; i++) {
  
      if (i === leftpermut.length - 1) {
        leftpermut[i] = temp;
      }
      else {
        leftpermut[i] = leftpermut[i + 1]
      }
    }
    console.log(leftpermut);
    return leftpermut;
  }