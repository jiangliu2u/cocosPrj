// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        monPrefab: {
            default: null,
            type: cc.Prefab
        },

        scoreBoard:{

            default: null,
            type:cc.Label,
        },
        button: {
            default: null,
            type: cc.Button
        },

        score:0,
    },


    spawnNewMon: function() {
        
        // 使用给定的模板在场景中生成一个新节点

        for(var i=0; i <13;i++){
            var newMon = cc.instantiate(this.monPrefab);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newMon);
            // 为星星设置一个随机位置
            
            newMon.setPosition(cc.p(-350+60*i,-150));
            //newMon.setPosition(this.getNewMonPosition());
        }
    },
    // onLoad: function () {
    //     //this.clickTimeArray = new Array();


    //     var self = this;

    //     this.node.on(cc.Node.EventType.TOUCH_START, this.nodeDoubleClickCallBack, this);
    //     // this.pokerNode.on(cc.Node.EventType.TOUCH_MOVE, this.moveCallback, this);


    // },

 
    
    // nodeDoubleClickCallBack: function(event){


    //     this.button.node.active = !this.button.node.active; 
    // },


    getNewMonPosition: function () {
        
        return cc.p(cc.random0To1()*100, cc.random0To1()*100);
    },

    counter: function(){
            this.score +=1;
            this.scoreBoard.string= "Score:" + this.score;

    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
