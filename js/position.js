// var position = new AMap.LngLat(116.397428, 39.90923);

// 创建地图实例
var map = new AMap.Map("container", {
  resizeEnable: true,
  zoom: 13,
  center: [116.397428, 39.90923],
  resizeEnable: true
});


function markersShow(deviceList) {
  var markers = [];
  map = new AMap.Map("container", {
    resizeEnable: true,
    zoom: 13,
    center: [deviceList[0].lastCoordLng, deviceList[0].lastCoordLat],
    resizeEnable: true
  });
  AMap.plugin([
    'AMap.ToolBar',
  ], function () {
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar({
      // 简易缩放模式，默认为 false
      liteStyle: true
    }));
  });
  for (var i = 0; i < deviceList.length; i++) {
    let listItem = deviceList[i]
    let markerDom = `<div class="markerCon" data-index="10">
                    <img class="avatar" src="${listItem.avatar}">
                    <img class="avatarBg" src="./image/avatarBg.png">
                  </div>`;
    let index = i
    let position = [listItem.lastCoordLng, listItem.lastCoordLat]
    let marker = new AMap.Marker({
      position: position,
      content: markerDom,
      clickable: true,
      offset: new AMap.Pixel(-15, -40)
    });
    markers.push(marker);
    AMap.event.addListener(marker, 'click', function (e) {
      // 点击获取标记点下标
      // pageVueNode.deviceInfoShow = true
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