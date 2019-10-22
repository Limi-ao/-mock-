var WT3DModel;
function threeStart(_height) { 
    WT3DModel = new WT3D();   
    var initOption = {
        antialias: true, 
        loadSyn: false, 
        showHelpGrid: false,
        clearCoolr: 0x4068b0,  
        clearColorOp: 0,    
    };
    var Aobjects = {  // 给3D对象绑定事件
        objects: getBuildData(),
        events: {
            dbclick: [
                {
                    obj_name: "ALL",
                    obj_event: function (_obj, face) { 
                      
                        {
                     
                            modelBussiness.dbClickSelectCabinet(_obj, face);
                        }
                    }
                },
            ]
        },
        btns: [
        ]
    }

    if (parent != null && parent.Aobjects_objects != null) {
        Aobjects.objects = parent.Aobjects_objects;
    }

    Aobjects.imageList = [];
    imageUUIDList = [];
    function getImageList(obj) {
        if (obj && typeof (obj) == "object") {
            $.each(obj, function (_index, _obj) {
                if (_obj && _obj.imgurl) {
                    var imgObj = {};
                    imgObj.uuid = _obj.imgurl;
                    imgObj.imgurl = _obj.imgurl;
                    if ($.inArray(imgObj.uuid, imageUUIDList) < 0) {
                        imageUUIDList.push(imgObj.uuid);
                        Aobjects.imageList.push(imgObj);
                    }
                }
                getImageList(_obj);
            });
        }
    }
    getImageList(Aobjects.objects);
    if (_height != null && typeof (_height) != 'undefined' && _height == 0) {
        $("#canvas-frame").height($(document).height());
    }
    WT3DModel.initWT3D('canvas-frame', initOption, Aobjects);
    WT3DModel.start();
}

