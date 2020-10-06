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

  keyVal = LeftShifter(permut, keyVal)
  return keyVal;
}

function LeftShifter(value) {
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

  leftpermut = leftShiftpermut(leftpermut, mid)    // left Shift for LHS
  rightpermut = rightShiftpermut(rightpermut, mid)    // left Shift for RHS

  {
    let j = 0;
    for (let i = 0; i < value.length; i++) {
      if (i < 4 + 1) {
        value[i] = leftpermut[i];
      }
      else if (i > 4) {

        value[i] = rightpermut[j];

        j++;
      }
    }
  }
  return (
    value
  )
}
function rightShiftpermut(rightpermut, mid) {

  let temp = rightpermut[0]
  for (let i = 0; i < rightpermut.length; i++) {

    if (i == mid - 1) {
      rightpermut[i] = temp;
    }
    else {
      rightpermut[i] = rightpermut[i + 1]
    }
  }
  return rightpermut;
}
function leftShiftpermut(leftpermut, mid) {
  let temp = leftpermut[0]
  for (let i = 0; i < leftpermut.length; i++) {

    if (i == mid - 1) {
      leftpermut[i] = temp;
    }
    else {
      leftpermut[i] = leftpermut[i + 1]
    }
  }
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

  return permut
}
function permutateKey_8(keyVal, key2) {
  LeftShifter(keyVal, null);
  key2 = LeftShifter(keyVal, null);
  return key2
}
function findKey1(keyVal) {
  let key1
  key1 = permutateKey_8_Key1(keyVal);
  document.getElementById("lblkey2").textContent = `Key1 after P8 is : ` + (key1.join(" "))
  return key1

}
function findKey2(keyVal) {
  let key2
  keyVal = permutateKey_8(keyVal);
  key2 = permutateKey_8_Key1(keyVal);
  document.getElementById("lblkey3").textContent = `Key2 after 2 LS is : ` + (key2.join(" "))

  return key2

}
function leftSidePart(value, mid) {
  let leftpermut = [];
  for (let i = 0; i < (value.length) / 2; i++) {
    leftpermut[i] = value[i];
  }
  return leftpermut
}
function rightSidePart(value, mid) {
  let rightpermut = [];
  let j = 0
  for (let i = mid; i < value.length; i++) {
    rightpermut[j] = value[i];
    j++;
  }
  return rightpermut
}
function breaking_PT_into_TwoParts(value) {
  let mid = value.length / 2;

  leftSidePart(value, mid);
  let rightpermut = rightSidePart(value, mid)


  let exp_permut = expansionPermut(rightpermut)
  return exp_permut;

}
function expansionPermut(rightpermut) {
  let permut = [8]
  // rightside pass into EP as 4 1 2 3 2 3 4 1
  // but the index of array will start from 0
  // so therfore 3 0 1 2 1 2 3 0
  permut[0] = rightpermut[3];
  permut[1] = rightpermut[0];
  permut[2] = rightpermut[1];
  permut[3] = rightpermut[2];
  permut[4] = rightpermut[1];
  permut[5] = rightpermut[2];
  permut[6] = rightpermut[3];
  permut[7] = rightpermut[0];
  console.log("permut: ", permut);

  return permut;

}
function XOR_Operation(exp_permut, key1) {
  let s = []
  for (let i = 0; i < 8; i++) {
    if (exp_permut[i] == key1[i]) {
      s[i] = 0;
    }
    else {
      s[i] = 1;
    }
  }
  return s;
  console.log("s:", s);
}

function initialPermut(ip_plaintext, key1) {
  let permut = [8]
  permut[0] = ip_plaintext[1];
  permut[1] = ip_plaintext[5];
  permut[2] = ip_plaintext[2];
  permut[3] = ip_plaintext[0];
  permut[4] = ip_plaintext[3];
  permut[5] = ip_plaintext[7];
  permut[6] = ip_plaintext[4];
  permut[7] = ip_plaintext[6];

  let exp_permut = breaking_PT_into_TwoParts(permut);
  let s = XOR_Operation(exp_permut, key1)
  let s0 = leftSidePart(s, 4);
  let s1 = rightSidePart(s, 4);
  console.log(s0);
  console.log(s1);

  document.getElementById("lblPlainText1").textContent = `PlainText after IP is : ` + permut.join(" ")
  document.getElementById("lblPlainText2").textContent = `PlainText after EP is : ` + exp_permut.join(" ")
  document.getElementById("lblPlainText3").textContent = `PlainText after XOR S0 is : ` + s0.join(" ")
  document.getElementById("lblPlainText4").textContent = `PlainText after XOR S1 is : ` + s1.join(" ")
}
function forPlainText(plaintext, key1) {

  initialPermut(plaintext, key1);
}
const InputForm = () => {
  let counter1 = 0, counter2 = 0;
  let keyVal, plaintext
  const submit = (e) => {
    if (counter1 === 8 && counter2 === 10) {
      keyVal = permutateKey_10(keyVal);
      document.getElementById("lblkey1").textContent = `Key after P10 is : ` + keyVal.join(" ")

      let key1 = findKey1(keyVal);
      let key2 = findKey2(keyVal);

      console.log("key1 : ", key1);
      console.log("key2 : ", key2);

      forPlainText(plaintext, key1);
    }
    else {
      alert("please enter valid length bits of both plain text and key")
    }

  }
  const changeHandler1 = (event) => {
    plaintext = event.target.value;
    counter1 = plaintext.length;
    plaintext = plaintext.toString().split("")
    console.log(plaintext);
    if (counter1 != 8) {
      document.getElementById("lblCount1").style.color = "red";
    }
    else {
      document.getElementById("lblCount1").style.color = "green";
    }
    document.getElementById("lblCount1").textContent = counter1;
  }
  const changeHandler2 = (event) => {

    keyVal = event.target.value;
    counter2 = keyVal.length;
    keyVal = keyVal.toString().split("")
    if (counter2 != 10) {
      document.getElementById("lblCount2").style.color = "red";
    }
    else {
      document.getElementById("lblCount2").style.color = "green";
    }
    document.getElementById("lblCount2").textContent = counter2;
  }


  let val;
  return (
    <div className="">
      <h1> Block Cipher Technique </h1>
      <input className="inpText" type="number" placeholder=" Enter 8-bits Platin Text ..." onChange={changeHandler1} />
      <label id="lblCount1"></label>
      <br />
      <input className="inpText" type="number" placeholder=" Enter 10-bits Key" onChange={changeHandler2} />
      <label id="lblCount2"></label>
      <br />

      <input className="inpBtn" type="submit" onClick={submit} />
      <br />

      <label id="lblkey1"></label><br />
      <label id="lblkey2"></label><br />
      <label id="lblkey3"></label><br /><br />

      <label id="lblPlainText1"></label><br />
      <label id="lblPlainText2"></label><br />
      <label id="lblPlainText3"></label><br />
      <label id="lblPlainText4"></label><br />
    </div>

  );
}
export default InputForm
