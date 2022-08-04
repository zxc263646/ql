/**
作者： 小飞
微信小程序：福特小程序
抓包：抓包微信登陆授权成功 https://mp.evscrm.ford.com.cn/account/v2/login 链接响应内容里面对应值
示例：mpToken#refresh_token
变量格式：export xfftCk='xxx@xxx'  多个账号用 @
Cron：10 9-14 * * *

[task_local]
#测试脚本
10 9-14 * * * https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_ft.js, tag=测试脚本, enabled=true
[rewrite_local]
https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_ft.js
[MITM]
hostname = sgame.moxigame.cn
*/

// 脚本名称
let cxName = "福特脚本";
// ck名称
let ckName = "xfftCk";
// 是否开启通知， true 开始， false 不开启.
let notices = true;
const logDebug = 0
// 脚本名称
let qlName = "xf_ft.js";
let scriptVersion = "1.0.0";
let scriptVersionLatest = '';
const $ = new Env(cxName + "脚本");

// 建议自定义评论内容
let pinglunstr = "赞赞赞"
let defaultUA = "";
let userCookie = ($.isNode() ? process.env.xfftCk : $.getdata('xfftCk')) || '';

let envSplitor = ['@']
let httpResult, httpReq, httpResp

let authorizationStr = ""
let mpToken = ""
let idToken = ""
let userList = []
let userIdx = 0
let cookieTemp = ""
let userCount = 0

const notify = $.isNode() ? require('./sendNotify') : '';
message = ``


