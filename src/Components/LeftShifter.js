
import Right_LShiftpermut from './right_LShiftpermut'
import Left_LShiftpermut from './left_LShiftpermut'

export default function LeftShifter(value) {
    let mid = value.length / 2;
  
    let leftpermut = [], rightpermut = [];
    for (let i = 0; i < (value.length) / 2; i++) {
      leftpermut[i] = value[i];
    }
    {
      let j = 0
      for (let i = mid; i < value.length; i++) {
        rightpermut[j] = value[i];
        j++;
      }
    }
  
    leftpermut = Left_LShiftpermut(leftpermut)    // left Shift for LHS
    rightpermut = Right_LShiftpermut(rightpermut, mid)    // left Shift for RHS
  
    {
      let j = 0;
      for (let i = 0; i < value.length; i++) {
        if (i < mid) {
          value[i] = leftpermut[i];
        }
        else if (i > mid - 1) {
          value[i] = rightpermut[j];
          j++;
        }
      }
    }
    console.log(value);
    return (
      value
    )
  }