parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function (e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
        e[r] = [function (e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "epB2": [function (require, module, exports) {
        console.log("hi");
        var n = document.querySelector("#demo"),
            r = document.querySelector("#style"),
            o = 0,
            e = "\n/*大家好，我是叫禤思宁，\n我要演示我的前端功底，画一个太极图\n接下来要准备一个div\n*/\n#div1{\n    width:200px;\n    height:200px;\n    border: 1px solid red;\n}\n/*\n 接下来我要把div变成一个太极图\n 把div变成圆\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 5px rgba(0,0,0,0.5);\n    border:none;\n}\n\n\n/*\n  八卦一黑一白\n*/\n#div1{\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\n 加两个神秘的小球\n*/\n#div1::before{\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    background-color: #000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n    top: 0;\n    \n    left: 50%;\n    transform: translateX(-50%);\n}\n\n#div1::after{\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    background-color: #fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n    bottom:0;\n    left: 50%;\n    transform: translateX(-50%);\n}\n",
            a = "",
            i = function i() {
                "\n" === e[o] ? a += "<br>" : " " === e[o] ? a += "&nbsp;" : a += e[o], n.innerHTML = a, r.innerHTML = e.substring(0, o), window.scrollTo(0, 9999), n.scrollTo(0, 99999), setTimeout(function () {
                    o < e.length - 1 && (o += 1, i())
                }, 0)
            };
        i();
    }, {}]
}, {}, ["epB2"], null)
//# sourceMappingURL=main.5c39be65.js.map