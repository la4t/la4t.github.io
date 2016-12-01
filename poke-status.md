---
layout: default
title: ステータス計算機
---

## ステータス計算機

<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<style>
<!--
input[type="text"]{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.xl65
  {color:black;
  font-size:11.0pt;}
.xl66
  {border:.5pt solid black;
  background:#DDEBF7;}
.xl67
  {border:.5pt solid black;
  background:#E2EFDA;}
.xl68
  {border:.5pt solid black;
  background:#FFF2CC;}
.xl69
  {border:.5pt solid black;
  background:#FCE4D6;}
.xl70
  {border:.5pt solid black;
  background:#D9E1F2;}
.xl71
  {border:.5pt solid black;
  background:#D9D9D9;}
.xl72
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#FFF2CC;}
.xl73
  {text-align:center;
  border:.5pt solid black;
  background:#D9D9D9;}
.xl74
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#D9D9D9;}
.xl75
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#FCE4D6;}
.xl76
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#E2EFDA;}
.xl77
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#D9E1F2;}
.xl78
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#DDEBF7;}
.xl79
  {border-top:none;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#E2EFDA;}
.xl80
  {border-top:.5pt solid black;
  border-right:none;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#D9D9D9;}
.xl81
  {border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:none;
  border-left:.5pt solid black;
  background:#D9D9D9;}
.xl82
  {border:.5pt solid black;}
.xl83
  {vertical-align:middle;
  border:.5pt solid black;
  background:#D9D9D9;}
.xl84
  {font-size:11.0pt;}
.xl85
  {border-top:.5pt solid black;
  border-right:none;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#DDEBF7;}
.xl86
  {border-top:.5pt solid black;
  border-right:none;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#DDEBF7;}
.xl87
  {border-top:.5pt solid black;
  border-right:none;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#E2EFDA;}
.xl88
  {border-top:.5pt solid black;
  border-right:none;
  border-bottom:.5pt solid black;
  border-left:none;
  background:#E2EFDA;}
.xl89
  {border-top:none;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#D9D9D9;}
.xl90
  {vertical-align:middle;
  border-top:.5pt solid black;
  border-right:.5pt solid black;
  border-bottom:none;
  border-left:.5pt solid black;
  background:#D9D9D9;}
.xl91
  {vertical-align:middle;
  border-top:none;
  border-right:.5pt solid black;
  border-bottom:.5pt solid black;
  border-left:.5pt solid black;
  background:#D9D9D9;}
.xl92
  {vertical-align:middle;
  border:.5pt solid black;}
-->
</style>

<table border="0" cellpadding="0" cellspacing="0" style='border-collapse:collapse;table-layout:fixed;width:100%;max-width:400pt;'>
 <tr>
  <td class="xl82" align="center">種族</td>
  <td class="xl82" align="center" style='border-left:none;width:2pt'></td>
  <td colspan="2" class="xl82" align="center" style='border-left:none'><input type='text' style="width:100%" id="poke"></td>
  <td class="xl82" align="center" style='border-left:none'></td>
  <td class="xl82" align="center" style='border-left:none'>レベル</td>
  <td colspan="2" class="xl82" align="center" style='border-left:none'><input type='text' value="50" style="width:100%" id="lv"></td>
 </tr>
 <tr>
  <td class="xl82" align="center" style='border-top:none'>性格</td>
  <td class="xl82" align="center" style='border-top:none;border-left:none'></td>
  <td colspan="2" class="xl82" align="center" style='border-top:none;border-left:none'>
   <select id="nature" style="width:100%">
    <option value="さみしがり">さみしがり</option>
    <option value="ゆうかん">ゆうかん</option>
    <option value="いじっぱり">いじっぱり</option>
    <option value="やんちゃ">やんちゃ</option>
    <option value="ずぶとい">ずぶとい</option>
    <option value="のんき">のんき</option>
    <option value="わんぱく">わんぱく</option>
    <option value="のうてんき">のうてんき</option>
    <option value="おくびょう">おくびょう</option>
    <option value="せっかち">せっかち</option>
    <option value="ようき">ようき</option>
    <option value="むじゃき">むじゃき</option>
    <option value="ひかえめ">ひかえめ</option>
    <option value="おっとり">おっとり</option>
    <option value="れいせい">れいせい</option>
    <option value="うっかりや">うっかりや</option>
    <option value="おだやか">おだやか</option>
    <option value="おとなしい">おとなしい</option>
    <option value="なまいき">なまいき</option>
    <option value="しんちょう">しんちょう</option>
    <option value="がんばりや">がんばりや</option>
    <option value="きまぐれ">きまぐれ</option>
    <option value="すなお">すなお</option>
    <option value="てれや">てれや</option>
    <option value="まじめ">まじめ</option>
   </select>
  </td>
  <td class="xl82" align="center" style='border-top:none;border-left:none'></td>
  <td class="xl82" align="center" style='border-top:none;border-left:none'></td>
  <td colspan="2" class="xl82" align="center" style='border-top:none;border-left:none'></td>
 </tr>
 <tr>
  <td class="xl71"></td>
  <td class="xl72"></td>
  <td class="xl68" align="center" style='border-left:none;'>HP</td>
  <td class="xl68" align="center" style='border-left:none;'>攻撃</td>
  <td class="xl68" align="center" style='border-left:none;'>防御</td>
  <td class="xl68" align="center" style='border-left:none;'>特攻</td>
  <td class="xl68" align="center" style='border-left:none;'>特防</td>
  <td class="xl68" align="center" style='border-left:none;'>素早</td>
 </tr>
 <tr>
  <td class="xl71" align="center" style='border-top:none'>種族</td>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_h'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_a'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_b'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_c'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_d'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_s'></td>
 </tr>
 <tr>
  <td class="xl69" align="center" style='border-top:none'>↑</td>
  <td class="xl69" style='border-top:none'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_h'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_a'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_b'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_c'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_d'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_s'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>　</td>
  <td class="xl67" style='border-top:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_h'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_a'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_b'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_c'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_d'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_s'></td>
 </tr>
 <tr>
  <td class="xl70" align="center" style='border-top:none'>↓</td>
  <td class="xl70" style='border-top:none'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_h'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_a'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_b'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_c'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_d'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_s'></td>
 </tr>
 <tr>
  <td rowspan="2" class="xl90" align="center" style='border-bottom:.5pt solid black;border-top:none'>基P</td>
  <td class="xl81" style='border-top:none;border-left:none'></td>
  <td class="xl71" align="center" style='border-top:none;border-left:none'>計</td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='ev_all'></td>
  <td class="xl71" style='border-top:none;border-left:none'></td>
  <td class="xl71" align="center">残</td>
  <td class="xl71" align="right" style='border-left:none' id='ev_rest'></td>
  <td class="xl71" style='border-top:none;border-left:none'></td>
 </tr>
 <tr>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_h'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_a'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_b'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_c'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_d'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:100%" id='ev_s'></td>
 </tr>
 <tr>
  <td class="xl71" style='border-top:none'></td>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_h'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_a'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_b'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_c'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_d'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_s'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>31</td>
  <td class="xl76" style='border-top:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s31'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>30</td>
  <td class="xl78" style='border-top:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s30'></td>
 </tr>
 <tr>
  <td class="xl79" align="center">29</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s29'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>28</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s28'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>27</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s27'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>26</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s26'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>25</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s25'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>24</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s24'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>23</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s23'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>22</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s22'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>21</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s21'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>20</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s20'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>19</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s19'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>18</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s18'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>17</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s17'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>16</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s16'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>15</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s15'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>14</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s14'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>13</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s13'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>12</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s12'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>11</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s11'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>10</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s10'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>9</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s9'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>8</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s8'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>7</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s7'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>6</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s6'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>5</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s5'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>4</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s4'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>3</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s3'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>2</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s2'></td>
 </tr>
 <tr>
  <td class="xl67" align="center" style='border-top:none'>1</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s1'></td>
 </tr>
 <tr>
  <td class="xl66" align="center" style='border-top:none'>0</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s0'></td>
 </tr>
</table>

<script src="{{ site.baseurl }}/js/poke-status.js"></script>
