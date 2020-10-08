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

  leftpermut = left_LShiftpermut(leftpermut)    // left Shift for LHS
  rightpermut = right_LShiftpermut(rightpermut, mid)    // left Shift for RHS

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
function right_LShiftpermut(rightpermut, mid) {

  let temp = rightpermut[0]
  for (let i = 0; i < rightpermut.length; i++) {

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
function left_LShiftpermut(leftpermut) {

  let temp = leftpermut[0]
  console.log(temp);

  for (let i = 0; i < leftpermut.length; i++) {

    if (i == leftpermut.length - 1) {
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

  let leftpermut = leftSidePart(value, mid);
  let rightpermut = rightSidePart(value, mid)


  let exp_permut = expansionPermut(rightpermut) // step3
  return [leftpermut, rightpermut, exp_permut];

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
function XOR_Operation(exp_permut, value) {
  let s = []
  for (let i = 0; i < exp_permut.length; i++) {
    if (exp_permut[i] == value[i]) {
      s[i] = 0;
    }
    else {
      s[i] = 1;
    }
  }
  console.log("s:", s);
  return s;

}

function permut_4(right_new_s1) {
  let p4 = [];
  p4[0] = right_new_s1[1];
  p4[1] = right_new_s1[3];
  p4[2] = right_new_s1[2];
  p4[3] = right_new_s1[0];

  return p4;
}
function joining_TwoArrays(left, right, mid){
  let value = [];
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
function initialPermut_8(ip_plaintext) {
  let permut = [8]
  permut[0] = ip_plaintext[1];
  permut[1] = ip_plaintext[5];
  permut[2] = ip_plaintext[2];
  permut[3] = ip_plaintext[0];
  permut[4] = ip_plaintext[3];
  permut[5] = ip_plaintext[7];
  permut[6] = ip_plaintext[4];
  permut[7] = ip_plaintext[6];

  return permut
}
function initialPermut_1(ip_plaintext) {
  //IP_1 table is:   4 1 3 5 7 2 8 6
  let permut = [8]
  permut[0] = ip_plaintext[3];
  permut[1] = ip_plaintext[0];
  permut[2] = ip_plaintext[2];
  permut[3] = ip_plaintext[4];
  permut[4] = ip_plaintext[6];
  permut[5] = ip_plaintext[1];
  permut[6] = ip_plaintext[7];
  permut[7] = ip_plaintext[5];

  return permut
}
function forPlainText(plaintext, key1, key2) {
  let _128bits = [1, 0, 0, 0, 0, 0, 0, 0];

  let step1_ip = initialPermut_8(plaintext, key1, key2); //step1
  let exp_permut = breaking_PT_into_TwoParts(step1_ip); // step 2 and step3
  let s = XOR_Operation(exp_permut[2], key1)    // step4
  let s0 = leftSidePart(s, 4);
  let s1 = rightSidePart(s, 4);

  //#region Step 5:
  let step5 = XOR_Operation(s, _128bits);  //Step 5: Take the output of XOR and again XOR with the binary of 128.
  // above _128bits contains 1 0 0 0 0 0 0 0
  //#endregion

  //#region Step 6: Apply Circular Left shift by 1 on Output of XOR
  let step6 = left_LShiftpermut(step5)
  let left_new_s0 = leftSidePart(step6, 4);
  let right_new_s1 = rightSidePart(step6, 4);
  //#endregion
  console.log(step6)
  //#region Step 7: Take the right side value and put it into P.4 Table. P 4
  let step7 = permut_4(right_new_s1); //Step 7
  //#endregion

  //#region Step 8: Take the output and XOR it with the value of left side in Step 2
  let step8 = XOR_Operation(step7, exp_permut[0])
  // here above exp_permut[0] is left 4-bits of step 2
  //#endregion

  console.log(step8);
  // console.log(exp_permut[1]);

  //#region step11 Now take the step8 value and put it into E.P table.
  let step11 = expansionPermut(step8);

  //#endregion
  console.log(step11);

  //#region Step 12: Take the output and apply XOR with Key2.
  let step12 = XOR_Operation(step11, key2);
  //#endregion 
  console.log(step12);

  //#region Step 13: Take the output of XOR and again XOR with the binary of 128.
  let step13 = XOR_Operation(step12, _128bits);
  //#endregion 
  console.log(step13);

  //#region Step 14: Apply Circular Left shift by 1 on Output of XOR
    let step14 = left_LShiftpermut(step13);
    let step14_L = leftSidePart(step14, 4);
    let step14_R = rightSidePart(step14, 4);
  //  step14=step14.slice(0,2)
  //#endregion 
  console.log(step14_R);
  //#region Step 15: Take the right side value and put it it into P.4
  let step15 = permut_4(step14_R);
  //#endregion
  console.log(step15);

  //#region Step 16: Take the output and XOR it with the value of left side in Step 10.
  let step16 = XOR_Operation(step15, exp_permut[1]);
  //#endregion
  console.log("step16", step16);

  //#region Step 17: Now take the Output of XOR as Left Side value and take the Right Side value in Step 10.
    let step17 = joining_TwoArrays(step16, step8, 4);
  //#endregion
  console.log("step17", step17);
  
  //#region Step 18: Now take the value and put it into IP-1 table.
  let step18 = initialPermut_1(step17);
  //#endregion
  console.log("step18", step18);

  document.getElementById("lblCipherText").textContent = `Cipher text is : ` + step18.join(" ")
  document.getElementById("lblPlainText1").textContent = `Result after Step1 is : ` + step1_ip.join(" ")
  document.getElementById("lblPlainText2").textContent = `Result after Step2 is : ` + exp_permut[0].join(" ") + "  " + exp_permut[1].join(" ") 
  document.getElementById("lblPlainText3").textContent = `Result after Step3 is : ` + exp_permut[2].join(" ")
  document.getElementById("lblPlainText4").textContent = `Result after Step4 is : ` + s.join(" ")
  document.getElementById("lblPlainText5").textContent = `Result after Step5 is : ` + step5.join(" ")
  document.getElementById("lblPlainText6").textContent = `Result after Step6 is : ` + step6.join(" ")
  document.getElementById("lblPlainText7").textContent = `Result after Step7 is : ` + step7.join(" ");
  document.getElementById("lblPlainText8").textContent = `Result after Step8 is : ` + step8.join(" ")
  document.getElementById("lblPlainText9").textContent = `Result after Step11 is : ` + step11.join(" ")
  document.getElementById("lblPlainText10").textContent = `Result after Step12 is : ` + step12.join(" ")
  document.getElementById("lblPlainText11").textContent = `Result after Step13 is : ` + step13.join(" ")
  document.getElementById("lblPlainText12").textContent = `Result after Step14 is : ` + step14.join(" ")
  document.getElementById("lblPlainText13").textContent = `Result after Step15 is : ` + step15.join(" ")
  document.getElementById("lblPlainText14").textContent = `Result after Step16 is : ` + step16.join(" ")
  document.getElementById("lblPlainText15").textContent = `Result after Step17 is : ` + step17.join(" ")
  document.getElementById("lblPlainText16").textContent = `Result after Step18 is : ` + step18.join(" ")

  // after getting result in XOR_Operation we do again XOR with 128bits

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

      forPlainText(plaintext, key1, key2);
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
      <b> Please enter binary numbers only e.g: (0 or 1) </b>

      <input className="inpText" type="number" placeholder=" Enter 8-bits Platin Text ..." onChange={changeHandler1} />
      <label id="lblCount1"></label>
      <br />
      <input className="inpText" type="number" placeholder=" Enter 10-bits Key" onChange={changeHandler2} />
      <label id="lblCount2"></label>
      <br />

      <input className="inpBtn" type="submit" onClick={submit} />
      <br />
      <label id="lblCipherText"></label><br />
      <label id="lblkey1"></label><br />
      <label id="lblkey2"></label><br />
      <label id="lblkey3"></label><br />
      <br />

      <label id="lblPlainText1"></label><br />
      <label id="lblPlainText2"></label><br />
      <label id="lblPlainText3"></label><br />
      <label id="lblPlainText4"></label><br />
      <label id="lblPlainText5"></label><br />
      <label id="lblPlainText6"></label><br />
      <label id="lblPlainText7"></label><br />
      <label id="lblPlainText8"></label><br />
      <label id="lblPlainText9"></label><br />
      <label id="lblPlainText10"></label><br />
      <label id="lblPlainText11"></label><br />
      <label id="lblPlainText12"></label><br />
      <label id="lblPlainText13"></label><br />
      <label id="lblPlainText14"></label><br />
      <label id="lblPlainText15"></label><br />
      <label id="lblPlainText16"></label><br />
      <label id="lblCipherText"></label><br />
    </div>

  );
}
export default InputForm
