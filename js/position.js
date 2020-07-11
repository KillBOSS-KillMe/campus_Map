var position = new AMap.LngLat(116.397428, 39.90923);

// 创建地图实例
var map = new AMap.Map("container", {
  resizeEnable: true,
  zoom: 13,
  center: [116.397428, 39.90923],
  resizeEnable: true
});


function markersShow(deviceList) {
  var markers = [];
  // {name: '设备1', id: '1', img: './image/avatar.png', positions: [116.405467, 39.907761], power: '80%', time: '10分钟前', address: '地址1地址1地址1地址1地址1地址1地址1', signal: '1'},
  for (var i = 0; i < deviceList.length; i++) {
    // 点标记显示内容，HTML要素字符串
    let markerDom = `<div class="markerCon" data-index="10">
                    <img class="avatar" src="${deviceList[i].img}">
                    <img class="avatarBg" src="./image/avatarBg.png">
                  </div>`;
    let index = i
    let marker = new AMap.Marker({
      position: deviceList[i].positions,
      content: markerDom,
      clickable: true,
      offset: new AMap.Pixel(-15, -40)
    });
    markers.push(marker);
    AMap.event.addListener(marker, 'click', function(e) {
      // 点击获取标记点下标
      pageVueNode.deviceInfoShow = true
      pageVueNode.deviceIndex = index
    });
  }
  
  // 将 markers 添加到地图
  map.add(markers);
}



// 清除 marker
function clearMarker() {
  map.remove(markers);
}