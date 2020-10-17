const PermutateKey_8_Key = (keyVal) => {
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
    console.log("permut: ", permut);
    return  permut

}
export default PermutateKey_8_Key