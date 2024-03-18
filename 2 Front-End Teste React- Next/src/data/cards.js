export const trainingExamples = [
    {
        id: 1,
        category: "peito",
        examples: [
			{
				id: 1,
				name: "Supino reto",
		
			},
			{
				id: 2,
				name: "Supino Alter. Inclinado",
			}
		],
    },
    {
        id: 2,
        category: "costas",
        examples: [
            {
				id: 1,
				name: "Puxada reta",
		
			},
			{
				id: 2,
				name: "Puxada em T",
			}
		],
    },
    {
        id: 3,
        category: "perna",
        examples: [
            {
				id: 1,
				name: "Leg Press",
                serie: 1,
				kg: 100,
				repetitions: 10,
		
			},
			{
				id: 2,
				name: "Agachamento",
                serie: 2,
				kg: 20,
				repetitions: 20,
			}
		],
    },
    {
        id: 4,
        category: "ombro",
        examples: [
            {
				id: 1,
				name: "Alter cima",
		
			},
			{
				id: 2,
				name: "Levantamt, reto",
			}
		],
    },
    {
        id: 5,
        category: "braço",
        examples: [
            {
				id: 1,
				name: "Biceps barra reta",
		
			},
			{
				id: 2,
				name: "Triceps corda",
			}
		],
    },
    {
        id: 6,
        category: "cardio",
        examples: [
            {
				id: 1,
				name: "abdominal",
		
			},
			{
				id: 2,
				name: "esteira",
			}
		],
    },

];




// /////////////////////////////////////

[
	{
		"createdAt": "07/03/2024",
		"id": "21879a95-5255-40de-80d6-24e485e4d9e3",
		"category": "perna",
		"userId": "53b41126-6e4b-4103-a610-aba392a159ce",
		"training": [
			{
				"id": "26da961d-668a-415e-b27a-5e516b3643c0",
				"name": "wad",
				"serie": 8,
				"kg": 8,
				"repetitions": 8,
				"volume": 512,
				"dayId": "21879a95-5255-40de-80d6-24e485e4d9e3"
			},
			{
				"id": "c2b51784-d22d-4e82-8c56-8a837cb5b387",
				"name": "wad",
				"serie": 1,
				"kg": 1,
				"repetitions": 1,
				"volume": 1,
				"dayId": "21879a95-5255-40de-80d6-24e485e4d9e3"
			}
		],
		"GroupsMuscle": {
			"id": "a82a8a3e-122a-442d-a917-be65541424d5",
			"nome": "perna"
		},
		"Vtt": 513,
		"BateuMeta": true
	},
	{
		"createdAt": "08/03/2024",
		"id": "bde410c2-116f-4835-818c-f55a4a20a937",
		"category": "perna",
		"userId": "53b41126-6e4b-4103-a610-aba392a159ce",
		"training": [
			{
				"id": "1a0b18aa-f2b2-4c86-b54b-fbfc598cf6ed",
				"name": "Técnico Automotivo",
				"serie": 2,
				"kg": 2,
				"repetitions": 2,
				"volume": 8,
				"dayId": "bde410c2-116f-4835-818c-f55a4a20a937"
			}
		],
		"GroupsMuscle": {
			"id": "a82a8a3e-122a-442d-a917-be65541424d5",
			"nome": "perna"
		},
		"Vtt": 8,
		"BateuMeta": false,
		"Faltante": 505
	}
]

export const groupsMuscles = [
    {
        id: 1,
        category: "peito",
        diasTreinados: 6,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 6660,
    },
    {
        id: 2,
        category: "costas",
        diasTreinados: 8,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 1660,
    },
    {
        id: 3,
        category: "perna",
        diasTreinados: 8,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 6660,
    },
    {
        id: 4,
        category: "ombro",
        diasTreinados: 8,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 6660,
    },
    {
        id: 5,
        category: "braço",
        diasTreinados: 8,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 6660,
    },
    {
        id: 6,
        category: "cardio",
        diasTreinados: 8,
        dias: ['1:N'],
        volTotalTreinoDiaAnterior: 6660,
    }
];

