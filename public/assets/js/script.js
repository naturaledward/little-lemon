// public/assets/js/script.js
// ====================================================
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31; // 34359738337
  var a = 185852;
  var s = seed % m; // don't see the point of this, it will always evaluate to the seed
  /* console.log(s); */ // ran this on june 23 so s will be 23
  /* console.log(s * a % m); */ // 4274596 again, don't see the point of m will always evaluate to s*a
  /* console.log((s = s * a % m) / m) */ // 0.0001244071173672745
  /* console.log(s); */ //4274596
  return function () { return (s = s * a % m) / m; } }
const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    // random contains a function: () { return (s = s * a % m) / m; }
    // don't know how it works but invoking will return values greater than .5 and lesser than .5
    /* console.log(random); */
    if (random() < 0.5) { result.push(i + ':00'); } 
    if (random() < 0.5) { result.push(i + ':30'); } }
    /* thus if date is 1 then resulting array is ['17:00', '17:30', '18:00', '20:00', '21:00', '23:30']
    2: ['17:00', '17:30', '18:30', '20:00', '20:30', '21:00', '22:00', '23:30']
    3: ['17:00', '17:30', '19:30', '21:00', '21:30'] and so on */
    // console.log(result);
  return result; }; 
// this is just a function that returns, argument isn't even used, it's pointless
const submitAPI = function (formData) { return true; };
