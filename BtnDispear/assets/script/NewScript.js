// const POSITION_UP = 1;
// const POSITION_DOWN = 2;

cc.Class({
    extends: cc.Component,

    properties: {
        button: {
            default: null,
            type: cc.Button
        },

    },

    // use this for initialization
    onLoad: function () {
        //this.clickTimeArray = new Array();


        var self = this;

        this.node.on(cc.Node.EventType.TOUCH_START, this.nodeDoubleClickCallBack, this);
        // this.pokerNode.on(cc.Node.EventType.TOUCH_MOVE, this.moveCallback, this);


    },

 
    
    nodeDoubleClickCallBack: function(event){


        this.button.node.active = !this.button.node.active; 
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
