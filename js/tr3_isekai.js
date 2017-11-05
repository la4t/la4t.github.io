define(function (require, exports, module) {

  var isekai_floor = require('./tr3/isekai_floor'),
      isekai_list = require('./tr3/isekai_list'),
      mons = require('./tr3/mons'),
      lv_pow = require('./tr3/lv_pow'),
      roman = require('./roman'),
      grouth = {
        "普通・早熟": require('./tr3/type1_ftsj'),
        "攻撃・早熟": require('./tr3/type2_kgsj'),
        "防御・早熟": require('./tr3/type3_bgsj'),
        "万能・晩成": require('./tr3/type4_bnbs'),
        "攻撃・晩成": require('./tr3/type5_kgbs'),
        "防御・晩成": require('./tr3/type6_bgbs'),
        "攻撃・特殊": require('./tr3/type7_kgts'),
        "守備・特殊": require('./tr3/type8_sbts'),
      };
  var is_keys = Object.keys(isekai_list);


  function ppr_pow(lv, power){
    return lv_pow[lv] * (1 + power / 16);
  }

  function damage_str(atk, def){
    var coe = 35.0/36.0;
    var dmg = atk * Math.pow(coe, def);
    return Math.max(1, Math.round(dmg * 7.0 / 8.0)) + "〜" + Math.max(1, Math.round(dmg * 9.0 / 8.0));
  }

  function changes(){
    var base_n = mons[$('#spec').val()],
        lvup_n = grouth[mons[$('#spec').val()].Type][$('#lv_n').val()];
    var n = {
      HP: base_n.HP + lvup_n.HP,
      Atk: base_n.Atk + lvup_n.Atk,
      Def: base_n.Def + lvup_n.Def
    }
    $('#hp_n').html("HP:" + n.HP);

    var list = isekai_floor[$('#floor').val()];
    for(var i=0; i<10; i++){
      if(i < list.length){
        var base = mons[list[i].name],
            lvup = grouth[mons[list[i].name].Type][list[i].Lv];
        $('#m' + i).html(list[i].name);
        $('#l' + i).html(list[i].Lv);
        $('#h' + i).html(base.HP + lvup.HP);
        $('#a' + i).html(damage_str(ppr_pow($('#lv_p').val(), $('#power').val()), base.Def + lvup.Def));
        $('#b' + i).html(damage_str((base.Atk + lvup.Atk) * 1.3, 0));
        $('#c' + i).html(damage_str((base_n.Atk + lvup_n.Atk) * 1.3, base.Def + lvup.Def));
        $('#d' + i).html(damage_str((base.Atk + lvup.Atk) * 1.3, base_n.Def + lvup_n.Def));
      }
      else{
        $('#m' + i).html('');
        $('#l' + i).html('');
        $('#h' + i).html('');
        $('#a' + i).html('');
        $('#b' + i).html('');
        $('#c' + i).html('');
        $('#d' + i).html('');
      }
    }

  }

  function katahira(src) {
    return src.replace(/[\u30a1-\u30f6]/g, function(match) {
      var chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
  }

  $(function(){

    $(document).ready(function(){
      $("#spec").autocomplete({
        source: function(request, response){
          var list = [];
          var input = katahira(roman.parse(request.term));
          is_keys.forEach(x => {
            if(isekai_list[x].reduce((p, c) => p || c.includes(input), false)){
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

    $('#floor, #lv_p, #spec, #power, #lv_n').change(function() {
      changes();
    });

    $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8').on('click', function(){
      var vals = this.value.split(" ");
      if(vals[1] === "minus" && $(vals[0]).val() > parseInt(vals[2])){
        $(vals[0]).val(parseInt($(vals[0]).val()) - 1);
      }
      else if(vals[1] === "plus" && $(vals[0]).val() < parseInt(vals[2])){
        $(vals[0]).val(parseInt($(vals[0]).val()) + 1);
      }
      changes();
    });

    changes();
  });
});
