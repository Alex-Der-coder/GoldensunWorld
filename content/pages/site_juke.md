---
raw: true
---
<div id="juke" style="position:relative; width:300px; height:150px; margin:0; padding:0; background:url('/juke/layer.png') no-repeat top left; overflow:hidden;">

<audio id="juke-audio" loop preload="none"
  onloadstart="document.getElementById('DivLoad').style.visibility='visible';"
  oncanplay="document.getElementById('DivLoad').style.visibility='hidden';"
  onerror="if(this.getAttribute('src')){document.getElementById('DivLoad').style.visibility='hidden';document.getElementById('juke-label').textContent='Son indisponible';}"></audio>

<div id="DivLoad" style="position:absolute; width:80px; height:16px; z-index:4; left:20px; top:94px; visibility:hidden;">
<table width="130" height="31" bgcolor="#003399" cellpadding="1" border="0" cellspacing="0"><tr><td>
<table width="100%" height="100%" bgcolor="#0099ff" cellpadding="0" cellspacing="0"><tr><td align="center" valign="middle">
<a style="font-family:verdana;font-size:9px;color:#ffffff;font-weight:bold;">Musique en cours<br>de chargement</a>
</td></tr></table></td></tr></table>
</div>

<div id="Layer2" style="position:absolute; width:80px; height:16px; z-index:3; left:165px; top:11px;">
<table width="124" height="16" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td>
		<form name="form1" onsubmit="return false;">
<select id="juke-list" name="ListeUrl" size="1" style="border:1px solid #990000; font-size:8pt; color:#000000; font-family:Verdana; background-color:#FFFFFF;"
  onchange="var o=this.options[this.selectedIndex];if(!o.value){alert('Veuillez choisir une destination.');return;}var a=document.getElementById('juke-audio');a.src='/juke/audio/'+o.value+'.mp3';a.play().catch(function(){});document.getElementById('juke-label').textContent=o.text.trim();">
<option value="">- Playlist -</option>
<option value="98">-Kesenai Tsumi-&nbsp;&nbsp;</option>
<option value="97">- Intégral -</option>
<option value="1">soundtrack 1</option><option value="2">soundtrack 2</option><option value="3">soundtrack 3</option><option value="4">soundtrack 4</option><option value="5">soundtrack 5</option><option value="6">soundtrack 6</option><option value="7">soundtrack 7</option><option value="8">soundtrack 8</option><option value="9">soundtrack 9</option><option value="10">soundtrack 10</option><option value="11">soundtrack 11</option><option value="12">soundtrack 12</option><option value="13">soundtrack 13</option><option value="14">soundtrack 14</option><option value="15">soundtrack 15</option><option value="16">soundtrack 16</option><option value="17">soundtrack 17</option><option value="18">soundtrack 18</option><option value="19">soundtrack 19</option><option value="20">soundtrack 20</option><option value="21">soundtrack 21</option><option value="22">soundtrack 22</option><option value="23">soundtrack 23</option><option value="24">soundtrack 24</option><option value="25">soundtrack 25</option><option value="26">soundtrack 26</option><option value="27">soundtrack 27</option><option value="28">soundtrack 28</option><option value="29">soundtrack 29</option><option value="30">soundtrack 30</option><option value="31">soundtrack 31</option><option value="32">soundtrack 32</option><option value="33">soundtrack 33</option><option value="34">soundtrack 34</option><option value="35">soundtrack 35</option><option value="36">soundtrack 36</option><option value="37">soundtrack 37</option><option value="38">soundtrack 38</option><option value="39">soundtrack 39</option><option value="40">soundtrack 40</option><option value="41">soundtrack 41</option><option value="42">soundtrack 42</option><option value="43">soundtrack 43</option><option value="44">soundtrack 44</option><option value="45">soundtrack 45</option><option value="46">soundtrack 46</option><option value="47">soundtrack 47</option><option value="48">soundtrack 48</option><option value="49">soundtrack 49</option><option value="50">soundtrack 50</option><option value="51">soundtrack 51</option><option value="52">soundtrack 52</option><option value="53">soundtrack 53</option><option value="54">soundtrack 54</option><option value="55">soundtrack 55</option><option value="56">soundtrack 56</option><option value="57">soundtrack 57</option><option value="58">soundtrack 58</option><option value="59">soundtrack 59</option><option value="60">soundtrack 60</option><option value="61">soundtrack 61</option><option value="62">soundtrack 62</option><option value="63">soundtrack 63</option><option value="64">soundtrack 64</option><option value="65">soundtrack 65</option><option value="66">soundtrack 66</option><option value="67">soundtrack 67</option><option value="68">soundtrack 68</option><option value="69">soundtrack 69</option><option value="70">soundtrack 70</option><option value="71">soundtrack 71</option><option value="72">soundtrack 72</option><option value="73">soundtrack 73</option><option value="74">soundtrack 74</option><option value="75">soundtrack 75</option><option value="76">soundtrack 76</option><option value="77">soundtrack 77</option><option value="78">soundtrack 78</option><option value="79">soundtrack 79</option><option value="80">soundtrack 80</option><option value="81">soundtrack 81</option><option value="82">soundtrack 82</option><option value="83">soundtrack 83</option><option value="84">soundtrack 84</option><option value="85">soundtrack 85</option><option value="86">soundtrack 86</option><option value="87">soundtrack 87</option><option value="88">soundtrack 88</option><option value="89">soundtrack 89</option><option value="90">soundtrack 90</option><option value="91">soundtrack 91</option><option value="92">soundtrack 92</option><option value="93">soundtrack 93</option><option value="94">soundtrack 94</option><option value="95">soundtrack 95</option><option value="96">soundtrack 96</option>
</select>
		</form>
		</td>
	</tr>
</table>
</div>

<div id="Layer1" style="position:absolute; width:50px; height:54px; z-index:2; left:18px; top:82px;">
<table width="134" height="54" border="0" cellpadding="4" cellspacing="0" bgcolor="#FFFFF9">
	<tr>
		<td><font face="Verdana" size="1">
		<b><center>
		<a href="#" onclick="var s=document.getElementById('juke-list');s.selectedIndex=s.selectedIndex>1?s.selectedIndex-1:s.options.length-1;s.onchange();return false;">
		<img src="/juke/prev.gif" width="10" height="10" border="0" alt="Précédent"></a> &nbsp;
		<a href="#" onclick="var a=document.getElementById('juke-audio');a.pause();a.currentTime=0;return false;">
		<img src="/juke/stop.gif" width="10" height="10" border="0" alt="Stop"></a> &nbsp;
		<a href="#" onclick="document.getElementById('juke-audio').pause();return false;">
		<img src="/juke/pause.gif" width="6" height="10" border="0" alt="Pause"></a> &nbsp;
		<a href="#" onclick="var a=document.getElementById('juke-audio');if(!a.getAttribute('src')){var s=document.getElementById('juke-list');s.selectedIndex=3;s.onchange();}else{a.play().catch(function(){});}return false;">
		<img src="/juke/play.gif" width="10" height="10" border="0" alt="Play"></a> &nbsp;
		<a href="#" onclick="var s=document.getElementById('juke-list');s.selectedIndex=s.selectedIndex<s.options.length-1?s.selectedIndex+1:1;s.onchange();return false;">
		<img src="/juke/next.gif" width="10" height="10" border="0" alt="Suivant"></a>
		<br>
		<span id="juke-label">Choisissez un son</span></center></b></font>
		</td>
	</tr>
</table>
</div>

</div>
