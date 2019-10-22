function ModelBussiness() {
    this.currentAnimationState = 0;
}
ModelBussiness.prototype.init = function (roomName) {
    //悬停回调
    WT3DObj.mouseOverCallBack = this.mouseOverCallBack;
    //进入回调
    WT3DObj.mouseOverInCallBack = this.mouseOverInCallBack;
    //离开回调
    WT3DObj.mouseOverLeaveCallBack = this.mouseOverLeaveCallBack;
    //悬停触发时间长度
    WT3DObj.mouseOverTimeLong = 1000;
}

//单击选中
ModelBussiness.prototype.clickSelectCabinet = function (_obj, _face) {
}
ModelBussiness.prototype.currentShowCabinet = null;
ModelBussiness.prototype.currentState = 0;

//双击选中
ModelBussiness.prototype.dbClickSelectCabinet = function (_obj, _face) {
    if (!_obj.visible) {
        return;
    }

    if (_obj.name.indexOf("cube2_612") >= 0
      ) {
        modelBussiness.clickBuildAnimation();
    } else if (_obj.name.indexOf("b1_floor_") >= 0
      ) {
        //显示楼层
        modelBussiness.clickFloorAnimation(_obj);
    } else if (_obj.name.indexOf("floor_room_zt") >= 0
      ) {
        //显示楼层
        modelBussiness.clickRoomAnimation(_obj);
        
    } else if (_obj.name.indexOf("b3_tv_2") >= 0 || _obj.name.indexOf("messagePanel_2") >= 0) {
        modelBussiness.resetBuild();
    }
    //双击摄像机
    else if (_obj.name.indexOf("camera") >= 0) {
        modelBussiness.playVideo("ws://220.231.250.181:10080/streamv2/live.flv?ip=10.82.31.193&port=5001&profile=h264major&channel=007ea8e5b1884dc6904ba0098ed1b569");
    }
}

//悬停
ModelBussiness.prototype.mouseOverCallBack = function (_obj, face) {
}
ModelBussiness.prototype.mouseInCurrentObj = null;
ModelBussiness.prototype.lastMouseInCurrentObj = null;
ModelBussiness.prototype.mouseOverInCallBack = function (_obj, face) {
    var _this = this;
    var color = 0xbfffea;


    console.log(_obj.name);
    modelBussiness.lastMouseInCurrentObj = _obj;
    modelBussiness.mouseInCurrentObj = _obj;
    if (_obj.name.indexOf("b1_floor_") >= 0 || _obj.name.indexOf("floor_room_") >= 0) {
        var _sobj = _obj;
        if (_obj.name.indexOf("OBJCREN") > 0) {
            _sobj = _obj.parent;
        }
        modelBussiness.mouseInCurrentObj = _sobj;
        WT3DObj.commonFunc.setSkinColorByObj(_sobj, 0x00ffff);
    } else if (_obj.name.indexOf("b3_tv_2") >= 0) {
        layer.msg("双击该电视返回园区总览");
    } else if (_obj.name.indexOf("messagePanel_2") >= 0) {
        layer.msg("双击该信息牌返回园区总览");
    }
    
}
ModelBussiness.prototype.mouseOverLeaveCallBack = function (_obj, face, nowobj) {
    var _this = this;
    var color = 0x000000;
    if (_obj.name.indexOf("b1_floor_") >= 0 || _obj.name.indexOf("floor_room_") >= 0) {
        var _sobj = _obj;
        if (_obj.name.indexOf("OBJCREN") > 0) {
            _sobj = _obj.parent;
        }
        WT3DObj.commonFunc.setSkinColorByObj(_sobj, 0x000000);
    } else if (_obj.name.indexOf("b3_tv_2") >= 0) {
        layer.closeAll();
    } else if (_obj.name.indexOf("messagePanel_2") >= 0) {
        layer.closeAll();
    }

}


