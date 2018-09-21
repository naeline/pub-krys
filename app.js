// CHANGEMENT DES CLASS DES PARAGRAPHES DU PREMIER SLIDE
function drawPub () {
	var un = document.getElementById('un');
	un.className = 'un';
	var deux = document.getElementById('deux');
	deux.className = 'deux';
	var trois = document.getElementById('trois');
	trois.className = 'trois';
}
// CHANGEMENT DES CLASS DES PARAGRAPHES DU SECOND SLIDE ET DU LOGO
function drawPubSecond () {
	var quatre = document.getElementById('quatre');
	quatre.className = 'quatre';	
	var cinq = document.getElementById('cinq');
	cinq.className = 'cinq';
	var six = document.getElementById('six');
	six.className = 'six';
	var logo = document.getElementById('logo_container');
	logo.className = 'logo1';  //CHANGEMENT DU LOGO
}
// CHANGEMENT DES CLASS DES PARAGRAPHES DU TROISIEME SLIDE
function drawPubThird () {
	var sept = document.getElementById('sept');
	sept.className = 'sept';
	var huit = document.getElementById('huit');
	huit.className = 'huit';
	var neuf = document.getElementById('neuf');
	neuf.className = 'neuf';
}
// CHANGEMENT DES CLASS DES PARAGRAPHES DU QUATRIEME SLIDE ETDE LA MAP
function drawPubFourth () {
	var dix = document.getElementById('dix');
	dix.className = 'dix';
	var onze = document.getElementById('onze');
	onze.className = 'onze';
	var douze = document.getElementById('douze');
	douze.className = 'douze';
	var map = document.getElementById('map');
	map.className = 'map_on';   //APPARITION DE LA MAP
}
setTimeout(drawPub, 3000);
setTimeout(drawPubSecond, 6000);
setTimeout(drawPubThird, 9000);
setTimeout(drawPubFourth, 12000);  //APPEL DES FONCTIONS TOUTES LES 3 SECONDES