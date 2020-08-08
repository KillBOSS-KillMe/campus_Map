// const requestUrl = "https://www.hwaaogj.com:6443/ste/"
// axios.defaults.baseURL = "https://www.hwaaogj.com:6443/ste/";
// axios.defaults.headers.common['Authorization'] = userInfo.token;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// https://www.hwaaogj.com:6443/ste/geo/location/latest/{terminalSn}
function domConShow() {
  let domNode = document.getElementsByClassName("domCon")
  domNode[0].classList.remove("domCon");
}
function axiosInit() {

  axios.defaults.baseURL = "https://www.hwaaogj.com/ste/";
  axios.defaults.headers.common['Authorization'] = userInfo.token;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}
// 二维数组转一维数组
function flatten(arr) { return [].concat( ...arr.map(x => Array.isArray(x) ? flatten(x) : x) ) }
// 获取所有URL参数
function getPageData() {
  // 通过url参数获取
  // file:///D:/workspace/campus_Map/fence.html?openid=10
  let url = location.search; //获取url中"?"符后的字串
  // let url = '?openid=10'
  // console.log(url)
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
// 获取单个URL参数
function getUrlParam(name){
  // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
  var url = window.location.search;
  // 正则筛选地址栏
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  // 匹配目标参数
  var result = url.substr(1).match(reg);
  //返回参数值
  return result ? decodeURIComponent(result[2]) : null;
}
function fun_date(num) {
  var date1 = new Date();
  //今天时间
  // var time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
  // console.log(time1);
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + num);
  //num是正数表示之后的时间，num负数表示之前的时间，0表示今天
  var time2 = date2.getFullYear() + "-" + completion(date2.getMonth() + 1) + "-" + completion(date2.getDate() );
  console.log(time2);
  return time2;
}
function completion(s) {
  return s < 10 ? '0' + s: s;
}
function showTime(timeStr) {
  if (timeStr == null || timeStr == '') {
    return;
  }
  timeStr = formatDateTime(timeStr)
  var end_str = (timeStr).replace(/-/g, "/");
  var class_time = new Date(end_str);   //将时间字符串转换为时间.
  var now_time = new Date();
  var totalSecs = (class_time - now_time) / 1000;   //获得两个时间的总毫秒数. 靠前的就调换再减。
  var days = Math.floor(totalSecs / 3600 / 24);
  var hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
  var mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
  var secs = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60));
  let time = ''
  console.log(Math.abs(days) + "天" + hours + "小时" + mins + "分钟" + secs + "秒前")
  // if (days != 0) {
  //   time = Math.abs(days) + "天" + hours + "小时" + mins + "分钟" + secs + "秒前";
  // } else if (hours == 0 && mins == 0) {
  //   time = secs + "秒前";
  // } else if (hours == 0 && mins != 0) {
  //   time = mins + "分钟" + secs + "秒前";
  // } else if (hours != 0) {
  //   time = hours + "小时" + mins + "分钟" + secs + "秒前";
  // }
  if (days > 0) {
    time = Math.abs(days) + "天前";
    // time = Math.abs(days) + "天" + hours + "小时" + mins + "分钟" + secs + "秒前";
  } else if (hours == 0 && mins == 0) {
    time = Math.abs(secs) + "秒前"; 
  } else if (hours == 0 && mins != 0) {
    time = Math.abs(mins) + "分钟前";
  } else if (hours != 0) {
    time = Math.abs(hours) + "小时前";
  }
  console.log(time)
  return time
}

function formatDateTime(date) {
  let time = new Date(Date.parse(date));
  time.setTime(time.setHours(time.getHours() + 8));
  let Y = time.getFullYear();
  let M = this.addZero(time.getMonth() + 1);
  let D = this.addZero(time.getDate());
  let h = this.addZero(time.getHours());
  let m = this.addZero(time.getMinutes());
  let s = this.addZero(time.getSeconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}
// 数字补0操作
function addZero(num) {
  return num < 10 ? '0' + num : num;
}