///////////////////////////////////////////////////////////////////
const _0xd139cd=_0x4729;(function(_0x4310c2,_0x422920){const _0x1a1bb1=_0x4729,_0x35eedf=_0x4310c2();while(!![]){try{const _0x12a263=parseInt(_0x1a1bb1(0xb8))/0x1*(-parseInt(_0x1a1bb1(0xbd))/0x2)+-parseInt(_0x1a1bb1(0xce))/0x3+-parseInt(_0x1a1bb1(0xe7))/0x4+parseInt(_0x1a1bb1(0xd8))/0x5+-parseInt(_0x1a1bb1(0xc2))/0x6*(parseInt(_0x1a1bb1(0xc6))/0x7)+parseInt(_0x1a1bb1(0xd9))/0x8*(-parseInt(_0x1a1bb1(0xc8))/0x9)+parseInt(_0x1a1bb1(0xd6))/0xa;if(_0x12a263===_0x422920)break;else _0x35eedf['push'](_0x35eedf['shift']());}catch(_0x5163a1){_0x35eedf['push'](_0x35eedf['shift']());}}}(_0x29f0,0x97509));function _0x4729(_0x3b1db4,_0x238235){const _0x29f091=_0x29f0();return _0x4729=function(_0x47296c,_0x59f19f){_0x47296c=_0x47296c-0xb8;let _0x31dcd0=_0x29f091[_0x47296c];return _0x31dcd0;},_0x4729(_0x3b1db4,_0x238235);}class UserInfo{constructor(_0x3865fc){const _0x545541=_0x4729;this[_0x545541(0xca)]=++userIdx,this[_0x545541(0xd0)]=_0x3865fc,this[_0x545541(0xd1)]=![],this['withdrawFailCount']=0x0;try{this['ck']=_0x3865fc,this['ckSlice']=_0x3865fc['substring'](0x0,0x6),this[_0x545541(0xc3)]=!![];}catch(_0xf2e4ec){this['ckValid']=![],$['logAndNotify'](_0x545541(0xec)+this['index']+']CK无效，请检查格式');}}async[_0xd139cd(0xbf)](){const _0x1ca261=_0xd139cd;try{let _0x2f5002=_0x1ca261(0xd4)+this['ck'][_0x1ca261(0xe9)]('#')[0x1],_0x584628='';authorizationStr='',idToken='',mpToken=this['ck']['split']('#')[0x0];let _0x41c7db=populateUrlObject3(_0x2f5002,mpToken,_0x584628);await httpRequest(_0x1ca261(0xba),_0x41c7db);let _0x46a71a=httpResult;logDebug&&console[_0x1ca261(0xd7)](_0x46a71a),_0x46a71a[_0x1ca261(0xe0)]=='0'?(authorizationStr=_0x46a71a['data']['access_token'],idToken=_0x46a71a[_0x1ca261(0xdc)][_0x1ca261(0xe6)]):(message+=_0x46a71a['msg']+'\x20❌\x20\x0a',console[_0x1ca261(0xd7)](_0x46a71a['msg']+'\x20❌\x20\x0a')),await this[_0x1ca261(0xc1)]();}catch(_0x2c3b39){console['log'](_0x2c3b39);}finally{return Promise[_0x1ca261(0xdb)](0x1);}}async[_0xd139cd(0xc1)](){const _0x3dff40=_0xd139cd;try{let _0x1d3193='https://api.evscrm.ford.com.cn/biz-service/v2/sign',_0x21630d='',_0x101025='',_0x2ef15=populateUrlObject(_0x1d3193,_0x101025,_0x21630d);await httpRequest(_0x3dff40(0xba),_0x2ef15);let _0x3a56e8=httpResult;logDebug&&console['log'](_0x3a56e8),_0x3a56e8[_0x3dff40(0xe0)]=='0'?(message+=_0x3dff40(0xcc),console[_0x3dff40(0xd7)](_0x3dff40(0xcc))):(message+=_0x3a56e8[_0x3dff40(0xdd)]+'\x20❌\x20\x0a',console[_0x3dff40(0xd7)](_0x3a56e8[_0x3dff40(0xdd)]+_0x3dff40(0xc5))),await this[_0x3dff40(0xde)]();}catch(_0x52c569){console['log'](_0x52c569);}finally{return Promise[_0x3dff40(0xdb)](0x1);}}async['dianzan'](){const _0xa603f6=_0xd139cd;try{let _0xf2bf92=_0xa603f6(0xe4),_0x1edc53='',_0x1a006a='',_0x1f189c=populateUrlObject(_0xf2bf92,_0x1a006a,_0x1edc53);await httpRequest(_0xa603f6(0xba),_0x1f189c);let _0x4f020f=httpResult,_0x1e95aa=[],_0x5669d6=_0x4f020f[_0xa603f6(0xdc)];for(const _0x445b8a in _0x5669d6){_0x1e95aa[_0xa603f6(0xd2)](_0x5669d6[_0x445b8a][_0xa603f6(0xb9)]);}logDebug&&console['log'](_0x1e95aa);for(var _0x3ff20b of _0x1e95aa){_0xf2bf92='https://api.fordbev.navinfo.com/content-center/v1/bbs/threads/like?threadId='+_0x3ff20b+_0xa603f6(0xd3),_0x1edc53='',_0x1a006a='',_0x1f189c=populateUrlObject(_0xf2bf92,_0x1a006a,_0x1edc53),await httpRequest(_0xa603f6(0xba),_0x1f189c),_0x4f020f=httpResult,_0x4f020f[_0xa603f6(0xe0)]=='0'?(message+=_0xa603f6(0xbe),console[_0xa603f6(0xd7)]('\x20点赞:\x20成功✅\x20\x0a')):(message+=_0x4f020f[_0xa603f6(0xc9)]+_0xa603f6(0xc5),console['log'](_0x4f020f['message']+_0xa603f6(0xc5))),await $[_0xa603f6(0xe3)](0x3*0x3e8);}_0xf2bf92='https://api.fordbev.navinfo.com/content-center/v1/bbs/posts',_0x1edc53=_0xa603f6(0xcb),_0x1a006a='',_0x1f189c=populateUrlObjectPingLun(_0xf2bf92,_0x1a006a,_0x1edc53),await httpRequest('post',_0x1f189c),_0x4f020f=httpResult,xfLog(_0x4f020f),_0xf2bf92=_0xa603f6(0xcf),_0x1edc53=_0xa603f6(0xe2)+pinglunstr+_0xa603f6(0xe1)+_0x1e95aa[0x0]+_0xa603f6(0xcd),_0x1a006a='',_0x1f189c=populateUrlObjectPingLun(_0xf2bf92,_0x1a006a,_0x1edc53),await httpRequest(_0xa603f6(0xc4),_0x1f189c),_0x4f020f=httpResult,xfLog(_0x4f020f),_0x4f020f[_0xa603f6(0xe0)]=='0'?(message+=_0xa603f6(0xea),console[_0xa603f6(0xd7)](_0xa603f6(0xe8))):(message+=_0x4f020f[_0xa603f6(0xc9)]+'\x20❌\x20\x0a',console[_0xa603f6(0xd7)](_0x4f020f[_0xa603f6(0xc9)]+_0xa603f6(0xc5)));}catch(_0x539bc){console['log'](_0x539bc);}finally{return Promise[_0xa603f6(0xdb)](0x1);}}}!(async()=>{const _0x593c65=_0xd139cd;if(typeof $request!==_0x593c65(0xbb))await GetRewrite();else{if(!await checkEnv())return;let _0x3c24b9=[],_0x1b3961=userList[_0x593c65(0xc0)](_0x2e7b65=>_0x2e7b65[_0x593c65(0xc3)]);if(_0x1b3961[_0x593c65(0xbc)]>0x0){console['log'](_0x593c65(0xda)),_0x3c24b9=[];for(let _0x3d42a5 of _0x1b3961){_0x3c24b9['push'](_0x3d42a5[_0x593c65(0xbf)]()),await $[_0x593c65(0xe3)](0x3*0x3e8),message+=_0x593c65(0xeb);}await Promise['all'](_0x3c24b9);}await notify['sendNotify']('福特脚本运行通知：',''+message),await $[_0x593c65(0xdf)]();}})()[_0xd139cd(0xd5)](_0x4dd465=>console[_0xd139cd(0xd7)](_0x4dd465))[_0xd139cd(0xe5)](()=>$[_0xd139cd(0xc7)]());function _0x29f0(){const _0x4dba92=['22346740CYtGgP','log','5066745ZgLxnR','13648BSFIvB','--------------\x20查询\x20--------------','resolve','data','msg','dianzan','showmsg','code','\x22,\x22threadId\x22:','{\x22atUserList\x22:[],\x22content\x22:\x22','wait','https://api.fordbev.navinfo.com/content-center/v1/bbs/threads/tribePage?pointId=37&tribeId=11&pageNo=1&pageSize=7&orderBy=time','finally','access_token','1368360VOwKAg','\x20评论:\x20成功✅\x20\x0a','split','\x20评论:\x20成功\x20✅\x20\x0a','➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\x0a','账号[','276417lEglhj','threadId','get','undefined','length','8UllBUp','\x20点赞:\x20成功\x20✅\x20\x0a','nhLingQu','filter','sign','6kwdxha','ckValid','post','\x20❌\x20\x0a','186578CEFJkD','done','1854NaymfI','message','index','{\x22applyReason\x22:\x22\x22,\x22tribeId\x22:\x2211\x22}','\x20签到:\x20成功\x20✅\x20\x0a',',\x22type\x22:0}','2407170TczAlN','https://api.fordbev.navinfo.com/content-center/v1/bbs/posts','name','valid','push','&like=true','https://mp.evscrm.ford.com.cn/account/v1/refresh-id-token?refresh_token=','catch'];_0x29f0=function(){return _0x4dba92;};return _0x29f0();}

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if ($request.url.indexOf(`cp-member-integral/add`) > -1) {
        if (!$request.headers) return;
        let token = $request.headers['User-Token']
        if (!token) return false
        let ck = `${token}`

        console.log(ck)
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


/////////////////////////// Post和Get请求/////////////////////////////////////////

// 评论请求头
function populateUrlObjectPingLun(url, token, body = '') {
    let urlObject = {
        url: url,
        headers: {
            'Authorization' : "Bearer " + authorizationStr,
            'MP-Token' : mpToken,
            'User-Agent' : defaultUA,
            'Id-Token' : "Bearer " + idToken
        },
        timeout: 5000,
    }
    if (body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] = 'application/json;'
        urlObject.headers['Content-Length'] = Buffer.byteLength(body,'utf8')
    }
    return urlObject;
}

