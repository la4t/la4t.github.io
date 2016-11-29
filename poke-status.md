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
  <td>種族</td>
  <td style="width:2pt"></td>
  <td colspan="2"><input type='text' style="width:80%" id="poke"></td>
  <td>レベル</td>
  <td colspan="2"><input type='text' value="50" style="width:80%" id="lv"></td>
  <td></td>
 </tr>
 <tr>
  <td>性格</td>
  <td></td>
  <td colspan="2">
   <select id="nature" style="width:90%">
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
  <td></td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl71" style='height:15.0pt;'></td>
  <td class="xl72" style=''></td>
  <td class="xl68" style='border-left:none;'>HP</td>
  <td class="xl68" style='border-left:none;'>攻撃</td>
  <td class="xl68" style='border-left:none;'>防御</td>
  <td class="xl68" style='border-left:none;'>特攻</td>
  <td class="xl68" style='border-left:none;'>特防</td>
  <td class="xl68" style='border-left:none;'>素早</td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl71" style='height:15.0pt;border-top:none'>種族</td>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_h'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_a'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_b'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_c'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_d'></td>
  <td class="xl71" align="right" style='border-top:none;border-left:none' id='base_s'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td class="xl75" style='border-top:none'>↑</td>
  <td height="20" class="xl83" style='height:15.0pt;border-top:none'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_h'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_a'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_b'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_c'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_d'></td>
  <td class="xl69" align="right" style='border-top:none;border-left:none' id='upper_s'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td class="xl76" style='border-top:none'></td>
  <td height="20" class="xl71" style='height:15.0pt;border-top:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_h'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_a'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_b'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_c'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_d'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='normal_s'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td class="xl77" style='border-top:none'>↓</td>
  <td></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_h'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_a'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_b'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_c'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_d'></td>
  <td class="xl70" align="right" style='border-top:none;border-left:none' id='lower_s'></td>
 </tr>
 <tr>
  <td rowspan="2" height="40" class="xl90" style='border-bottom:.5pt solid black;height:30.0pt;border-top:none'>基P</td>
  <td></td>
  <td class="xl81" style='border-top:none;border-left:none'>計</td>
  <td class="xl81" align="right" style='border-top:none;border-left:none' id='ev_all'></td>
  <td></td>
  <td class="xl71">残</td>
  <td class="xl71" align="right" style='border-left:none' id='ev_rest'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_h'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_a'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_b'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_c'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_d'></td>
  <td class="xl82" align="right" style='border-top:none;border-left:none'><input type='text' value="0" style="width:80%" id='ev_s'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl71" style='height:15.0pt;border-top:none'></td>
  <td class="xl74" style='border-top:none'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_h'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_a'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_b'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_c'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_d'></td>
  <td class="xl73" style='border-top:none;border-left:none' id='nature_s'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>31</td>
  <td class="xl76" style='border-top:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d31'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s31'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>30</td>
  <td class="xl78" style='border-top:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d30'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s30'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl79" align="right" style='height:15.0pt'>29</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d29'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s29'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>28</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d28'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s28'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>27</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d27'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s27'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>26</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d26'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s26'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>25</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d25'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s25'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>24</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d24'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s24'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>23</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d23'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s23'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>22</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d22'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s22'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>21</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d21'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s21'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>20</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d20'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s20'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>19</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d19'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s19'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>18</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d18'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s18'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>17</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d17'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s17'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>16</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d16'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s16'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>15</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d15'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s15'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>14</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d14'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s14'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>13</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d13'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s13'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>12</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d12'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s12'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>11</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d11'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s11'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>10</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d10'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s10'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>9</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d9'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s9'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>8</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d8'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s8'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>7</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d7'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s7'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>6</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d6'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s6'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>5</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d5'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s5'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>4</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d4'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s4'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>3</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d3'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s3'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>2</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d2'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s2'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl67" align="right" style='height:15.0pt;border-top:none'>1</td>
  <td class="xl67" style='border-top:none;border-left:none'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='h1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='a1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='b1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='c1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='d1'></td>
  <td class="xl67" align="right" style='border-top:none;border-left:none' id='s1'></td>
 </tr>
 <tr height="20" style='height:15.0pt'>
  <td height="20" class="xl66" align="right" style='height:15.0pt;border-top:none'>0</td>
  <td class="xl66" style='border-top:none;border-left:none'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='h0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='a0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='b0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='c0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='d0'></td>
  <td class="xl66" align="right" style='border-top:none;border-left:none' id='s0'></td>
 </tr>
</table>


<script>

