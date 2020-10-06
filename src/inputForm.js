import React, { useState } from 'react'
// import SubmitForm.js from './SubmitForm.js'

const permutateKey_10 = (keyVal) => {

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
  console.log(permut);

  keyVal = LeftShifter(permut, keyVal)
  return keyVal;
}

function LeftShifter(value) {
  let mid = value.length / 2;

  let leftpermut = [], rightpermut = [];
  for (let i = 0; i < (value.length) / 2; i++) {
    leftpermut[i] = value[i];
  }

  console.log(leftpermut);

  {
    let j = 0
    for (let i = mid; i < value.length; i++) {
      rightpermut[j] = value[i];
      j++;
    }
    console.log(rightpermut);

  }

  leftpermut = leftShiftpermut(leftpermut, mid)    // left Shift for LHS
  rightpermut = rightShiftpermut(rightpermut, mid)    // left Shift for RHS

  {
    let j = 0;
    for (let i = 0; i < value.length; i++) {
      if (i < 4 + 1) {
        console.log(i);
        value[i] = leftpermut[i];
      }
      else if (i > 4) {

        value[i] = rightpermut[j];

        j++;
      }
    }
  }
  console.log("new key", value);


  return (
    value
  )
}
function rightShiftpermut(rightpermut, mid) {

  let temp = rightpermut[0]
  console.log("temp: ", temp);
  for (let i = 0; i < rightpermut.length; i++) {

    console.log(rightpermut.length);
    if (i == mid - 1) {
      rightpermut[i] = temp;
    }
    else {
      rightpermut[i] = rightpermut[i + 1]
    }
  }
  console.log(rightpermut);
  return rightpermut;
}
function leftShiftpermut(leftpermut, mid) {
  let temp = leftpermut[0]
  for (let i = 0; i < leftpermut.length; i++) {

    console.log(temp);
    if (i == mid - 1) {
      leftpermut[i] = temp;
    }
    else {
      leftpermut[i] = leftpermut[i + 1]
    }
  }
  console.log(leftpermut);
  return leftpermut;
}

// permuatation8 for orignal Key
function permutateKey_8_Key1(keyVal) {
  let permut = [8]

  // According to condition [6 3 7 4 8 5 10 9]
  // but here index will start with 0

  permut[0] = keyVal[5];
  permut[1] = keyVal[2];
  permut[2] = keyVal[6];
  permut[3] = keyVal[3];
  permut[4] = keyVal[7];
  permut[5] = keyVal[4];
  permut[6] = keyVal[9];
  permut[7] = keyVal[8];

  console.log("permut8: ", permut);

  return permut
}
function permutateKey_8_Key2(keyVal, key2) {
  LeftShifter(keyVal, null);
  key2 = LeftShifter(keyVal, null);
  return key2
}
const InputForm = () => {

  let keyVal
  const submit = (e) => {
    let key1, key2;
    keyVal = permutateKey_10(keyVal);
    document.getElementById("lblkey1").textContent = `Key after P10 is : ` + (keyVal.join(" "))
    key1 = permutateKey_8_Key1(keyVal);
    document.getElementById("lblkey2").textContent = `Key1 after P8 is : ` + (key1.join(" "))

    key2 = permutateKey_8_Key2(keyVal);
    document.getElementById("lblkey3").textContent = `Key2 after 2 LS is : ` + (key2.join(" "))

  }

  const changeHandler1 = (event) => {
    let plaintext = event.target.value;
    plaintext = plaintext
    console.log(plaintext);
  }
  const changeHandler2 = (event) => {
    keyVal = event.target.value;
    keyVal = keyVal.toString().split("")
    for (let i = 0; i < 10; i++) {
      console.log(i, ": ", keyVal[i]);
    }

  }
  let val;
  return (
    <div className="">
      <h1> Block Cipher Technique </h1>

      <textarea placeholder=" Enter Plain Text" onChange={changeHandler1} />
      <br />
      <input type="number" placeholder=" Enter 10-bits Key" onChange={changeHandler2} />
      <br />
      <input type="submit" onClick={submit} />
      <br />
      <label id="lblkey1"></label><br />
      <label id="lblkey2"></label><br />
      <label id="lblkey3"></label><br />
    </div>

  );
}
export default InputForm