// 公共请求头
function populateUrlObject(url, token, body = '') {
    let urlObject = {
        url: url,
        headers: {
            'Authorization' : "Bearer " + authorizationStr,
            'MP-Token' : mpToken,
            'User-Agent' : defaultUA,
            'Id-Token' : "Bearer " + idToken
        },
        timeout: 2000,
    }
    return urlObject;
}

// 公共请求头3
function populateUrlObject3(url, token, body = '') {
    let urlObject = {
        url: url,
        headers: {
            'MP-Token' : token,
            'user-agent' : 'keep-alive',
            'User-Agent' : defaultUA,
            'Authorization' : '',
            'Id-Token' : '',
        },
        timeout: 5000,
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

async function httpRequest(method, url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(err);
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

/////////////////////////// 公共方法 /////////////////////////////////////////

// 日志打印
function xfLog(str){
    if(logDebug){console.log(str);}
}

// 获取随机数
function randomString(len=12){let chars='abcdef0123456789';let maxLen=chars.length;let str='';for(i=0;i<len;i++){str+=chars.charAt(Math.floor(Math.random()*maxLen))}return str}

// console.log(Base64.decode(`MTIzNDU2`));
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// console.log(MD5Encrypt(`123456`));
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}


/////////////////////////// 必须 /////////////////////////////////////////
function Env(a,b){return"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")> -1&&process.exit(0),new class{constructor(a,b){this.name=a,this.notifyStr="",this.startTime=(new Date).getTime(),Object.assign(this,b),console.log(`当前运行：${this.name} 
`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getdata(b){let a=this.getval(b);if(/^@/.test(b)){let[,c,f]=/^@(.*?)\.(.*?)$/.exec(b),d=c?this.getval(c):"";if(d)try{let e=JSON.parse(d);a=e?this.lodash_get(e,f,""):a}catch(g){a=""}}return a}setdata(c,d){let a=!1;if(/^@/.test(d)){let[,b,e]=/^@(.*?)\.(.*?)$/.exec(d),f=this.getval(b),i=b?"null"===f?null:f||"{}":"{}";try{let g=JSON.parse(i);this.lodash_set(g,e,c),a=this.setval(JSON.stringify(g),b)}catch(j){let h={};this.lodash_set(h,e,c),a=this.setval(JSON.stringify(h),b)}}else a=this.setval(c,d);return a}getval(a){return this.isSurge()||this.isLoon()?$persistentStore.read(a):this.isQuanX()?$prefs.valueForKey(a):this.isNode()?(this.data=this.loaddata(),this.data[a]):this.data&&this.data[a]||null}setval(b,a){return this.isSurge()||this.isLoon()?$persistentStore.write(b,a):this.isQuanX()?$prefs.setValueForKey(b,a):this.isNode()?(this.data=this.loaddata(),this.data[a]=b,this.writedata(),!0):this.data&&this.data[a]||null}send(b,a,f=()=>{}){if("get"!=b&&"post"!=b&&"put"!=b&&"delete"!=b){console.log(`无效的http方法：${b}`);return}if("get"==b&&a.headers?(delete a.headers["Content-Type"],delete a.headers["Content-Length"]):a.body&&a.headers&&(a.headers["Content-Type"]||(a.headers["Content-Type"]="application/x-www-form-urlencoded")),this.isSurge()||this.isLoon()){this.isSurge()&&this.isNeedRewrite&&(a.headers=a.headers||{},Object.assign(a.headers,{"X-Surge-Skip-Scripting":!1}));let c={method:b,url:a.url,headers:a.headers,timeout:a.timeout,data:a.body};"get"==b&&delete c.data,$axios(c).then(a=>{let{status:b,request:c,headers:d,data:e}=a;f(null,c,{statusCode:b,headers:d,body:e})}).catch(a=>console.log(a))}else if(this.isQuanX())a.method=b.toUpperCase(),this.isNeedRewrite&&(a.opts=a.opts||{},Object.assign(a.opts,{hints:!1})),$task.fetch(a).then(a=>{let{statusCode:b,request:c,headers:d,body:e}=a;f(null,c,{statusCode:b,headers:d,body:e})},a=>f(a));else if(this.isNode()){this.got=this.got?this.got:require("got");let{url:d,...e}=a;this.instance=this.got.extend({followRedirect:!1}),this.instance[b](d,e).then(a=>{let{statusCode:b,request:c,headers:d,body:e}=a;f(null,c,{statusCode:b,headers:d,body:e})},b=>{let{message:c,response:a}=b;f(c,a,a&&a.body)})}}time(a){let b={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"h+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};for(let c in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length))),b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a}async showmsg(){if(!this.notifyStr)return;let a=this.name+" \u8FD0\u884C\u901A\u77E5\n\n"+this.notifyStr;if($.isNode()){var b=require("./sendNotify");console.log("\n============== \u63A8\u9001 =============="),await b.sendNotify(this.name,a)}else this.msg(a)}logAndNotify(a){console.log(a),this.notifyStr+=a,this.notifyStr+="\n"}msg(d=t,a="",b="",e){let f=a=>{if(!a)return a;if("string"==typeof a)return this.isLoon()?a:this.isQuanX()?{"open-url":a}:this.isSurge()?{url:a}:void 0;if("object"==typeof a){if(this.isLoon()){let b=a.openUrl||a.url||a["open-url"],c=a.mediaUrl||a["media-url"];return{openUrl:b,mediaUrl:c}}if(this.isQuanX()){let d=a["open-url"]||a.url||a.openUrl,e=a["media-url"]||a.mediaUrl;return{"open-url":d,"media-url":e}}if(this.isSurge())return{url:a.url||a.openUrl||a["open-url"]}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(d,a,b,f(e)):this.isQuanX()&&$notify(d,a,b,f(e)));let c=["","============== \u7CFB\u7EDF\u901A\u77E5 =============="];c.push(d),a&&c.push(a),b&&c.push(b),console.log(c.join("\n"))}getMin(a,b){return a<b?a:b}getMax(a,b){return a<b?b:a}padStr(e,b,f="0"){let a=String(e),g=b>a.length?b-a.length:0,c="";for(let d=0;d<g;d++)c+=f;return c+a}json2str(b,e,f=!1){let c=[];for(let d of Object.keys(b).sort()){let a=b[d];a&&f&&(a=encodeURIComponent(a)),c.push(d+"="+a)}return c.join(e)}str2json(e,f=!1){let d={};for(let a of e.split("&")){if(!a)continue;let b=a.indexOf("=");if(-1==b)continue;let g=a.substr(0,b),c=a.substr(b+1);f&&(c=decodeURIComponent(c)),d[g]=c}return d}randomString(d,a="abcdef0123456789"){let b="";for(let c=0;c<d;c++)b+=a.charAt(Math.floor(Math.random()*a.length));return b}randomList(a){let b=Math.floor(Math.random()*a.length);return a[b]}wait(a){return new Promise(b=>setTimeout(b,a))}done(a={}){let b=(new Date).getTime(),c=(b-this.startTime)/1e3;console.log(`
${this.name} 共运行了 ${c} 秒！`),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(a)}}(a,b)}
