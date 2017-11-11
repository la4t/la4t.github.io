---
layout: default
title: ポポロ異世界 ダメージ計算
---

## ポポロ異世界 ダメージ計算

<script src="{{ site.baseurl }}/js/jquery-1.12.4.min.js"></script>
<script src="{{ site.baseurl }}/js/jquery-ui.min.js"></script>
<link rel="stylesheet" href="{{ site.baseurl }}/css/jquery-ui.min.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/css/tr3_isekai.css" />
<script data-main="{{ site.baseurl }}/js/tr3_isekai.js" src="{{ site.baseurl }}/js/require.js"></script>

<table border="0" cellpadding="0" cellspacing="0" style='border-collapse:collapse;table-layout:fixed;width:100%;min-width:400pt;max-width:600pt'>
 <col style='width:14.63%'>
 <col style='width:7.32%'>
 <col style='width:7.32%'>
 <col style='width:2.44%'>
 <col style='width:7.32%'>
 <col style='width:2.44%'>
 <col style='width:12.2%'>
 <col style='width:2.44%'>
 <col style='width:7.32%'>
 <col style='width:7.32%'>
 <col style='width:7.32%'>
 <col style='width:7.32%'>
 <col style='width:2.44%'>
 <col style='width:12.2%'>
 <tr style='height:23.0pt'>
  <td class="xl65" style='height:23.0pt;'></td>
  <td colspan="2" class="xl66" style=''>フロア</td>
  <td colspan="2" class="xl68" align="center" style='border-left:none;'>
    <button type="button" value="#floor minus 1" style="padding:0px;width:20%" id="btn1">▼</button><input type="text" value="1" maxlength='2' style="width:30%" id="floor" /><button type="button" value="#floor plus 99" style="padding:0px;width:20%" id="btn2">▲</button>
  </td>
  <td colspan="2" class="xl69" style='border-left:none;'>ポポロ:Lv</td>
  <td colspan="2" class="xl70" align="center" style='border-left:none;'>
    <button type="button" value="#lv_p minus 1" style="padding:0px;width:20%" id="btn3">▼</button><input type="text" value="1" maxlength='2' style="width:30%" id="lv_p" /><button type="button" value="#lv_p plus 99" style="padding:0px;width:20%" id="btn4">▲</button>
  </td>
  <td colspan="2" class="xl76" style='border-left:none;'>仲間:種族</td>
  <td colspan="3" class="xl77" style='border-left:none;%'><input type="text" value="スライムベス" style="width:100%" id="spec" /></td>
 </tr>
 <tr style='height:23.0pt'>
  <td class="xl65" style='height:23.0pt;border-top:none'></td>
  <td colspan="2" class="xl65" style='border-left:none'></td>
  <td colspan="2" class="xl65" style='border-left:none'></td>
  <td colspan="2" class="xl71">ポポロ:力</td>
  <td colspan="2" class="xl70" align="center" style='border-left:none'>
    <button type="button" value="#power minus 0" style="padding:0px;width:20%" id="btn5">▼</button><input type="text" value="8" maxlength='2' style="width:30%" id="power" /><button type="button" value="#power plus 50" style="padding:0px;width:20%" id="btn6">▲</button>
  </td>
  <td colspan="2" class="xl76" style='border-left:none'>仲間:Lv</td>
  <td colspan="2" class="xl78" align="center" style='border-left:none'>
    <button type="button" value="#lv_n minus 1" style="padding:0px;width:20%" id="btn7">▼</button><input type="text" value="1" maxlength='2' style="width:30%" id="lv_n" /><button type="button" value="#lv_n plus 99" style="padding:0px;width:20%" id="btn8">▲</button>
  </td>
  <td class="xl80" align="right" style='border-top:none' id="hp_n"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl87" style='height:23.0pt'>モンスター</td>
  <td colspan="2" class="xl87" style='border-left:none'>Lv</td>
  <td colspan="2" class="xl87" style='border-left:none'>HP</td>
  <td colspan="2" class="xl72" style='border-left:none'>ポポロ:与</td>
  <td colspan="2" class="xl74" style='border-left:none'>ポポロ:被</td>
  <td colspan="2" class="xl81" style='border-left:none'>仲間:与</td>
  <td colspan="2" class="xl83" style='border-right:.5pt solid black;border-left:none'>仲間:被</td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m0"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l0"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h0"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a0"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b0"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c0"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d0"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m1"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l1"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h1"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a1"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b1"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c1"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d1"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m2"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l2"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h2"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a2"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b2"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c2"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d2"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m3"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l3"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h3"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a3"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b3"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c3"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d3"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m4"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l4"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h4"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a4"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b4"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c4"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d4"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m5"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l5"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h5"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a5"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b5"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c5"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d5"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m6"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l6"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h6"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a6"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b6"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c6"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d6"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m7"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l7"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h7"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a7"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b7"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c7"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d7"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m8"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l8"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h8"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a8"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b8"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c8"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d8"></td>
 </tr>
 <tr style='height:23.0pt'>
  <td colspan="2" class="xl89" style='height:23.0pt' id="m9"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="l9"></td>
  <td colspan="2" class="xl89" align="right" style='border-left:none' id="h9"></td>
  <td colspan="2" class="xl73" align="right" style='border-left:none' id="a9"></td>
  <td colspan="2" class="xl75" align="right" style='border-left:none' id="b9"></td>
  <td colspan="2" class="xl82" align="right" style='border-left:none' id="c9"></td>
  <td colspan="2" class="xl85" align="right" style='border-right:.5pt solid black;border-left:none' id="d9"></td>
 </tr>
</table>
