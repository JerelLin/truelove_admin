import "whatwg-fetch"
import tingle from "./tingle.min.js"
import "../../stylesheets/mobile/activity.css"
import "../../stylesheets/mobile/tingle.min.css"

({

    // 获取元素
    modal : null, shadow : null, share_for_love : null, dating : null, receive :  null, shares : null,

    // 初始化函数
    init : function () {

        var _this = this

        this.shadow = this.$("#shadow")[0]
        this.share_for_love = this.$("#share_for_love")[0]
        this.dating = this.$("#dating")[0] || null
        this.receive = this.$("#receive")[0] || null
        this.shares = this.$(".share_icon")

        // 定义弹出层
        this.modal = new tingle.modal({
            footer: true, stickyFooter: false,
            onOpen: function () { 
                console.log( "modal open" )
            },
            onClose: function () { 
                console.log( "modal closed" ) 
            }
        })

        var i = 0, shares_len = this.shares.length
        // 如果是 "我要约会" 页面
        if (this.dating) {
            this.dating.onclick = this.dating_func.bind(this)
        }
        // 如果是 "领取花花" 页面
        if (this.receive) {
            this.receive.onclick = this.receive_func.bind(this)
        }
        //点击阴影区域 底部分享隐藏
        this.shadow.onclick = this.shadow_func.bind(this)
        // 触发分享
        for (; i < shares_len; i += 1) {
            this.shares[i].onclick = this.share_to_otherplace.bind(this)
        }
    },

    // 选取元素
    $ : function (selectors) {
        return document.querySelectorAll(selectors)
    },

    // 我要约会
    dating_func : function () {
        var _this = this
        var user_id = this.$("#save_user_id")[0].value

        this.dating.value = "请等一下哦..."

        fetch( "/change_flowers?user_id=" + user_id )
            .then(function( response ) {
                return response.json()
            })
            .then(function( json ) {
                if( json.error ){
                    _this.create_error_modal( json.message )
                }
                else {
                    _this.modal.setContent("<div>恭喜你获得一朵玫瑰花！快去送给你喜欢的那个TA吧！</div>")
                    _this.modal.setFooterContent("<input type='button' id='longing_for_love' class='longing_for_love' value='去送花' />")
                    _this.modal.open()

                     _this.dating.value = "我要约会"

                    var longing_for_love = _this.$("#longing_for_love")[0]
                    longing_for_love.onclick = _this.longing_for_love_func.bind(_this)
                }
            })
            .catch(function( error ) {
                console.log( "parsing failed", error )
            })
    },

    // 填写手机号码领取花花吧！
    receive_func : function () {
        var _this = this
        var user_id = this.$("#save_user_id")[0].value
        var phone_num = this.$("#phone_value")[0].value
        if( phone_num.length == 0 ){
            this.create_error_modal( "手机号码不能为空!" )
            return
        }

        this.receive.value = "请等一下哦..."

        fetch( "/change_flowers?user_id=" + user_id + "&phone_num=" + phone_num )
            .then(function( response ) {
                return response.json()
            })
            .then(function( json ) {
                if( json.error ){
                    _this.create_error_modal( json.message )
                }
                else {
                    _this.modal.setContent("<div>" + json.message + "</div>")
                    _this.modal.setFooterContent("<input type='button' id='look_at_the_flowers' class='longing_for_love' value='去看看' />")
                    _this.modal.open()

                    _this.receive.value = "立即领取"

                    var look_at_the_flowers = _this.$("#look_at_the_flowers")[0]
                    look_at_the_flowers.onclick = _this.look_at_the_flowers_func.bind(_this)
                }
            })
            .catch(function( error ) {
                console.log( "parsing failed", error )
            })
    },

    // 去送花！
    longing_for_love_func : function () {
        this.modal.close()
        this.shadow.style.display = "block"
        this.share_for_love.style.bottom = 0
    },

    // 去看看！
    look_at_the_flowers_func : function () {
        this.modal.close()
    },

    //点击阴影区域 底部分享隐藏
    shadow_func : function () {
        if (this.share_for_love.style.bottom == "0px") {
            this.shadow.style.display = "none"
            this.share_for_love.style.bottom = -125 + "px"
        }
    },

    // 触发分享
    share_to_otherplace : function (event) {
        var node, share_url, share_target

        node = event.target.id
        share_url = location.href.replace( /false/, "true" )

        if (node == "share_to_qq") {
            console.log("成功分享到QQ啦！")
            truelove.shareUrl( share_url, 1 )
        }
        if (node == "share_to_truelove") {
            console.log("成功分享到初恋啦！")
            truelove.shareUrl( share_url, 2 )
        }
        if (node == "share_to_wechat") {
            console.log("成功分享到wechat啦！")
            truelove.shareUrl( share_url, 3 )
        }
    },

    // 创建错误弹窗
    create_error_modal : function( error_message ){
        this.modal.setContent("<div>" + error_message + "</div>")
        this.modal.setFooterContent("<input type='button' id='error_modal_close' class='longing_for_love' value='关闭' />")
        this.modal.open()

        var error_modal_close = this.$("#error_modal_close")[0]
        error_modal_close.onclick = function(){ this.modal.close() }.bind(this)
    }

}).init()