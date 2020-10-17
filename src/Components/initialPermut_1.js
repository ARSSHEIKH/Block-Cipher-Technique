export default function InitialPermut_1(ip_plaintext) {
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