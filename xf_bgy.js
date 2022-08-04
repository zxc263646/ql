/**
作者：小飞
微信小程序：百工驿
抓包：捉包把 authentication 填进去
示例：
变量格式：export xfbgyCk='xxx@xxx'  多个账号用 @
Cron：12 9 * * *

重写：
[task_local]
#百工驿脚本
12 9 * * * https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_bgy.js, tag=测试脚本, enabled=true
[rewrite_local]
https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_bgy.js
[MITM]
hostname = baigongyi.com
*/

// 是否开启通知， true 开始， false 不开启.
let notices = false;
const logDebug = 1

let cxName = "百工驿";
let ckName = "xfbgyCk";
const $ = new Env(cxName + "脚本");
// 脚本名称
let qlName = "xf_bgy.js";
let scriptVersion = "1.0.3";
let scriptVersionLatest = '';

// 评论内容,可以自定义
let pinglunNeiRong = "赞";

let envSplitor = ['@']
let httpResult, httpReq, httpResp


let userCookie = ($.isNode() ? process.env.xfbgyCk : $.getdata('xfbgyCk')) || '';

let userList = []
let userIdx = 0
let userCount = 0

const notify = $.isNode() ? require('./sendNotify') : '';
message = ``


///////////////////////////////////////////////////////////////////
const _0x20c0=['\x20分享:\x20成功\x20✅\x0a','脚本运行通知：','\x20签到:\x20成功\x20\x20✅\x0a','https://mapi.baigongyi.com/hotNews/list','post','undefined','withdrawFailCount','\x22,\x22objType\x22:7,\x22comment\x22:\x22','message','data','get','\x20评论:\x20成功\x20✅\x0a','账号[','\x20评论:\x20成功\x20\x20✅\x0a','resolve','https://api.qinor.cn/soup/?charset=utf-8','finally','https://mapi.baigongyi.com/shareRecord','{\x22objType\x22:\x203,\x22objId\x22:\x20\x22','\x22,\x22shareDestination\x22:\x201,\x22accountId\x22:\x22c6ef6de9202241c18f86de67481d65c4\x22}','dainzan','filter','\x20❌\x0a','ckSlice','ckValid','--------------\x20查询\x20--------------','{\x22objType\x22:\x207,\x22objId\x22:\x20\x22','code','➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\x0a','index','https://mapi.baigongyi.com/beans/signIn','log','pinglun12','\x20发布动态:\x20成功\x20✅\x20\x0a','fengxiang','substring','push','wait','records'];const _0x38be=function(_0x20c013,_0x38be51){_0x20c013=_0x20c013-0x0;let _0x2bb57d=_0x20c0[_0x20c013];return _0x2bb57d;};class UserInfo{constructor(_0x502ed2){this[_0x38be('0x1d')]=++userIdx;this['name']=_0x502ed2;this['valid']=![];this[_0x38be('0x6')]=0x0;try{this['ck']=_0x502ed2;this[_0x38be('0x17')]=_0x502ed2[_0x38be('0x23')](0x0,0x6);this[_0x38be('0x18')]=!![];}catch(_0x1ce060){this[_0x38be('0x18')]=![];$['logAndNotify'](_0x38be('0xc')+this[_0x38be('0x1d')]+']CK无效，请检查格式');}}async['nhLingQu'](){try{let _0x3aadf9=_0x38be('0x1e');let _0x4ca593='';let _0x466a2a=''+this['ck'];let _0x25bb26=populateUrlObject(_0x3aadf9,_0x466a2a,_0x4ca593);await httpRequest('get',_0x25bb26);let _0x36dc25=httpResult;if(_0x36dc25[_0x38be('0x1b')]==0xc8){message+='\x20签到:\x20成功\x20\x20✅\x0a';console[_0x38be('0x1f')](_0x38be('0x2'));}else{message+=_0x36dc25[_0x38be('0x8')]+_0x38be('0x16');console[_0x38be('0x1f')](_0x36dc25[_0x38be('0x8')]+'\x20❌\x0a');}await this['pinglun12']();}catch(_0xea1331){console['log'](_0xea1331);}finally{return Promise['resolve'](0x1);}}async[_0x38be('0x20')](){try{let _0x34a77e='https://mapi.baigongyi.com/index/page/adv/new/0';let _0x18be4c='';let _0x521d55=''+this['ck'];let _0x292aa5=populateUrlObject(_0x34a77e,_0x521d55,_0x18be4c);await httpRequest(_0x38be('0xa'),_0x292aa5);let _0x46f470=httpResult;let _0x2aa985=[];let _0x1db8c3=_0x46f470['data'];let _0x31658e=0x0;for(let _0x2fc672 in _0x1db8c3){if(_0x31658e>=0xc){continue;}else{if(_0x1db8c3[_0x2fc672]['id']!=null){_0x2aa985[_0x38be('0x24')](_0x1db8c3[_0x2fc672]['id']);}}_0x31658e++;}xfLog(_0x2aa985);let _0xac2b6f='https://mapi.baigongyi.com/commentRecord/add';for(let _0x156ea5 in _0x2aa985){_0x18be4c='{\x22objId\x22:\x22'+_0x2aa985[_0x156ea5]+_0x38be('0x7')+pinglunNeiRong+'\x22}';_0x292aa5=populateUrlObject2(_0xac2b6f,_0x521d55,_0x18be4c);await httpRequest(_0x38be('0x4'),_0x292aa5);let _0x50b2e0=httpResult;if(_0x50b2e0[_0x38be('0x1b')]==0xc8){message+=_0x38be('0xd');console[_0x38be('0x1f')](_0x38be('0xb'));}else{message+=_0x50b2e0[_0x38be('0x8')]+'\x20❌\x0a';console[_0x38be('0x1f')](_0x50b2e0[_0x38be('0x8')]+'\x20❌\x0a');}await $[_0x38be('0x25')](0xa*0x3e8);}await this[_0x38be('0x14')]();}catch(_0x5b2ab5){console[_0x38be('0x1f')](_0x5b2ab5);}finally{return Promise['resolve'](0x1);}}async[_0x38be('0x14')](){try{let _0x4b0853='https://mapi.baigongyi.com/article/getArticlelistNew';let _0x350b25='{\x22pageNum\x22:1,\x22pageSize\x22:10,\x22paramObject\x22:{\x22flag\x22:1}}';let _0x2e4442=''+this['ck'];let _0x1c9e1a=populateUrlObject(_0x4b0853,_0x2e4442,_0x350b25);await httpRequest(_0x38be('0x4'),_0x1c9e1a);let _0x488840=httpResult;let _0x19f17e=[];let _0x4a8951=_0x488840['data'][_0x38be('0x26')];for(let _0x269744 in _0x488840['data'][_0x38be('0x26')]){_0x19f17e[_0x38be('0x24')](_0x4a8951[_0x269744]['id']);}let _0x49a931='https://mapi.baigongyi.com/like/add';for(let _0x2a9c73 in _0x19f17e){let _0x500323=_0x38be('0x12')+_0x19f17e[_0x2a9c73]+'\x22,\x22likedFlag\x22:\x20true,\x22accountId\x22:\x22c6ef6de9202241c18f86de67481d65c4\x22}';let _0x203faf=populateUrlObject(_0x49a931,_0x2e4442,_0x500323);await httpRequest('post',_0x203faf);let _0x27c053=httpResult;if(_0x27c053['code']==0xc8){message+='\x20点赞:\x20成功\x20✅\x0a';console['log']('\x20点赞:\x20成功\x20✅\x0a');}else{message+=_0x27c053[_0x38be('0x8')]+'\x20❌\x0a';console['log'](_0x27c053[_0x38be('0x8')]+'\x20❌\x0a');}await $[_0x38be('0x25')](0xa*0x3e8);}await this[_0x38be('0x22')]();}catch(_0x2fe905){console[_0x38be('0x1f')](_0x2fe905);}finally{return Promise[_0x38be('0xe')](0x1);}}async['fengxiang'](){try{let _0x1f0d3a=_0x38be('0x3');let _0x7dd570='{\x22pageNum\x22:1,\x22pageSize\x22:3,\x22paramObject\x22:{\x22type\x22:\x221\x22}}';let _0xacd0d8=''+this['ck'];let _0xf03f1f=populateUrlObject(_0x1f0d3a,_0xacd0d8,_0x7dd570);await httpRequest(_0x38be('0x4'),_0xf03f1f);let _0x382c6e=httpResult;let _0x5f54bd=[];let _0x5504e6=_0x382c6e['data'][_0x38be('0x26')];for(let _0x407ba4 in _0x382c6e[_0x38be('0x9')]['records']){_0x5f54bd[_0x38be('0x24')](_0x5504e6[_0x407ba4]['id']);}let _0x3013bc=_0x38be('0x11');for(let _0x39a3ba in _0x5f54bd){let _0x41b95a=_0x38be('0x1a')+_0x5f54bd[_0x39a3ba]+_0x38be('0x13');let _0x30f4ec=populateUrlObject(_0x3013bc,_0xacd0d8,_0x41b95a);await httpRequest('post',_0x30f4ec);let _0x4985a1=httpResult;if(_0x4985a1[_0x38be('0x1b')]==0xc8){message+=_0x38be('0x0');console['log']('\x20分享:\x20成功\x20✅\x0a');}else{message+=_0x4985a1[_0x38be('0x8')]+_0x38be('0x16');console['log'](_0x4985a1[_0x38be('0x8')]+_0x38be('0x16'));}await $['wait'](0xa*0x3e8);}}catch(_0x4c3d59){console[_0x38be('0x1f')](_0x4c3d59);}finally{return Promise['resolve'](0x1);}}async['fabudongtai'](){try{let _0x525ed8=0x5;for(var _0x2c5deb=0x0;_0x2c5deb<_0x525ed8;_0x2c5deb++){let _0x6096a1=_0x38be('0xf');let _0x100167='';let _0x281f96=''+this['ck'];let _0x10f423=populateUrlObject(_0x6096a1,_0x281f96,_0x100167);await httpRequest('post',_0x10f423);let _0x124aeb=httpResult;let _0x19aded='https://mapi.baigongyi.com/idea/add';let _0x10dbea='{\x22atUserIds\x22:\x22\x22,\x22activityContent\x22:\x22'+_0x124aeb+'\x22,\x22content\x22:\x22'+_0x124aeb+'\x22}';let _0x6efd24=''+this['ck'];let _0x33bd1a=populateUrlObject2(_0x19aded,_0x6efd24,_0x10dbea);await httpRequest('post',_0x33bd1a);let _0x2392de=httpResult;if(_0x2392de['code']==0xc8){message+=_0x38be('0x21');console['log'](_0x38be('0x21'));}else{message+=_0x2392de[_0x38be('0x8')]+'\x20❌\x20\x0a';console['log'](_0x2392de['message']+'\x20❌\x20\x0a');}await $[_0x38be('0x25')](0x6*0x3e8);}}catch(_0xcf7b1d){console['log'](_0xcf7b1d);}finally{return Promise[_0x38be('0xe')](0x1);}}}!(async()=>{if(typeof $request!==_0x38be('0x5')){await GetRewrite();}else{if(!await checkEnv())return;let _0x54a2db=[];let _0x1b81d2=userList[_0x38be('0x15')](_0x419885=>_0x419885[_0x38be('0x18')]);if(_0x1b81d2['length']>0x0){console[_0x38be('0x1f')](_0x38be('0x19'));_0x54a2db=[];for(let _0x3bf03a of _0x1b81d2){_0x54a2db['push'](_0x3bf03a['nhLingQu']());await $[_0x38be('0x25')](0x3*0x3e8);message+=_0x38be('0x1c');}await Promise['all'](_0x54a2db);}if(notices){await notify['sendNotify'](cxName+_0x38be('0x1'),''+message);await $['showmsg']();}}})()['catch'](_0x332353=>console['log'](_0x332353))[_0x38be('0x10')](()=>$['done']());

