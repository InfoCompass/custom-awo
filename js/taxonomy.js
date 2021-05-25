(function(exports){


	
	
	
	
	
	
	
	
	



	exports.categories = [

		{
			name:	'encounters',			//Begegnung
			colors:	['#832A67'],
			tags:	[
						'encounters_games',			// Gemeinsames Spielen
						'encounters_dining',		// Essen und Trinken
						'encounters_tea',			// Kaffeetrinken und Beisammensein
						'encounters_groups',		// Feste Gruppentreffen
						'encounters_conversations',	// Offene Gesprächskreise
						'encounters_tanztee',		// Tanztee
						'encounters_dating',		// Kennenlerntreffen (Dating)
						'encounters_gardening'		// Gemeinsames Gärtnern

					]
		},

		{
			name:	'counseling',			//Beratung
			colors:	['#60409D'],
			tags: 	[
						'counseling_social', 	// Sozialberatung
						'counseling_debt', 		// Schuldnerberatung
						'counseling_tenant',	// Mieterberatung
						'counseling_housing',	// Wohnberatung
						'counseling_migration',	// Migrationsberatung
						'counseling_pension',	// Rentenberatung
						'counseling_police'		// Polizeiberatung
					]
		},

		{
			name:	'exercise',				//Bewegung_und_Gesundheit
			colors:	['#31AAE2'],
			tags:	[
						'exercise_motor',			// Bewegungsangebote
						'exercise_dance',			// Tanzgruppe
						'exercise_walking',			// Spazieren gehen und wandern
						'exercise_self_help',		// Selbsthilfegruppen
						'exercise_memory',			// Gedächtnistraining
						'exercise_parcours',		// Aktivplätze und Bewegungsparcours
						'exercise_fall_prevention'	// Sturzprävention

					]
		},

		{
			name:	'intercultural',		//Sprachen_und_Interkulturelles
			colors:	['#9f67e8'],
			tags:	[
						'intercultural_language_course',	// Sprachkurse
						'intercultural_language_specific', 	// Sprachspezifische Angebote
						'intercultural_encounters'			// Interkulturelle Treffen

					],
		},

		{
	
			name:	'arts',					//Kreativität und Kunst
			colors:	['#ec465a'],
			tags: 	[
						'arts_paint_craft', // Mal- und Bastelkurse
						'arts_choir', 		// Singen und Chor
						'arts_sewing', 		// Nähen und Schneidern
						'arts_cosmetic',	// Kosmetik
						'arts_misc'			// Andere künstlerische Angebote
					]
		},

		{
			name:	'culture',				//Gesellschaft_Kultur_Politik
			colors:	['#ff9900'],
			tags: 	[
						'culture_trips',					// Ausflüge und Exkursionen
						'culture_meetings',					// Informationstreffen
						'culture_music_theatre_film',		// Musik, Theater, Film
						'culture_literature', 				// Literatur
						'culture_politics', 				// Politische Themen
						'culture_culture',					// Kulturelle Themen
						'culture_relegion',					// Religiöse Themen
						'culture_environment',				// Klima, Natur und Umwelt
						'culture_senior_represantatives'	// Sprechstunden der Seniorenvertretungen
					]
		},

		{
			name:	'support',				//Alltagshilfen_Ehrenamt
			colors:	['#46b4b9'],
			tags: 	[
						'open_lunch',			// Offener Mittagstisch
						'meals_on_wheels',		// Essen auf Rädern
						'give_away_shops',		// Kleiderkammer, Bücherbasar
						'neighborhood_support', // Einkaufshilfen und Nachbarschaftshilfen
						'visiting_service',		// Besuchsdienste
						'repair_assistance',	// Reparaturhilfe
						'helpline', 			// Telefonseelsorge
						'public_restrooms'		// Öffentliche Toiletten
					]
		},

		{
			name:	'it',					//Computer_und_Technik
			colors:	['#ffc300'],
			tags: 	[
						'it_courses',	// Kurse und Lernmöglichkeiten
						'it_seniors',	// Technik und Alter
						'it_lending',	// Leihmöglichkeiten von Tablets und Smartphones
						'it_free_wifi'	// Kostenlose WLAN - Hotspots
					]
		},

		{
			name:	'housing',				//Wohnen
			colors:	['#E36E00'],
			tags: 	[
						'housing_assisted', 	// Wohnen mit Service
						'housing_smart',		// Smart Wohnen
						'housing_project'		// Wohnprojekte

			]
		},

		{
			name:	'care',					//Rund_um_die_Pflege	
			colors:	['#00b0c6'],
			tags: 	[
						'care_consulting',				// Pflegeberatung
						'care_in_facility',				// Angebote in Pflegeeinrichtungen
						'care_services',				// Betreuungsangebote
						'care_relief_everyday_life',	// Entlastung im Alltag
						'care_relief_caregivers',		// Entlastung Pflegender
						'care_dementia'					// Angebote für Demenzkranke und deren Angehörige

			]
		},

		{
			name:	'misc_category',					//Sonstige_Angebote
			colors:	['#008671'],
			tags: 	[]
		},

	]

	exports.types = [
		{
			name:		'location',
			colors:		['#f27020', '#f27020'],
		},		
		{
			name:		'service',
			colors:		['#fec300', '#fec300'],
		},
		{
			name:		'event',
			colors:		['#62a7d5', '#62a7d5'],
		}
	]

	exports.tags = {

		target_groups: [
			'migrates', 		//Migrant*innen
			'women', 			//Frauen
			'men',				//Männer
			'lgtbiq', 			//LSBTI*
			'young_and_old',	//Jung und Alt
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

		institution_type: [
			'meeting_place',			//Begegnungsstätte
			'multigenerational_house', 	//Mehrgenerationenhaus
			'district_center',			//Stadtteilzentrum
			'family_center',			//Famielienzentrum
			'counseling_center',		//Beratungsstelle
			'misc_institution' 			//andere
		],

		accessibility:[				
			'wheelchair_accessible_wc',	//Rollstuhlgerechtes WC
			'accessible_parking',		//Parkplatz für Menschen mit Behinderung
			'wheelchair_accessible',	//Zugang rollstuhlgerecht
			'elevator_present',			//Fahrstuhl vorhanden			
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


		misc :[
			'free_wifi', 		// Kostenlose W-Lan-Nutzung
			'free_pc_usage',	// Kostenlose PC Nutzung
		]

	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
