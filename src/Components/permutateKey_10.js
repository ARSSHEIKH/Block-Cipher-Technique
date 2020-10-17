
import LeftShifter from './LeftShifter'
const PermutateKey_10 = (keyVal) => {

    let permut = []
  
    // According to condition [3, 5, 2, 7, 4, 10, 1, 9, 8, 6]
  
    // but here index will start with 0
  
    permut[0] = keyVal[2];
    permut[1] = keyVal[4];
    permut[2] = keyVal[1];
    permut[3] = keyVal[6];
    permut[4] = keyVal[3];
    permut[5] = keyVal[9];
    permut[6] = keyVal[0];
    permut[7] = keyVal[8];
    permut[8] = keyVal[7];
    permut[9] = keyVal[5];
  
    keyVal = LeftShifter(permut, keyVal)
    return keyVal;
  }
export default PermutateKey_10