// peito , cardio braço ombro perna costas
// chest , cardio arm shoulder leg back

// /////////////////////////////////////////////////////////////////////////////////////////

export const peitoDays = [
    {
        id: 1,
        category: "peito",
        // categoryId,
        dia: 1,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 840,
        qntFaltante: 0,
        treino: ['1:N']
    },
    {
        id: 2,
        category: "peito",
        // categoryId,
        dia: 2,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 850,
        qntFaltante: 0,
        treino: ['1:N']
    },
    {
        id: 3,
        category: "peito",
        // categoryId,
        dia: 3,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 840,
        // Quanto falta para conseguir Hipertrofia (Dia anterior(volTotalTreino) - Dia atual(volTotalTreino)) = qntFaltante   
        qntFaltante: 20,
        treino: ['1:N']
    },
    {
        id: 4,
        category: "peito",
        // categoryId,
        dia: 4,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 870,
        qntFaltante: 0,
        treino: ['1:N']
    },
    {
        id: 5,
        category: "peito",
        // categoryId,
        dia: 5,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 880,
        qntFaltante: 0,
        treino: ['1:N']
    },
    {
        id: 6,
        category: "peito",
        // categoryId,
        dia: 6,
        // volTotalTreino (VTT = 'Total de Volume do Dia ****')
        volTotalTreino: 890,
        qntFaltante: 0,
        treino: ['1:N']
    }
];

// // /////////////////////////////////////////////////////////////////////////////////////////
[
    {
        "createdAt": "23/02/2024",
        "id": "7c1a8a8c-843f-4ff1-8437-15b51295b3ef",
        "category": "costas",
        "userId": "e1c70062-9d5d-465c-b6c1-2152373d6780",
        "training": [
            {
                "id": "5f232802-271a-4491-952e-bd94a7243c6b",
                "name": "awd",
                "serie": 9,
                "kg": 9,
                "repetitions": 9,
                "volume": 729,
                "dayId": "7c1a8a8c-843f-4ff1-8437-15b51295b3ef"
            },
            {
                "id": "ca6768bc-ca9b-48dd-a7fa-3536ee11deeb",
                "name": "Arthur",
                "serie": 9,
                "kg": 9,
                "repetitions": 9,
                "volume": 729,
                "dayId": "7c1a8a8c-843f-4ff1-8437-15b51295b3ef"
            }
        ],
        "GroupsMuscle": {
            "id": "7aa4300d-dbd1-426e-9402-bfbc0f301bed",
            "nome": "costas"
        }
    },
    {
        "createdAt": "23/02/2024",
        "id": "72b2d81c-7cd5-46e0-9cd5-dfe48897fe08",
        "category": "ombro",
        "userId": "e1c70062-9d5d-465c-b6c1-2152373d6780",
        "training": [],
        "GroupsMuscle": {
            "id": "77e9e970-8a84-4e52-8159-e066283d1deb",
            "nome": "ombro"
        }
    }
]

export const treino = [
    {
        id: 1,
        nome: "Supino",
        serie: 1,
        kg: 40,
        repeticoes: 8,
        // volume =  (VTT = (Kg * Rep) * Série)
        volume: 320,
        daysId: 6,
    },
    {
        id: 2,
        nome: "Supino Inclinado",
        serie: 1,
        kg: 40,
        repeticoes: 7,
        // volume =  (VTT = (Kg * Rep) * Série)
        volume: 280,
        daysId: 6,
    },
    {
        id: 3,
        nome: "Supino com Alter",
        serie: 1,
        kg: 40,
        repeticoes: 6,
        // volume =  (VTT = (Kg * Rep) * Série)
        volume: 240,
        daysId: 6,
    },

    {
        id: 4,
        nome: "Costas == Puxada",
        serie: 0,
        kg: 0,
        repeticoes: 0,
        // volume =  (VTT = (Kg * Rep) * Série)
        volume: 240,
        daysId: 1,
    },
];
