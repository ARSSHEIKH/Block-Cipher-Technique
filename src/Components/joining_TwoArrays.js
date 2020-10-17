export default function Joining_TwoArrays(left, right, mid){
    let value = [];
    console.log("left", left);
    console.log("right", right);
    console.log("mid", mid);
      let j = 0;
      for (let i = 0; i < (parseInt(mid)*2); i++) {
        if (i < mid) {
          value[i] = left[i];
          console.log("left[i]", left[i]);
          console.log("value[i]]", value[i]);
        }
        else if (i > mid - 1) {
  
          value[i] = right[j];
          console.log("right[i]", right[i]);
          console.log("value[i]]", value[i]);
          j++;
        }
      }
    return value
  }