async function GetRewrite() {
    if ($request.url.indexOf(`cp-member-integral/add`) > -1) {
        if (!$request.headers) return;
        let token = $request.headers['User-Token']
        if (!token) return false
        let ck = `${token}`
        if (userCookie) {
            if (userCookie.indexOf(ck) == -1) {
                userCookie = userCookie + '@' + ck
                $.setdata(userCookie, ckName);
                ckList = userCookie.split('@')
                $.msg(`获取第${ckList.length}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, ckName);
            $.msg(`获取第1个ck成功: ${ck}`)
        }
    }
}





// CK检测
async function checkEnv() {
    let url = `https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/` + qlName
    xfLog(url);
    let body = ``
    let token = `1`
    let urlObject = populateUrlObject2(url, token, body)
    try {
        await httpRequest('get',urlObject)
        let result = httpResult;
        scriptVersionLatest = result.match(/scriptVersion = "([\d\.]+)"/)[1]
        console.log(`\n============ 当前版本：${scriptVersion}  最新版本：${scriptVersionLatest} ============ \n\n`)
    } catch (e) {
        console.log(e)
    }

    if (userCookie) {
        let splitor = envSplitor[0];
        for (let sp of envSplitor) {
            if (userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for (let userCookies of userCookie.split(splitor)) {
            if (userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.length
    } else {
        console.log('未找到CK')
        return;
    }


    console.log(`共找到${userCount}个账号`)
    return true
}
////////////////////////////////////////////////////////////////////

// 公共请求头2
function populateUrlObject2(url, token, body = '') {
    let urlObject = {
        url: url,
        headers: {
            'Authentication': token,
            'accept-encoding': "gzip, deflate, br",
            'connection': "keep-alive",
            'User-Agent': "android",
        },
        timeout: 5000,
    }
//console.log(`${JSON.stringify(urlObject)}`)
    if (body) {
        urlObject.body = body
        // console.log(new Blob([body]).size)
        urlObject.headers['Content-Type'] = 'application/json;'

        urlObject.headers['Content-Length'] = Buffer.byteLength(body,'utf8')
    }

    return urlObject;
}

// 公共请求头2
function populateUrlObject2(url) {
    let urlObject = {
        url: url,
        timeout: 5000,
    }
    return urlObject;
}

// 公共请求头
function populateUrlObject(url, token, body = '') {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Authentication': token,
            'user-agent': "android",
        },
        timeout: 5000,
    }
//console.log(`${JSON.stringify(urlObject)}`)
    if (body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] = 'application/json;'
        urlObject.headers['Content-Length'] = urlObject.body ? urlObject.body.length : 0
    }

    return urlObject;
}

async function httpRequest(method, url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    //console.log(`${method}请求失败`);
                    //console.log(JSON.stringify(err));
                } else {
                    if (resp.body) {
                        if (typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

// 日志打印
function xfLog(str){
    if(logDebug){console.log(str);}
}
////////////////////////////////////////////////////////////////////
function Env(name, env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name, env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this, env)
            console.log(`${this.name} 开始运行：\n`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => { })) {
            if (m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if (m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if (t.body && t.headers) {
                if (!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 });
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if (m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })),
                    $task.fetch(t).then(t => {
                        const {
                            statusCode: i,
                            request: q,
                            headers: r,
                            body: o
                        } = t;
                        e(null, q, {
                            statusCode: i,
                            headers: r,
                            body: o
                        })
                    }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if (!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if ($.isNode()) {
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n"))
        }
        getMin(a, b) {
            return ((a < b) ? a : b)
        }
        getMax(a, b) {
            return ((a < b) ? b : a)
        }
        padStr(num, length, padding = '0') {
            let numStr = String(num)
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0
            let retStr = ''
            for (let i = 0; i < numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj, c, encodeUrl = false) {
            let ret = []
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if (v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys + '=' + v)
            }
            return ret.join(c);
        }
        str2json(str, decodeUrl = false) {
            let ret = {}
            for (let item of str.split('&')) {
                if (!item) continue;
                let idx = item.indexOf('=')
                if (idx == -1) continue;
                let k = item.substr(0, idx)
                let v = item.substr(idx + 1)
                if (decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name, env)
}
