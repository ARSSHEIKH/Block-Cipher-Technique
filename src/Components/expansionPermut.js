export default function ExpansionPermut(rightpermut) {
    let permut = [8]
    // rightside pass into EP as 4 1 2 3 2 3 4 1
    // but the index of array will start from 0
    // so therfore 3 0 1 2 1 2 3 0
    console.log("rightpermut: ", rightpermut);

    permut[0] = rightpermut[3];
    permut[1] = rightpermut[0];
    permut[2] = rightpermut[1];
    permut[3] = rightpermut[2];
    permut[4] = rightpermut[1];
    permut[5] = rightpermut[2];
    permut[6] = rightpermut[3];
    permut[7] = rightpermut[0];

    
  console.log("ExpansionPermut", permut);
    return permut;
 }