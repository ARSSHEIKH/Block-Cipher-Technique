export default function RightSidePart(value, mid) {
    let rightpermut = [];
    let j = 0
    for (let i = mid; i < value.length; i++) {
      rightpermut[j] = value[i];
      j++;
    }
    console.log("rightpermut", rightpermut);

    return rightpermut
  }