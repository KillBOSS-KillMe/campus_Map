function getPageData() {
  // 通过url参数获取
  // file:///D:/workspace/campus_Map/fence.html?openid=10
  // let url = location.search; //获取url中"?"符后的字串
  let url = '?openid=10'
  console.log(url)
  let theRequest = new Object();
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest
}
function fun_date(num) {
  var date1 = new Date();
  //今天时间
  // var time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
  // console.log(time1);
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + num);
  //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
  var time2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
  console.log(time2);
  return time2;
}