(function(exports){


	exports.categories = [
		{
			name:	'health',				//Gesundheit
			colors:	['#832A67'],
			tags:	[]
		},
		{
			name:	'counseling',			//Beratung
			colors:	['#60409D'],
			tags: 	[
						'financial_counseling',	//Schuldner- und Sozialberatung
						'legal_counseling',		//Rechtliche Beratung
						'offender_services',	//Straffälligenhilfe
					]
		},
		{
			name:	'sports',				//Bewegung und Sport
			colors:	['#31AAE2'],
			tags:	[]
		},
		{
			name:	'education',			//Bildung und Sprache
			colors:	['#9f67e8'],
			tags:	[],
		},
		{
			name:	'volunteer_work',		//Freiwilliges Engagement
			colors:	['#ff9900'],
			tags: 	[]
		},
		{
			name:	'addiction',			//Sucht
			colors:	['#46b4b9'],
			tags: 	[]
		},
		{
			name:	'labour',				//Arbeit und Beschäftigung
			colors:	['#ffc300'],
			tags: 	[]
		},
		{
			name:	'neighborhood',			//Stadtteilarbeit und Nachbarschaft
			colors:	['#729052'],
			tags: 	[]
		},
		{
			name:	'arts',					//Kreativität und Kunst
			colors:	['#ec465a'],
			tags: 	[]
		},
		{
			name:	'victim_support',		//Opferhilfe
			colors:	['#00b33a'],
			tags: 	[]
		},
		{
			name:	'care',					//Pflege
			colors:	['#00b0c6'],
			tags: 	[]
		},
		{
			name:	'self_help',			//Selbsthilfe
			colors:	['#fb6ac2'],
			tags: 	[]
		},
		{
			name:	'housing',				//Wohnen
			colors:	['#E36E00'],
			tags: 	[]
		},
		{
			name:	'recreation',			//Freizeit
			colors:	['#0eb2ff'],
			tags:	[]
		},

		{
			name:	'hospice',				//Hospiz
			colors:	['#008671'],
			tags: 	[]
		},

	]

	exports.types = []

	exports.tags = {

		target_groups: [
			'senior_citizens',			//Ältere Menschen
			'families',					//Familien
			'women',					//Frauen
			'young',					//Kinder und Jugendliche
			'queer',					//Queere Menschen
			'men',						//Männer
			'disability_background',	//Menschen mit Behinderung
			'refugee_background',		//Menschen mit Fluchtgeschichte
			'migration_background',		//Menschen mit Migrationsgeschichte
			'houseless'					//Wohnungs-und obdachlose Menschen
		],	
		districts: [
			'mitte',
			'friedrichshain_kreuzberg',
			'pankow',
			'charlottenburg_wilmersdorf',
			'spandau',
			'steglitz_zehlendorf',
			'tempelhof_schoeneberg',
			'neukoelln',
			'treptow_koepenik',
			'marzahn_hellersdorf',
			'lichtenberg',
			'reinickendorf'
		],

		languages: [
			'albanian',
			'amharic',
			'aramaic',
			'arabic',
			'armenian',
			'azerbaijani',
			'bengali',
			'bulgarian',
			'chechen',
			'chinese',
			'creole',
			'dari',
			'dutch',
			'english',
			'farsi',
			'french',
			'greek',
			'hebrew',
			'hindu',
			'hungarian',
			'italian',
			'japanese',
			'kikuyu',
			'korean',
			'kurdish',
			'laz',
			'lithuanian',
			'luo',
			'macedonian',
			'montenegrin',
			'nepali',
			'oromo',
			'pashto',
			'polish',
			'portuguese',
			'punjabi',
			'romani',
			'romanian',
			'russian',
			'slovene',
			'serbian_croatian',
			'spanish',
			'suomi',
			'swahili',
			'tajiki',
			'thai',
			'tigrinya',
			'turkish',
			'turkmen',
			'ukranian',
			'urdu',
			'uzbek',
			'vietnamese',
			'wolof',
		],

		accessibility:[				
			
		],


		institution_type: [
			
		],

		service_type: [
			
		]

		// service_times: [
		// 	'morning',					//Vormittags
		// 	'afternoon',				//Nachmittags
		// 	'evening',					//Abends
		// 	'weekend',					//Wochenende
		// 	'daily',					//Täglich
		// 	'weekly',					//Wöchentlich
		// 	'monthly',					//Monatlich
		// 	'by_arrangement'			//Nach Absprache
		// ]


		// sponsors:[
		// 	'senias',
		// 	'senias_partin',
		// 	'senias_akrom',
		// 	'senias_intlot',
		// 	'senias_msd',
		// 	'senias_mifl',
		// 	'senbjf',
		// 	'jobcenter',
		// 	'bamf_mbe',
		// 	'bamf_jmd',
		// 	'amif',
		// 	'iq',
		// 	'senjustva',
		// 	'sengpg',
		// 	'ba_charlottenburg_wilmersdorf',
		// 	'ba_friedrichshain_kreuzberg',
		// 	'ba_lichtenberg',
		// 	'ba_marzahn_hellersdorf',
		// 	'ba_mitte',
		// 	'ba_neukölln',
		// 	'ba_pankow',
		// 	'ba_reinickendorf',
		// 	'ba_spandau',
		// 	'ba_steglitz_zehlendorf',
		// 	'ba_tempelhof_schoeneberg',
		// 	'ba_treptow_koepenik',
		// 	'bmfsfj',
		// 	'bmas',
		// 	'bmi',
		// 	'bzga',
		// 	'ehap',
		// 	'esf',
		// 	'lotto',
		// 	'aktion_mensch'
		// ]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
