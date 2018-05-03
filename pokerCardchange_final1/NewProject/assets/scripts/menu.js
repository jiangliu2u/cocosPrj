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

        poker: {
            default: null,
            type: cc.Prefab
         },

        pokerNode: {
            default: null,
            type: cc.Node
        },

        monPrefab:{
            default:null,
            type:cc.Prefab,
        },

        point:0,
        pressedScale: 1,
        transDuration: 0,
        sizeFlag:true,
        pokerSpriteList: null,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        var poker = this.poker;
        this.pokerSpriteList = new Array();
        cc.loader.loadRes("imgs/poker", cc.SpriteAtlas, function (err, assets) {
            // assets 是一个 SpriteFrame 数组，已经包含了图集中的所有 SpriteFrame。
            // 而 loadRes('test assets/sheep', cc.SpriteAtlas, function (err, atlas) {...}) 获得的则是整个 SpriteAtlas 对象。
            // console.log('---' + err);
            // console.log('====' + assets);
            // cc.SpriteAtlas;
            
            var cardMatrix=new Array();
            for(var i=0; i<52;i++){
                cardMatrix[i]=i+1;
            } 
            
            shuffle(cardMatrix); 
            
            
            function shuffle(cardMatrix){
                
                var tmp;   
                for(var i=0; i <2000;i++){
                    var randNumber=Math.floor((Math.random()*52));
                    
                    tmp=cardMatrix[0];
                    cardMatrix[0]=cardMatrix[randNumber];
                    cardMatrix[randNumber]=tmp;
                    
                } 
                
            }

            
            //cc.log(cardMatrix);
            var ttt = assets.getSpriteFrames();
            //cc.log(ttt);
            // cc.SpriteFrame
            for(var i = 1; i < ttt.length; i++){
                
                if(i == 13)
                    break;
                var sf = ttt[cardMatrix[i]];
                //cc.log(sf);
                // console.log(JSON.stringify(sf));
                // console.log(sf._name);

                var pokerSprite = cc.instantiate(poker);
                pokerSprite.getComponent(cc.Sprite).spriteFrame = sf;
                pokerSprite.getComponent(cc.Sprite).spriteFrame
                self.pokerNode.addChild(pokerSprite);
                pokerSprite.setPosition(100+i*25, 100);
                //pokerSprite.status = POSITION_DOWN;

                self.pokerSpriteList.push(pokerSprite);
            }

        });

    },
    
    spawnNewMon: function() {
        
        // 使用给定的模板在场景中生成一个新节点

        for(var i=0; i <13;i++){
            var newMon = cc.instantiate(this.monPrefab);
            //cc.log(this.node);
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
