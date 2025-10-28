const characters = [
	// ===== The Elandys Family ===== //
	{
		faction: 'elandys-family',
		weapon: 'unknown',

		slug: 'mariel-elandys',
		title: 'The Last True Seraph',
		fullName: 'Mariel Elandys',
		nickName: 'Mariel',
		sprite: '/characters/sprites/mariel-elandys.webp',
		icon: '/characters/icons/mariel-elandys.webp',
		desc: 'The current Queen of Eldynia and the final pure-blooded seraph, Mariel rules with calculated aggression and unshakable confidence. Though she lacks the overwhelming strength of her ancestors, her sharp wit and commanding presence deter challengers. Through sheer force of will, she maintains the illusion of invincibility, ensuring her kingdom’s survival in an era of decline.',

		voiceline: '/characters/voicelines/unknown.ogg',
		VA: 'Xanthe Huynh',
	},
	{
		faction: 'elandys-family',
		weapon: 'unknown',

		slug: 'vael-elandys',
		title: 'The Crown’s Final Hope',
		fullName: 'Vael Elandys',
		nickName: 'Vael',
		sprite: '/characters/sprites/vael.webp',
		icon: '/characters/icons/vael.webp',
		desc: 'The second child of Queen Mariel, Vael was born with wings, a symbol of his boundless potential. As a youth, he achieved the impossible by drawing the legendary Seraphic Blade Extharion from the stone at Castle Vrosk’s gardens, a feat none before him could accomplish. With his prodigious strength and divine destiny, he represents Eldynia’s brightest hope for restoration.',

		voiceline: '/characters/voicelines/unknown.ogg',
		VA: 'Brenna Larsen',
	},
	{
		faction: 'elandys-family',
		weapon: 'brimvahl-spear',

		slug: 'kazmiel-elandys-armored',
		title: 'The Pantocrator',
		fullName: 'Kazmiel Elandys',
		nickName: 'Kazmiel',
		sprite: '/characters/sprites/kazmiel-armor.webp',
		icon: '/characters/icons/kazmiel-armor.webp',
		half: '/characters/half-kazmiel-armor.webp',
		desc: 'Mariel’s firstborn, a half-seraph, was born without wings, a mark of no divinity. Yet, when her father was slain, Kazmiel awakened her latent power, manifesting glowing wings and ascending as one of history’s most formidable warriors. Her plundering missions brought immeasurable wealth to Eldynia, but her love for a lowlander led to her abandoning war. Deemed a traitor to the crown, she was exiled, removed from history.',

		voiceline: '/characters/voicelines/kazmiel-elandys-lowland.mp3',
		VA: 'Brenna Larsen',
	},
	{
		faction: 'elandys-family',
		weapon: 'voidralis',

		slug: 'flaire-eladryn',
		title: 'The Grand Mage',
		fullName: 'Flaire Eldryn',
		nickName: 'Flaire',
		sprite: '/characters/sprites/flaire.webp',
		half: '/characters/half-flaire.webp',
		icon: '/characters/icons/flaire.webp',
		desc: 'The enigmatic Grand Mage of Eldynia, Flaire serves as both advisor and caretaker to the royal family. Despite her claims of being human, her unnaturally long life, spanning even the Queen’s reign, hints at hidden origins. Knowledgeable, discreet, and impossibly ancient, she has guided three generations of Elandys rulers, her true motives as veiled as her past.',

		voiceline: '/characters/voicelines/flaire-eldryn.mp3',
		VA: 'Lizzie Freeman',
	},
	{
		faction: 'elandys-family',
		weapon: 'extharion',

		slug: 'deathless-king',
		title: 'The Deathless King',
		fullName: '?????',
		nickName: '?????',
		sprite: '/characters/sprites/deathless-king.webp',
		half: '/characters/half-deathless-king.webp',
		icon: '/characters/icons/deathless-king.webp',
		desc: 'A swordsman with extraordinary powers.',

		voiceline: '/characters/voicelines/deathless-king.mp3',
		VA: 'Andrew Russell',
	},
	
	// ===== The Brimvahl Guards ===== //
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-tarva',
		title: null,
		fullName: 'Elite Guard Tarva',
		nickName: 'Elite Guard Tarva',
		sprite: '/characters/sprites/female-elite-guard.webp',
		icon: '/characters/icons/female-elite-guard.webp',
		desc: 'The Tarva units are typically female faunakins, specializing in locating treasures, swift plundering, and eliminating enemy cavalry units; their faunakin traits allow them to sense treasure locations, move with exceptional agility and flexibility, and communicate with the beasts ridden by cavalry, making them ideal for these tasks. Their armor is designed for speed, offering protection only to vital areas.',

		voiceline: '/characters/voicelines/elite-guard-tarva.mp3',
		VA: 'Anna Faye',
	},
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-tarvon',
		title: null,
		fullName: 'Elite Guard Tarvon',
		nickName: 'Elite Guard Tarvon',
		sprite: '/characters/sprites/male-elite-guard.webp',
		icon: '/characters/icons/male-elite-guard.webp',
		desc: 'Composed primarily of male humans for their adaptability and inconspicuousness, Tarvon units specialize in covert infiltration, targeted assassinations, and the neutralization of enemy artillery. Their armor is fully enclosed, featuring a protective hood to minimize exposure to lethal injuries. Designed for stealth and precision, these operatives execute high-risk missions behind enemy lines with lethal efficiency.',

		voiceline: '/characters/voicelines/elite-guard-tarvon.mp3',
		VA: 'Leo Culligan',
	},	
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-durnas',
		title: null,
		fullName: 'Elite Guard Durnas',
		nickName: 'Elite Guard Durnas',
		sprite: '/characters/sprites/brute-guard.webp',
		icon: '/characters/icons/brute-guard.webp',
		desc: 'Durnas units are predominantly composed of orcs and even giants, leveraging their immense strength and near-impenetrable defenses. While their size may hinder speed, they compensate with devastating offensive capabilities and unmatched resilience. Their primary role is to overwhelm and demoralize enemy forces, serving as the vanguard in large-scale assaults to crush opposition through sheer force.',

		voiceline: '/characters/voicelines/unknown.ogg',
		VA: 'Jordy Sword',
	},
	{
		faction: 'brimvahl-guards',
		weapon: 'unknown',

		slug: 'regular-knight',
		title: null,
		fullName: 'Regular Knight',
		nickName: 'Regular Knight',
		sprite: '/characters/sprites/regular-knight.webp',
		icon: '/characters/icons/regular-knight.webp',
		desc: 'The Guards represent Eldynia’s most coveted profession, offering unmatched pay, residence in Castle Vrosk, and open recruitment to all, regardless of background and status. The sole requirement? Surviving the grueling Arena Challenge, where applicants must endure five minutes against an elite guard. Those who succeed join the ranks of Eldynia’s guards and on their path to become an elite guard after surviving a minimum of 5 pillage missions.',

		voiceline: '/characters/voicelines/unknown.ogg',
		VA: 'N/A',
	},
	
	// ===== Fennora Village ===== //
	{
		faction: 'fennora-village',
		weapon: 'dyrnazel',

		slug: 'kazmiel-elandys',
		title: 'The Pantocrator',
		fullName: 'Kazmiel Elandys',
		nickName: 'Kazmiel',
		sprite: '/characters/sprites/kazmiel.webp',
		half: '/characters/half-kazmiel.webp',
		icon: '/characters/icons/kazmiel.webp',
		desc: 'Mariel’s firstborn, a half-seraph, was born without wings, a mark of no divinity. Yet, when her father was slain, Kazmiel awakened her latent power, manifesting glowing wings and ascending as one of history’s most formidable warriors. Her plundering missions brought immeasurable wealth to Eldynia, but her love for a lowlander led to her abandoning war. Deemed a traitor to the crown, she was exiled, removed from history.',

		voiceline: '/characters/voicelines/kazmiel-the-pantocrator.mp3',
		VA: 'Brenna Larsen',
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'sata',
		title: null,
		fullName: 'Sata',
		nickName: 'Sata',
		sprite: '/characters/sprites/sata.webp',
		icon: '/characters/icons/sata.webp',
		desc: 'Unlike Kazmiel, his family never expected anything from him, he was a nobody with no exceptional talent, possessing only a kind heart that made him involved with dangerous people. he felt the burden of an entire building crushing his back. He dreams of a seraph who would lift him from the rubble. That seraph arrived when Eldynia plundered Edonara and demolished everything in her sight, as Kazmiel dug through the debris, she found Sata and asked about his profession. When he replied, "I\'m a healer," she offered her hand and flew him to safety aboard a transport ship, marking their first meeting.',

		voiceline: '/characters/voicelines/sata-elandys.mp3',
		VA: 'Hudson Franzoni',
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'nova',
		title: null,
		fullName: 'Nova',
		nickName: 'Nova',
		sprite: '/characters/sprites/nova.webp',
		icon: '/characters/icons/nova.webp',
		desc: 'Born during a supernova, Nova believes himself destined for greatness, viewing his birth as a divine blessing. Possessing extraordinary strength that surpasses even adults, he frequently intervenes in conflicts to protect others. However, his mother often misinterprets his actions as bullying or misuse of power, reprimanding him despite his noble intentions. Ironically, while she discourages him from fighting, she herself is a formidable warrior.',

		voiceline: '/characters/voicelines/unknown.ogg',
		VA: 'Marisa Massaro',
	},

	// ===== The Laughing Death ===== //
	{
		faction: 'laughing-death',
		weapon: 'unknown',

		slug: 'vexa',
		title: null,
		fullName: 'Vexa',
		nickName: 'Vexa',
		sprite: '/characters/sprites/vexa.webp',
		icon: '/characters/icons/vexa.webp',
		desc: 'Vexa is the unacknowledged daughter of the chief, as Faunakins are stigmatized for their perceived aggression and criminality. Witnessing the systemic mistreatment of her fellow Faunakins, she took up their cause, rallying a devoted following that eventually formed the Laughing Death bandit group. Later, after negotiations with the Pisces Union’s leader, Vexa agreed to assist in fulfilling their prophecy of ensuring that a leader’s child gains the Necrospark and bring eternal life to everyone.',

		voiceline: '/characters/voicelines/vexa-yahn.mp3',
		VA: 'Sky Santacruz',
	},
];

export default characters;