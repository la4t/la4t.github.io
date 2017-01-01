define(function (require, exports, module) {
var pokes = require('pokes');
var roman = require('roman');

$(function(){

    var p = pokes.p;
    var n = pokes.n;

    var p_keys = Object.keys(p);
    var st = ['h', 'a', 'b', 'c', 'd', 's'];
    var ns = ['a', 'b', 'c', 'd', 's'];
    var warning_color = '#ff8484'

    function cal_h(種族値, 個体値, 努力値, レベル){
        return Math.floor(((種族値*2 + 個体値 + Math.floor(努力値/4))*レベル)/100) + 10 + レベル;
    }
    function cal(種族値, 個体値, 努力値, レベル, 性格補正){
        return Math.floor((Math.floor(((種族値*2 + 個体値 + Math.floor(努力値/4))*レベル)/100) + 5)*性格補正);
    }
    function status(poke, iv, ev, lv, nature){
        return {
          h: cal_h(p[poke].base.h, iv.h, ev.h.val, lv),
          a: cal(p[poke].base.a, iv.a, ev.a.val, lv, n[nature].a),
          b: cal(p[poke].base.b, iv.b, ev.b.val, lv, n[nature].b),
          c: cal(p[poke].base.c, iv.c, ev.c.val, lv, n[nature].c),
          d: cal(p[poke].base.d, iv.d, ev.d.val, lv, n[nature].d),
          s: cal(p[poke].base.s, iv.s, ev.s.val, lv, n[nature].s)
        }
    }

    function changes(){
        var poke = $("#poke").val();
        var lv = parseInt($("#lv").val());
        var nature = $("#nature").val();

        var ev = {
            h: {name: "ev_h", val:parseInt($("#ev_h").val())},
            a: {name: "ev_a", val:parseInt($("#ev_a").val())},
            b: {name: "ev_b", val:parseInt($("#ev_b").val())},
            c: {name: "ev_c", val:parseInt($("#ev_c").val())},
            d: {name: "ev_d", val:parseInt($("#ev_d").val())},
            s: {name: "ev_s", val:parseInt($("#ev_s").val())}
        };

        // 基礎ポイントの合計及び残りを更新
        var ev_all = ev.h.val + ev.a.val + ev.b.val + ev.c.val + ev.d.val + ev.s.val;
        $("#ev_all").html(ev_all > 510 || ev_all < 0 ? '<span style="color:red;">' + ev_all + '</span>' : ev_all);
        $("#ev_rest").html(ev_all > 510 || ev_all < 0 ? '<span style="color:red;">' + (510 - ev_all) + '</span>' : 510 - ev_all);

        // 基礎ポイントやレベルが範囲外なら警告
        st.forEach(x =>
            $("#" + ev[x].name).css("background-color", ev[x].val < 0 || ev[x].val > 252 ? warning_color : "")
        );
        $("#lv").css("background-color", lv < 1 || lv > 100 ? warning_color : "");

        // 性格補正の矢印を更新
        ns.forEach(x => 
            $("#nature_" + x).html(n[nature][x] > 1
                ? '<span style="color:red;">↑</span>'
                : n[nature][x] < 1 
                    ? '<span style="color:blue;">↓</span>'
                    : ""
            )
        )

        // ポケモン名が間違っている時は警告して終了
        if(!p_keys.includes(poke)){
            $("#poke").css("background-color", poke === "" ? "" : warning_color);
            return;
        }
        $("#poke").css("background-color", "");

        // 種族値を更新
        st.forEach(x => 
            $("#base_" + x).html(p[poke].base[x])
        );

        // 野生時のステータスを更新
        ['upper', 'normal', 'lower'].forEach(x => {
            var coe = x === 'upper' ? 1.1 : x === 'normal' ? 1 : 0.9
            $("#" + x + "_h").html(cal_h(p[poke].base.h, 31, 0, lv));
            ns.forEach(y =>
                $("#" + x + "_" + y).html(cal(p[poke].base[y], 31, 0, lv, coe))
            );
        });

        // 個体値ごとのステータスを計算
        for(var i=31; i>=0; i--){
            var iv = {h:i, a:i, b:i, c:i, d:i, s:i};
            var param = status(poke, iv, ev, lv, nature);
            st.forEach(x =>
                $("#" + x + i).html(param[x])
            );
        }
    }

    function katahira(src) {
        return src.replace(/[\u30a1-\u30f6]/g, function(match) {
            var chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });
    }

    $(document).ready(function(){
        $("#poke").autocomplete({
            source: function(request, response){
                var list = [];
                var input = katahira(roman.parse(request.term));
                p_keys.forEach(x => {
                    if(p[x].name.reduce((p, c) => p || c.includes(input), false)){
                        list.push(x)
                    }
                })
                response(list);
            },
            change: function(event, ui){
                changes();
            }
        });
    });

    $('#poke, #lv, #nature, #ev_h, #ev_a, #ev_b, #ev_c, #ev_d, #ev_s').change(function() {
        changes();
    });

    changes();

});

});