//双击大楼时动画
ModelBussiness.prototype.outCube = null;
ModelBussiness.prototype.clickBuildAnimation=function(){
    if (!this.outCube) {
        this.outCube = WT3DObj.commonFunc.findObject("cube2_612");
    }
    var c = this.outCube;
    WT3DObj.commonFunc.changeObjsOpacity([c], 1, 0.01, 600, function () {
    });
    new TWEEN.Tween(c.scale).to({
        x:3,
        y:3,
        z:3
    }, 700).onUpdate(function () {
    }).onComplete(function () {
        WT3DObj.commonFunc.changeObjsOpacity([c], 0.01, 1, 10, function () {
        });
        c.scale.x = 1; c.scale.y = 1; c.scale.z = 1;
        c.visible = false;
    }).start();
}
//获取楼层模型对象
ModelBussiness.prototype.floors = null;
ModelBussiness.prototype.B1Models = null;
ModelBussiness.prototype.getFloors = function () {
    if (!this.floors) {
        this.floors = {};
        this.B1Models = [];
        $.each(WT3DObj.scene.children, function (_index, _obj) {
            if (_obj.name.indexOf("b1_floor_") == 0) {
                modelBussiness.floors[_obj.name] = _obj;
            }
            if (_obj.name.indexOf("b1") == 0
                || _obj.name.indexOf("cube2_612") == 0
                || _obj.name.indexOf("messagePanel_1") == 0
                || _obj.name.indexOf("messagePanel_2") == 0) {
                modelBussiness.B1Models.push(_obj);
            }
        });
    }
    return this.floors;
}
ModelBussiness.prototype.resetBuild = function () {

    $.each(modelBussiness.B1Models, function (findex, fobj) {
        fobj.visible = true;
        if (fobj.od_position) {
            if (fobj.od_position.x)
                fobj.position.x = fobj.od_position.x;
            if (fobj.od_position.y)
                fobj.position.y = fobj.od_position.y;
            if (fobj.od_position.z)
                fobj.position.z = fobj.od_position.z;
        };

    });

    var _floors = this.getFloors();
    var needHideFloors = [];
    needHideFloors.push(_floors["b1_floor_top"]);
    for (var i = 6; i > 0; i--) {
        needHideFloors.push(_floors["b1_floor_" + i]);

    }
    WT3DObj.commonFunc.changeObjsOpacity(needHideFloors, 0.1, 1, 500, function () {});
    WT3DObj.commonFunc.changeCameraPosition({ x: 1456.7199952545395, y: 1400.088901682739, z: 3097.051259782462 },
                 { x: -172.72016085901143, y: 57.386418380824466, z: -75.19850675990654 }, 1000,
                    function () {

                    });
    this.hidefloorData();
    this.hideRoomData();
    layer.closeAll();
}
//加载楼层模型
ModelBussiness.prototype.floorModels = {};
ModelBussiness.prototype.loadFloor = function (floorNub, callBack) {
    if (this.floorModels["f" + floorNub]) {
        if (callBack) {
            callBack();
        }
        $.each(modelBussiness.floorModels["f" + floorNub], function (findex, fobj) {
            fobj.visible = true;
        });
    } else {
        var jsonmodels =null;
        switch (floorNub) {
            case 1: jsonmodels =getFloorData();
                break;
            default:
                layer.msg("该楼层未立模！");
                break;
        }
        if (jsonmodels) {
        this.floorModels["f" + floorNub] = [];
        WT3DObj.commonFunc.loadModelsByJsons(jsonmodels, { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, true, true, function () {
            $.each(WT3DObj.scene.children, function (_index, _obj) {
                if (_obj.name.indexOf("floor_") == 0) {
                    modelBussiness.floorModels["f" + floorNub].push(_obj);
                }
            });
            if (callBack) {
                callBack();
            }
        });
        }
    }
}
ModelBussiness.prototype.hidefloorData = function () {
    for (var fs in modelBussiness.floorModels) {
        if (modelBussiness.floorModels[fs]) {
            var fmodels = modelBussiness.floorModels[fs];
            $.each(fmodels, function (findex, fobj) {
                fobj.visible = false;
            });
        }
    };
}
//双击楼层时动画
ModelBussiness.prototype.clickFloorAnimation = function (floor) {
    var _floorNub = parseInt(floor.name.replace("b1_floor_", ""));
    if (floor.name.indexOf("b1_floor_top") >= 0) {
        _floorNub = "top";
    } else {
        this.loadFloor(_floorNub);
    }
    console.log(_floorNub);
    var _floors = this.getFloors();
    //b1_floor_top
    var _floor = _floors["b1_floor_" + _floorNub];
    var needHideFloors = [];
    if (_floorNub != "top") {
        needHideFloors.push(_floors["b1_floor_top" ]);
        for (var i = 6; i > _floorNub; i--) {
            needHideFloors.push(_floors["b1_floor_"+i]);
        }
    }
    if (needHideFloors.length > 0) {
        WT3DObj.commonFunc.flashObjs([floor],floor.name+ "_flashanimation_", 0x00aa00, 10, 200, 0);
        modelBussiness.distanceApartFloor(_floorNub,function(){
            WT3DObj.commonFunc.changeObjsOpacity(needHideFloors, 1, 0.01, 1500, function () {
                $.each(needHideFloors, function (_index,_obj) {
                    _obj.visible = false;
                    _obj.position.y = 18000;
                });
            });
        });
    }


}
ModelBussiness.prototype.distanceApartFloor = function (floorNub,callBack) {
    var _floors = this.getFloors();
    var objs = [];
    for (var i = 1; i <=6; i++) {
            objs.push(_floors["b1_floor_" + i]);
     }
    objs.push(_floors["b1_floor_top"]);
    for (var i = 0; i < objs.length; i++) {
        if (!objs[i].od_position)
        objs[i].od_position = {
            y: objs[i].position.y
        };
    }

    var distance = {
        y: 0
    };
    new TWEEN.Tween(distance).to({
        y: 300,
    }, 500).onUpdate(function () {
        for (var i = floorNub; i < objs.length; i++) {
            if (objs[i].od_position) {
                objs[i].position.y = objs[i].od_position.y + this.y * i;
            }
        }
    }).onComplete(function () {
        if (callBack) {
            callBack();
        }
    }).start();
}
ModelBussiness.prototype.shrinkageFloor = function (callBack) {
    var _floors = this.getFloors();
    var objs = [];
    for (var i = 1; i <=6; i++) {
        objs.push(_floors["b1_floor_" + i]);
    }
    objs.push(_floors["b1_floor_top"]);
    for (var i = 0; i < objs.length; i++) {
        if (!objs[i].od_position)
            objs[i].od_position = {
            y: objs[i].position.y
        };
    }
    var distance = {
        y: 0
    };
    new TWEEN.Tween(distance).to({
        y: 300,
    }, 500).onUpdate(function () {
        for (var i = floorNub; i < objs.length; i++) {
            if (objs[i].od_position)
                objs[i].position.y = objs[i].od_position.y - this.y * i;
        }
    }).onComplete(function () {
        if (callBack) {
            callBack();
        }
    }).start();
}
//加载房间模型
ModelBussiness.prototype.clickRoomAnimation = function (room) {
    WT3DObj.commonFunc.flashObjs([room], room.name + "_flashanimation_", 0x00aa00, 10, 200, 0);
    this.loadRoom(room.name);
    this.getFloors();
    for (var fs in modelBussiness.floorModels) {
        if (modelBussiness.floorModels[fs]) {
            var fmodels = modelBussiness.floorModels[fs];
            $.each(fmodels, function (findex, fobj) {
                fobj.visible = false;
            });
        }
    };
    $.each(modelBussiness.B1Models, function (findex, fobj) {
        fobj.visible = false;
    });
    WT3DObj.commonFunc.changeCameraPosition({ x: -604.0779048673369, y: 177.66231080858208, z: 193.15989441362137 }, { x: -318.7099420159559, y: 160.1272682510829, z: -371.46653359392815 }, 1000, function () { });
   
}
ModelBussiness.prototype.roomModels = {};
ModelBussiness.prototype.currentShowRoomName = "currentShowRoomName";
ModelBussiness.prototype.currentShowroomFlagStr = "currentShowroomFlagStr";
ModelBussiness.prototype.loadRoom = function (roomName, callBack) {
    var jsonmodels = null;
    var roomFlagStr = "roomFlagStr";
    switch (roomName) {
        case "floor_room_zt":
            jsonmodels = getRoomData();
            roomFlagStr = "b3_";
            break;
        default:
            layer.msg("该房间未立模！");
            break;
    }
    this.currentShowroomFlagStr = roomFlagStr;
    this.currentShowRoomName = roomName;

    if (this.roomModels["r_" + roomName]) {
        if (callBack) {
            callBack();
        }
        $.each(modelBussiness.roomModels["r_" + roomName], function (findex, fobj) {
            fobj.visible = true;
        });
    } else {
        if (jsonmodels) {
            this.roomModels["r_" + roomName] = [];
            WT3DObj.commonFunc.loadModelsByJsons(jsonmodels, { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, true, true, function () {

                if (callBack) {
                    callBack();
                }
            });
        }
    }
}
ModelBussiness.prototype.hideRoomData = function () {
    if (!this.roomModels["r_" + modelBussiness.currentShowRoomName] || modelBussiness.roomModels["r_" + modelBussiness.currentShowRoomName].length<=0) {
        modelBussiness.roomModels["r_" + modelBussiness.currentShowRoomName] = [];
        $.each(WT3DObj.scene.children, function (_index, _obj) {
            if (_obj.name.indexOf(modelBussiness.currentShowroomFlagStr) == 0) {
                modelBussiness.roomModels["r_" + modelBussiness.currentShowRoomName].push(_obj);
            }
        });
    }
    for (var fs in modelBussiness.roomModels) {
        if (modelBussiness.roomModels[fs]) {
            var fmodels = modelBussiness.roomModels[fs];
            $.each(fmodels, function (findex, fobj) {
                fobj.visible = false;
            });
        }
    };
}
//播放摄像头
ModelBussiness.prototype.playVideo = function (wsSrc) {
    var html = "<div id='devInfo'>";
    html += ' <video id="videoPlayer" style="width:450px;height:300px;margin:0px;cursor:pointer;" autoplay muted>\
                                <source src="" type="application/x-rtsp">\
                            </video>';
    html += "</div>";
     layer.open({
        title:"实时视频",
        type: 1,
        shade: 0,
        content: html,
        moveEnd: function (a) {
        },
        maxmin: false,
        cancel: function () {
            layer.closeAll();
        }
    });
     var wsPlayer = new WSPlayer("videoPlayer", {
        modules: [
            {
                client: RTSPClient,
                transport: {
                    constructor: WebsocketTransport,
                    options: {
                        socket: wsSrc
                    }
                }
            }
        ]
    });
    wsPlayer.setSource(wsSrc, "rtsp");
}

var modelBussiness = new ModelBussiness();