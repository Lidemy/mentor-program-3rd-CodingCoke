function stars(n) {
  const ans = [];
  let star = '';
  for (let i = 0; i <= n; i += 1) {
    star += '*';
    ans.push(star);
  }
  return ans;
}

module.exports = stars;
