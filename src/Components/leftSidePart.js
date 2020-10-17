export default function LeftSidePart(value, mid) {
    let leftpermut = [];
    for (let i = 0; i < (value.length) / 2; i++) {
      leftpermut[i] = value[i];
    }
    console.log("leftpermut", leftpermut);
    return leftpermut
  }