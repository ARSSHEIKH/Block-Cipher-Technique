
import LeftSidePart from './leftSidePart'
import RightSidePart from './rightSidePart'
import ExpansionPermut from './expansionPermut'

export default function Breaking_PT_into_TwoParts(value) {
    let mid = value.length / 2;
    let leftpermut = LeftSidePart(value, mid);
    let rightpermut = RightSidePart(value, mid)
    let exp_permut = ExpansionPermut(rightpermut) // step3
    return [leftpermut, rightpermut, exp_permut];
  }