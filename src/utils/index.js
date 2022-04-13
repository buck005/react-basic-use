function queryURLParmeter(url) {
  let obj = {};
  if (url.indexOf("?") < 0) return obj;
  let arr = url.split("?");
  url = arr[1];
  arr = url.split("&");
  for (let i = 0; i < arr.length; i++) {
    let curItem = arr[i].split("=");
    obj[curItem[0]] = curItem[1];
  }
  return obj;
}
function randomString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
/*
 * 自定义生成多少位不重复的字符串
 */
const rString = (len) => {
  return randomString(len || 32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
};
export { queryURLParmeter, rString };
