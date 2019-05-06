function add(a, b) {
  let aNumber = a;
  let bNumber = b;
  let aArray = [];
  let bArray = [];
  const ans = [];
  if (a.length < b.length) {
    aNumber = '0'.repeat(b.length - a.length) + a;
  } else {
    bNumber = '0'.repeat(a.length - b.length) + b;
  }
  aArray = aNumber.split('');
  bArray = bNumber.split('');
  for (let i = 0; i < aNumber.length; i += 1) {
    ans.push(Number(aArray[i]) + Number(bArray[i]));
  }
  for (let i = ans.length - 1; i > 0; i -= 1) {
    if (ans[i] > 9) {
      ans[i] -= 10;
      ans[i - 1] = ans[i - 1] + 1;
    }
  }
  return ans.join('');
}

module.exports = add;
