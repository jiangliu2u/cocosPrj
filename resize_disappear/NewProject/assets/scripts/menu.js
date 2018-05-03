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
        
        scoreBoard:{
            default:null,
            type:cc.Label,
        },



        monPrefab:{
            default:null,
            type:cc.Prefab,
        },

        point:0,
        pressedScale: 1,
        transDuration: 0,
        sizeFlag:true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    


    },
    
    spawnNewMon: function() {
        
        // 使用给定的模板在场景中生成一个新节点

        for(var i=0; i <13;i++){
            var newMon = cc.instantiate(this.monPrefab);
            cc.log(this.node);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newMon);
            // 为星星设置一个随机位置
           
            newMon.setPosition(cc.p(-200+50*i,0));
            //newMon.setPosition(this.getNewMonPosition());
        }
    },

    changeScene: function(){
        cc.director.loadScene('table');

    },

    scoreCounter: function(){
        this.point+=1;
        this.scoreBoard.string = "Score:" + this.point;

    },
    start () {

    },

    // update (dt) {},
});
