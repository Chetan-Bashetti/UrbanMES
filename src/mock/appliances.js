export const appliancesData = [
	{
		title: 'Home Appliances',
		key: 'appliances',
		desc: 'Service, installation and Repairing services of TV, Fridge,	Microwave, Air conditioner and etc..',
		sub_services: [
			{
				title: 'TV',
				key: 'tv',
				desc: 'Service, installation and Repairing services of TV'
			},
			{
				title: 'Fridge',
				key: 'fridge',
				desc: 'Service, installation and Repairing services of Fridge',
				charges: [
					{
						title: 'Single door',
						charge: 400,
						isSelected: false
					},
					{
						title: 'Double door',
						charge: 650,
						isSelected: false
					},
					{
						title: 'Side by side',
						charge: 1000,
						isSelected: false
					}
				]
			},
			{
				title: 'Air conditioner',
				key: 'ac',
				desc: 'Service, installation and Repairing services of Air conditioner',
				charges: [
					{
						title: 'AC cleaning',
						charge: 650,
						isSelected: false
					}
				]
			},
			{
				title: 'Microwave oven',
				key: 'microwave_oven',
				desc: 'Service, installation and Repairing services of Microwave oven',
				charges: [
					{
						title: 'Solo or grill model',
						charge: 500,
						isSelected: false
					},
					{
						title: 'convention',
						charge: 650,
						isSelected: false
					}
				]
			},
			{
				title: 'Washing Machine',
				key: 'washing_machine',
				desc: 'Service, installation and Repairing services of Washing Machine',
				charges: [
					{
						title: 'Descaler cleaning',
						charge: 500,
						isSelected: false
					},
					{
						title: 'Drum cleaning',
						charge: 1500,
						isSelected: false
					}
				]
			},
			{
				title: 'Laptop',
				key: 'laptop',
				desc: 'Service and Repairing services of Laptop'
			}
		]
	},
	{
		title: 'Painting',
		key: 'painting',
		desc: 'All type painting services avalilable',
		sub_services: [
			{
				title: 'Full home painting service',
				key: 'full_home_painting',
				desc: 'Painting services full home'
			},
			{
				title: 'Few walls or rooms painting services',
				key: 'few_walls_painting',
				desc: 'Painting services few_walls or rooms'
			},
			{
				title: 'Water proofing services',
				key: 'water_proofing',
				desc: ''
			},
			{
				title: 'Interior and exterior painting services',
				key: 'interior_and_exterior',
				desc: ''
			},
			{
				title: 'Interior decorators',
				key: 'interior_decorators',
				desc: ''
			}
		]
	},
	{
		title: 'Prestige construction',
		key: 'key_project',
		desc: 'Prestige construction projects',
		sub_services: [
			{
				title: 'Site preparation phase',
				key: 'site_preparation_phase',
				desc: 'leveling and digging for foundation to be laid'
			},
			{
				title: 'Foundation phase',
				key: 'foundation_phase',
				desc: 'pouring concrete that supports the weight of the building with best qualitity raw materials at appropriate ratios'
			},
			{
				title: 'Framing phase',
				key: 'framing_phase',
				desc: 'designs and builds the ceiling, sheathing to close off the opn studs'
			},
			{
				title: 'Exterior phase',
				key: 'exterior_phase',
				desc: 'installing outdoor patios/ balconies/terrace garden,etc'
			},
			{
				title: 'Interior phase',
				key: 'interior_phase',
				desc: 'installing kitchen cabinets, dry floor, countertops, painting services'
			}
		]
	},

	{
		title: 'CCTV',
		key: 'cctv_services',
		desc: 'cctv fitting & services',
		sub_services: []
	},

	{
		title: 'Interear designers',
		key: 'interear_designers',
		desc: 'kitchen & wardroof fitting & services',
		sub_services: []
	}
];
