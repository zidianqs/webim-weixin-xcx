var strophe = require('../../utils/strophe.js')
var WebIM = require('../../utils/WebIM.js')
var WebIM = WebIM.default

Page({
    data: {
        name: '',
        psd: '',
        grant_type: "password"
    },
    bindUsername: function (e) {
        this.setData({
            name: e.detail.value
        })
    },
    bindPassword: function (e) {
        this.setData({
            psd: e.detail.value
        })
    },
    login: function () {
        console.log('login')
        var that = this
        if (that.data.name == '') {
            wx.showModal({
                title: 'Please enter username',
                confirmText: 'OK',
                showCancel: false
            })
        } else if (that.data.psd == '') {
            wx.showModal({
                title: 'Please enter password',
                confirmText: 'OK',
                showCancel: false
            })
        } else {
            var options = {
                apiUrl: WebIM.config.apiURL,
                user: that.data.name,
                pwd: that.data.psd,
                grant_type: that.data.grant_type,
                appKey: WebIM.config.appkey
            }
            wx.setStorage({
                key: "myUsername",
                data: that.data.name
            })
            WebIM.conn.open(options)
        }
    }
})




