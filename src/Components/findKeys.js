import PermutateKey_8_Key1 from './permutateKey_8_Key'
import LeftShifter from './LeftShifter'

function permutateKey_8(keyVal, key2) {
  LeftShifter(keyVal, null);
  key2 = LeftShifter(keyVal, null);
  return key2
}
export default function FindKey1(keyVal) {
    let key1
    key1 = PermutateKey_8_Key1(keyVal);
    document.getElementById("lblkey2").textContent = `Key1 after P8 is : ` + (key1.join(" "))
    return key1
  }
export function FindKey2(keyVal) {
    let key2
    keyVal = permutateKey_8(keyVal);
    key2 = PermutateKey_8_Key1(keyVal);
    document.getElementById("lblkey3").textContent = `Key2 after 2 LS is : ` + (key2.join(" "))
  
    return key2
  }