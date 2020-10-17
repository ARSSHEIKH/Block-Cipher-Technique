import React from 'react'
import ExpansionPermut from './expansionPermut'
import Permut_4 from './permut_4'
import LeftSidePart from './leftSidePart'
import RightSidePart from './rightSidePart'
import Left_LShiftpermut from './left_LShiftpermut'
import PermutateKey_10 from './permutateKey_10'
import FindKey1, {FindKey2} from './findKeys'
import Breaking_PT_into_TwoParts from './breaking_PT_into_TwoParts'
import XOR_Operation from './XOR_Operation'
import Joining_TwoArrays from './joining_TwoArrays'
import InitialPermut_8 from './initialPermut_8'
import InitialPermut_1 from './initialPermut_1'

function forPlainText(plaintext, key1, key2) {
  let _128bits = [1, 0, 0, 0, 0, 0, 0, 0];

  let step1_ip = InitialPermut_8(plaintext); //step1
  let exp_permut = Breaking_PT_into_TwoParts(step1_ip); // step 2 and step3
  let s = XOR_Operation(exp_permut[2], key1)    // step4
  // let s0 = LeftSidePart(s, 4);
  // let s1 = RightSidePart(s, 4);
  
  //#region Step 5:
  const step5 = XOR_Operation(s, _128bits);  //Step 5: Take the output of XOR and again XOR with the binary of 128.
  console.log("step5", step5);
  // above _128bits contains 1 0 0 0 0 0 0 0
  //#endregion

  //#region Step 6: Apply Circular Left shift by 1 on Output of XOR
  let step6 = Left_LShiftpermut(step5)
  let left_new_s0 = LeftSidePart(step6, 4);
  let right_new_s1 = RightSidePart(step6, 4);
  //#endregion
  console.log("left_new_s0, right_new_s1", left_new_s0, right_new_s1)
  
  //#region Step 7: Take the right side value and put it into P.4 Table. P 4
  let step7 = Permut_4(right_new_s1); //Step 7
  console.log("step7, exp_permut[0]", step7, exp_permut[0])
  //#endregion

  //#region Step 8: Take the output and XOR it with the value of left side in Step 2

  let step8 = XOR_Operation(step7, exp_permut[0])
  // here above exp_permut[0] is left 4-bits of step 2
  //#endregion

  // console.log(exp_permut[1]);

  //#region step11 Now take the step8 value and put it into E.P table.
  let step11 = ExpansionPermut(step8);

  //#endregion

  //#region Step 12: Take the output and apply XOR with Key2.
  let step12 = XOR_Operation(step11, key2);
  //#endregion 

  //#region Step 13: Take the output of XOR and again XOR with the binary of 128.
  let step13 = XOR_Operation(step12, _128bits);
  //#endregion 

  //#region Step 14: Apply Circular Left shift by 1 on Output of XOR
    let step14 = Left_LShiftpermut(step13);
    let step14_L = LeftSidePart(step14, 4);
    let step14_R = RightSidePart(step14, 4);
  //  step14=step14.slice(0,2)
  //#endregion 
  console.log(step14_R,  step14_L);

  //#region Step 15: Take the right side value and put it it into P.4
  let step15 = Permut_4(step14_R);
  //#endregion

  //#region Step 16: Take the output and XOR it with the value of left side in Step 10.
  let step16 = XOR_Operation(step15, exp_permut[1]);
  //#endregion

  //#region Step 17: Now take the Output of XOR as Left Side value and take the Right Side value in Step 10.
    let step17 = Joining_TwoArrays(step16, step8, 4);
  //#endregion
  
  //#region Step 18: Now take the value and put it into IP-1 table.
  let step18 = InitialPermut_1(step17);
  //#endregion

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
      
      keyVal = PermutateKey_10(keyVal);
  
      document.getElementById("lblkey1").textContent = `Key after P10 is : ` + keyVal.join(" ")

      let key1 = FindKey1(keyVal);
      let key2 = FindKey2(keyVal);

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
    if (counter1 !== 8) {
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
    if (counter2 !== 10) {
      document.getElementById("lblCount2").style.color = "red";
    }
    else {
      document.getElementById("lblCount2").style.color = "green";
    }
    document.getElementById("lblCount2").textContent = counter2;
  }
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
