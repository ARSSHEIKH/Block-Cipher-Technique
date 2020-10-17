export default function XOR_Operation(exp_permut, value) {
    let s = []
    console.log("exp_permut, value:", exp_permut, value);
    for (let i = 0; i < exp_permut.length; i++) {
      if (exp_permut[i] == parseInt(value[i])) {
        console.log("exp_permut, value:", exp_permut[i], value[i]);
        s[i] = 0;
        console.log("s[i]:", s[i]);
      }
      else {
        console.log("exp_permut, value:", exp_permut[i], value[i]);
        s[i] = 1;
        console.log("s[i]:", s[i]);
      }
    }
    console.log("s:", s);
    return s;
  }