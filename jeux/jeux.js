exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {

	case "1de": //LANCE UN DÉ
		var mp3De = "plugins/jeux/medias/de.mp3";
			SARAH.play(mp3De);

		var Txt = new Array; 
			Txt[0] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 1.";
			Txt[1] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 2.";
			Txt[2] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 3.";
			Txt[3] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 4.";
			Txt[4] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 5.";
			Txt[5] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
	break;

		case "1depipe": //LANCE UN DÉ PIPÉ (50% de chance de tomber sur le 6) - résultat modifiable par le résultat de votre choix
		var mp3De = "plugins/jeux/medias/de.mp3";
			SARAH.play(mp3De);

		var Txt = new Array; 
			Txt[0] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 1.";
			Txt[1] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 2.";
			Txt[2] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 3.";
			Txt[3] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 4.";
			Txt[4] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 5.";
			Txt[5] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[6] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[7] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[8] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[9] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[10] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[11] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
			Txt[12] = "je lance un dé. voila, c'est fait : le résultat obtenu est : 6.";
	break;

	case "2de": //LANCE DEUX DÉS
		var mp3De = "plugins/jeux/medias/de.mp3";
			SARAH.play(mp3De);
		
		var Txt = new Array; 
			Txt[0] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 1, égale : 2.";
			Txt[1] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 2, égale : 3.";
			Txt[2] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 3, égale : 4.";
			Txt[3] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 4, égale : 5.";
			Txt[4] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 5, égale : 6.";
			Txt[5] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 6, égale : 7.";
			Txt[6] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 1, égale : 3.";
			Txt[7] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 2, égale : 4.";
			Txt[8] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 3, égale : 5.";
			Txt[9] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 4, égale : 6.";
			Txt[10] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 5, égale : 7.";
			Txt[11] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 6, égale : 8.";
			Txt[12] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 1, égale : 4.";
			Txt[13] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 2, égale : 5.";
			Txt[14] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 3, égale : 6.";
			Txt[15] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 4, égale : 7.";
			Txt[16] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 5, égale : 8.";
			Txt[17] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 6, égale : 9.";
			Txt[18] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 1, égale : 5.";
			Txt[19] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 2, égale : 6.";
			Txt[20] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 3, égale : 7.";
			Txt[21] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 4, égale : 8.";
			Txt[22] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 5, égale : 9.";
			Txt[23] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 6, égale : 10.";
			Txt[24] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 1, égale : 6.";
			Txt[25] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 2, égale : 7.";
			Txt[26] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 3, égale : 8.";
			Txt[27] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 4, égale : 9.";
			Txt[28] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 5, égale : 10.";
			Txt[29] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 6, égale : 11.";
			Txt[30] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 1, égale : 7.";
			Txt[31] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 2, égale : 8.";
			Txt[32] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 3, égale : 9.";
			Txt[33] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 4, égale : 10.";
			Txt[34] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 5, égale : 11.";
			Txt[35] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
	break;

		case "2depipe": //LANCE DEUX DÉS PIPÉS (50% de chance de tomber sur un double 6) - résultat modifiable par le résultat de votre choix
		var mp3De = "plugins/jeux/medias/de.mp3";
			SARAH.play(mp3De);
		
		var Txt = new Array; 
			Txt[0] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 1, égale : 2.";
			Txt[1] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 2, égale : 3.";
			Txt[2] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 3, égale : 4.";
			Txt[3] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 4, égale : 5.";
			Txt[4] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 5, égale : 6.";
			Txt[5] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 1, et 6, égale : 7.";
			Txt[6] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 1, égale : 3.";
			Txt[7] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 2, égale : 4.";
			Txt[8] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 3, égale : 5.";
			Txt[9] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 4, égale : 6.";
			Txt[10] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 5, égale : 7.";
			Txt[11] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 2, et 6, égale : 8.";
			Txt[12] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 1, égale : 4.";
			Txt[13] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 2, égale : 5.";
			Txt[14] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 3, égale : 6.";
			Txt[15] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 4, égale : 7.";
			Txt[16] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 5, égale : 8.";
			Txt[17] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 3, et 6, égale : 9.";
			Txt[18] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 1, égale : 5.";
			Txt[19] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 2, égale : 6.";
			Txt[20] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 3, égale : 7.";
			Txt[21] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 4, égale : 8.";
			Txt[22] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 5, égale : 9.";
			Txt[23] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 4, et 6, égale : 10.";
			Txt[24] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 1, égale : 6.";
			Txt[25] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 2, égale : 7.";
			Txt[26] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 3, égale : 8.";
			Txt[27] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 4, égale : 9.";
			Txt[28] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 5, égale : 10.";
			Txt[29] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 5, et 6, égale : 11.";
			Txt[30] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 1, égale : 7.";
			Txt[31] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 2, égale : 8.";
			Txt[32] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 3, égale : 9.";
			Txt[33] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 4, égale : 10.";
			Txt[34] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : 6, et 5, égale : 11.";
			Txt[35] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[36] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[37] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[38] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[39] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[40] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[41] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[42] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[43] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[44] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[45] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[46] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[47] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[48] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[49] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[50] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[51] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[52] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[53] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[54] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[55] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[56] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[57] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[58] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[59] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[60] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[61] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[62] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[63] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[64] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[65] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[66] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[67] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[68] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[69] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
			Txt[70] = "je lance deux dé. voila, c'est fait : le résultat obtenu est : double 6, égale : 12.";
	break;

	case "carte": //CHOISI UNE CARTE
		var mp3Carte = "plugins/jeux/medias/carte.mp3";
			SARAH.play(mp3Carte);

		var Txt = new Array; 
			Txt[0] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le joker.";
			Txt[1] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : l'as de coeur.";
			Txt[2] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 2 de coeur.";
			Txt[3] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 3 de coeur.";
			Txt[4] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 4 de coeur.";
			Txt[5] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 5 de coeur.";
			Txt[6] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 6 de coeur.";
			Txt[7] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 7 de coeur.";
			Txt[8] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 8 de coeur.";
			Txt[9] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 9 de coeur.";
			Txt[10] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 10 de coeur.";
			Txt[11] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le vallet de coeur.";
			Txt[12] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : la reine de coeur.";
			Txt[13] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le roi de coeur.";
			Txt[14] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : l'as de carro.";
			Txt[15] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 2 de carro.";
			Txt[16] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 3 de carro.";
			Txt[17] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 4 de carro.";
			Txt[18] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 5 de carro.";
			Txt[19] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 6 de carro.";
			Txt[20] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 7 de carro.";
			Txt[21] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 8 de carro.";
			Txt[22] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 9 de carro.";
			Txt[23] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 10 de carro.";
			Txt[24] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le vallet de carro.";
			Txt[25] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : la reine de carro.";
			Txt[26] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le roi de carro.";
			Txt[27] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : l'as de pique.";
			Txt[28] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 2 de pique.";
			Txt[29] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 3 de pique.";
			Txt[30] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 4 de pique.";
			Txt[31] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 5 de pique.";
			Txt[32] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 6 de pique.";
			Txt[33] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 7 de pique.";
			Txt[34] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 8 de pique.";
			Txt[35] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 9 de pique.";
			Txt[36] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 10 de pique.";
			Txt[37] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le vallet de pique.";
			Txt[38] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : la reine de pique.";
			Txt[39] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le roi de pique.";
			Txt[40] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : l'as de traifle.";
			Txt[41] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 2 de traifle.";
			Txt[42] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 3 de traifle.";
			Txt[43] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 4 de traifle.";
			Txt[44] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 5 de traifle.";
			Txt[45] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 6 de traifle.";
			Txt[46] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 7 de traifle.";
			Txt[47] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 8 de traifle.";
			Txt[48] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le 9 de traifle.";
			Txt[49] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : le 10 de traifle.";
			Txt[50] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le vallet de traifle.";
			Txt[51] = "je mélange les carte. maintenant j'en choisi une au hasard : voila, c'est fait : j'ai choisi : la reine de traifle.";
			Txt[52] = "je mélange un peu le jeu d'abord. maintenant je choisi une carte au hasard : voila, c'est fait : j'ai choisi : le roi de traifle.";
	break;

	case "pile-face": //PILE OU FACE
		var Txt = new Array; 
			Txt[0] = "okay, on joue à pile ou face. à toi l'honneur, que choisi tu?";
			Txt[1] = "super, j'adore ce jeu. je te laisse choisir. tu prend pile? ou face.";
			Txt[2] = "géniale ton idée. choisi le côté que tu veux.";
			Txt[3] = "avec plaisir, choisi ton côté.";
	break;

	case "pile": //Je choisi pile
		var mp3Piece = "plugins/jeux/medias/piece.mp3";
			SARAH.play(mp3Piece);

		var Txt = new Array; 
			Txt[0] = "okay, alors moi je choisi face. voila. c'est face. pas de chance, tu as perdu.";
			Txt[1] = "okay, alors moi je choisi face. voila. c'est pile. bravo, c'est toi qui gagne.";
			Txt[2] = "D'accord, du coup, moi je prend face. attention. c'est face. super, j'ai gagné.";
			Txt[3] = "D'accord, du coup, moi je prend face. attention. c'est pile. ho zut, j'ai perdu.";
	break;

	case "face": //Je choisi face
		var mp3Piece = "plugins/jeux/medias/piece.mp3";
			SARAH.play(mp3Piece);

		var Txt = new Array; 
			Txt[0] = "okay, alors moi je choisi pile. voila. c'est face. félicitation, tu as gagné.";
			Txt[1] = "okay, alors moi je choisi pile. voila. c'est pile. pas de chance, tu as perdu.";
			Txt[2] = "D'accord, du coup, moi je prend pile. attention. c'est face. ho mince, j'ai perdu.";
			Txt[3] = "D'accord, du coup, moi je prend pile. attention. c'est pile. chouette, j'ai gagné.";
	break;
  }    
  

  
 var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});

 }
 