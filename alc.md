---
layout: default
title: 自動ログイン
---

## 自動ログイン

<form name="code">

<table border="0">

<tr>
<td>Account</td>
<td><input type="text" name="usr_id" value=""></td>
</tr>

<tr>
<td>Password</td>
<td><input type="text" name="usr_pass" value=""><td>
</tr>

<tr>
<td>Matrix</td>
<td>
<textarea name="matrix" rows="8" cols="20">
</textarea>
</td>
</tr>

<tr>
<td>code</td>
<td><input type="text" name="code1" value=""></td>
</tr>

<tr><td colspan="2">
<input type="radio" name="usr_int" value="pc" id="b1" checked><label for="b1">PC</label>
<input type="radio" name="usr_int" value="sp" id="b2"><label for="b2">スマートフォン</label>
</td></tr>

<tr><td colspan="2">
<input type="button" value="作成" onclick="create()">
</td></tr>

<tr>
<td colspan="2"><div id="bml">Output</div></td>
</tr>

<tr>
<td colspan="2">
<textarea name="output1" rows="4" cols="20">
</textarea>
</td>
</tr>

</table>

</form>

<script>
function create(){
    var a="";
    var b="";
    var d="";
    var e="";

    var id = document.getElementsByName("usr_id")[0].value;
    var pass = document.getElementsByName("usr_pass")[0].value;
    var matrix = document.getElementsByName("matrix")[0].value;

    var c = document.getElementsByName("code1")[0].value;

    var x = "";

    for(var i=0;i<70;i++){
        x += (matrix.charAt(i*2));
    }
    x += id;
    x += pass;

    if(c == ""){
        for(var h=0;h<8;h++){
            c += String.fromCharCode(Math.floor(Math.random () * 26) + 65)
        }
        b = '"' + c + '"'
    }

    else{
        b = 'prompt("Input Code","")'
    }

    a += "[";

    for(j=0;j<Math.floor(x.length/c.length);j++){
        for(k=0;k<c.length;k++){
            a += (x.charCodeAt((j*c.length)+k) ^ c.charCodeAt(k));
            a += ",";
        }
    }
    for(l=0;l<(x.length%c.length);l++){
        a += (x.charCodeAt(c.length*Math.floor(x.length/c.length)+l) ^ c.charCodeAt(l));
        a += ",";

    }
    a = a.slice(0, -1);
    a += "]";

    for(var g=0;g<document.code.usr_int.length;g++){
        if(document.code.usr_int[g].checked){
            e = document.code.usr_int[g].value;
        }
    }
    if(e == "pc"){
        d = 'for(var i=0;i<3;i++){var p=document.getElementsByTagName("th")[6+i*2].innerHTML;document.getElementsByName("message"+(3+i))[0].value=a.charAt(10*(p.charCodeAt(3)-49)+p.charCodeAt(1)-65);}'
    }
    else{
        d = 'for(var i=0;i<3;i++){var p=document.getElementsByTagName("td")[5+i].innerHTML;document.getElementsByName("message"+(3+i))[0].value=a.charAt(10*(p.charCodeAt(9)-49)+p.charCodeAt(7)-65);}'
    }

    if(id == ""){
        a = 'javascript:(function(){var x=' + a + ';var c=' + b + ';var a="";for(var j=0;j<Math.floor(x.length/c.length);j++){for(var k=0;k<c.length;k++){a += String.fromCharCode(x[j*c.length+k] ^ c.charCodeAt(k));}}for(var l=0;l<(x.length%c.length);l++){a += String.fromCharCode(x[c.length*Math.floor(x.length/c.length)+l] ^ c.charCodeAt(l));}' + d + 'document.login.submit();})();';
    }
    else{
        a = 'javascript:(function(){var x=' + a + ';var c=' + b + ';var a="";for(var j=0;j<Math.floor(x.length/c.length);j++){for(var k=0;k<c.length;k++){a += String.fromCharCode(x[j*c.length+k] ^ c.charCodeAt(k));}}for(var l=0;l<(x.length%c.length);l++){a += String.fromCharCode(x[c.length*Math.floor(x.length/c.length)+l] ^ c.charCodeAt(l));}var r="";var q="";var y=document.getElementsByTagName("td")[1].innerHTML;if(y.charAt(0)=="P"){for(var h=70;h<78;h++){r += a.charAt(h);}document.getElementsByName("usr_name")[0].value=r;for(var g=78;g<a.length;g++){q += a.charAt(g);}document.getElementsByName("usr_password")[0].value=q;}else{' + d + '}document.login.submit();})();';
    }

    document.getElementsByName("output1")[0].value = a;

    document.getElementById("bml").innerHTML = '<a href="' + a + '">AutoLogin</a>';
}
</script>