var p = {
  "フシギダネ": {
    name: [ "フシギダネ", "ふしぎだね" ],
    base: { h:45, a:49, b:49, c:65, d:65, s:45 }
  },
  "フシギソウ": {
    name: [ "フシギソウ", "ふしぎそう" ],
    base: { h:60, a:62, b:63, c:80, d:80, s:60 }
  },
  "フシギバナ": {
    name: [ "フシギバナ", "ふしぎばな" ],
    base: { h:80, a:82, b:83, c:100, d:100, s:80 }
  },
  "メガフシギバナ": {
    name: [ "メガフシギバナ", "めがふしぎばな" ],
    base: { h:80, a:100, b:123, c:122, d:120, s:80 }
  },
  "ヒトカゲ": {
    name: [ "ヒトカゲ", "ひとかげ" ],
    base: { h:39, a:52, b:43, c:60, d:50, s:65 }
  },
  "リザード": {
    name: [ "リザード", "りざーど" ],
    base: { h:58, a:64, b:58, c:80, d:65, s:80 }
  },
  "リザードン": {
    name: [ "リザードン", "りざーどん" ],
    base: { h:78, a:84, b:78, c:109, d:85, s:100 }
  },
  "メガリザードンX": {
    name: [ "メガリザードンX", "めがりざーどんえっくす" ],
    base: { h:78, a:130, b:111, c:130, d:85, s:100 }
  },
  "メガリザードンY": {
    name: [ "メガリザードンY", "めがりざーどんわい" ],
    base: { h:78, a:104, b:78, c:159, d:115, s:100 }
  },
  "ゼニガメ": {
    name: [ "ゼニガメ", "ぜにがめ" ],
    base: { h:44, a:48, b:65, c:50, d:64, s:43 }
  },
  "カメール": {
    name: [ "カメール", "かめーる" ],
    base: { h:59, a:63, b:80, c:65, d:80, s:58 }
  },
  "カメックス": {
    name: [ "カメックス", "かめっくす" ],
    base: { h:79, a:83, b:100, c:85, d:105, s:78 }
  },
  "メガカメックス": {
    name: [ "メガカメックス", "めがかめっくす" ],
    base: { h:79, a:103, b:120, c:135, d:115, s:78 }
  },
  "キャタピー": {
    name: [ "キャタピー", "きゃたぴー" ],
    base: { h:45, a:30, b:35, c:20, d:20, s:45 }
  },
  "トランセル": {
    name: [ "トランセル", "とらんせる" ],
    base: { h:50, a:20, b:55, c:25, d:25, s:30 }
  },
  "バタフリー": {
    name: [ "バタフリー", "ばたふりー" ],
    base: { h:60, a:45, b:50, c:90, d:80, s:70 }
  },
  "ビードル": {
    name: [ "ビードル", "びーどる" ],
    base: { h:40, a:35, b:30, c:20, d:20, s:50 }
  },
  "コクーン": {
    name: [ "コクーン", "こくーん" ],
    base: { h:45, a:25, b:50, c:25, d:25, s:35 }
  },
  "スピアー": {
    name: [ "スピアー", "すぴあー" ],
    base: { h:65, a:90, b:40, c:45, d:80, s:75 }
  },
  "メガスピアー": {
    name: [ "メガスピアー", "めがすぴあー" ],
    base: { h:65, a:150, b:40, c:15, d:80, s:145 }
  },
  "ポッポ": {
    name: [ "ポッポ", "ぽっぽ" ],
    base: { h:40, a:45, b:40, c:35, d:35, s:56 }
  },
  "ピジョン": {
    name: [ "ピジョン", "ぴじょん" ],
    base: { h:63, a:60, b:55, c:50, d:50, s:71 }
  },
  "ピジョット": {
    name: [ "ピジョット", "ぴじょっと" ],
    base: { h:83, a:80, b:75, c:70, d:70, s:101 }
  },
  "メガピジョット": {
    name: [ "メガピジョット", "めがぴじょっと" ],
    base: { h:83, a:80, b:80, c:135, d:80, s:121 }
  },
  "コラッタ": {
    name: [ "コラッタ", "こらった" ],
    base: { h:30, a:56, b:35, c:25, d:35, s:72 }
  },
  "ラッタ": {
    name: [ "ラッタ", "らった" ],
    base: { h:55, a:81, b:60, c:50, d:70, s:97 }
  },
  "オニスズメ": {
    name: [ "オニスズメ", "おにすずめ" ],
    base: { h:40, a:60, b:30, c:31, d:31, s:70 }
  },
  "オニドリル": {
    name: [ "オニドリル", "おにどりる" ],
    base: { h:65, a:90, b:65, c:61, d:61, s:100 }
  },
  "アーボ": {
    name: [ "アーボ", "あーぼ" ],
    base: { h:35, a:60, b:44, c:40, d:54, s:55 }
  },
  "アーボック": {
    name: [ "アーボック", "あーぼっく" ],
    base: { h:60, a:85, b:69, c:65, d:79, s:80 }
  },
  "ピカチュウ": {
    name: [ "ピカチュウ", "ぴかちゅう" ],
    base: { h:35, a:55, b:40, c:50, d:50, s:90 }
  },
  "ライチュウ": {
    name: [ "ライチュウ", "らいちゅう" ],
    base: { h:60, a:90, b:55, c:90, d:80, s:110 }
  },
  "サンド": {
    name: [ "サンド", "さんど" ],
    base: { h:50, a:75, b:85, c:20, d:30, s:40 }
  },
  "サンドパン": {
    name: [ "サンドパン", "さんどぱん" ],
    base: { h:75, a:100, b:110, c:45, d:55, s:65 }
  },
  "ニドラン♀": {
    name: [ "ニドラン♀", "にどらんめす" ],
    base: { h:55, a:47, b:52, c:40, d:40, s:41 }
  },
  "ニドリーナ": {
    name: [ "ニドリーナ", "にどりーな" ],
    base: { h:70, a:62, b:67, c:55, d:55, s:56 }
  },
  "ニドクイン": {
    name: [ "ニドクイン", "にどくいん" ],
    base: { h:90, a:92, b:87, c:75, d:85, s:76 }
  },
  "ニドラン♂": {
    name: [ "ニドラン♂", "にどらんおす" ],
    base: { h:46, a:57, b:40, c:40, d:40, s:50 }
  },
  "ニドリーノ": {
    name: [ "ニドリーノ", "にどりーの" ],
    base: { h:61, a:72, b:57, c:55, d:55, s:65 }
  },
  "ニドキング": {
    name: [ "ニドキング", "にどきんぐ" ],
    base: { h:81, a:102, b:77, c:85, d:75, s:85 }
  },
  "ピッピ": {
    name: [ "ピッピ", "ぴっぴ" ],
    base: { h:70, a:45, b:48, c:60, d:65, s:35 }
  },
  "ピクシー": {
    name: [ "ピクシー", "ぴくしー" ],
    base: { h:95, a:70, b:73, c:95, d:90, s:60 }
  },
  "ロコン": {
    name: [ "ロコン", "ろこん" ],
    base: { h:38, a:41, b:40, c:50, d:65, s:65 }
  },
  "キュウコン": {
    name: [ "キュウコン", "きゅうこん" ],
    base: { h:73, a:76, b:75, c:81, d:100, s:100 }
  },
  "プリン": {
    name: [ "プリン", "ぷりん" ],
    base: { h:115, a:45, b:20, c:45, d:25, s:20 }
  },
  "プクリン": {
    name: [ "プクリン", "ぷくりん" ],
    base: { h:140, a:70, b:45, c:85, d:50, s:45 }
  },
  "ズバット": {
    name: [ "ズバット", "ずばっと" ],
    base: { h:40, a:45, b:35, c:30, d:40, s:55 }
  },
  "ゴルバット": {
    name: [ "ゴルバット", "ごるばっと" ],
    base: { h:75, a:80, b:70, c:65, d:75, s:90 }
  },
  "ナゾノクサ": {
    name: [ "ナゾノクサ", "なぞのくさ" ],
    base: { h:45, a:50, b:55, c:75, d:65, s:30 }
  },
  "クサイハナ": {
    name: [ "クサイハナ", "くさいはな" ],
    base: { h:60, a:65, b:70, c:85, d:75, s:40 }
  },
  "ラフレシア": {
    name: [ "ラフレシア", "らふれしあ" ],
    base: { h:75, a:80, b:85, c:110, d:90, s:50 }
  },
  "パラス": {
    name: [ "パラス", "ぱらす" ],
    base: { h:35, a:70, b:55, c:45, d:55, s:25 }
  },
  "パラセクト": {
    name: [ "パラセクト", "ぱらせくと" ],
    base: { h:60, a:95, b:80, c:60, d:80, s:30 }
  },
  "コンパン": {
    name: [ "コンパン", "こんぱん" ],
    base: { h:60, a:55, b:50, c:40, d:55, s:45 }
  },
  "モルフォン": {
    name: [ "モルフォン", "もるふぉん" ],
    base: { h:70, a:65, b:60, c:90, d:75, s:90 }
  },
  "ディグダ": {
    name: [ "ディグダ", "でぃぐだ" ],
    base: { h:10, a:55, b:25, c:35, d:45, s:95 }
  },
  "ダグトリオ": {
    name: [ "ダグトリオ", "だぐとりお" ],
    base: { h:35, a:80, b:50, c:50, d:70, s:120 }
  },
  "ニャース": {
    name: [ "ニャース", "にゃーす" ],
    base: { h:40, a:45, b:35, c:40, d:40, s:90 }
  },
  "ペルシアン": {
    name: [ "ペルシアン", "ぺるしあん" ],
    base: { h:65, a:70, b:60, c:65, d:65, s:115 }
  },
  "コダック": {
    name: [ "コダック", "こだっく" ],
    base: { h:50, a:52, b:48, c:65, d:50, s:55 }
  },
  "ゴルダック": {
    name: [ "ゴルダック", "ごるだっく" ],
    base: { h:80, a:82, b:78, c:95, d:80, s:85 }
  },
  "マンキー": {
    name: [ "マンキー", "まんきー" ],
    base: { h:40, a:80, b:35, c:35, d:45, s:70 }
  },
  "オコリザル": {
    name: [ "オコリザル", "おこりざる" ],
    base: { h:65, a:105, b:60, c:60, d:70, s:95 }
  },
  "ガーディ": {
    name: [ "ガーディ", "がーでぃ" ],
    base: { h:55, a:70, b:45, c:70, d:50, s:60 }
  },
  "ウインディ": {
    name: [ "ウインディ", "ういんでぃ" ],
    base: { h:90, a:110, b:80, c:100, d:80, s:95 }
  },
  "ニョロモ": {
    name: [ "ニョロモ", "にょろも" ],
    base: { h:40, a:50, b:40, c:40, d:40, s:90 }
  },
  "ニョロゾ": {
    name: [ "ニョロゾ", "にょろぞ" ],
    base: { h:65, a:65, b:65, c:50, d:50, s:90 }
  },
  "ニョロボン": {
    name: [ "ニョロボン", "にょろぼん" ],
    base: { h:90, a:95, b:95, c:70, d:90, s:70 }
  },
  "ケーシィ": {
    name: [ "ケーシィ", "けーしぃ" ],
    base: { h:25, a:20, b:15, c:105, d:55, s:90 }
  },
  "ユンゲラー": {
    name: [ "ユンゲラー", "ゆんげらー" ],
    base: { h:40, a:35, b:30, c:120, d:70, s:105 }
  },
  "フーディン": {
    name: [ "フーディン", "ふーでぃん" ],
    base: { h:55, a:50, b:45, c:135, d:95, s:120 }
  },
  "メガフーディン": {
    name: [ "メガフーディン", "めがふーでぃん" ],
    base: { h:55, a:50, b:65, c:175, d:95, s:150 }
  },
  "ワンリキー": {
    name: [ "ワンリキー", "わんりきー" ],
    base: { h:70, a:80, b:50, c:35, d:35, s:35 }
  },
  "ゴーリキー": {
    name: [ "ゴーリキー", "ごーりきー" ],
    base: { h:80, a:100, b:70, c:50, d:60, s:45 }
  },
  "カイリキー": {
    name: [ "カイリキー", "かいりきー" ],
    base: { h:90, a:130, b:80, c:65, d:85, s:55 }
  },
  "マダツボミ": {
    name: [ "マダツボミ", "まだつぼみ" ],
    base: { h:50, a:75, b:35, c:70, d:30, s:40 }
  },
  "ウツドン": {
    name: [ "ウツドン", "うつどん" ],
    base: { h:65, a:90, b:50, c:85, d:45, s:55 }
  },
  "ウツボット": {
    name: [ "ウツボット", "うつぼっと" ],
    base: { h:80, a:105, b:65, c:100, d:70, s:70 }
  },
  "メノクラゲ": {
    name: [ "メノクラゲ", "めのくらげ" ],
    base: { h:40, a:40, b:35, c:50, d:100, s:70 }
  },
  "ドククラゲ": {
    name: [ "ドククラゲ", "どくくらげ" ],
    base: { h:80, a:70, b:65, c:80, d:120, s:100 }
  },
  "イシツブテ": {
    name: [ "イシツブテ", "いしつぶて" ],
    base: { h:40, a:80, b:100, c:30, d:30, s:20 }
  },
  "ゴローン": {
    name: [ "ゴローン", "ごろーん" ],
    base: { h:55, a:95, b:115, c:45, d:45, s:35 }
  },
  "ゴローニャ": {
    name: [ "ゴローニャ", "ごろーにゃ" ],
    base: { h:80, a:120, b:130, c:55, d:65, s:45 }
  },
  "ポニータ": {
    name: [ "ポニータ", "ぽにーた" ],
    base: { h:50, a:85, b:55, c:65, d:65, s:90 }
  },
  "ギャロップ": {
    name: [ "ギャロップ", "ぎゃろっぷ" ],
    base: { h:65, a:100, b:70, c:80, d:80, s:105 }
  },
  "ヤドン": {
    name: [ "ヤドン", "やどん" ],
    base: { h:90, a:65, b:65, c:40, d:40, s:15 }
  },
  "ヤドラン": {
    name: [ "ヤドラン", "やどらん" ],
    base: { h:95, a:75, b:110, c:100, d:80, s:30 }
  },
  "メガヤドラン": {
    name: [ "メガヤドラン", "めがやどらん" ],
    base: { h:95, a:75, b:180, c:130, d:80, s:30 }
  },
  "コイル": {
    name: [ "コイル", "こいる" ],
    base: { h:25, a:35, b:70, c:95, d:55, s:45 }
  },
  "レアコイル": {
    name: [ "レアコイル", "れあこいる" ],
    base: { h:50, a:60, b:95, c:120, d:70, s:70 }
  },
  "カモネギ": {
    name: [ "カモネギ", "かもねぎ" ],
    base: { h:52, a:65, b:55, c:58, d:62, s:60 }
  },
  "ドードー": {
    name: [ "ドードー", "どーどー" ],
    base: { h:35, a:85, b:45, c:35, d:35, s:75 }
  },
  "ドードリオ": {
    name: [ "ドードリオ", "どーどりお" ],
    base: { h:60, a:110, b:70, c:60, d:60, s:100 }
  },
  "パウワウ": {
    name: [ "パウワウ", "ぱうわう" ],
    base: { h:65, a:45, b:55, c:45, d:70, s:45 }
  },
  "ジュゴン": {
    name: [ "ジュゴン", "じゅごん" ],
    base: { h:90, a:70, b:80, c:70, d:95, s:70 }
  },
  "ベトベター": {
    name: [ "ベトベター", "べとべたー" ],
    base: { h:80, a:80, b:50, c:40, d:50, s:25 }
  },
  "ベトベトン": {
    name: [ "ベトベトン", "べとべとん" ],
    base: { h:105, a:105, b:75, c:65, d:100, s:50 }
  },
  "シェルダー": {
    name: [ "シェルダー", "しぇるだー" ],
    base: { h:30, a:65, b:100, c:45, d:25, s:40 }
  },
  "パルシェン": {
    name: [ "パルシェン", "ぱるしぇん" ],
    base: { h:50, a:95, b:180, c:85, d:45, s:70 }
  },
  "ゴース": {
    name: [ "ゴース", "ごーす" ],
    base: { h:30, a:35, b:30, c:100, d:35, s:80 }
  },
  "ゴースト": {
    name: [ "ゴースト", "ごーすと" ],
    base: { h:45, a:50, b:45, c:115, d:55, s:95 }
  },
  "ゲンガー": {
    name: [ "ゲンガー", "げんがー" ],
    base: { h:60, a:65, b:60, c:130, d:75, s:110 }
  },
  "メガゲンガー": {
    name: [ "メガゲンガー", "めがげんがー" ],
    base: { h:60, a:65, b:80, c:170, d:95, s:130 }
  },
  "イワーク": {
    name: [ "イワーク", "いわーく" ],
    base: { h:35, a:45, b:160, c:30, d:45, s:70 }
  },
  "スリープ": {
    name: [ "スリープ", "すりーぷ" ],
    base: { h:60, a:48, b:45, c:43, d:90, s:42 }
  },
  "スリーパー": {
    name: [ "スリーパー", "すりーぱー" ],
    base: { h:85, a:73, b:70, c:73, d:115, s:67 }
  },
  "クラブ": {
    name: [ "クラブ", "くらぶ" ],
    base: { h:30, a:105, b:90, c:25, d:25, s:50 }
  },
  "キングラー": {
    name: [ "キングラー", "きんぐらー" ],
    base: { h:55, a:130, b:115, c:50, d:50, s:75 }
  },
  "ビリリダマ": {
    name: [ "ビリリダマ", "びりりだま" ],
    base: { h:40, a:30, b:50, c:55, d:55, s:100 }
  },
  "マルマイン": {
    name: [ "マルマイン", "まるまいん" ],
    base: { h:60, a:50, b:70, c:80, d:80, s:140 }
  },
  "タマタマ": {
    name: [ "タマタマ", "たまたま" ],
    base: { h:60, a:40, b:80, c:60, d:45, s:40 }
  },
  "ナッシー": {
    name: [ "ナッシー", "なっしー" ],
    base: { h:95, a:95, b:85, c:125, d:65, s:55 }
  },
  "カラカラ": {
    name: [ "カラカラ", "からから" ],
    base: { h:50, a:50, b:95, c:40, d:50, s:35 }
  },
  "ガラガラ": {
    name: [ "ガラガラ", "がらがら" ],
    base: { h:60, a:80, b:110, c:50, d:80, s:45 }
  },
  "サワムラー": {
    name: [ "サワムラー", "さわむらー" ],
    base: { h:50, a:120, b:53, c:35, d:110, s:87 }
  },
  "エビワラー": {
    name: [ "エビワラー", "えびわらー" ],
    base: { h:50, a:105, b:79, c:35, d:110, s:76 }
  },
  "ベロリンガ": {
    name: [ "ベロリンガ", "べろりんが" ],
    base: { h:90, a:55, b:75, c:60, d:75, s:30 }
  },
  "ドガース": {
    name: [ "ドガース", "どがーす" ],
    base: { h:40, a:65, b:95, c:60, d:45, s:35 }
  },
  "マタドガス": {
    name: [ "マタドガス", "またどがす" ],
    base: { h:65, a:90, b:120, c:85, d:70, s:60 }
  },
  "サイホーン": {
    name: [ "サイホーン", "さいほーん" ],
    base: { h:80, a:85, b:95, c:30, d:30, s:25 }
  },
  "サイドン": {
    name: [ "サイドン", "さいどん" ],
    base: { h:105, a:130, b:120, c:45, d:45, s:40 }
  },
  "ラッキー": {
    name: [ "ラッキー", "らっきー" ],
    base: { h:250, a:5, b:5, c:35, d:105, s:50 }
  },
  "モンジャラ": {
    name: [ "モンジャラ", "もんじゃら" ],
    base: { h:65, a:55, b:115, c:100, d:40, s:60 }
  },
  "ガルーラ": {
    name: [ "ガルーラ", "がるーら" ],
    base: { h:105, a:95, b:80, c:40, d:80, s:90 }
  },
  "メガガルーラ": {
    name: [ "メガガルーラ", "めががるーら" ],
    base: { h:105, a:125, b:100, c:60, d:100, s:100 }
  },
  "タッツー": {
    name: [ "タッツー", "たっつー" ],
    base: { h:30, a:40, b:70, c:70, d:25, s:60 }
  },
  "シードラ": {
    name: [ "シードラ", "しーどら" ],
    base: { h:55, a:65, b:95, c:95, d:45, s:85 }
  },
  "トサキント": {
    name: [ "トサキント", "とさきんと" ],
    base: { h:45, a:67, b:60, c:35, d:50, s:63 }
  },
  "アズマオウ": {
    name: [ "アズマオウ", "あずまおう" ],
    base: { h:80, a:92, b:65, c:65, d:80, s:68 }
  },
  "ヒトデマン": {
    name: [ "ヒトデマン", "ひとでまん" ],
    base: { h:30, a:45, b:55, c:70, d:55, s:85 }
  },
  "スターミー": {
    name: [ "スターミー", "すたーみー" ],
    base: { h:60, a:75, b:85, c:100, d:85, s:115 }
  },
  "バリヤード": {
    name: [ "バリヤード", "ばりやーど" ],
    base: { h:40, a:45, b:65, c:100, d:120, s:90 }
  },
  "ストライク": {
    name: [ "ストライク", "すとらいく" ],
    base: { h:70, a:110, b:80, c:55, d:80, s:105 }
  },
  "ルージュラ": {
    name: [ "ルージュラ", "るーじゅら" ],
    base: { h:65, a:50, b:35, c:115, d:95, s:95 }
  },
  "エレブー": {
    name: [ "エレブー", "えれぶー" ],
    base: { h:65, a:83, b:57, c:95, d:85, s:105 }
  },
  "ブーバー": {
    name: [ "ブーバー", "ぶーばー" ],
    base: { h:65, a:95, b:57, c:100, d:85, s:93 }
  },
  "カイロス": {
    name: [ "カイロス", "かいろす" ],
    base: { h:65, a:125, b:100, c:55, d:70, s:85 }
  },
  "メガカイロス": {
    name: [ "メガカイロス", "めがかいろす" ],
    base: { h:65, a:155, b:120, c:65, d:90, s:105 }
  },
  "ケンタロス": {
    name: [ "ケンタロス", "けんたろす" ],
    base: { h:75, a:100, b:95, c:40, d:70, s:110 }
  },
  "コイキング": {
    name: [ "コイキング", "こいきんぐ" ],
    base: { h:20, a:10, b:55, c:15, d:20, s:80 }
  },
  "ギャラドス": {
    name: [ "ギャラドス", "ぎゃらどす" ],
    base: { h:95, a:125, b:79, c:60, d:100, s:81 }
  },
  "メガギャラドス": {
    name: [ "メガギャラドス", "めがぎゃらどす" ],
    base: { h:95, a:155, b:109, c:70, d:130, s:81 }
  },
  "ラプラス": {
    name: [ "ラプラス", "らぷらす" ],
    base: { h:130, a:85, b:80, c:85, d:95, s:60 }
  },
  "メタモン": {
    name: [ "メタモン", "めたもん" ],
    base: { h:48, a:48, b:48, c:48, d:48, s:48 }
  },
  "イーブイ": {
    name: [ "イーブイ", "いーぶい" ],
    base: { h:55, a:55, b:50, c:45, d:65, s:55 }
  },
  "シャワーズ": {
    name: [ "シャワーズ", "しゃわーず" ],
    base: { h:130, a:65, b:60, c:110, d:95, s:65 }
  },
  "サンダース": {
    name: [ "サンダース", "さんだーす" ],
    base: { h:65, a:65, b:60, c:110, d:95, s:130 }
  },
  "ブースター": {
    name: [ "ブースター", "ぶーすたー" ],
    base: { h:65, a:130, b:60, c:95, d:110, s:65 }
  },
  "ポリゴン": {
    name: [ "ポリゴン", "ぽりごん" ],
    base: { h:65, a:60, b:70, c:85, d:75, s:40 }
  },
  "オムナイト": {
    name: [ "オムナイト", "おむないと" ],
    base: { h:35, a:40, b:100, c:90, d:55, s:35 }
  },
  "オムスター": {
    name: [ "オムスター", "おむすたー" ],
    base: { h:70, a:60, b:125, c:115, d:70, s:55 }
  },
  "カブト": {
    name: [ "カブト", "かぶと" ],
    base: { h:30, a:80, b:90, c:55, d:45, s:55 }
  },
  "カブトプス": {
    name: [ "カブトプス", "かぶとぷす" ],
    base: { h:60, a:115, b:105, c:65, d:70, s:80 }
  },
  "プテラ": {
    name: [ "プテラ", "ぷてら" ],
    base: { h:80, a:105, b:65, c:60, d:75, s:130 }
  },
  "メガプテラ": {
    name: [ "メガプテラ", "めがぷてら" ],
    base: { h:80, a:135, b:85, c:70, d:95, s:150 }
  },
  "カビゴン": {
    name: [ "カビゴン", "かびごん" ],
    base: { h:160, a:110, b:65, c:65, d:110, s:30 }
  },
  "フリーザー": {
    name: [ "フリーザー", "ふりーざー" ],
    base: { h:90, a:85, b:100, c:95, d:125, s:85 }
  },
  "サンダー": {
    name: [ "サンダー", "さんだー" ],
    base: { h:90, a:90, b:85, c:125, d:90, s:100 }
  },
  "ファイヤー": {
    name: [ "ファイヤー", "ふぁいやー" ],
    base: { h:90, a:100, b:90, c:125, d:85, s:90 }
  },
  "ミニリュウ": {
    name: [ "ミニリュウ", "みにりゅう" ],
    base: { h:41, a:64, b:45, c:50, d:50, s:50 }
  },
  "ハクリュー": {
    name: [ "ハクリュー", "はくりゅー" ],
    base: { h:61, a:84, b:65, c:70, d:70, s:70 }
  },
  "カイリュー": {
    name: [ "カイリュー", "かいりゅー" ],
    base: { h:91, a:134, b:95, c:100, d:100, s:80 }
  },
  "ミュウツー": {
    name: [ "ミュウツー", "みゅうつー" ],
    base: { h:106, a:110, b:90, c:154, d:90, s:130 }
  },
  "メガミュウツーX": {
    name: [ "メガミュウツーX", "めがみゅうつーえっくす" ],
    base: { h:106, a:190, b:100, c:154, d:100, s:130 }
  },
  "メガミュウツーY": {
    name: [ "メガミュウツーY", "めがみゅうつーわい" ],
    base: { h:106, a:150, b:70, c:194, d:120, s:140 }
  },
  "ミュウ": {
    name: [ "ミュウ", "みゅう" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "チコリータ": {
    name: [ "チコリータ", "ちこりーた" ],
    base: { h:45, a:49, b:65, c:49, d:65, s:45 }
  },
  "ベイリーフ": {
    name: [ "ベイリーフ", "べいりーふ" ],
    base: { h:60, a:62, b:80, c:63, d:80, s:60 }
  },
  "メガニウム": {
    name: [ "メガニウム", "めがにうむ" ],
    base: { h:80, a:82, b:100, c:83, d:100, s:80 }
  },
  "ヒノアラシ": {
    name: [ "ヒノアラシ", "ひのあらし" ],
    base: { h:39, a:52, b:43, c:60, d:50, s:65 }
  },
  "マグマラシ": {
    name: [ "マグマラシ", "まぐまらし" ],
    base: { h:58, a:64, b:58, c:80, d:65, s:80 }
  },
  "バクフーン": {
    name: [ "バクフーン", "ばくふーん" ],
    base: { h:78, a:84, b:78, c:109, d:85, s:100 }
  },
  "ワニノコ": {
    name: [ "ワニノコ", "わにのこ" ],
    base: { h:50, a:65, b:64, c:44, d:48, s:43 }
  },
  "アリゲイツ": {
    name: [ "アリゲイツ", "ありげいつ" ],
    base: { h:65, a:80, b:80, c:59, d:63, s:58 }
  },
  "オーダイル": {
    name: [ "オーダイル", "おーだいる" ],
    base: { h:85, a:105, b:100, c:79, d:83, s:78 }
  },
  "オタチ": {
    name: [ "オタチ", "おたち" ],
    base: { h:35, a:46, b:34, c:35, d:45, s:20 }
  },
  "オオタチ": {
    name: [ "オオタチ", "おおたち" ],
    base: { h:85, a:76, b:64, c:45, d:55, s:90 }
  },
  "ホーホー": {
    name: [ "ホーホー", "ほーほー" ],
    base: { h:60, a:30, b:30, c:36, d:56, s:50 }
  },
  "ヨルノズク": {
    name: [ "ヨルノズク", "よるのずく" ],
    base: { h:100, a:50, b:50, c:76, d:96, s:70 }
  },
  "レディバ": {
    name: [ "レディバ", "れでぃば" ],
    base: { h:40, a:20, b:30, c:40, d:80, s:55 }
  },
  "レディアン": {
    name: [ "レディアン", "れでぃあん" ],
    base: { h:55, a:35, b:50, c:55, d:110, s:85 }
  },
  "イトマル": {
    name: [ "イトマル", "いとまる" ],
    base: { h:40, a:60, b:40, c:40, d:40, s:30 }
  },
  "アリアドス": {
    name: [ "アリアドス", "ありあどす" ],
    base: { h:70, a:90, b:70, c:60, d:60, s:40 }
  },
  "クロバット": {
    name: [ "クロバット", "くろばっと" ],
    base: { h:85, a:90, b:80, c:70, d:80, s:130 }
  },
  "チョンチー": {
    name: [ "チョンチー", "ちょんちー" ],
    base: { h:75, a:38, b:38, c:56, d:56, s:67 }
  },
  "ランターン": {
    name: [ "ランターン", "らんたーん" ],
    base: { h:125, a:58, b:58, c:76, d:76, s:67 }
  },
  "ピチュー": {
    name: [ "ピチュー", "ぴちゅー" ],
    base: { h:20, a:40, b:15, c:35, d:35, s:60 }
  },
  "ピィ": {
    name: [ "ピィ", "ぴぃ" ],
    base: { h:50, a:25, b:28, c:45, d:55, s:15 }
  },
  "ププリン": {
    name: [ "ププリン", "ぷぷりん" ],
    base: { h:90, a:30, b:15, c:40, d:20, s:15 }
  },
  "トゲピー": {
    name: [ "トゲピー", "とげぴー" ],
    base: { h:35, a:20, b:65, c:40, d:65, s:20 }
  },
  "トゲチック": {
    name: [ "トゲチック", "とげちっく" ],
    base: { h:55, a:40, b:85, c:80, d:105, s:40 }
  },
  "ネイティ": {
    name: [ "ネイティ", "ねいてぃ" ],
    base: { h:40, a:50, b:45, c:70, d:45, s:70 }
  },
  "ネイティオ": {
    name: [ "ネイティオ", "ねいてぃお" ],
    base: { h:65, a:75, b:70, c:95, d:70, s:95 }
  },
  "メリープ": {
    name: [ "メリープ", "めりーぷ" ],
    base: { h:55, a:40, b:40, c:65, d:45, s:35 }
  },
  "モココ": {
    name: [ "モココ", "もここ" ],
    base: { h:70, a:55, b:55, c:80, d:60, s:45 }
  },
  "デンリュウ": {
    name: [ "デンリュウ", "でんりゅう" ],
    base: { h:90, a:75, b:85, c:115, d:90, s:55 }
  },
  "メガデンリュウ": {
    name: [ "メガデンリュウ", "めがでんりゅう" ],
    base: { h:90, a:95, b:105, c:165, d:110, s:45 }
  },
  "キレイハナ": {
    name: [ "キレイハナ", "きれいはな" ],
    base: { h:75, a:80, b:95, c:90, d:100, s:50 }
  },
  "マリル": {
    name: [ "マリル", "まりる" ],
    base: { h:70, a:20, b:50, c:20, d:50, s:40 }
  },
  "マリルリ": {
    name: [ "マリルリ", "まりるり" ],
    base: { h:100, a:50, b:80, c:60, d:80, s:50 }
  },
  "ウソッキー": {
    name: [ "ウソッキー", "うそっきー" ],
    base: { h:70, a:100, b:115, c:30, d:65, s:30 }
  },
  "ニョロトノ": {
    name: [ "ニョロトノ", "にょろとの" ],
    base: { h:90, a:75, b:75, c:90, d:100, s:70 }
  },
  "ハネッコ": {
    name: [ "ハネッコ", "はねっこ" ],
    base: { h:35, a:35, b:40, c:35, d:55, s:50 }
  },
  "ポポッコ": {
    name: [ "ポポッコ", "ぽぽっこ" ],
    base: { h:55, a:45, b:50, c:45, d:65, s:80 }
  },
  "ワタッコ": {
    name: [ "ワタッコ", "わたっこ" ],
    base: { h:75, a:55, b:70, c:55, d:95, s:110 }
  },
  "エイパム": {
    name: [ "エイパム", "えいぱむ" ],
    base: { h:55, a:70, b:55, c:40, d:55, s:85 }
  },
  "ヒマナッツ": {
    name: [ "ヒマナッツ", "ひまなっつ" ],
    base: { h:30, a:30, b:30, c:30, d:30, s:30 }
  },
  "キマワリ": {
    name: [ "キマワリ", "きまわり" ],
    base: { h:75, a:75, b:55, c:105, d:85, s:30 }
  },
  "ヤンヤンマ": {
    name: [ "ヤンヤンマ", "やんやんま" ],
    base: { h:65, a:65, b:45, c:75, d:45, s:95 }
  },
  "ウパー": {
    name: [ "ウパー", "うぱー" ],
    base: { h:55, a:45, b:45, c:25, d:25, s:15 }
  },
  "ヌオー": {
    name: [ "ヌオー", "ぬおー" ],
    base: { h:95, a:85, b:85, c:65, d:65, s:35 }
  },
  "エーフィ": {
    name: [ "エーフィ", "えーふぃ" ],
    base: { h:65, a:65, b:60, c:130, d:95, s:110 }
  },
  "ブラッキー": {
    name: [ "ブラッキー", "ぶらっきー" ],
    base: { h:95, a:65, b:110, c:60, d:130, s:65 }
  },
  "ヤミカラス": {
    name: [ "ヤミカラス", "やみからす" ],
    base: { h:60, a:85, b:42, c:85, d:42, s:91 }
  },
  "ヤドキング": {
    name: [ "ヤドキング", "やどきんぐ" ],
    base: { h:95, a:75, b:80, c:100, d:110, s:30 }
  },
  "ムウマ": {
    name: [ "ムウマ", "むうま" ],
    base: { h:60, a:60, b:60, c:85, d:85, s:85 }
  },
  "アンノーン": {
    name: [ "アンノーン", "あんのーん" ],
    base: { h:48, a:72, b:48, c:72, d:48, s:48 }
  },
  "ソーナンス": {
    name: [ "ソーナンス", "そーなんす" ],
    base: { h:190, a:33, b:58, c:33, d:58, s:33 }
  },
  "キリンリキ": {
    name: [ "キリンリキ", "きりんりき" ],
    base: { h:70, a:80, b:65, c:90, d:65, s:85 }
  },
  "クヌギダマ": {
    name: [ "クヌギダマ", "くぬぎだま" ],
    base: { h:50, a:65, b:90, c:35, d:35, s:15 }
  },
  "フォレトス": {
    name: [ "フォレトス", "ふぉれとす" ],
    base: { h:75, a:90, b:140, c:60, d:60, s:40 }
  },
  "ノコッチ": {
    name: [ "ノコッチ", "のこっち" ],
    base: { h:100, a:70, b:70, c:65, d:65, s:45 }
  },
  "グライガー": {
    name: [ "グライガー", "ぐらいがー" ],
    base: { h:65, a:75, b:105, c:35, d:65, s:85 }
  },
  "ハガネール": {
    name: [ "ハガネール", "はがねーる" ],
    base: { h:75, a:85, b:200, c:55, d:65, s:30 }
  },
  "メガハガネール": {
    name: [ "メガハガネール", "めがはがねーる" ],
    base: { h:75, a:125, b:230, c:55, d:95, s:30 }
  },
  "ブルー": {
    name: [ "ブルー", "ぶるー" ],
    base: { h:60, a:80, b:50, c:40, d:40, s:30 }
  },
  "グランブル": {
    name: [ "グランブル", "ぐらんぶる" ],
    base: { h:90, a:120, b:75, c:60, d:60, s:45 }
  },
  "ハリーセン": {
    name: [ "ハリーセン", "はりーせん" ],
    base: { h:65, a:95, b:75, c:55, d:55, s:85 }
  },
  "ハッサム": {
    name: [ "ハッサム", "はっさむ" ],
    base: { h:70, a:130, b:100, c:55, d:80, s:65 }
  },
  "メガハッサム": {
    name: [ "メガハッサム", "めがはっさむ" ],
    base: { h:70, a:150, b:140, c:65, d:100, s:75 }
  },
  "ツボツボ": {
    name: [ "ツボツボ", "つぼつぼ" ],
    base: { h:20, a:10, b:230, c:10, d:230, s:5 }
  },
  "ヘラクロス": {
    name: [ "ヘラクロス", "へらくろす" ],
    base: { h:80, a:125, b:75, c:40, d:95, s:85 }
  },
  "メガヘラクロス": {
    name: [ "メガヘラクロス", "めがへらくろす" ],
    base: { h:80, a:185, b:115, c:40, d:105, s:75 }
  },
  "ニューラ": {
    name: [ "ニューラ", "にゅーら" ],
    base: { h:55, a:95, b:55, c:35, d:75, s:115 }
  },
  "ヒメグマ": {
    name: [ "ヒメグマ", "ひめぐま" ],
    base: { h:60, a:80, b:50, c:50, d:50, s:40 }
  },
  "リングマ": {
    name: [ "リングマ", "りんぐま" ],
    base: { h:90, a:130, b:75, c:75, d:75, s:55 }
  },
  "マグマッグ": {
    name: [ "マグマッグ", "まぐまっぐ" ],
    base: { h:40, a:40, b:40, c:70, d:40, s:20 }
  },
  "マグカルゴ": {
    name: [ "マグカルゴ", "まぐかるご" ],
    base: { h:50, a:50, b:120, c:80, d:80, s:30 }
  },
  "ウリムー": {
    name: [ "ウリムー", "うりむー" ],
    base: { h:50, a:50, b:40, c:30, d:30, s:50 }
  },
  "イノムー": {
    name: [ "イノムー", "いのむー" ],
    base: { h:100, a:100, b:80, c:60, d:60, s:50 }
  },
  "サニーゴ": {
    name: [ "サニーゴ", "さにーご" ],
    base: { h:55, a:55, b:85, c:65, d:85, s:35 }
  },
  "テッポウオ": {
    name: [ "テッポウオ", "てっぽうお" ],
    base: { h:35, a:65, b:35, c:65, d:35, s:65 }
  },
  "オクタン": {
    name: [ "オクタン", "おくたん" ],
    base: { h:75, a:105, b:75, c:105, d:75, s:45 }
  },
  "デリバード": {
    name: [ "デリバード", "でりばーど" ],
    base: { h:45, a:55, b:45, c:65, d:45, s:75 }
  },
  "マンタイン": {
    name: [ "マンタイン", "まんたいん" ],
    base: { h:65, a:40, b:70, c:80, d:140, s:70 }
  },
  "エアームド": {
    name: [ "エアームド", "えあーむど" ],
    base: { h:65, a:80, b:140, c:40, d:70, s:70 }
  },
  "デルビル": {
    name: [ "デルビル", "でるびる" ],
    base: { h:45, a:60, b:30, c:80, d:50, s:65 }
  },
  "ヘルガー": {
    name: [ "ヘルガー", "へるがー" ],
    base: { h:75, a:90, b:50, c:110, d:80, s:95 }
  },
  "メガヘルガー": {
    name: [ "メガヘルガー", "めがへるがー" ],
    base: { h:75, a:90, b:90, c:140, d:90, s:115 }
  },
  "キングドラ": {
    name: [ "キングドラ", "きんぐどら" ],
    base: { h:75, a:95, b:95, c:95, d:95, s:85 }
  },
  "ゴマゾウ": {
    name: [ "ゴマゾウ", "ごまぞう" ],
    base: { h:90, a:60, b:60, c:40, d:40, s:40 }
  },
  "ドンファン": {
    name: [ "ドンファン", "どんふぁん" ],
    base: { h:90, a:120, b:120, c:60, d:60, s:50 }
  },
  "ポリゴン2": {
    name: [ "ポリゴン2", "ぽりごんつー" ],
    base: { h:85, a:80, b:90, c:105, d:95, s:60 }
  },
  "オドシシ": {
    name: [ "オドシシ", "おどしし" ],
    base: { h:73, a:95, b:62, c:85, d:65, s:85 }
  },
  "ドーブル": {
    name: [ "ドーブル", "どーぶる" ],
    base: { h:55, a:20, b:35, c:20, d:45, s:75 }
  },
  "バルキー": {
    name: [ "バルキー", "ばるきー" ],
    base: { h:35, a:35, b:35, c:35, d:35, s:35 }
  },
  "カポエラー": {
    name: [ "カポエラー", "かぽえらー" ],
    base: { h:50, a:95, b:95, c:35, d:110, s:70 }
  },
  "ムチュール": {
    name: [ "ムチュール", "むちゅーる" ],
    base: { h:45, a:30, b:15, c:85, d:65, s:65 }
  },
  "エレキッド": {
    name: [ "エレキッド", "えれきっど" ],
    base: { h:45, a:63, b:37, c:65, d:55, s:95 }
  },
  "ブビィ": {
    name: [ "ブビィ", "ぶびぃ" ],
    base: { h:45, a:75, b:37, c:70, d:55, s:83 }
  },
  "ミルタンク": {
    name: [ "ミルタンク", "みるたんく" ],
    base: { h:95, a:80, b:105, c:40, d:70, s:100 }
  },
  "ハピナス": {
    name: [ "ハピナス", "はぴなす" ],
    base: { h:255, a:10, b:10, c:75, d:135, s:55 }
  },
  "ライコウ": {
    name: [ "ライコウ", "らいこう" ],
    base: { h:90, a:85, b:75, c:115, d:100, s:115 }
  },
  "エンテイ": {
    name: [ "エンテイ", "えんてい" ],
    base: { h:115, a:115, b:85, c:90, d:75, s:100 }
  },
  "スイクン": {
    name: [ "スイクン", "すいくん" ],
    base: { h:100, a:75, b:115, c:90, d:115, s:85 }
  },
  "ヨーギラス": {
    name: [ "ヨーギラス", "よーぎらす" ],
    base: { h:50, a:64, b:50, c:45, d:50, s:41 }
  },
  "サナギラス": {
    name: [ "サナギラス", "さなぎらす" ],
    base: { h:70, a:84, b:70, c:65, d:70, s:51 }
  },
  "バンギラス": {
    name: [ "バンギラス", "ばんぎらす" ],
    base: { h:100, a:134, b:110, c:95, d:100, s:61 }
  },
  "メガバンギラス": {
    name: [ "メガバンギラス", "めがばんぎらす" ],
    base: { h:100, a:164, b:150, c:95, d:120, s:71 }
  },
  "ルギア": {
    name: [ "ルギア", "るぎあ" ],
    base: { h:106, a:90, b:130, c:90, d:154, s:110 }
  },
  "ホウオウ": {
    name: [ "ホウオウ", "ほうおう" ],
    base: { h:106, a:130, b:90, c:110, d:154, s:90 }
  },
  "セレビィ": {
    name: [ "セレビィ", "せれびぃ" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "キモリ": {
    name: [ "キモリ", "きもり" ],
    base: { h:40, a:45, b:35, c:65, d:55, s:70 }
  },
  "ジュプトル": {
    name: [ "ジュプトル", "じゅぷとる" ],
    base: { h:50, a:65, b:45, c:85, d:65, s:95 }
  },
  "ジュカイン": {
    name: [ "ジュカイン", "じゅかいん" ],
    base: { h:70, a:85, b:65, c:105, d:85, s:120 }
  },
  "メガジュカイン": {
    name: [ "メガジュカイン", "めがじゅかいん" ],
    base: { h:70, a:110, b:75, c:145, d:85, s:145 }
  },
  "アチャモ": {
    name: [ "アチャモ", "あちゃも" ],
    base: { h:45, a:60, b:40, c:70, d:50, s:45 }
  },
  "ワカシャモ": {
    name: [ "ワカシャモ", "わかしゃも" ],
    base: { h:60, a:85, b:60, c:85, d:60, s:55 }
  },
  "バシャーモ": {
    name: [ "バシャーモ", "ばしゃーも" ],
    base: { h:80, a:120, b:70, c:110, d:70, s:80 }
  },
  "メガバシャーモ": {
    name: [ "メガバシャーモ", "めがばしゃーも" ],
    base: { h:80, a:160, b:80, c:130, d:80, s:100 }
  },
  "ミズゴロウ": {
    name: [ "ミズゴロウ", "みずごろう" ],
    base: { h:50, a:70, b:50, c:50, d:50, s:40 }
  },
  "ヌマクロー": {
    name: [ "ヌマクロー", "ぬまくろー" ],
    base: { h:70, a:85, b:70, c:60, d:70, s:50 }
  },
  "ラグラージ": {
    name: [ "ラグラージ", "らぐらーじ" ],
    base: { h:100, a:110, b:90, c:85, d:90, s:60 }
  },
  "メガラグラージ": {
    name: [ "メガラグラージ", "めがらぐらーじ" ],
    base: { h:100, a:150, b:110, c:95, d:110, s:70 }
  },
  "ポチエナ": {
    name: [ "ポチエナ", "ぽちえな" ],
    base: { h:35, a:55, b:35, c:30, d:30, s:35 }
  },
  "グラエナ": {
    name: [ "グラエナ", "ぐらえな" ],
    base: { h:70, a:90, b:70, c:60, d:60, s:70 }
  },
  "ジグザグマ": {
    name: [ "ジグザグマ", "じぐざぐま" ],
    base: { h:38, a:30, b:41, c:30, d:41, s:60 }
  },
  "マッスグマ": {
    name: [ "マッスグマ", "まっすぐま" ],
    base: { h:78, a:70, b:61, c:50, d:61, s:100 }
  },
  "ケムッソ": {
    name: [ "ケムッソ", "けむっそ" ],
    base: { h:45, a:45, b:35, c:20, d:30, s:20 }
  },
  "カラサリス": {
    name: [ "カラサリス", "からさりす" ],
    base: { h:50, a:35, b:55, c:25, d:25, s:15 }
  },
  "アゲハント": {
    name: [ "アゲハント", "あげはんと" ],
    base: { h:60, a:70, b:50, c:100, d:50, s:65 }
  },
  "マユルド": {
    name: [ "マユルド", "まゆるど" ],
    base: { h:50, a:35, b:55, c:25, d:25, s:15 }
  },
  "ドクケイル": {
    name: [ "ドクケイル", "どくけいる" ],
    base: { h:60, a:50, b:70, c:50, d:90, s:65 }
  },
  "ハスボー": {
    name: [ "ハスボー", "はすぼー" ],
    base: { h:40, a:30, b:30, c:40, d:50, s:30 }
  },
  "ハスブレロ": {
    name: [ "ハスブレロ", "はすぶれろ" ],
    base: { h:60, a:50, b:50, c:60, d:70, s:50 }
  },
  "ルンパッパ": {
    name: [ "ルンパッパ", "るんぱっぱ" ],
    base: { h:80, a:70, b:70, c:90, d:100, s:70 }
  },
  "タネボー": {
    name: [ "タネボー", "たねぼー" ],
    base: { h:40, a:40, b:50, c:30, d:30, s:30 }
  },
  "コノハナ": {
    name: [ "コノハナ", "このはな" ],
    base: { h:70, a:70, b:40, c:60, d:40, s:60 }
  },
  "ダーテング": {
    name: [ "ダーテング", "だーてんぐ" ],
    base: { h:90, a:100, b:60, c:90, d:60, s:80 }
  },
  "スバメ": {
    name: [ "スバメ", "すばめ" ],
    base: { h:40, a:55, b:30, c:30, d:30, s:85 }
  },
  "オオスバメ": {
    name: [ "オオスバメ", "おおすばめ" ],
    base: { h:60, a:85, b:60, c:50, d:50, s:125 }
  },
  "キャモメ": {
    name: [ "キャモメ", "きゃもめ" ],
    base: { h:40, a:30, b:30, c:55, d:30, s:85 }
  },
  "ペリッパー": {
    name: [ "ペリッパー", "ぺりっぱー" ],
    base: { h:60, a:50, b:100, c:85, d:70, s:65 }
  },
  "ラルトス": {
    name: [ "ラルトス", "らるとす" ],
    base: { h:28, a:25, b:25, c:45, d:35, s:40 }
  },
  "キルリア": {
    name: [ "キルリア", "きるりあ" ],
    base: { h:38, a:35, b:35, c:65, d:55, s:50 }
  },
  "サーナイト": {
    name: [ "サーナイト", "さーないと" ],
    base: { h:68, a:65, b:65, c:125, d:115, s:80 }
  },
  "メガサーナイト": {
    name: [ "メガサーナイト", "めがさーないと" ],
    base: { h:68, a:85, b:65, c:165, d:135, s:100 }
  },
  "アメタマ": {
    name: [ "アメタマ", "あめたま" ],
    base: { h:40, a:30, b:32, c:50, d:52, s:65 }
  },
  "アメモース": {
    name: [ "アメモース", "あめもーす" ],
    base: { h:70, a:60, b:62, c:80, d:82, s:60 }
  },
  "キノココ": {
    name: [ "キノココ", "きのここ" ],
    base: { h:60, a:40, b:60, c:40, d:60, s:35 }
  },
  "キノガッサ": {
    name: [ "キノガッサ", "きのがっさ" ],
    base: { h:60, a:130, b:80, c:60, d:60, s:70 }
  },
  "ナマケロ": {
    name: [ "ナマケロ", "なまけろ" ],
    base: { h:60, a:60, b:60, c:35, d:35, s:30 }
  },
  "ヤルキモノ": {
    name: [ "ヤルキモノ", "やるきもの" ],
    base: { h:80, a:80, b:80, c:55, d:55, s:90 }
  },
  "ケッキング": {
    name: [ "ケッキング", "けっきんぐ" ],
    base: { h:150, a:160, b:100, c:95, d:65, s:100 }
  },
  "ツチニン": {
    name: [ "ツチニン", "つちにん" ],
    base: { h:31, a:45, b:90, c:30, d:30, s:40 }
  },
  "テッカニン": {
    name: [ "テッカニン", "てっかにん" ],
    base: { h:61, a:90, b:45, c:50, d:50, s:160 }
  },
  "ヌケニン": {
    name: [ "ヌケニン", "ぬけにん" ],
    base: { h:1, a:90, b:45, c:30, d:30, s:40 }
  },
  "ゴニョニョ": {
    name: [ "ゴニョニョ", "ごにょにょ" ],
    base: { h:64, a:51, b:23, c:51, d:23, s:28 }
  },
  "ドゴーム": {
    name: [ "ドゴーム", "どごーむ" ],
    base: { h:84, a:71, b:43, c:71, d:43, s:48 }
  },
  "バクオング": {
    name: [ "バクオング", "ばくおんぐ" ],
    base: { h:104, a:91, b:63, c:91, d:73, s:68 }
  },
  "マクノシタ": {
    name: [ "マクノシタ", "まくのした" ],
    base: { h:72, a:60, b:30, c:20, d:30, s:25 }
  },
  "ハリテヤマ": {
    name: [ "ハリテヤマ", "はりてやま" ],
    base: { h:144, a:120, b:60, c:40, d:60, s:50 }
  },
  "ルリリ": {
    name: [ "ルリリ", "るりり" ],
    base: { h:50, a:20, b:40, c:20, d:40, s:20 }
  },
  "ノズパス": {
    name: [ "ノズパス", "のずぱす" ],
    base: { h:30, a:45, b:135, c:45, d:90, s:30 }
  },
  "エネコ": {
    name: [ "エネコ", "えねこ" ],
    base: { h:50, a:45, b:45, c:35, d:35, s:50 }
  },
  "エネコロロ": {
    name: [ "エネコロロ", "えねころろ" ],
    base: { h:70, a:65, b:65, c:55, d:55, s:70 }
  },
  "ヤミラミ": {
    name: [ "ヤミラミ", "やみらみ" ],
    base: { h:50, a:75, b:75, c:65, d:65, s:50 }
  },
  "メガヤミラミ": {
    name: [ "メガヤミラミ", "めがやみらみ" ],
    base: { h:50, a:85, b:125, c:85, d:115, s:20 }
  },
  "クチート": {
    name: [ "クチート", "くちーと" ],
    base: { h:50, a:85, b:85, c:55, d:55, s:50 }
  },
  "メガクチート": {
    name: [ "メガクチート", "めがくちーと" ],
    base: { h:50, a:105, b:125, c:55, d:95, s:50 }
  },
  "ココドラ": {
    name: [ "ココドラ", "ここどら" ],
    base: { h:50, a:70, b:100, c:40, d:40, s:30 }
  },
  "コドラ": {
    name: [ "コドラ", "こどら" ],
    base: { h:60, a:90, b:140, c:50, d:50, s:40 }
  },
  "ボスゴドラ": {
    name: [ "ボスゴドラ", "ぼすごどら" ],
    base: { h:70, a:110, b:180, c:60, d:60, s:50 }
  },
  "メガボスゴドラ": {
    name: [ "メガボスゴドラ", "めがぼすごどら" ],
    base: { h:70, a:140, b:230, c:60, d:80, s:50 }
  },
  "アサナン": {
    name: [ "アサナン", "あさなん" ],
    base: { h:30, a:40, b:55, c:40, d:55, s:60 }
  },
  "チャーレム": {
    name: [ "チャーレム", "ちゃーれむ" ],
    base: { h:60, a:60, b:75, c:60, d:75, s:80 }
  },
  "メガチャーレム": {
    name: [ "メガチャーレム", "めがちゃーれむ" ],
    base: { h:60, a:100, b:85, c:80, d:85, s:100 }
  },
  "ラクライ": {
    name: [ "ラクライ", "らくらい" ],
    base: { h:40, a:45, b:40, c:65, d:40, s:65 }
  },
  "ライボルト": {
    name: [ "ライボルト", "らいぼると" ],
    base: { h:70, a:75, b:60, c:105, d:60, s:105 }
  },
  "メガライボルト": {
    name: [ "メガライボルト", "めがらいぼると" ],
    base: { h:70, a:75, b:80, c:135, d:80, s:135 }
  },
  "プラスル": {
    name: [ "プラスル", "ぷらする" ],
    base: { h:60, a:50, b:40, c:85, d:75, s:95 }
  },
  "マイナン": {
    name: [ "マイナン", "まいなん" ],
    base: { h:60, a:40, b:50, c:75, d:85, s:95 }
  },
  "バルビート": {
    name: [ "バルビート", "ばるびーと" ],
    base: { h:65, a:73, b:55, c:47, d:75, s:85 }
  },
  "イルミーゼ": {
    name: [ "イルミーゼ", "いるみーぜ" ],
    base: { h:65, a:47, b:55, c:73, d:75, s:85 }
  },
  "ロゼリア": {
    name: [ "ロゼリア", "ろぜりあ" ],
    base: { h:50, a:60, b:45, c:100, d:80, s:65 }
  },
  "ゴクリン": {
    name: [ "ゴクリン", "ごくりん" ],
    base: { h:70, a:43, b:53, c:43, d:53, s:40 }
  },
  "マルノーム": {
    name: [ "マルノーム", "まるのーむ" ],
    base: { h:100, a:73, b:83, c:73, d:83, s:55 }
  },
  "キバニア": {
    name: [ "キバニア", "きばにあ" ],
    base: { h:45, a:90, b:20, c:65, d:20, s:65 }
  },
  "サメハダー": {
    name: [ "サメハダー", "さめはだー" ],
    base: { h:70, a:120, b:40, c:95, d:40, s:95 }
  },
  "メガサメハダー": {
    name: [ "メガサメハダー", "めがさめはだー" ],
    base: { h:70, a:140, b:70, c:110, d:65, s:105 }
  },
  "ホエルコ": {
    name: [ "ホエルコ", "ほえるこ" ],
    base: { h:130, a:70, b:35, c:70, d:35, s:60 }
  },
  "ホエルオー": {
    name: [ "ホエルオー", "ほえるおー" ],
    base: { h:170, a:90, b:45, c:90, d:45, s:60 }
  },
  "ドンメル": {
    name: [ "ドンメル", "どんめる" ],
    base: { h:60, a:60, b:40, c:65, d:45, s:35 }
  },
  "バクーダ": {
    name: [ "バクーダ", "ばくーだ" ],
    base: { h:70, a:100, b:70, c:105, d:75, s:40 }
  },
  "メガバクーダ": {
    name: [ "メガバクーダ", "めがばくーだ" ],
    base: { h:70, a:120, b:100, c:145, d:105, s:20 }
  },
  "コータス": {
    name: [ "コータス", "こーたす" ],
    base: { h:70, a:85, b:140, c:85, d:70, s:20 }
  },
  "バネブー": {
    name: [ "バネブー", "ばねぶー" ],
    base: { h:60, a:25, b:35, c:70, d:80, s:60 }
  },
  "ブーピッグ": {
    name: [ "ブーピッグ", "ぶーぴっぐ" ],
    base: { h:80, a:45, b:65, c:90, d:110, s:80 }
  },
  "パッチール": {
    name: [ "パッチール", "ぱっちーる" ],
    base: { h:60, a:60, b:60, c:60, d:60, s:60 }
  },
  "ナックラー": {
    name: [ "ナックラー", "なっくらー" ],
    base: { h:45, a:100, b:45, c:45, d:45, s:10 }
  },
  "ビブラーバ": {
    name: [ "ビブラーバ", "びぶらーば" ],
    base: { h:50, a:70, b:50, c:50, d:50, s:70 }
  },
  "フライゴン": {
    name: [ "フライゴン", "ふらいごん" ],
    base: { h:80, a:100, b:80, c:80, d:80, s:100 }
  },
  "サボネア": {
    name: [ "サボネア", "さぼねあ" ],
    base: { h:50, a:85, b:40, c:85, d:40, s:35 }
  },
  "ノクタス": {
    name: [ "ノクタス", "のくたす" ],
    base: { h:70, a:115, b:60, c:115, d:60, s:55 }
  },
  "チルット": {
    name: [ "チルット", "ちるっと" ],
    base: { h:45, a:40, b:60, c:40, d:75, s:50 }
  },
  "チルタリス": {
    name: [ "チルタリス", "ちるたりす" ],
    base: { h:75, a:70, b:90, c:70, d:105, s:80 }
  },
  "メガチルタリス": {
    name: [ "メガチルタリス", "めがちるたりす" ],
    base: { h:75, a:110, b:110, c:110, d:105, s:80 }
  },
  "ザングース": {
    name: [ "ザングース", "ざんぐーす" ],
    base: { h:73, a:115, b:60, c:60, d:60, s:90 }
  },
  "ハブネーク": {
    name: [ "ハブネーク", "はぶねーく" ],
    base: { h:73, a:100, b:60, c:100, d:60, s:65 }
  },
  "ルナトーン": {
    name: [ "ルナトーン", "るなとーん" ],
    base: { h:70, a:55, b:65, c:95, d:85, s:70 }
  },
  "ソルロック": {
    name: [ "ソルロック", "そるろっく" ],
    base: { h:70, a:95, b:85, c:55, d:65, s:70 }
  },
  "ドジョッチ": {
    name: [ "ドジョッチ", "どじょっち" ],
    base: { h:50, a:48, b:43, c:46, d:41, s:60 }
  },
  "ナマズン": {
    name: [ "ナマズン", "なまずん" ],
    base: { h:110, a:78, b:73, c:76, d:71, s:60 }
  },
  "ヘイガニ": {
    name: [ "ヘイガニ", "へいがに" ],
    base: { h:43, a:80, b:65, c:50, d:35, s:35 }
  },
  "シザリガー": {
    name: [ "シザリガー", "しざりがー" ],
    base: { h:63, a:120, b:85, c:90, d:55, s:55 }
  },
  "ヤジロン": {
    name: [ "ヤジロン", "やじろん" ],
    base: { h:40, a:40, b:55, c:40, d:70, s:55 }
  },
  "ネンドール": {
    name: [ "ネンドール", "ねんどーる" ],
    base: { h:60, a:70, b:105, c:70, d:120, s:75 }
  },
  "リリーラ": {
    name: [ "リリーラ", "りりーら" ],
    base: { h:66, a:41, b:77, c:61, d:87, s:23 }
  },
  "ユレイドル": {
    name: [ "ユレイドル", "ゆれいどる" ],
    base: { h:86, a:81, b:97, c:81, d:107, s:43 }
  },
  "アノプス": {
    name: [ "アノプス", "あのぷす" ],
    base: { h:45, a:95, b:50, c:40, d:50, s:75 }
  },
  "アーマルド": {
    name: [ "アーマルド", "あーまるど" ],
    base: { h:75, a:125, b:100, c:70, d:80, s:45 }
  },
  "ヒンバス": {
    name: [ "ヒンバス", "ひんばす" ],
    base: { h:20, a:15, b:20, c:10, d:55, s:80 }
  },
  "ミロカロス": {
    name: [ "ミロカロス", "みろかろす" ],
    base: { h:95, a:60, b:79, c:100, d:125, s:81 }
  },
  "ポワルン": {
    name: [ "ポワルン", "ぽわるん" ],
    base: { h:70, a:70, b:70, c:70, d:70, s:70 }
  },
  "カクレオン": {
    name: [ "カクレオン", "かくれおん" ],
    base: { h:60, a:90, b:70, c:60, d:120, s:40 }
  },
  "カゲボウズ": {
    name: [ "カゲボウズ", "かげぼうず" ],
    base: { h:44, a:75, b:35, c:63, d:33, s:45 }
  },
  "ジュペッタ": {
    name: [ "ジュペッタ", "じゅぺった" ],
    base: { h:64, a:115, b:65, c:83, d:63, s:65 }
  },
  "メガジュペッタ": {
    name: [ "メガジュペッタ", "めがじゅぺった" ],
    base: { h:64, a:165, b:75, c:93, d:83, s:75 }
  },
  "ヨマワル": {
    name: [ "ヨマワル", "よまわる" ],
    base: { h:20, a:40, b:90, c:30, d:90, s:25 }
  },
  "サマヨール": {
    name: [ "サマヨール", "さまよーる" ],
    base: { h:40, a:70, b:130, c:60, d:130, s:25 }
  },
  "トロピウス": {
    name: [ "トロピウス", "とろぴうす" ],
    base: { h:99, a:68, b:83, c:72, d:87, s:51 }
  },
  "チリーン": {
    name: [ "チリーン", "ちりーん" ],
    base: { h:65, a:50, b:70, c:95, d:80, s:65 }
  },
  "アブソル": {
    name: [ "アブソル", "あぶそる" ],
    base: { h:65, a:130, b:60, c:75, d:60, s:75 }
  },
  "メガアブソル": {
    name: [ "メガアブソル", "めがあぶそる" ],
    base: { h:65, a:150, b:60, c:115, d:60, s:115 }
  },
  "ソーナノ": {
    name: [ "ソーナノ", "そーなの" ],
    base: { h:95, a:23, b:48, c:23, d:48, s:23 }
  },
  "ユキワラシ": {
    name: [ "ユキワラシ", "ゆきわらし" ],
    base: { h:50, a:50, b:50, c:50, d:50, s:50 }
  },
  "オニゴーリ": {
    name: [ "オニゴーリ", "おにごーり" ],
    base: { h:80, a:80, b:80, c:80, d:80, s:80 }
  },
  "メガオニゴーリ": {
    name: [ "メガオニゴーリ", "めがおにごーり" ],
    base: { h:80, a:120, b:80, c:120, d:80, s:100 }
  },
  "タマザラシ": {
    name: [ "タマザラシ", "たまざらし" ],
    base: { h:70, a:40, b:50, c:55, d:50, s:25 }
  },
  "トドグラー": {
    name: [ "トドグラー", "とどぐらー" ],
    base: { h:90, a:60, b:70, c:75, d:70, s:45 }
  },
  "トドゼルガ": {
    name: [ "トドゼルガ", "とどぜるが" ],
    base: { h:110, a:80, b:90, c:95, d:90, s:65 }
  },
  "パールル": {
    name: [ "パールル", "ぱーるる" ],
    base: { h:35, a:64, b:85, c:74, d:55, s:32 }
  },
  "ハンテール": {
    name: [ "ハンテール", "はんてーる" ],
    base: { h:55, a:104, b:105, c:94, d:75, s:52 }
  },
  "サクラビス": {
    name: [ "サクラビス", "さくらびす" ],
    base: { h:55, a:84, b:105, c:114, d:75, s:52 }
  },
  "ジーランス": {
    name: [ "ジーランス", "じーらんす" ],
    base: { h:100, a:90, b:130, c:45, d:65, s:55 }
  },
  "ラブカス": {
    name: [ "ラブカス", "らぶかす" ],
    base: { h:43, a:30, b:55, c:40, d:65, s:97 }
  },
  "タツベイ": {
    name: [ "タツベイ", "たつべい" ],
    base: { h:45, a:75, b:60, c:40, d:30, s:50 }
  },
  "コモルー": {
    name: [ "コモルー", "こもるー" ],
    base: { h:65, a:95, b:100, c:60, d:50, s:50 }
  },
  "ボーマンダ": {
    name: [ "ボーマンダ", "ぼーまんだ" ],
    base: { h:95, a:135, b:80, c:110, d:80, s:100 }
  },
  "メガボーマンダ": {
    name: [ "メガボーマンダ", "めがぼーまんだ" ],
    base: { h:95, a:145, b:130, c:120, d:90, s:120 }
  },
  "ダンバル": {
    name: [ "ダンバル", "だんばる" ],
    base: { h:40, a:55, b:80, c:35, d:60, s:30 }
  },
  "メタング": {
    name: [ "メタング", "めたんぐ" ],
    base: { h:60, a:75, b:100, c:55, d:80, s:50 }
  },
  "メタグロス": {
    name: [ "メタグロス", "めたぐろす" ],
    base: { h:80, a:135, b:130, c:95, d:90, s:70 }
  },
  "メガメタグロス": {
    name: [ "メガメタグロス", "めがめたぐろす" ],
    base: { h:80, a:145, b:150, c:105, d:110, s:110 }
  },
  "レジロック": {
    name: [ "レジロック", "れじろっく" ],
    base: { h:80, a:100, b:200, c:50, d:100, s:50 }
  },
  "レジアイス": {
    name: [ "レジアイス", "れじあいす" ],
    base: { h:80, a:50, b:100, c:100, d:200, s:50 }
  },
  "レジスチル": {
    name: [ "レジスチル", "れじすちる" ],
    base: { h:80, a:75, b:150, c:75, d:150, s:50 }
  },
  "ラティアス": {
    name: [ "ラティアス", "らてぃあす" ],
    base: { h:80, a:80, b:90, c:110, d:130, s:110 }
  },
  "メガラティアス": {
    name: [ "メガラティアス", "めがらてぃあす" ],
    base: { h:80, a:100, b:120, c:140, d:150, s:110 }
  },
  "ラティオス": {
    name: [ "ラティオス", "らてぃおす" ],
    base: { h:80, a:90, b:80, c:130, d:110, s:110 }
  },
  "メガラティオス": {
    name: [ "メガラティオス", "めがらてぃおす" ],
    base: { h:80, a:130, b:100, c:160, d:120, s:110 }
  },
  "カイオーガ": {
    name: [ "カイオーガ", "かいおーが" ],
    base: { h:100, a:100, b:90, c:150, d:140, s:90 }
  },
  "ゲンシカイオーガ": {
    name: [ "ゲンシカイオーガ", "げんしかいおーが" ],
    base: { h:100, a:150, b:90, c:180, d:160, s:90 }
  },
  "グラードン": {
    name: [ "グラードン", "ぐらーどん" ],
    base: { h:100, a:150, b:140, c:100, d:90, s:90 }
  },
  "ゲンシグラードン": {
    name: [ "ゲンシグラードン", "げんしぐらーどん" ],
    base: { h:100, a:180, b:160, c:150, d:90, s:90 }
  },
  "レックウザ": {
    name: [ "レックウザ", "れっくうざ" ],
    base: { h:105, a:150, b:90, c:150, d:90, s:95 }
  },
  "メガレックウザ": {
    name: [ "メガレックウザ", "めがれっくうざ" ],
    base: { h:105, a:180, b:100, c:180, d:100, s:115 }
  },
  "ジラーチ": {
    name: [ "ジラーチ", "じらーち" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "デオキシス": {
    name: [ "デオキシス", "でおきしす" ],
    base: { h:50, a:150, b:50, c:150, d:50, s:150 }
  },
  "デオキシス攻": {
    name: [ "デオキシス攻", "でおきしすこう", "でおきしすあたっく" ],
    base: { h:50, a:180, b:20, c:180, d:20, s:150 }
  },
  "デオキシス防": {
    name: [ "デオキシス防", "でおきしすぼう", "でおきしすでぃふぇんす" ],
    base: { h:50, a:70, b:160, c:70, d:160, s:90 }
  },
  "デオキシス速": {
    name: [ "デオキシス速", "でおきしすそく", "でおきしすすぴーど" ],
    base: { h:50, a:95, b:90, c:95, d:90, s:180 }
  },
  "ナエトル": {
    name: [ "ナエトル", "なえとる" ],
    base: { h:55, a:68, b:64, c:45, d:55, s:31 }
  },
  "ハヤシガメ": {
    name: [ "ハヤシガメ", "はやしがめ" ],
    base: { h:75, a:89, b:85, c:55, d:65, s:36 }
  },
  "ドダイトス": {
    name: [ "ドダイトス", "どだいとす" ],
    base: { h:95, a:109, b:105, c:75, d:85, s:56 }
  },
  "ヒコザル": {
    name: [ "ヒコザル", "ひこざる" ],
    base: { h:44, a:58, b:44, c:58, d:44, s:61 }
  },
  "モウカザル": {
    name: [ "モウカザル", "もうかざる" ],
    base: { h:64, a:78, b:52, c:78, d:52, s:81 }
  },
  "ゴウカザル": {
    name: [ "ゴウカザル", "ごうかざる" ],
    base: { h:76, a:104, b:71, c:104, d:71, s:108 }
  },
  "ポッチャマ": {
    name: [ "ポッチャマ", "ぽっちゃま" ],
    base: { h:53, a:51, b:53, c:61, d:56, s:40 }
  },
  "ポッタイシ": {
    name: [ "ポッタイシ", "ぽったいし" ],
    base: { h:64, a:66, b:68, c:81, d:76, s:50 }
  },
  "エンペルト": {
    name: [ "エンペルト", "えんぺると" ],
    base: { h:84, a:86, b:88, c:111, d:101, s:60 }
  },
  "ムックル": {
    name: [ "ムックル", "むっくる" ],
    base: { h:40, a:55, b:30, c:30, d:30, s:60 }
  },
  "ムクバード": {
    name: [ "ムクバード", "むくばーど" ],
    base: { h:55, a:75, b:50, c:40, d:40, s:80 }
  },
  "ムクホーク": {
    name: [ "ムクホーク", "むくほーく" ],
    base: { h:85, a:120, b:70, c:50, d:60, s:100 }
  },
  "ビッパ": {
    name: [ "ビッパ", "びっぱ" ],
    base: { h:59, a:45, b:40, c:35, d:40, s:31 }
  },
  "ビーダル": {
    name: [ "ビーダル", "びーだる" ],
    base: { h:79, a:85, b:60, c:55, d:60, s:71 }
  },
  "コロボーシ": {
    name: [ "コロボーシ", "ころぼーし" ],
    base: { h:37, a:25, b:41, c:25, d:41, s:25 }
  },
  "コロトック": {
    name: [ "コロトック", "ころとっく" ],
    base: { h:77, a:85, b:51, c:55, d:51, s:65 }
  },
  "コリンク": {
    name: [ "コリンク", "こりんく" ],
    base: { h:45, a:65, b:34, c:40, d:34, s:45 }
  },
  "ルクシオ": {
    name: [ "ルクシオ", "るくしお" ],
    base: { h:60, a:85, b:49, c:60, d:49, s:60 }
  },
  "レントラー": {
    name: [ "レントラー", "れんとらー" ],
    base: { h:80, a:120, b:79, c:95, d:79, s:70 }
  },
  "スボミー": {
    name: [ "スボミー", "すぼみー" ],
    base: { h:40, a:30, b:35, c:50, d:70, s:55 }
  },
  "ロズレイド": {
    name: [ "ロズレイド", "ろずれいど" ],
    base: { h:60, a:70, b:65, c:125, d:105, s:90 }
  },
  "ズガイドス": {
    name: [ "ズガイドス", "ずがいどす" ],
    base: { h:67, a:125, b:40, c:30, d:30, s:58 }
  },
  "ラムパルド": {
    name: [ "ラムパルド", "らむぱるど" ],
    base: { h:97, a:165, b:60, c:65, d:50, s:58 }
  },
  "タテトプス": {
    name: [ "タテトプス", "たてとぷす" ],
    base: { h:30, a:42, b:118, c:42, d:88, s:30 }
  },
  "トリデプス": {
    name: [ "トリデプス", "とりでぷす" ],
    base: { h:60, a:52, b:168, c:47, d:138, s:30 }
  },
  "ミノムッチ": {
    name: [ "ミノムッチ", "みのむっち" ],
    base: { h:40, a:29, b:45, c:29, d:45, s:36 }
  },
  "ミノマダム": {
    name: [ "ミノマダム", "みのまだむ" ],
    base: { h:60, a:59, b:85, c:79, d:105, s:36 }
  },
  "ミノマダム地": {
    name: [ "ミノマダム地", "みのまだむち" ],
    base: { h:60, a:79, b:105, c:59, d:85, s:36 }
  },
  "ミノマダム鋼": {
    name: [ "ミノマダム鋼", "みのまだむはがね" ],
    base: { h:60, a:69, b:95, c:69, d:95, s:36 }
  },
  "ガーメイル": {
    name: [ "ガーメイル", "がーめいる" ],
    base: { h:70, a:94, b:50, c:94, d:50, s:66 }
  },
  "ミツハニー": {
    name: [ "ミツハニー", "みつはにー" ],
    base: { h:30, a:30, b:42, c:30, d:42, s:70 }
  },
  "ビークイン": {
    name: [ "ビークイン", "びーくいん" ],
    base: { h:70, a:80, b:102, c:80, d:102, s:40 }
  },
  "パチリス": {
    name: [ "パチリス", "ぱちりす" ],
    base: { h:60, a:45, b:70, c:45, d:90, s:95 }
  },
  "ブイゼル": {
    name: [ "ブイゼル", "ぶいぜる" ],
    base: { h:55, a:65, b:35, c:60, d:30, s:85 }
  },
  "フローゼル": {
    name: [ "フローゼル", "ふろーぜる" ],
    base: { h:85, a:105, b:55, c:85, d:50, s:115 }
  },
  "チェリンボ": {
    name: [ "チェリンボ", "ちぇりんぼ" ],
    base: { h:45, a:35, b:45, c:62, d:53, s:35 }
  },
  "チェリム": {
    name: [ "チェリム", "ちぇりむ" ],
    base: { h:70, a:60, b:70, c:87, d:78, s:85 }
  },
  "カラナクシ": {
    name: [ "カラナクシ", "からなくし" ],
    base: { h:76, a:48, b:48, c:57, d:62, s:34 }
  },
  "トリトドン": {
    name: [ "トリトドン", "とりとどん" ],
    base: { h:111, a:83, b:68, c:92, d:82, s:39 }
  },
  "エテボース": {
    name: [ "エテボース", "えてぼーす" ],
    base: { h:75, a:100, b:66, c:60, d:66, s:115 }
  },
  "フワンテ": {
    name: [ "フワンテ", "ふわんて" ],
    base: { h:90, a:50, b:34, c:60, d:44, s:70 }
  },
  "フワライド": {
    name: [ "フワライド", "ふわらいど" ],
    base: { h:150, a:80, b:44, c:90, d:54, s:80 }
  },
  "ミミロル": {
    name: [ "ミミロル", "みみろる" ],
    base: { h:55, a:66, b:44, c:44, d:56, s:85 }
  },
  "ミミロップ": {
    name: [ "ミミロップ", "みみろっぷ" ],
    base: { h:65, a:76, b:84, c:54, d:96, s:105 }
  },
  "メガミミロップ": {
    name: [ "メガミミロップ", "めがみみろっぷ" ],
    base: { h:65, a:136, b:94, c:54, d:96, s:135 }
  },
  "ムウマージ": {
    name: [ "ムウマージ", "むうまーじ" ],
    base: { h:60, a:60, b:60, c:105, d:105, s:105 }
  },
  "ドンカラス": {
    name: [ "ドンカラス", "どんからす" ],
    base: { h:100, a:125, b:52, c:105, d:52, s:71 }
  },
  "ニャルマー": {
    name: [ "ニャルマー", "にゃるまー" ],
    base: { h:49, a:55, b:42, c:42, d:37, s:85 }
  },
  "ブニャット": {
    name: [ "ブニャット", "ぶにゃっと" ],
    base: { h:71, a:82, b:64, c:64, d:59, s:112 }
  },
  "リーシャン": {
    name: [ "リーシャン", "りーしゃん" ],
    base: { h:45, a:30, b:50, c:65, d:50, s:45 }
  },
  "スカンプー": {
    name: [ "スカンプー", "すかんぷー" ],
    base: { h:63, a:63, b:47, c:41, d:41, s:74 }
  },
  "スカタンク": {
    name: [ "スカタンク", "すかたんく" ],
    base: { h:103, a:93, b:67, c:71, d:61, s:84 }
  },
  "ドーミラー": {
    name: [ "ドーミラー", "どーみらー" ],
    base: { h:57, a:24, b:86, c:24, d:86, s:23 }
  },
  "ドータクン": {
    name: [ "ドータクン", "どーたくん" ],
    base: { h:67, a:89, b:116, c:79, d:116, s:33 }
  },
  "ウソハチ": {
    name: [ "ウソハチ", "うそはち" ],
    base: { h:50, a:80, b:95, c:10, d:45, s:10 }
  },
  "マネネ": {
    name: [ "マネネ", "まねね" ],
    base: { h:20, a:25, b:45, c:70, d:90, s:60 }
  },
  "ピンプク": {
    name: [ "ピンプク", "ぴんぷく" ],
    base: { h:100, a:5, b:5, c:15, d:65, s:30 }
  },
  "ペラップ": {
    name: [ "ペラップ", "ぺらっぷ" ],
    base: { h:76, a:65, b:45, c:92, d:42, s:91 }
  },
  "ミカルゲ": {
    name: [ "ミカルゲ", "みかるげ" ],
    base: { h:50, a:92, b:108, c:92, d:108, s:35 }
  },
  "フカマル": {
    name: [ "フカマル", "ふかまる" ],
    base: { h:58, a:70, b:45, c:40, d:45, s:42 }
  },
  "ガバイト": {
    name: [ "ガバイト", "がばいと" ],
    base: { h:68, a:90, b:65, c:50, d:55, s:82 }
  },
  "ガブリアス": {
    name: [ "ガブリアス", "がぶりあす" ],
    base: { h:108, a:130, b:95, c:80, d:85, s:102 }
  },
  "メガガブリアス": {
    name: [ "メガガブリアス", "めががぶりあす" ],
    base: { h:108, a:170, b:115, c:120, d:95, s:92 }
  },
  "ゴンベ": {
    name: [ "ゴンベ", "ごんべ" ],
    base: { h:135, a:85, b:40, c:40, d:85, s:5 }
  },
  "リオル": {
    name: [ "リオル", "りおる" ],
    base: { h:40, a:70, b:40, c:35, d:40, s:60 }
  },
  "ルカリオ": {
    name: [ "ルカリオ", "るかりお" ],
    base: { h:70, a:110, b:70, c:115, d:70, s:90 }
  },
  "メガルカリオ": {
    name: [ "メガルカリオ", "めがるかりお" ],
    base: { h:70, a:145, b:88, c:140, d:70, s:112 }
  },
  "ヒポポタス": {
    name: [ "ヒポポタス", "ひぽぽたす" ],
    base: { h:68, a:72, b:78, c:38, d:42, s:32 }
  },
  "カバルドン": {
    name: [ "カバルドン", "かばるどん" ],
    base: { h:108, a:112, b:118, c:68, d:72, s:47 }
  },
  "スコルピ": {
    name: [ "スコルピ", "すこるぴ" ],
    base: { h:40, a:50, b:90, c:30, d:55, s:65 }
  },
  "ドラピオン": {
    name: [ "ドラピオン", "どらぴおん" ],
    base: { h:70, a:90, b:110, c:60, d:75, s:95 }
  },
  "グレッグル": {
    name: [ "グレッグル", "ぐれっぐる" ],
    base: { h:48, a:61, b:40, c:61, d:40, s:50 }
  },
  "ドクロッグ": {
    name: [ "ドクロッグ", "どくろっぐ" ],
    base: { h:83, a:106, b:65, c:86, d:65, s:85 }
  },
  "マスキッパ": {
    name: [ "マスキッパ", "ますきっぱ" ],
    base: { h:74, a:100, b:72, c:90, d:72, s:46 }
  },
  "ケイコウオ": {
    name: [ "ケイコウオ", "けいこうお" ],
    base: { h:49, a:49, b:56, c:49, d:61, s:66 }
  },
  "ネオラント": {
    name: [ "ネオラント", "ねおらんと" ],
    base: { h:69, a:69, b:76, c:69, d:86, s:91 }
  },
  "タマンタ": {
    name: [ "タマンタ", "たまんた" ],
    base: { h:45, a:20, b:50, c:60, d:120, s:50 }
  },
  "ユキカブリ": {
    name: [ "ユキカブリ", "ゆきかぶり" ],
    base: { h:60, a:62, b:50, c:62, d:60, s:40 }
  },
  "ユキノオー": {
    name: [ "ユキノオー", "ゆきのおー" ],
    base: { h:90, a:92, b:75, c:92, d:85, s:60 }
  },
  "メガユキノオー": {
    name: [ "メガユキノオー", "めがゆきのおー" ],
    base: { h:90, a:132, b:105, c:132, d:105, s:30 }
  },
  "マニューラ": {
    name: [ "マニューラ", "まにゅーら" ],
    base: { h:70, a:120, b:65, c:45, d:85, s:125 }
  },
  "ジバコイル": {
    name: [ "ジバコイル", "じばこいる" ],
    base: { h:70, a:70, b:115, c:130, d:90, s:60 }
  },
  "ベロベルト": {
    name: [ "ベロベルト", "べろべると" ],
    base: { h:110, a:85, b:95, c:80, d:95, s:50 }
  },
  "ドサイドン": {
    name: [ "ドサイドン", "どさいどん" ],
    base: { h:115, a:140, b:130, c:55, d:55, s:40 }
  },
  "モジャンボ": {
    name: [ "モジャンボ", "もじゃんぼ" ],
    base: { h:100, a:100, b:125, c:110, d:50, s:50 }
  },
  "エレキブル": {
    name: [ "エレキブル", "えれきぶる" ],
    base: { h:75, a:123, b:67, c:95, d:85, s:95 }
  },
  "ブーバーン": {
    name: [ "ブーバーン", "ぶーばーん" ],
    base: { h:75, a:95, b:67, c:125, d:95, s:83 }
  },
  "トゲキッス": {
    name: [ "トゲキッス", "とげきっす" ],
    base: { h:85, a:50, b:95, c:120, d:115, s:80 }
  },
  "メガヤンマ": {
    name: [ "メガヤンマ", "めがやんま" ],
    base: { h:86, a:76, b:86, c:116, d:56, s:95 }
  },
  "リーフィア": {
    name: [ "リーフィア", "りーふぃあ" ],
    base: { h:65, a:110, b:130, c:60, d:65, s:95 }
  },
  "グレイシア": {
    name: [ "グレイシア", "ぐれいしあ" ],
    base: { h:65, a:60, b:110, c:130, d:95, s:65 }
  },
  "グライオン": {
    name: [ "グライオン", "ぐらいおん" ],
    base: { h:75, a:95, b:125, c:45, d:75, s:95 }
  },
  "マンムー": {
    name: [ "マンムー", "まんむー" ],
    base: { h:110, a:130, b:80, c:70, d:60, s:80 }
  },
  "ポリゴンZ": {
    name: [ "ポリゴンZ", "ぽりごんぜっと" ],
    base: { h:85, a:80, b:70, c:135, d:75, s:90 }
  },
  "エルレイド": {
    name: [ "エルレイド", "えるれいど" ],
    base: { h:68, a:125, b:65, c:65, d:115, s:80 }
  },
  "メガエルレイド": {
    name: [ "メガエルレイド", "めがえるれいど" ],
    base: { h:68, a:165, b:95, c:65, d:115, s:110 }
  },
  "ダイノーズ": {
    name: [ "ダイノーズ", "だいのーず" ],
    base: { h:60, a:55, b:145, c:75, d:150, s:40 }
  },
  "ヨノワール": {
    name: [ "ヨノワール", "よのわーる" ],
    base: { h:45, a:100, b:135, c:65, d:135, s:45 }
  },
  "ユキメノコ": {
    name: [ "ユキメノコ", "ゆきめのこ" ],
    base: { h:70, a:80, b:70, c:80, d:70, s:110 }
  },
  "ロトム": {
    name: [ "ロトム", "ろとむ" ],
    base: { h:50, a:50, b:77, c:95, d:77, s:91 }
  },
  "ロトム熱": {
    name: [ "ロトム熱", "ろとむねつ", "ろとむひ", "ろとむほのお" ],
    base: { h:50, a:65, b:107, c:105, d:107, s:86 }
  },
  "ロトム洗": {
    name: [ "ロトム洗", "ろとむせん", "ろとむあらう", "ろとむみず" ],
    base: { h:50, a:65, b:107, c:105, d:107, s:86 }
  },
  "ロトム冷": {
    name: [ "ロトム冷", "ろとむれい", "ろとむこおり" ],
    base: { h:50, a:65, b:107, c:105, d:107, s:86 }
  },
  "ロトム風": {
    name: [ "ロトム風", "ろとむふう", "ろとむかぜ", "ろとむひこう" ],
    base: { h:50, a:65, b:107, c:105, d:107, s:86 }
  },
  "ロトム刈": {
    name: [ "ロトム刈", "ろとむかる", "ろとむかり", "ろとむくさ" ],
    base: { h:50, a:65, b:107, c:105, d:107, s:86 }
  },
  "ユクシー": {
    name: [ "ユクシー", "ゆくしー" ],
    base: { h:75, a:75, b:130, c:75, d:130, s:95 }
  },
  "エムリット": {
    name: [ "エムリット", "えむりっと" ],
    base: { h:80, a:105, b:105, c:105, d:105, s:80 }
  },
  "アグノム": {
    name: [ "アグノム", "あぐのむ" ],
    base: { h:75, a:125, b:70, c:125, d:70, s:115 }
  },
  "ディアルガ": {
    name: [ "ディアルガ", "でぃあるが" ],
    base: { h:100, a:120, b:120, c:150, d:100, s:90 }
  },
  "パルキア": {
    name: [ "パルキア", "ぱるきあ" ],
    base: { h:90, a:120, b:100, c:150, d:120, s:100 }
  },
  "ヒードラン": {
    name: [ "ヒードラン", "ひーどらん" ],
    base: { h:91, a:90, b:106, c:130, d:106, s:77 }
  },
  "レジギガス": {
    name: [ "レジギガス", "れじぎがす" ],
    base: { h:110, a:160, b:110, c:80, d:110, s:100 }
  },
  "ギラティナ": {
    name: [ "ギラティナ", "ぎらてぃな" ],
    base: { h:150, a:100, b:120, c:100, d:120, s:90 }
  },
  "ギラティナ元": {
    name: [ "ギラティナ元", "ぎらてぃなもと", "ぎらてぃなげん" ],
    base: { h:150, a:120, b:100, c:120, d:100, s:90 }
  },
  "クレセリア": {
    name: [ "クレセリア", "くれせりあ" ],
    base: { h:120, a:70, b:120, c:75, d:130, s:85 }
  },
  "フィオネ": {
    name: [ "フィオネ", "ふぃおね" ],
    base: { h:80, a:80, b:80, c:80, d:80, s:80 }
  },
  "マナフィ": {
    name: [ "マナフィ", "まなふぃ" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "ダークライ": {
    name: [ "ダークライ", "だーくらい" ],
    base: { h:70, a:90, b:90, c:135, d:90, s:125 }
  },
  "シェイミ": {
    name: [ "シェイミ", "しぇいみ" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "シェイミ空": {
    name: [ "シェイミ空", "しぇいみそら", "しぇいみくう", "しぇいみひこう" ],
    base: { h:100, a:103, b:75, c:120, d:75, s:127 }
  },
  "アルセウス": {
    name: [ "アルセウス", "あるせうす" ],
    base: { h:120, a:120, b:120, c:120, d:120, s:120 }
  },
  "ビクティニ": {
    name: [ "ビクティニ", "びくてぃに" ],
    base: { h:100, a:100, b:100, c:100, d:100, s:100 }
  },
  "ツタージャ": {
    name: [ "ツタージャ", "つたーじゃ" ],
    base: { h:45, a:45, b:55, c:45, d:55, s:63 }
  },
  "ジャノビー": {
    name: [ "ジャノビー", "じゃのびー" ],
    base: { h:60, a:60, b:75, c:60, d:75, s:83 }
  },
  "ジャローダ": {
    name: [ "ジャローダ", "じゃろーだ" ],
    base: { h:75, a:75, b:95, c:75, d:95, s:113 }
  },
  "ポカブ": {
    name: [ "ポカブ", "ぽかぶ" ],
    base: { h:65, a:63, b:45, c:45, d:45, s:45 }
  },
  "チャオブー": {
    name: [ "チャオブー", "ちゃおぶー" ],
    base: { h:90, a:93, b:55, c:70, d:55, s:55 }
  },
  "エンブオー": {
    name: [ "エンブオー", "えんぶおー" ],
    base: { h:110, a:123, b:65, c:100, d:65, s:65 }
  },
  "ミジュマル": {
    name: [ "ミジュマル", "みじゅまる" ],
    base: { h:55, a:55, b:45, c:63, d:45, s:45 }
  },
  "フタチマル": {
    name: [ "フタチマル", "ふたちまる" ],
    base: { h:75, a:75, b:60, c:83, d:60, s:60 }
  },
  "ダイケンキ": {
    name: [ "ダイケンキ", "だいけんき" ],
    base: { h:95, a:100, b:85, c:108, d:70, s:70 }
  },
  "ミネズミ": {
    name: [ "ミネズミ", "みねずみ" ],
    base: { h:45, a:55, b:39, c:35, d:39, s:42 }
  },
  "ミルホッグ": {
    name: [ "ミルホッグ", "みるほっぐ" ],
    base: { h:60, a:85, b:69, c:60, d:69, s:77 }
  },
  "ヨーテリー": {
    name: [ "ヨーテリー", "よーてりー" ],
    base: { h:45, a:60, b:45, c:25, d:45, s:55 }
  },
  "ハーデリア": {
    name: [ "ハーデリア", "はーでりあ" ],
    base: { h:65, a:80, b:65, c:35, d:65, s:60 }
  },
  "ムーランド": {
    name: [ "ムーランド", "むーらんど" ],
    base: { h:85, a:110, b:90, c:45, d:90, s:80 }
  },
  "チョロネコ": {
    name: [ "チョロネコ", "ちょろねこ" ],
    base: { h:41, a:50, b:37, c:50, d:37, s:66 }
  },
  "レパルダス": {
    name: [ "レパルダス", "れぱるだす" ],
    base: { h:64, a:88, b:50, c:88, d:50, s:106 }
  },
  "ヤナップ": {
    name: [ "ヤナップ", "やなっぷ" ],
    base: { h:50, a:53, b:48, c:53, d:48, s:64 }
  },
  "ヤナッキー": {
    name: [ "ヤナッキー", "やなっきー" ],
    base: { h:75, a:98, b:63, c:98, d:63, s:101 }
  },
  "バオップ": {
    name: [ "バオップ", "ばおっぷ" ],
    base: { h:50, a:53, b:48, c:53, d:48, s:64 }
  },
  "バオッキー": {
    name: [ "バオッキー", "ばおっきー" ],
    base: { h:75, a:98, b:63, c:98, d:63, s:101 }
  },
  "ヒヤップ": {
    name: [ "ヒヤップ", "ひやっぷ" ],
    base: { h:50, a:53, b:48, c:53, d:48, s:64 }
  },
  "ヒヤッキー": {
    name: [ "ヒヤッキー", "ひやっきー" ],
    base: { h:75, a:98, b:63, c:98, d:63, s:101 }
  },
  "ムンナ": {
    name: [ "ムンナ", "むんな" ],
    base: { h:76, a:25, b:45, c:67, d:55, s:24 }
  },
  "ムシャーナ": {
    name: [ "ムシャーナ", "むしゃーな" ],
    base: { h:116, a:55, b:85, c:107, d:95, s:29 }
  },
  "マメパト": {
    name: [ "マメパト", "まめぱと" ],
    base: { h:50, a:55, b:50, c:36, d:30, s:43 }
  },
  "ハトーボー": {
    name: [ "ハトーボー", "はとーぼー" ],
    base: { h:62, a:77, b:62, c:50, d:42, s:65 }
  },
  "ケンホロウ": {
    name: [ "ケンホロウ", "けんほろう" ],
    base: { h:80, a:115, b:80, c:65, d:55, s:93 }
  },
  "シママ": {
    name: [ "シママ", "しまま" ],
    base: { h:45, a:60, b:32, c:50, d:32, s:76 }
  },
  "ゼブライカ": {
    name: [ "ゼブライカ", "ぜぶらいか" ],
    base: { h:75, a:100, b:63, c:80, d:63, s:116 }
  },
  "ダンゴロ": {
    name: [ "ダンゴロ", "だんごろ" ],
    base: { h:55, a:75, b:85, c:25, d:25, s:15 }
  },
  "ガントル": {
    name: [ "ガントル", "がんとる" ],
    base: { h:70, a:105, b:105, c:50, d:40, s:20 }
  },
  "ギガイアス": {
    name: [ "ギガイアス", "ぎがいあす" ],
    base: { h:85, a:135, b:130, c:60, d:80, s:25 }
  },
  "コロモリ": {
    name: [ "コロモリ", "ころもり" ],
    base: { h:55, a:45, b:43, c:55, d:43, s:72 }
  },
  "ココロモリ": {
    name: [ "ココロモリ", "こころもり" ],
    base: { h:67, a:57, b:55, c:77, d:55, s:114 }
  },
  "モグリュー": {
    name: [ "モグリュー", "もぐりゅー" ],
    base: { h:60, a:85, b:40, c:30, d:45, s:68 }
  },
  "ドリュウズ": {
    name: [ "ドリュウズ", "どりゅうず" ],
    base: { h:110, a:135, b:60, c:50, d:65, s:88 }
  },
  "タブンネ": {
    name: [ "タブンネ", "たぶんね" ],
    base: { h:103, a:60, b:86, c:60, d:86, s:50 }
  },
  "メガタブンネ": {
    name: [ "メガタブンネ", "めがたぶんね" ],
    base: { h:103, a:60, b:126, c:80, d:126, s:50 }
  },
  "ドッコラー": {
    name: [ "ドッコラー", "どっこらー" ],
    base: { h:75, a:80, b:55, c:25, d:35, s:35 }
  },
  "ドテッコツ": {
    name: [ "ドテッコツ", "どてっこつ" ],
    base: { h:85, a:105, b:85, c:40, d:50, s:40 }
  },
  "ローブシン": {
    name: [ "ローブシン", "ろーぶしん" ],
    base: { h:105, a:140, b:95, c:55, d:65, s:45 }
  },
  "オタマロ": {
    name: [ "オタマロ", "おたまろ" ],
    base: { h:50, a:50, b:40, c:50, d:40, s:64 }
  },
  "ガマガル": {
    name: [ "ガマガル", "がまがる" ],
    base: { h:75, a:65, b:55, c:65, d:55, s:69 }
  },
  "ガマゲロゲ": {
    name: [ "ガマゲロゲ", "がまげろげ" ],
    base: { h:105, a:95, b:75, c:85, d:75, s:74 }
  },
  "ナゲキ": {
    name: [ "ナゲキ", "なげき" ],
    base: { h:120, a:100, b:85, c:30, d:85, s:45 }
  },
  "ダゲキ": {
    name: [ "ダゲキ", "だげき" ],
    base: { h:75, a:125, b:75, c:30, d:75, s:85 }
  },
  "クルミル": {
    name: [ "クルミル", "くるみる" ],
    base: { h:45, a:53, b:70, c:40, d:60, s:42 }
  },
  "クルマユ": {
    name: [ "クルマユ", "くるまゆ" ],
    base: { h:55, a:63, b:90, c:50, d:80, s:42 }
  },
  "ハハコモリ": {
    name: [ "ハハコモリ", "ははこもり" ],
    base: { h:75, a:103, b:80, c:70, d:80, s:92 }
  },
  "フシデ": {
    name: [ "フシデ", "ふしで" ],
    base: { h:30, a:45, b:59, c:30, d:39, s:57 }
  },
  "ホイーガ": {
    name: [ "ホイーガ", "ほいーが" ],
    base: { h:40, a:55, b:99, c:40, d:79, s:47 }
  },
  "ペンドラー": {
    name: [ "ペンドラー", "ぺんどらー" ],
    base: { h:60, a:100, b:89, c:55, d:69, s:112 }
  },
  "モンメン": {
    name: [ "モンメン", "もんめん" ],
    base: { h:40, a:27, b:60, c:37, d:50, s:66 }
  },
  "エルフーン": {
    name: [ "エルフーン", "えるふーん" ],
    base: { h:60, a:67, b:85, c:77, d:75, s:116 }
  },
  "チュリネ": {
    name: [ "チュリネ", "ちゅりね" ],
    base: { h:45, a:35, b:50, c:70, d:50, s:30 }
  },
  "ドレディア": {
    name: [ "ドレディア", "どれでぃあ" ],
    base: { h:70, a:60, b:75, c:110, d:75, s:90 }
  },
  "バスラオ": {
    name: [ "バスラオ", "ばすらお" ],
    base: { h:70, a:92, b:65, c:80, d:55, s:98 }
  },
  "バスラオ青": {
    name: [ "バスラオ青", "ばすらおあお" ],
    base: { h:70, a:92, b:65, c:80, d:55, s:98 }
  },
  "メグロコ": {
    name: [ "メグロコ", "めぐろこ" ],
    base: { h:50, a:72, b:35, c:35, d:35, s:65 }
  },
  "ワルビル": {
    name: [ "ワルビル", "わるびる" ],
    base: { h:60, a:82, b:45, c:45, d:45, s:74 }
  },
  "ワルビアル": {
    name: [ "ワルビアル", "わるびある" ],
    base: { h:95, a:117, b:80, c:65, d:70, s:92 }
  },
  "ダルマッカ": {
    name: [ "ダルマッカ", "だるまっか" ],
    base: { h:70, a:90, b:45, c:15, d:45, s:50 }
  },
  "ヒヒダルマ": {
    name: [ "ヒヒダルマ", "ひひだるま" ],
    base: { h:105, a:140, b:55, c:30, d:55, s:95 }
  },
  "ヒヒダルマ達磨": {
    name: [ "ヒヒダルマ達磨", "ひひだるまだるま" ],
    base: { h:105, a:30, b:105, c:140, d:105, s:55 }
  },
  "マラカッチ": {
    name: [ "マラカッチ", "まらかっち" ],
    base: { h:75, a:86, b:67, c:106, d:67, s:60 }
  },
  "イシズマイ": {
    name: [ "イシズマイ", "いしずまい" ],
    base: { h:50, a:65, b:85, c:35, d:35, s:55 }
  },
  "イワパレス": {
    name: [ "イワパレス", "いわぱれす" ],
    base: { h:70, a:95, b:125, c:65, d:75, s:45 }
  },
  "ズルッグ": {
    name: [ "ズルッグ", "ずるっぐ" ],
    base: { h:50, a:75, b:70, c:35, d:70, s:48 }
  },
  "ズルズキン": {
    name: [ "ズルズキン", "ずるずきん" ],
    base: { h:65, a:90, b:115, c:45, d:115, s:58 }
  },
  "シンボラー": {
    name: [ "シンボラー", "しんぼらー" ],
    base: { h:72, a:58, b:80, c:103, d:80, s:97 }
  },
  "デスマス": {
    name: [ "デスマス", "ですます" ],
    base: { h:38, a:30, b:85, c:55, d:65, s:30 }
  },
  "デスカーン": {
    name: [ "デスカーン", "ですかーん" ],
    base: { h:58, a:50, b:145, c:95, d:105, s:30 }
  },
  "プロトーガ": {
    name: [ "プロトーガ", "ぷろとーが" ],
    base: { h:54, a:78, b:103, c:53, d:45, s:22 }
  },
  "アバゴーラ": {
    name: [ "アバゴーラ", "あばごーら" ],
    base: { h:74, a:108, b:133, c:83, d:65, s:32 }
  },
  "アーケン": {
    name: [ "アーケン", "あーけん" ],
    base: { h:55, a:112, b:45, c:74, d:45, s:70 }
  },
  "アーケオス": {
    name: [ "アーケオス", "あーけおす" ],
    base: { h:75, a:140, b:65, c:112, d:65, s:110 }
  },
  "ヤブクロン": {
    name: [ "ヤブクロン", "やぶくろん" ],
    base: { h:50, a:50, b:62, c:40, d:62, s:65 }
  },
  "ダストダス": {
    name: [ "ダストダス", "だすとだす" ],
    base: { h:80, a:95, b:82, c:60, d:82, s:75 }
  },
  "ゾロア": {
    name: [ "ゾロア", "ぞろあ" ],
    base: { h:40, a:65, b:40, c:80, d:40, s:65 }
  },
  "ゾロアーク": {
    name: [ "ゾロアーク", "ぞろあーく" ],
    base: { h:60, a:105, b:60, c:120, d:60, s:105 }
  },
  "チラーミィ": {
    name: [ "チラーミィ", "ちらーみぃ" ],
    base: { h:55, a:50, b:40, c:40, d:40, s:75 }
  },
  "チラチーノ": {
    name: [ "チラチーノ", "ちらちーの" ],
    base: { h:75, a:95, b:60, c:65, d:60, s:115 }
  },
  "ゴチム": {
    name: [ "ゴチム", "ごちむ" ],
    base: { h:45, a:30, b:50, c:55, d:65, s:45 }
  },
  "ゴチミル": {
    name: [ "ゴチミル", "ごちみる" ],
    base: { h:60, a:45, b:70, c:75, d:85, s:55 }
  },
  "ゴチルゼル": {
    name: [ "ゴチルゼル", "ごちるぜる" ],
    base: { h:70, a:55, b:95, c:95, d:110, s:65 }
  },
  "ユニラン": {
    name: [ "ユニラン", "ゆにらん" ],
    base: { h:45, a:30, b:40, c:105, d:50, s:20 }
  },
  "ダブラン": {
    name: [ "ダブラン", "だぶらん" ],
    base: { h:65, a:40, b:50, c:125, d:60, s:30 }
  },
  "ランクルス": {
    name: [ "ランクルス", "らんくるす" ],
    base: { h:110, a:65, b:75, c:125, d:85, s:30 }
  },
  "コアルヒー": {
    name: [ "コアルヒー", "こあるひー" ],
    base: { h:62, a:44, b:50, c:44, d:50, s:55 }
  },
  "スワンナ": {
    name: [ "スワンナ", "すわんな" ],
    base: { h:75, a:87, b:63, c:87, d:63, s:98 }
  },
  "バニプッチ": {
    name: [ "バニプッチ", "ばにぷっち" ],
    base: { h:36, a:50, b:50, c:65, d:60, s:44 }
  },
  "バニリッチ": {
    name: [ "バニリッチ", "ばにりっち" ],
    base: { h:51, a:65, b:65, c:80, d:75, s:59 }
  },
  "バイバニラ": {
    name: [ "バイバニラ", "ばいばにら" ],
    base: { h:71, a:95, b:85, c:110, d:95, s:79 }
  },
  "シキジカ": {
    name: [ "シキジカ", "しきじか" ],
    base: { h:60, a:60, b:50, c:40, d:50, s:75 }
  },
  "メブキジカ": {
    name: [ "メブキジカ", "めぶきじか" ],
    base: { h:80, a:100, b:70, c:60, d:70, s:95 }
  },
  "エモンガ": {
    name: [ "エモンガ", "えもんが" ],
    base: { h:55, a:75, b:60, c:75, d:60, s:103 }
  },
  "カブルモ": {
    name: [ "カブルモ", "かぶるも" ],
    base: { h:50, a:75, b:45, c:40, d:45, s:60 }
  },
  "シュバルゴ": {
    name: [ "シュバルゴ", "しゅばるご" ],
    base: { h:70, a:135, b:105, c:60, d:105, s:20 }
  },
  "タマゲタケ": {
    name: [ "タマゲタケ", "たまげたけ" ],
    base: { h:69, a:55, b:45, c:55, d:55, s:15 }
  },
  "モロバレル": {
    name: [ "モロバレル", "もろばれる" ],
    base: { h:114, a:85, b:70, c:85, d:80, s:30 }
  },
  "プルリル": {
    name: [ "プルリル", "ぷるりる" ],
    base: { h:55, a:40, b:50, c:65, d:85, s:40 }
  },
  "ブルンゲル": {
    name: [ "ブルンゲル", "ぶるんげる" ],
    base: { h:100, a:60, b:70, c:85, d:105, s:60 }
  },
  "ママンボウ": {
    name: [ "ママンボウ", "ままんぼう" ],
    base: { h:165, a:75, b:80, c:40, d:45, s:65 }
  },
  "バチュル": {
    name: [ "バチュル", "ばちゅる" ],
    base: { h:50, a:47, b:50, c:57, d:50, s:65 }
  },
  "デンチュラ": {
    name: [ "デンチュラ", "でんちゅら" ],
    base: { h:70, a:77, b:60, c:97, d:60, s:108 }
  },
  "テッシード": {
    name: [ "テッシード", "てっしーど" ],
    base: { h:44, a:50, b:91, c:24, d:86, s:10 }
  },
  "ナットレイ": {
    name: [ "ナットレイ", "なっとれい" ],
    base: { h:74, a:94, b:131, c:54, d:116, s:20 }
  },
  "ギアル": {
    name: [ "ギアル", "ぎある" ],
    base: { h:40, a:55, b:70, c:45, d:60, s:30 }
  },
  "ギギアル": {
    name: [ "ギギアル", "ぎぎある" ],
    base: { h:60, a:80, b:95, c:70, d:85, s:50 }
  },
  "ギギギアル": {
    name: [ "ギギギアル", "ぎぎぎある" ],
    base: { h:60, a:100, b:115, c:70, d:85, s:90 }
  },
  "シビシラス": {
    name: [ "シビシラス", "しびしらす" ],
    base: { h:35, a:55, b:40, c:45, d:40, s:60 }
  },
  "シビビール": {
    name: [ "シビビール", "しびびーる" ],
    base: { h:65, a:85, b:70, c:75, d:70, s:40 }
  },
  "シビルドン": {
    name: [ "シビルドン", "しびるどん" ],
    base: { h:85, a:115, b:80, c:105, d:80, s:50 }
  },
  "リグレー": {
    name: [ "リグレー", "りぐれー" ],
    base: { h:55, a:55, b:55, c:85, d:55, s:30 }
  },
  "オーベム": {
    name: [ "オーベム", "おーべむ" ],
    base: { h:75, a:75, b:75, c:125, d:95, s:40 }
  },
  "ヒトモシ": {
    name: [ "ヒトモシ", "ひともし" ],
    base: { h:50, a:30, b:55, c:65, d:55, s:20 }
  },
  "ランプラー": {
    name: [ "ランプラー", "らんぷらー" ],
    base: { h:60, a:40, b:60, c:95, d:60, s:55 }
  },
  "シャンデラ": {
    name: [ "シャンデラ", "しゃんでら" ],
    base: { h:60, a:55, b:90, c:145, d:90, s:80 }
  },
  "キバゴ": {
    name: [ "キバゴ", "きばご" ],
    base: { h:46, a:87, b:60, c:30, d:40, s:57 }
  },
  "オノンド": {
    name: [ "オノンド", "おのんど" ],
    base: { h:66, a:117, b:70, c:40, d:50, s:67 }
  },
  "オノノクス": {
    name: [ "オノノクス", "おののくす" ],
    base: { h:76, a:147, b:90, c:60, d:70, s:97 }
  },
  "クマシュン": {
    name: [ "クマシュン", "くましゅん" ],
    base: { h:55, a:70, b:40, c:60, d:40, s:40 }
  },
  "ツンベアー": {
    name: [ "ツンベアー", "つんべあー" ],
    base: { h:95, a:110, b:80, c:70, d:80, s:50 }
  },
  "フリージオ": {
    name: [ "フリージオ", "ふりーじお" ],
    base: { h:70, a:50, b:30, c:95, d:135, s:105 }
  },
  "チョボマキ": {
    name: [ "チョボマキ", "ちょぼまき" ],
    base: { h:50, a:40, b:85, c:40, d:65, s:25 }
  },
  "アギルダー": {
    name: [ "アギルダー", "あぎるだー" ],
    base: { h:80, a:70, b:40, c:100, d:60, s:145 }
  },
  "マッギョ": {
    name: [ "マッギョ", "まっぎょ" ],
    base: { h:109, a:66, b:84, c:81, d:99, s:32 }
  },
  "コジョフー": {
    name: [ "コジョフー", "こじょふー" ],
    base: { h:45, a:85, b:50, c:55, d:50, s:65 }
  },
  "コジョンド": {
    name: [ "コジョンド", "こじょんど" ],
    base: { h:65, a:125, b:60, c:95, d:60, s:105 }
  },
  "クリムガン": {
    name: [ "クリムガン", "くりむがん" ],
    base: { h:77, a:120, b:90, c:60, d:90, s:48 }
  },
  "ゴビット": {
    name: [ "ゴビット", "ごびっと" ],
    base: { h:59, a:74, b:50, c:35, d:50, s:35 }
  },
  "ゴルーグ": {
    name: [ "ゴルーグ", "ごるーぐ" ],
    base: { h:89, a:124, b:80, c:55, d:80, s:55 }
  },
  "コマタナ": {
    name: [ "コマタナ", "こまたな" ],
    base: { h:45, a:85, b:70, c:40, d:40, s:60 }
  },
  "キリキザン": {
    name: [ "キリキザン", "きりきざん" ],
    base: { h:65, a:125, b:100, c:60, d:70, s:70 }
  },
  "バッフロン": {
    name: [ "バッフロン", "ばっふろん" ],
    base: { h:95, a:110, b:95, c:40, d:95, s:55 }
  },
  "ワシボン": {
    name: [ "ワシボン", "わしぼん" ],
    base: { h:70, a:83, b:50, c:37, d:50, s:60 }
  },
  "ウォーグル": {
    name: [ "ウォーグル", "うぉーぐる" ],
    base: { h:100, a:123, b:75, c:57, d:75, s:80 }
  },
  "バルチャイ": {
    name: [ "バルチャイ", "ばるちゃい" ],
    base: { h:70, a:55, b:75, c:45, d:65, s:60 }
  },
  "バルジーナ": {
    name: [ "バルジーナ", "ばるじーな" ],
    base: { h:110, a:65, b:105, c:55, d:95, s:80 }
  },
  "クイタラン": {
    name: [ "クイタラン", "くいたらん" ],
    base: { h:85, a:97, b:66, c:105, d:66, s:65 }
  },
  "アイアント": {
    name: [ "アイアント", "あいあんと" ],
    base: { h:58, a:109, b:112, c:48, d:48, s:109 }
  },
  "モノズ": {
    name: [ "モノズ", "ものず" ],
    base: { h:52, a:65, b:50, c:45, d:50, s:38 }
  },
  "ジヘッド": {
    name: [ "ジヘッド", "じへっど" ],
    base: { h:72, a:85, b:70, c:65, d:70, s:58 }
  },
  "サザンドラ": {
    name: [ "サザンドラ", "さざんどら" ],
    base: { h:92, a:105, b:90, c:125, d:90, s:98 }
  },
  "メラルバ": {
    name: [ "メラルバ", "めらるば" ],
    base: { h:55, a:85, b:55, c:50, d:55, s:60 }
  },
  "ウルガモス": {
    name: [ "ウルガモス", "うるがもす" ],
    base: { h:85, a:60, b:65, c:135, d:105, s:100 }
  },
  "コバルオン": {
    name: [ "コバルオン", "こばるおん" ],
    base: { h:91, a:90, b:129, c:90, d:72, s:108 }
  },
  "テラキオン": {
    name: [ "テラキオン", "てらきおん" ],
    base: { h:91, a:129, b:90, c:72, d:90, s:108 }
  },
  "ビリジオン": {
    name: [ "ビリジオン", "びりじおん" ],
    base: { h:91, a:90, b:72, c:90, d:129, s:108 }
  },
  "トルネロス": {
    name: [ "トルネロス", "とるねろす" ],
    base: { h:79, a:115, b:70, c:125, d:80, s:111 }
  },
  "トルネロス霊": {
    name: [ "トルネロス霊", "とるねろすれい" ],
    base: { h:79, a:100, b:80, c:110, d:90, s:121 }
  },
  "ボルトロス": {
    name: [ "ボルトロス", "ぼるとろす" ],
    base: { h:79, a:115, b:70, c:125, d:80, s:111 }
  },
  "ボルトロス霊": {
    name: [ "ボルトロス霊", "ぼるとろすれい" ],
    base: { h:79, a:105, b:70, c:145, d:80, s:101 }
  },
  "レシラム": {
    name: [ "レシラム", "れしらむ" ],
    base: { h:100, a:120, b:100, c:150, d:120, s:90 }
  },
  "ゼクロム": {
    name: [ "ゼクロム", "ぜくろむ" ],
    base: { h:100, a:150, b:120, c:120, d:100, s:90 }
  },
  "ランドロス": {
    name: [ "ランドロス", "らんどろす" ],
    base: { h:89, a:125, b:90, c:115, d:80, s:101 }
  },
  "ランドロス霊": {
    name: [ "ランドロス霊", "らんどろすれい" ],
    base: { h:89, a:145, b:90, c:105, d:80, s:91 }
  },
  "キュレム": {
    name: [ "キュレム", "きゅれむ" ],
    base: { h:125, a:130, b:90, c:130, d:90, s:95 }
  },
  "キュレム白": {
    name: [ "キュレム白", "きゅれむしろ", "きゅれむほわいと", "ほわいときゅれむ" ],
    base: { h:125, a:120, b:90, c:170, d:100, s:95 }
  },
  "キュレム黒": {
    name: [ "キュレム黒", "きゅれむくろ", "きゅれむぶらっく", "ぶらっくきゅれむ" ],
    base: { h:125, a:170, b:100, c:120, d:90, s:95 }
  },
  "ケルディオ": {
    name: [ "ケルディオ", "けるでぃお" ],
    base: { h:91, a:72, b:90, c:129, d:90, s:108 }
  },
  "ケルディオ覚": {
    name: [ "ケルディオ覚", "けるでぃおかくご" ],
    base: { h:91, a:72, b:90, c:129, d:90, s:108 }
  },
  "メロエッタ": {
    name: [ "メロエッタ", "めろえった" ],
    base: { h:100, a:77, b:77, c:128, d:128, s:90 }
  },
  "メロエッタ闘": {
    name: [ "メロエッタ闘", "めろえったとう", "めろえったかくとう", "めろえったすてっぷ" ],
    base: { h:100, a:128, b:90, c:77, d:77, s:128 }
  },
  "ゲノセクト": {
    name: [ "ゲノセクト", "げのせくと" ],
    base: { h:71, a:120, b:95, c:120, d:95, s:99 }
  },
  "ハリマロン": {
    name: [ "ハリマロン", "はりまろん" ],
    base: { h:56, a:61, b:65, c:48, d:45, s:38 }
  },
  "ハリボーグ": {
    name: [ "ハリボーグ", "はりぼーぐ" ],
    base: { h:61, a:78, b:95, c:56, d:58, s:57 }
  },
  "ブリガロン": {
    name: [ "ブリガロン", "ぶりがろん" ],
    base: { h:88, a:107, b:122, c:74, d:75, s:64 }
  },
  "フォッコ": {
    name: [ "フォッコ", "ふぉっこ" ],
    base: { h:40, a:45, b:40, c:62, d:60, s:60 }
  },
  "テールナー": {
    name: [ "テールナー", "てーるなー" ],
    base: { h:59, a:59, b:58, c:90, d:70, s:73 }
  },
  "マフォクシー": {
    name: [ "マフォクシー", "まふぉくしー" ],
    base: { h:75, a:69, b:72, c:114, d:100, s:104 }
  },
  "ケロマツ": {
    name: [ "ケロマツ", "けろまつ" ],
    base: { h:41, a:56, b:40, c:62, d:44, s:71 }
  },
  "ゲコガシラ": {
    name: [ "ゲコガシラ", "げこがしら" ],
    base: { h:54, a:63, b:52, c:83, d:56, s:97 }
  },
  "ゲッコウガ": {
    name: [ "ゲッコウガ", "げっこうが" ],
    base: { h:72, a:95, b:67, c:103, d:71, s:122 }
  },
  "サトシゲッコウガ": {
    name: [ "サトシゲッコウガ", "さとしげっこうが" ],
    base: { h:72, a:145, b:67, c:153, d:71, s:132 }
  },
  "ホルビー": {
    name: [ "ホルビー", "ほるびー" ],
    base: { h:38, a:36, b:38, c:32, d:36, s:57 }
  },
  "ホルード": {
    name: [ "ホルード", "ほるーど" ],
    base: { h:85, a:56, b:77, c:50, d:77, s:78 }
  },
  "ヤヤコマ": {
    name: [ "ヤヤコマ", "ややこま" ],
    base: { h:45, a:50, b:43, c:40, d:38, s:62 }
  },
  "ヒノヤコマ": {
    name: [ "ヒノヤコマ", "ひのやこま" ],
    base: { h:62, a:73, b:55, c:56, d:52, s:84 }
  },
  "ファイアロー": {
    name: [ "ファイアロー", "ふぁいあろー" ],
    base: { h:78, a:81, b:71, c:74, d:69, s:126 }
  },
  "コフキムシ": {
    name: [ "コフキムシ", "こふきむし" ],
    base: { h:38, a:35, b:40, c:27, d:25, s:35 }
  },
  "コフーライ": {
    name: [ "コフーライ", "こふーらい" ],
    base: { h:45, a:22, b:60, c:27, d:30, s:29 }
  },
  "ビビヨン": {
    name: [ "ビビヨン", "びびよん" ],
    base: { h:80, a:52, b:50, c:90, d:50, s:89 }
  },
  "シシコ": {
    name: [ "シシコ", "ししこ" ],
    base: { h:62, a:50, b:58, c:73, d:54, s:72 }
  },
  "カエンジシ": {
    name: [ "カエンジシ", "かえんじし" ],
    base: { h:86, a:68, b:72, c:109, d:66, s:106 }
  },
  "フラベベ": {
    name: [ "フラベベ", "ふらべべ" ],
    base: { h:44, a:38, b:39, c:61, d:79, s:42 }
  },
  "フラエッテ": {
    name: [ "フラエッテ", "ふらえって" ],
    base: { h:54, a:45, b:47, c:75, d:98, s:52 }
  },
  "フラージェス": {
    name: [ "フラージェス", "ふらーじぇす" ],
    base: { h:78, a:65, b:68, c:112, d:154, s:75 }
  },
  "メェークル": {
    name: [ "メェークル", "めぇーくる" ],
    base: { h:66, a:65, b:48, c:62, d:57, s:52 }
  },
  "ゴーゴート": {
    name: [ "ゴーゴート", "ごーごーと" ],
    base: { h:123, a:100, b:62, c:97, d:81, s:68 }
  },
  "ヤンチャム": {
    name: [ "ヤンチャム", "やんちゃむ" ],
    base: { h:67, a:82, b:62, c:46, d:48, s:43 }
  },
  "ゴロンダ": {
    name: [ "ゴロンダ", "ごろんだ" ],
    base: { h:95, a:124, b:78, c:69, d:71, s:58 }
  },
  "トリミアン": {
    name: [ "トリミアン", "とりみあん" ],
    base: { h:75, a:80, b:60, c:65, d:90, s:102 }
  },
  "ニャスパー": {
    name: [ "ニャスパー", "にゃすぱー" ],
    base: { h:62, a:48, b:54, c:63, d:60, s:68 }
  },
  "ニャオニクス": {
    name: [ "ニャオニクス", "にゃおにくす" ],
    base: { h:74, a:48, b:76, c:83, d:81, s:104 }
  },
  "ニャオニクス♀": {
    name: [ "ニャオニクス♀", "にゃおにくすめす" ],
    base: { h:74, a:48, b:76, c:83, d:81, s:104 }
  },
  "ヒトツキ": {
    name: [ "ヒトツキ", "ひとつき" ],
    base: { h:45, a:80, b:100, c:35, d:37, s:28 }
  },
  "ニダンギル": {
    name: [ "ニダンギル", "にだんぎる" ],
    base: { h:59, a:110, b:150, c:45, d:49, s:35 }
  },
  "ギルガルド": {
    name: [ "ギルガルド", "ぎるがるど" ],
    base: { h:60, a:50, b:150, c:50, d:150, s:60 }
  },
  "ギルガルド刃": {
    name: [ "ギルガルド刃", "ぎるがるどやいば" ],
    base: { h:60, a:150, b:50, c:150, d:50, s:60 }
  },
  "シュシュプ": {
    name: [ "シュシュプ", "しゅしゅぷ" ],
    base: { h:78, a:52, b:60, c:63, d:65, s:23 }
  },
  "フレフワン": {
    name: [ "フレフワン", "ふれふわん" ],
    base: { h:101, a:72, b:72, c:99, d:89, s:29 }
  },
  "ペロッパフ": {
    name: [ "ペロッパフ", "ぺろっぱふ" ],
    base: { h:62, a:48, b:66, c:59, d:57, s:49 }
  },
  "ペロリーム": {
    name: [ "ペロリーム", "ぺろりーむ" ],
    base: { h:82, a:80, b:86, c:85, d:75, s:72 }
  },
  "マーイーカ": {
    name: [ "マーイーカ", "まーいーか" ],
    base: { h:53, a:54, b:53, c:37, d:46, s:45 }
  },
  "カラマネロ": {
    name: [ "カラマネロ", "からまねろ" ],
    base: { h:86, a:92, b:88, c:68, d:75, s:73 }
  },
  "カメテテ": {
    name: [ "カメテテ", "かめてて" ],
    base: { h:42, a:52, b:67, c:39, d:56, s:50 }
  },
  "ガメノデス": {
    name: [ "ガメノデス", "がめのです" ],
    base: { h:72, a:105, b:115, c:54, d:86, s:68 }
  },
  "クズモー": {
    name: [ "クズモー", "くずもー" ],
    base: { h:50, a:60, b:60, c:60, d:60, s:30 }
  },
  "ドラミドロ": {
    name: [ "ドラミドロ", "どらみどろ" ],
    base: { h:65, a:75, b:90, c:97, d:123, s:44 }
  },
  "ウデッポウ": {
    name: [ "ウデッポウ", "うでっぽう" ],
    base: { h:50, a:53, b:62, c:58, d:63, s:44 }
  },
  "ブロスター": {
    name: [ "ブロスター", "ぶろすたー" ],
    base: { h:71, a:73, b:88, c:120, d:89, s:59 }
  },
  "エリキテル": {
    name: [ "エリキテル", "えりきてる" ],
    base: { h:44, a:38, b:33, c:61, d:43, s:70 }
  },
  "エレザード": {
    name: [ "エレザード", "えれざーど" ],
    base: { h:62, a:55, b:52, c:109, d:94, s:109 }
  },
  "チゴラス": {
    name: [ "チゴラス", "ちごらす" ],
    base: { h:58, a:89, b:77, c:45, d:45, s:48 }
  },
  "ガチゴラス": {
    name: [ "ガチゴラス", "がちごらす" ],
    base: { h:82, a:121, b:119, c:69, d:59, s:71 }
  },
  "アマルス": {
    name: [ "アマルス", "あまるす" ],
    base: { h:77, a:59, b:50, c:67, d:63, s:46 }
  },
  "アマルルガ": {
    name: [ "アマルルガ", "あまるるが" ],
    base: { h:123, a:77, b:72, c:99, d:92, s:58 }
  },
  "ニンフィア": {
    name: [ "ニンフィア", "にんふぃあ" ],
    base: { h:95, a:65, b:65, c:110, d:130, s:60 }
  },
  "ルチャブル": {
    name: [ "ルチャブル", "るちゃぶる" ],
    base: { h:78, a:92, b:75, c:74, d:63, s:118 }
  },
  "デデンネ": {
    name: [ "デデンネ", "ででんね" ],
    base: { h:67, a:58, b:57, c:81, d:67, s:101 }
  },
  "メレシー": {
    name: [ "メレシー", "めれしー" ],
    base: { h:50, a:50, b:150, c:50, d:150, s:50 }
  },
  "ヌメラ": {
    name: [ "ヌメラ", "ぬめら" ],
    base: { h:45, a:50, b:35, c:55, d:75, s:40 }
  },
  "ヌメイル": {
    name: [ "ヌメイル", "ぬめいる" ],
    base: { h:68, a:75, b:53, c:83, d:113, s:60 }
  },
  "ヌメルゴン": {
    name: [ "ヌメルゴン", "ぬめるごん" ],
    base: { h:90, a:100, b:70, c:110, d:150, s:80 }
  },
  "クレッフィ": {
    name: [ "クレッフィ", "くれっふぃ" ],
    base: { h:57, a:80, b:91, c:80, d:87, s:75 }
  },
  "ボクレー": {
    name: [ "ボクレー", "ぼくれー" ],
    base: { h:43, a:70, b:48, c:50, d:60, s:38 }
  },
  "オーロット": {
    name: [ "オーロット", "おーろっと" ],
    base: { h:85, a:110, b:76, c:65, d:82, s:56 }
  },
  "バケッチャ": {
    name: [ "バケッチャ", "ばけっちゃ" ],
    base: { h:49, a:66, b:70, c:44, d:55, s:51 }
  },
  "バケッチャ小": {
    name: [ "バケッチャ小", "ばけっちゃしょう" ],
    base: { h:44, a:66, b:70, c:44, d:55, s:56 }
  },
  "バケッチャ大": {
    name: [ "バケッチャ大", "ばけっちゃだい" ],
    base: { h:54, a:66, b:70, c:44, d:55, s:46 }
  },
  "バケッチャ特": {
    name: [ "バケッチャ特", "ばけっちゃとく" ],
    base: { h:59, a:66, b:70, c:44, d:55, s:41 }
  },
  "パンプジン": {
    name: [ "パンプジン", "ぱんぷじん" ],
    base: { h:65, a:90, b:122, c:58, d:75, s:84 }
  },
  "パンプジン小": {
    name: [ "パンプジン小", "ぱんぷじんしょう" ],
    base: { h:55, a:85, b:122, c:58, d:75, s:99 }
  },
  "パンプジン大": {
    name: [ "パンプジン大", "ぱんぷじんだい" ],
    base: { h:75, a:95, b:122, c:58, d:75, s:69 }
  },
  "パンプジン特": {
    name: [ "パンプジン特", "ぱんぷじんとく" ],
    base: { h:85, a:100, b:122, c:58, d:75, s:54 }
  },
  "カチコール": {
    name: [ "カチコール", "かちこーる" ],
    base: { h:55, a:69, b:85, c:32, d:35, s:28 }
  },
  "クレベース": {
    name: [ "クレベース", "くれべーす" ],
    base: { h:95, a:117, b:184, c:44, d:46, s:28 }
  },
  "オンバット": {
    name: [ "オンバット", "おんばっと" ],
    base: { h:40, a:30, b:35, c:45, d:40, s:55 }
  },
  "オンバーン": {
    name: [ "オンバーン", "おんばーん" ],
    base: { h:85, a:70, b:80, c:97, d:80, s:123 }
  },
  "ゼルネアス": {
    name: [ "ゼルネアス", "ぜるねあす" ],
    base: { h:126, a:131, b:95, c:131, d:98, s:99 }
  },
  "イベルタル": {
    name: [ "イベルタル", "いべるたる" ],
    base: { h:126, a:131, b:95, c:131, d:98, s:99 }
  },
  "ジガルデ": {
    name: [ "ジガルデ", "じがるで", "じがるでごじゅう", "じがるでごじゅっぱーせんと" ],
    base: { h:108, a:100, b:121, c:81, d:95, s:95 }
  },
  "ジガルデ10": {
    name: [ "ジガルデ10", "じがるでじゅう", "じがるでじゅっぱーせんと" ],
    base: { h:54, a:100, b:71, c:61, d:85, s:115 }
  },
  "ジガルデ全": {
    name: [ "ジガルデ全", "じがるでぜん", "じがるでぱーふぇくと", "じがるでひゃくぱーせんと" ],
    base: { h:216, a:100, b:121, c:91, d:95, s:85 }
  },
  "ディアンシー": {
    name: [ "ディアンシー", "でぃあんしー" ],
    base: { h:50, a:100, b:150, c:100, d:150, s:50 }
  },
  "フーパ": {
    name: [ "フーパ", "ふーぱ" ],
    base: { h:80, a:110, b:60, c:150, d:130, s:70 }
  },
  "フーパ放": {
    name: [ "フーパ放", "ふーぱほう", "ふーぱあく", "ときはなたれしふーぱ" ],
    base: { h:80, a:160, b:60, c:170, d:130, s:80 }
  },
  "メガディアンシー": {
    name: [ "メガディアンシー", "めがでぃあんしー" ],
    base: { h:50, a:160, b:110, c:160, d:110, s:110 }
  },
  "ボルケニオン": {
    name: [ "ボルケニオン", "ぼるけにおん" ],
    base: { h:80, a:110, b:120, c:130, d:90, s:70 }
  },
  "モクロー": {
    name: [ "モクロー", "もくろー" ],
    base: { h:68, a:55, b:55, c:50, d:50, s:42 }
  },
  "フクスロー": {
    name: [ "フクスロー", "ふくすろー" ],
    base: { h:78, a:75, b:75, c:70, d:70, s:52 }
  },
  "ジュナイパー": {
    name: [ "ジュナイパー", "じゅないぱー" ],
    base: { h:78, a:107, b:75, c:100, d:100, s:70 }
  },
  "ニャビー": {
    name: [ "ニャビー", "にゃびー" ],
    base: { h:45, a:65, b:40, c:60, d:40, s:70 }
  },
  "ニャヒート": {
    name: [ "ニャヒート", "にゃひーと" ],
    base: { h:65, a:85, b:50, c:80, d:50, s:90 }
  },
  "ガオガエン": {
    name: [ "ガオガエン", "がおがえん" ],
    base: { h:95, a:115, b:90, c:80, d:90, s:60 }
  },
  "アシマリ": {
    name: [ "アシマリ", "あしまり" ],
    base: { h:50, a:54, b:54, c:66, d:56, s:40 }
  },
  "オシャマリ": {
    name: [ "オシャマリ", "おしゃまり" ],
    base: { h:60, a:69, b:69, c:91, d:81, s:50 }
  },
  "アシレーヌ": {
    name: [ "アシレーヌ", "あしれーぬ" ],
    base: { h:80, a:74, b:74, c:126, d:116, s:60 }
  },
  "ツツケラ": {
    name: [ "ツツケラ", "つつけら" ],
    base: { h:35, a:75, b:30, c:30, d:30, s:65 }
  },
  "ケララッパ": {
    name: [ "ケララッパ", "けららっぱ" ],
    base: { h:55, a:85, b:50, c:40, d:50, s:75 }
  },
  "ドデカバシ": {
    name: [ "ドデカバシ", "どでかばし" ],
    base: { h:80, a:120, b:75, c:75, d:75, s:60 }
  },
  "ヤングース": {
    name: [ "ヤングース", "やんぐーす" ],
    base: { h:48, a:70, b:30, c:30, d:30, s:45 }
  },
  "デカグース": {
    name: [ "デカグース", "でかぐーす" ],
    base: { h:88, a:110, b:60, c:55, d:60, s:45 }
  },
  "アゴジムシ": {
    name: [ "アゴジムシ", "あごじむし" ],
    base: { h:47, a:62, b:45, c:55, d:45, s:46 }
  },
  "デンヂムシ": {
    name: [ "デンヂムシ", "でんぢむし" ],
    base: { h:57, a:82, b:95, c:55, d:75, s:36 }
  },
  "クワガノン": {
    name: [ "クワガノン", "くわがのん" ],
    base: { h:77, a:70, b:90, c:145, d:75, s:43 }
  },
  "マケンカニ": {
    name: [ "マケンカニ", "まけんかに" ],
    base: { h:47, a:82, b:57, c:42, d:47, s:63 }
  },
  "ケケンカニ": {
    name: [ "ケケンカニ", "けけんかに" ],
    base: { h:97, a:132, b:77, c:62, d:67, s:43 }
  },
  "オドリドリ": {
    name: [ "オドリドリ", "おどりどり" ],
    base: { h:75, a:70, b:70, c:98, d:70, s:93 }
  },
  "オドリドリ炎": {
    name: [ "オドリドリ炎", "おどりどりほのお" ],
    base: { h:75, a:70, b:70, c:98, d:70, s:93 }
  },
  "オドリドリ超": {
    name: [ "オドリドリ超", "おどりどりちょう" ],
    base: { h:75, a:70, b:70, c:98, d:70, s:93 }
  },
  "オドリドリ霊": {
    name: [ "オドリドリ霊", "おどりどりれい" ],
    base: { h:75, a:70, b:70, c:98, d:70, s:93 }
  },
  "アブリー": {
    name: [ "アブリー", "あぶりー" ],
    base: { h:40, a:45, b:40, c:55, d:40, s:84 }
  },
  "アブリボン": {
    name: [ "アブリボン", "あぶりぼん" ],
    base: { h:60, a:55, b:60, c:95, d:70, s:124 }
  },
  "イワンコ": {
    name: [ "イワンコ", "いわんこ" ],
    base: { h:45, a:65, b:40, c:30, d:40, s:60 }
  },
  "ルガルガン": {
    name: [ "ルガルガン", "るがるがん" ],
    base: { h:75, a:115, b:65, c:55, d:65, s:112 }
  },
  "ルガルガン夜": {
    name: [ "ルガルガン夜", "るがるがんよる" ],
    base: { h:85, a:115, b:75, c:55, d:75, s:82 }
  },
  "ヨワシ": {
    name: [ "ヨワシ", "よわし" ],
    base: { h:45, a:20, b:20, c:25, d:25, s:40 }
  },
  "ヨワシ群": {
    name: [ "ヨワシ群", "よわしむれ" ],
    base: { h:45, a:140, b:130, c:140, d:135, s:30 }
  },
  "ヒドイデ": {
    name: [ "ヒドイデ", "ひどいで" ],
    base: { h:50, a:53, b:62, c:43, d:52, s:45 }
  },
  "ドヒドイデ": {
    name: [ "ドヒドイデ", "どひどいで" ],
    base: { h:50, a:63, b:152, c:53, d:142, s:35 }
  },
  "ドロバンコ": {
    name: [ "ドロバンコ", "どろばんこ" ],
    base: { h:70, a:100, b:70, c:45, d:55, s:45 }
  },
  "バンバドロ": {
    name: [ "バンバドロ", "ばんばどろ" ],
    base: { h:100, a:125, b:100, c:55, d:85, s:35 }
  },
  "シズクモ": {
    name: [ "シズクモ", "しずくも" ],
    base: { h:38, a:40, b:52, c:40, d:72, s:27 }
  },
  "オニシズクモ": {
    name: [ "オニシズクモ", "おにしずくも" ],
    base: { h:68, a:70, b:92, c:50, d:132, s:42 }
  },
  "カリキリ": {
    name: [ "カリキリ", "かりきり" ],
    base: { h:40, a:55, b:35, c:50, d:35, s:35 }
  },
  "ラランテス": {
    name: [ "ラランテス", "ららんてす" ],
    base: { h:70, a:105, b:90, c:80, d:90, s:45 }
  },
  "ネマシュ": {
    name: [ "ネマシュ", "ねましゅ" ],
    base: { h:40, a:35, b:55, c:65, d:75, s:15 }
  },
  "マシェード": {
    name: [ "マシェード", "ましぇーど" ],
    base: { h:60, a:45, b:80, c:90, d:100, s:30 }
  },
  "ヤトウモリ": {
    name: [ "ヤトウモリ", "やとうもり" ],
    base: { h:48, a:44, b:40, c:71, d:40, s:77 }
  },
  "エンニュート": {
    name: [ "エンニュート", "えんにゅーと" ],
    base: { h:68, a:64, b:60, c:111, d:60, s:117 }
  },
  "ヌイコグマ": {
    name: [ "ヌイコグマ", "ぬいこぐま" ],
    base: { h:70, a:75, b:50, c:45, d:50, s:50 }
  },
  "キテルグマ": {
    name: [ "キテルグマ", "きてるぐま" ],
    base: { h:120, a:125, b:80, c:55, d:60, s:60 }
  },
  "アマカジ": {
    name: [ "アマカジ", "あまかじ" ],
    base: { h:42, a:30, b:38, c:30, d:38, s:32 }
  },
  "アママイコ": {
    name: [ "アママイコ", "あままいこ" ],
    base: { h:52, a:40, b:48, c:40, d:48, s:62 }
  },
  "アマージョ": {
    name: [ "アマージョ", "あまーじょ" ],
    base: { h:72, a:120, b:98, c:50, d:98, s:72 }
  },
  "キュワワー": {
    name: [ "キュワワー", "きゅわわー" ],
    base: { h:51, a:52, b:90, c:82, d:110, s:100 }
  },
  "ヤレユータン": {
    name: [ "ヤレユータン", "やれゆーたん" ],
    base: { h:90, a:60, b:80, c:90, d:110, s:60 }
  },
  "ナゲツケサル": {
    name: [ "ナゲツケサル", "なげつけさる" ],
    base: { h:100, a:120, b:90, c:40, d:60, s:80 }
  },
  "コソクムシ": {
    name: [ "コソクムシ", "こそくむし" ],
    base: { h:25, a:35, b:40, c:20, d:30, s:80 }
  },
  "グソクムシャ": {
    name: [ "グソクムシャ", "ぐそくむしゃ" ],
    base: { h:75, a:125, b:140, c:60, d:90, s:40 }
  },
  "スナバァ": {
    name: [ "スナバァ", "すなばぁ" ],
    base: { h:55, a:55, b:80, c:70, d:45, s:15 }
  },
  "シロデスナ": {
    name: [ "シロデスナ", "しろですな" ],
    base: { h:85, a:75, b:110, c:100, d:75, s:35 }
  },
  "ナマコブシ": {
    name: [ "ナマコブシ", "なまこぶし" ],
    base: { h:55, a:60, b:130, c:30, d:130, s:5 }
  },
  "タイプ：ヌル": {
    name: [ "タイプ：ヌル", "たいぷぬる", "たいぷ：ぬる" ],
    base: { h:95, a:95, b:95, c:95, d:95, s:59 }
  },
  "シルヴァディ": {
    name: [ "シルヴァディ", "しるゔぁでぃ" ],
    base: { h:95, a:95, b:95, c:95, d:95, s:95 }
  },
  "メテノ": {
    name: [ "メテノ", "めての" ],
    base: { h:60, a:60, b:100, c:60, d:100, s:60 }
  },
  "メテノ核": {
    name: [ "メテノ核", "めてのかく" ],
    base: { h:60, a:100, b:60, c:100, d:60, s:120 }
  },
  "ネッコアラ": {
    name: [ "ネッコアラ", "ねっこあら" ],
    base: { h:65, a:115, b:65, c:75, d:95, s:65 }
  },
  "バクガメス": {
    name: [ "バクガメス", "ばくがめす" ],
    base: { h:60, a:78, b:135, c:91, d:85, s:36 }
  },
  "トゲデマル": {
    name: [ "トゲデマル", "とげでまる" ],
    base: { h:65, a:98, b:63, c:40, d:73, s:96 }
  },
  "ミミッキュ": {
    name: [ "ミミッキュ", "みみっきゅ" ],
    base: { h:55, a:90, b:80, c:50, d:105, s:96 }
  },
  "ハギギシリ": {
    name: [ "ハギギシリ", "はぎぎしり" ],
    base: { h:68, a:105, b:70, c:70, d:70, s:92 }
  },
  "ジジーロン": {
    name: [ "ジジーロン", "じじーろん" ],
    base: { h:78, a:60, b:85, c:135, d:91, s:36 }
  },
  "ダダリン": {
    name: [ "ダダリン", "だだりん" ],
    base: { h:70, a:131, b:100, c:86, d:90, s:40 }
  },
  "ジャラコ": {
    name: [ "ジャラコ", "じゃらこ" ],
    base: { h:45, a:55, b:65, c:45, d:45, s:45 }
  },
  "ジャランゴ": {
    name: [ "ジャランゴ", "じゃらんご" ],
    base: { h:55, a:75, b:90, c:65, d:70, s:65 }
  },
  "ジャラランガ": {
    name: [ "ジャラランガ", "じゃららんが" ],
    base: { h:75, a:110, b:125, c:100, d:105, s:85 }
  },
  "カプ・コケコ": {
    name: [ "カプ・コケコ", "かぷこけこ", "かぷ・こけこ" ],
    base: { h:70, a:115, b:85, c:95, d:75, s:130 }
  },
  "カプ・テテフ": {
    name: [ "カプ・テテフ", "かぷててふ", "かぷ・ててふ" ],
    base: { h:70, a:85, b:75, c:130, d:115, s:95 }
  },
  "カプ・ブルル": {
    name: [ "カプ・ブルル", "かぷぶるる", "かぷ・ぶるる" ],
    base: { h:70, a:130, b:115, c:85, d:95, s:75 }
  },
  "カプ・レヒレ": {
    name: [ "カプ・レヒレ", "かぷれひれ", "かぷ・れひれ" ],
    base: { h:70, a:75, b:115, c:95, d:130, s:85 }
  },
  "コスモッグ": {
    name: [ "コスモッグ", "こすもっぐ" ],
    base: { h:43, a:29, b:31, c:29, d:31, s:37 }
  },
  "コスモウム": {
    name: [ "コスモウム", "こすもうむ" ],
    base: { h:43, a:29, b:131, c:29, d:131, s:37 }
  },
  "ソルガレオ": {
    name: [ "ソルガレオ", "そるがれお" ],
    base: { h:137, a:137, b:107, c:113, d:89, s:97 }
  },
  "ルナアーラ": {
    name: [ "ルナアーラ", "るなあーら" ],
    base: { h:137, a:113, b:89, c:137, d:107, s:97 }
  },
  "ウツロイド": {
    name: [ "ウツロイド", "うつろいど" ],
    base: { h:109, a:53, b:47, c:127, d:131, s:103 }
  },
  "マッシブーン": {
    name: [ "マッシブーン", "まっしぶーん" ],
    base: { h:107, a:139, b:139, c:53, d:53, s:79 }
  },
  "フェローチェ": {
    name: [ "フェローチェ", "ふぇろーちぇ" ],
    base: { h:71, a:137, b:37, c:137, d:37, s:151 }
  },
  "デンジュモク": {
    name: [ "デンジュモク", "でんじゅもく" ],
    base: { h:83, a:89, b:71, c:173, d:71, s:83 }
  },
  "テッカグヤ": {
    name: [ "テッカグヤ", "てっかぐや" ],
    base: { h:97, a:101, b:103, c:107, d:101, s:61 }
  },
  "カミツルギ": {
    name: [ "カミツルギ", "かみつるぎ" ],
    base: { h:59, a:181, b:131, c:59, d:31, s:109 }
  },
  "アクジキング": {
    name: [ "アクジキング", "あくじきんぐ" ],
    base: { h:223, a:101, b:53, c:97, d:53, s:43 }
  },
  "ネクロズマ": {
    name: [ "ネクロズマ", "ねくろずま" ],
    base: { h:97, a:107, b:101, c:127, d:89, s:79 }
  },
  "マギアナ": {
    name: [ "マギアナ", "まぎあな" ],
    base: { h:80, a:95, b:115, c:130, d:115, s:65 }
  },
  "コラッタ(アローラ)": {
    name: [ "コラッタ(アローラ)", "こらったあろーら" ],
    base: { h:30, a:56, b:35, c:25, d:35, s:72 }
  },
  "ラッタ(アローラ)": {
    name: [ "ラッタ(アローラ)", "らったあろーら" ],
    base: { h:75, a:71, b:70, c:40, d:80, s:77 }
  },
  "ライチュウ(アローラ)": {
    name: [ "ライチュウ(アローラ)", "らいちゅうあろーら" ],
    base: { h:60, a:85, b:50, c:95, d:85, s:110 }
  },
  "サンド(アローラ)": {
    name: [ "サンド(アローラ)", "さんどあろーら" ],
    base: { h:50, a:75, b:90, c:10, d:35, s:40 }
  },
  "サンドパン(アローラ)": {
    name: [ "サンドパン(アローラ)", "さんどぱんあろーら" ],
    base: { h:75, a:100, b:120, c:25, d:65, s:65 }
  },
  "ロコン(アローラ)": {
    name: [ "ロコン(アローラ)", "ろこんあろーら" ],
    base: { h:38, a:41, b:40, c:50, d:65, s:65 }
  },
  "キュウコン(アローラ)": {
    name: [ "キュウコン(アローラ)", "きゅうこんあろーら" ],
    base: { h:73, a:67, b:75, c:81, d:100, s:109 }
  },
  "ディグダ(アローラ)": {
    name: [ "ディグダ(アローラ)", "でぃぐだあろーら" ],
    base: { h:10, a:55, b:30, c:35, d:45, s:90 }
  },
  "ダグトリオ(アローラ)": {
    name: [ "ダグトリオ(アローラ)", "だぐとりおあろーら" ],
    base: { h:35, a:100, b:60, c:50, d:70, s:110 }
  },
  "ニャース(アローラ)": {
    name: [ "ニャース(アローラ)", "にゃーすあろーら" ],
    base: { h:40, a:35, b:35, c:50, d:40, s:90 }
  },
  "ペルシアン(アローラ)": {
    name: [ "ペルシアン(アローラ)", "ぺるしあんあろーら" ],
    base: { h:65, a:60, b:60, c:75, d:65, s:115 }
  },
  "イシツブテ(アローラ)": {
    name: [ "イシツブテ(アローラ)", "いしつぶてあろーら" ],
    base: { h:40, a:80, b:100, c:30, d:30, s:20 }
  },
  "ゴローン(アローラ)": {
    name: [ "ゴローン(アローラ)", "ごろーんあろーら" ],
    base: { h:55, a:95, b:115, c:45, d:45, s:35 }
  },
  "ゴローニャ(アローラ)": {
    name: [ "ゴローニャ(アローラ)", "ごろーにゃあろーら" ],
    base: { h:80, a:120, b:130, c:55, d:65, s:45 }
  },
  "ベトベター(アローラ)": {
    name: [ "ベトベター(アローラ)", "べとべたーあろーら" ],
    base: { h:80, a:80, b:50, c:40, d:50, s:25 }
  },
  "ベトベトン(アローラ)": {
    name: [ "ベトベトン(アローラ)", "べとべとんあろーら" ],
    base: { h:105, a:105, b:75, c:65, d:100, s:50 }
  },
  "ナッシー(アローラ)": {
    name: [ "ナッシー(アローラ)", "なっしーあろーら" ],
    base: { h:95, a:105, b:85, c:125, d:75, s:45 }
  },
  "ガラガラ(アローラ)": {
    name: [ "ガラガラ(アローラ)", "がらがらあろーら" ],
    base: { h:60, a:80, b:110, c:50, d:80, s:45 }
  }
};
var n = {
    "さみしがり": {a:1.1, b:0.9, c:1, d:1, s:1},
    "ゆうかん": {a:1.1, b:1, c:1, d:1, s:0.9},
    "いじっぱり": {a:1.1, b:1, c:0.9, d:1, s:1},
    "やんちゃ": {a:1.1, b:1, c:1, d:0.9, s:1},
    "ずぶとい": {a:0.9, b:1.1, c:1, d:1, s:1},
    "のんき": {a:1, b:1.1, c:1, d:1, s:0.9},
    "わんぱく": {a:1, b:1.1, c:0.9, d:1, s:1},
    "のうてんき": {a:1, b:1.1, c:1, d:0.9, s:1},
    "おくびょう": {a:0.9, b:1, c:1, d:1, s:1.1},
    "せっかち": {a:1, b:0.9, c:1, d:1, s:1.1},
    "ようき": {a:1, b:1, c:0.9, d:1, s:1.1},
    "むじゃき": {a:1, b:1, c:1, d:0.9, s:1.1},
    "ひかえめ": {a:0.9, b:1, c:1.1, d:1, s:1},
    "おっとり": {a:1, b:0.9, c:1.1, d:1, s:1},
    "れいせい": {a:1, b:1, c:1.1, d:1, s:0.9},
    "うっかりや": {a:1, b:1, c:1.1, d:0.9, s:1},
    "おだやか": {a:0.9, b:1, c:1, d:1.1, s:1},
    "おとなしい": {a:1, b:0.9, c:1, d:1.1, s:1},
    "なまいき": {a:1, b:1, c:1, d:1.1, s:0.9},
    "しんちょう": {a:1, b:1, c:0.9, d:1.1, s:1},
    "がんばりや": {a:1, b:1, c:1, d:1, s:1},
    "きまぐれ": {a:1, b:1, c:1, d:1, s:1},
    "すなお": {a:1, b:1, c:1, d:1, s:1},
    "てれや": {a:1, b:1, c:1, d:1, s:1},
    "まじめ": {a:1, b:1, c:1, d:1, s:1}
};

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

$(document).ready(function(){
    $("#poke").autocomplete({
        source: function(request, response){
            var list = [];
            p_keys.forEach(x => {
                if(p[x].name.reduce((p, c) => p || c.includes(request.term), false)){
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
</script>

