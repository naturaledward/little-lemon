// public/assets/js/script.js
// ====================================================
const seededRandomTest = function (seed) {
  var m = 2 ** 35 - 31; // 34359738337
  var a = 185852;
  var s = seed % m;
  // s // ran this on june 26 so s will be 26
  // s * a % m // 4832152
  // (s = s * a % m) / m // 0.00014063413267604942
  // s // 4832152
  return function () { return (s = s * a % m) / m; } }
export const fetchAPITest = function (date) {
  let result = [];
  let random = seededRandomTest(date.getDate());
  // date // Wed Jun 26 2024 09:15:04 GMT-0700 (Pacific Daylight Time)
  // date.getDate() // 26
  // seededRandom(date.getDate()) // ƒ () { return (s = s * a % m) / m; }
  // random contains a function: () { return (s = s * a % m) / m; }
  // don't know how it works, but every time random called, always returns a different value, either greater or less than .5
  // random() // 0.13713482610913866
  // random() // 0.7817020356373617
  // random() // 0.8867272749627167
  // random() // 0.03750637083904287
  // random() // 0.6340331777946275
  // random() // 0.3341594871121617
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) { result.push(i + ':00'); }
    if (random() < 0.5) { result.push(i + ':30'); } }
  /* if date is 1, resulting array: ['17:00', '17:30', '18:00', '20:00', '21:00', '23:30']
  2: ['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30']
  3: ['17:00', '17:30', '19:30', '21:00', '21:30'] and so on */
  return result; };
export const submitAPITest = function (formData) { return true; };
export const updateTimes = ({ type }) => {
  // if you don't add time then the date you pass to fetchApi will be offset by timezone diff
  const selectedDate = new Date(type+'T00:00:00')
  return (fetchAPITest(selectedDate)) }