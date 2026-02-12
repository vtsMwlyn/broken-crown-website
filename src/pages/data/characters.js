const characters = [
	// ===== The Elandys Family ===== //
	{
		faction: 'elandys-family',
		weapon: 'unknown',

		slug: 'mariel-elandys',
		title: 'The Last True Seraph',
		fullName: 'Mariel Elandys',
		nickName: 'Mariel',
		sprite: '/res/characters/sprites/mariel-elandys.webp',
		desc: 'The current Queen of Eldynia and the final pure-blooded seraph, Mariel rules with calculated aggression and unshakable confidence. Though she lacks the overwhelming strength of her ancestors, her sharp wit and commanding presence deter challengers. Through sheer force of will, she maintains the illusion of invincibility, ensuring her kingdom’s survival in an era of decline.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Xanthe Huynh',
		customImageClassName: 'top-20! xl:top-30! scale-350!'
	},
	{
		faction: 'elandys-family',
		weapon: 'unknown',

		slug: 'vael-elandys',
		title: 'The Crown’s Final Hope',
		fullName: 'Vael Elandys',
		nickName: 'Vael',
		sprite: '/res/characters/sprites/vael.webp',
		desc: 'The second child of Queen Mariel, Vael was born with wings, a symbol of his boundless potential. As a youth, he achieved the impossible by drawing the legendary Seraphic Blade Extharion from the stone at Castle Vrosk’s gardens, a feat none before him could accomplish. With his prodigious strength and divine destiny, he represents Eldynia’s brightest hope for restoration.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Brenna Larsen',
		customImageClassName: 'left-5 top-18! xl:top-26! scale-350!'
	},
	{
		faction: 'elandys-family',
		weapon: 'brimvahl-spear',

		slug: 'kazmiel-elandys-armored',
		title: 'The Pantocrator',
		fullName: 'Kazmiel Elandys',
		nickName: 'Kazmiel',
		sprite: '/res/characters/sprites/kazmiel-armor.webp',
		half: '/res/characters/half-kazmiel-armor.webp',
		desc: 'Mariel’s firstborn, a half-seraph, was born without wings, a mark of no divinity. Yet, when her father was slain, Kazmiel awakened her latent power, manifesting glowing wings and ascending as one of history’s most formidable warriors. Her plundering missions brought immeasurable wealth to Eldynia, but her love for a lowlander led to her abandoning war. Deemed a traitor to the crown, she was exiled, removed from history.',

		voiceline: '/res/characters/voicelines/kazmiel-elandys-lowland.mp3',
		VA: 'Brenna Larsen',
		customImageClassName: 'top-18! xl:top-25! scale-400!'
	},
	{
		faction: 'elandys-family',
		weapon: 'voidralis',

		slug: 'flaire-eladryn',
		title: 'The Grand Mage',
		fullName: 'Flaire Eldryn',
		nickName: 'Flaire',
		sprite: '/res/characters/sprites/flaire.webp',
		half: '/res/characters/half-flaire.webp',
		desc: 'The enigmatic Grand Mage of Eldynia, Flaire serves as both advisor and caretaker to the royal family. Despite her claims of being human, her unnaturally long life, spanning even the Queen’s reign, hints at hidden origins. Knowledgeable, discreet, and impossibly ancient, she has guided three generations of Elandys rulers, her true motives as veiled as her past.',

		voiceline: '/res/characters/voicelines/flaire-eldryn.mp3',
		VA: 'Lizzie Freeman',
		customImageClassName: ''
	},
	{
		faction: 'elandys-family',
		weapon: 'extharion',

		slug: 'deathless-king',
		title: 'The Deathless King',
		fullName: '?????',
		nickName: '?????',
		sprite: '/res/characters/sprites/deathless-king.webp',
		half: '/res/characters/half-deathless-king.webp',
		desc: 'A swordsman with extraordinary powers.',

		voiceline: '/res/characters/voicelines/deathless-king.mp3',
		VA: 'Andrew Russell',
		customImageClassName: 'left-8 top-20! xl:top-30! scale-400!'
	},
	
	// ===== The Brimvahl Guards ===== //
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-tarva',
		title: null,
		fullName: 'Elite Guard Tarva',
		nickName: 'Elite Guard Tarva',
		sprite: '/res/characters/sprites/female-elite-guard.webp',
		desc: 'The Tarva units are typically female faunakins, specializing in locating treasures, swift plundering, and eliminating enemy cavalry units; their faunakin traits allow them to sense treasure locations, move with exceptional agility and flexibility, and communicate with the beasts ridden by cavalry, making them ideal for these tasks. Their armor is designed for speed, offering protection only to vital areas.',

		voiceline: '/res/characters/voicelines/elite-guard-tarva.mp3',
		VA: 'Anna Faye',
		customImageClassName: 'top-6! xl:top-8!'
	},
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-tarvon',
		title: null,
		fullName: 'Elite Guard Tarvon',
		nickName: 'Elite Guard Tarvon',
		sprite: '/res/characters/sprites/male-elite-guard.webp',
		desc: 'Composed primarily of male humans for their adaptability and inconspicuousness, Tarvon units specialize in covert infiltration, targeted assassinations, and the neutralization of enemy artillery. Their armor is fully enclosed, featuring a protective hood to minimize exposure to lethal injuries. Designed for stealth and precision, these operatives execute high-risk missions behind enemy lines with lethal efficiency.',

		voiceline: '/res/characters/voicelines/elite-guard-tarvon.mp3',
		VA: 'Leo Culligan',
		customImageClassName: 'top-6! xl:top-8!'
	},	
	{
		faction: 'brimvahl-guards',
		weapon: 'brimvahl-spear',

		slug: 'elite-guard-durnas',
		title: null,
		fullName: 'Elite Guard Durnas',
		nickName: 'Elite Guard Durnas',
		sprite: '/res/characters/sprites/brute-guard.webp',
		desc: 'Durnas units are predominantly composed of orcs and even giants, leveraging their immense strength and near-impenetrable defenses. While their size may hinder speed, they compensate with devastating offensive capabilities and unmatched resilience. Their primary role is to overwhelm and demoralize enemy forces, serving as the vanguard in large-scale assaults to crush opposition through sheer force.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Jordy Sword',
		customImageClassName: 'top-6! xl:top-8! -left-4'
	},
	{
		faction: 'brimvahl-guards',
		weapon: 'unknown',

		slug: 'regular-knight',
		title: null,
		fullName: 'Regular Knight',
		nickName: 'Regular Knight',
		sprite: '/res/characters/sprites/regular-knight.webp',
		desc: 'The Guards represent Eldynia’s most coveted profession, offering unmatched pay, residence in Castle Vrosk, and open recruitment to all, regardless of background and status. The sole requirement? Surviving the grueling Arena Challenge, where applicants must endure five minutes against an elite guard. Those who succeed join the ranks of Eldynia’s guards and on their path to become an elite guard after surviving a minimum of 5 pillage missions.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'N/A',
		customImageClassName: ''
	},
	
	// ===== Fennora Village ===== //
	{
		faction: 'fennora-village',
		weapon: 'dyrnazel',

		slug: 'kazmiel-elandys',
		title: 'The Pantocrator',
		fullName: 'Kazmiel Elandys',
		nickName: 'Kazmiel',
		sprite: '/res/characters/sprites/kazmiel.webp',
		half: '/res/characters/half-kazmiel.webp',
		desc: 'Mariel’s firstborn, a half-seraph, was born without wings, a mark of no divinity. Yet, when her father was slain, Kazmiel awakened her latent power, manifesting glowing wings and ascending as one of history’s most formidable warriors. Her plundering missions brought immeasurable wealth to Eldynia, but her love for a lowlander led to her abandoning war. Deemed a traitor to the crown, she was exiled, removed from history.',

		voiceline: '/res/characters/voicelines/kazmiel-the-pantocrator.mp3',
		VA: 'Brenna Larsen',
		customImageClassName: 'left-1 xl:top-26!'
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'sata',
		title: null,
		fullName: 'Sata',
		nickName: 'Sata',
		sprite: '/res/characters/sprites/sata.webp',
		desc: 'Unlike Kazmiel, his family never expected anything from him, he was a nobody with no exceptional talent, possessing only a kind heart that made him involved with dangerous people. he felt the burden of an entire building crushing his back. He dreams of a seraph who would lift him from the rubble. That seraph arrived when Eldynia plundered Edonara and demolished everything in her sight, as Kazmiel dug through the debris, she found Sata and asked about his profession. When he replied, "I\'m a healer," she offered her hand and flew him to safety aboard a transport ship, marking their first meeting.',

		voiceline: '/res/characters/voicelines/sata-elandys.mp3',
		VA: 'Hudson Franzoni',
		customImageClassName: 'top-18! xl:top-30! -left-2 xl:-left-4 scale-300'
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'nova',
		title: null,
		fullName: 'Nova',
		nickName: 'Nova',
		sprite: '/res/characters/sprites/nova.webp',
		icon: '/res/characters/icons/nova.webp',
		desc: 'Born during a supernova, Nova believes himself destined for greatness, viewing his birth as a divine blessing. Possessing extraordinary strength that surpasses even adults, he frequently intervenes in conflicts to protect others. However, his mother often misinterprets his actions as bullying or misuse of power, reprimanding him despite his noble intentions. Ironically, while she discourages him from fighting, she herself is a formidable warrior.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Marisa Massaro',
		customImageClassName: 'xl:top-24!'
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'kelly',
		title: null,
		fullName: 'Kelly Copter',
		nickName: 'Kelly',
		sprite: '/res/characters/sprites/kelly.webp',
		desc: 'To the masses, Kelly is the cool rockstar of Duskfarrow, but that persona merely hides a noble birth in the heart of Eldynia. Before she was a star, she was Rai’Na Copter, Queen Mariel’s inseparable childhood friend. Now, she returns home to her past, desperate to see the one person she never truly left behind',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Sara Gladstone',
		customImageClassName: 'top-10 xl:top-26! scale-300'
	},
	{
		faction: 'fennora-village',
		weapon: 'unknown',

		slug: 'brynhilda',
		title: null,
		fullName: 'Brynhilda Vroskdottir',
		nickName: 'Brynhilda',
		sprite: '/res/characters/sprites/hilda.webp',
		desc: 'Hilda is the only blacksmith in Fennora village who has mastered the cold forge technique. A skill necessary to survive in the winter nation that bans the use of fire.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Chelsea Kwoka',
		customImageClassName: 'left-1 xl:top-26!'
	},

	// ===== The Laughing Death ===== //
	{
		faction: 'laughing-death',
		weapon: 'unknown',

		slug: 'vexa',
		title: null,
		fullName: 'Vexa',
		nickName: 'Vexa',
		sprite: '/res/characters/sprites/vexa.webp',
		desc: 'Vexa is the unacknowledged daughter of the chief, as Faunakins are stigmatized for their perceived aggression and criminality. Witnessing the systemic mistreatment of her fellow Faunakins, she took up their cause, rallying a devoted following that eventually formed the Laughing Death bandit group. Later, after negotiations with the Pisces Union’s leader, Vexa agreed to assist in fulfilling their prophecy of ensuring that a leader’s child gains the Necrospark and bring eternal life to everyone.',

		voiceline: '/res/characters/voicelines/vexa-yahn.mp3',
		VA: 'Sky Santacruz',
		customImageClassName: ''
	},
	{
		faction: 'laughing-death',
		weapon: 'unknown',

		slug: 'martini',
		title: null,
		fullName: 'Martini Ravina',
		nickName: 'Martini',
		sprite: '/res/characters/sprites/martini.webp',
		desc: 'She is the fun loving daughter of the innkeeper but often hangs out with the wrong crowd. She was recruited by the laughing deaths because Vexa seemed cool to her and her father was obsessed with Vexa’s vision',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Ellie Tinsley',
		customImageClassName: ''
	},
	{
		faction: 'laughing-death',
		weapon: 'unknown',

		slug: 'nadara',
		title: null,
		fullName: 'Nadara Kingshui',
		nickName: 'Nadara',
		sprite: '/res/characters/sprites/nadara.webp',
		desc: 'Beneath the lovely charm of the tavern’s favorite maiden lies a fanatic loyal to the Laughing Deaths, a doomsday cult feverishly working to bring back the Deathless King. It is only with the laughing deaths that she learns how to smile again.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'N/A',
		customImageClassName: ''
	},

	// ===== Knight of Star Table ===== //
	{
		faction: 'knight-of-star-table',
		weapon: 'unknown',

		slug: 'trixarina',
		title: null,
		fullName: 'Trixarina Moonwhisper',
		nickName: 'Trixarina',
		sprite: '/res/characters/sprites/trixarina.webp',
		desc: 'As the Grandmaster of Castle Vrosk, she directs the elite guards and she’s now in charge of the brutal pillage mission. Though she lacks the divine blood of a Seraph, she stands as Kazmiel’s greatest disciple, a warrior who didn’t just learn from the master but eclipsed her, having brought Kazmiel to her knees enough times to prove that her skills and precision are enough.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Xanthe Huynh',
		customImageClassName: 'left-4 top-10! xl:top-15! scale-350!'
	},
	{
		faction: 'knight-of-star-table',
		weapon: 'unknown',

		slug: 'rogan',
		title: null,
		fullName: 'Rogan  Jackhammer',
		nickName: 'Rogan',
		sprite: '/res/characters/sprites/rogan.webp',
		desc: 'The Jester of Castle Vrosk has successfully conned the realm into fearing his "apocalyptic" magic, though his actual arcane potential is weaker than the average elite guard. His true power lies in his technology disguised as spellcraft, a mechanical masquerade. He serves as Lady Flaire’s most obsessive follower, a devotion she rewards with a rare and chilling affection.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Brandon Barlow',
		customImageClassName: 'left-6 top-18! xl:top-28! scale-400!'	
	},
	{
		faction: 'knight-of-star-table',
		weapon: 'unknown',

		slug: 'reyva',
		title: null,
		fullName: 'Rey\'Va Copter',
		nickName: 'Rey\'Va',
		sprite: '/res/characters/sprites/reyva.webp',
		desc: 'The Warden of Castle Vrosk guards the dungeon that holds no prisoners, but cages something far more volatile. As the only knight to never taste defeat, his exile to the bitter dark is not a punishment, but a desperate necessity. Queen Mariel buried him there because he is the single soul she trusts to keep the terror below from rising',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Lukas Foust',
		customImageClassName: 'left-2 top-15! xl:top-24! scale-300!'
	},
	{
		faction: 'knight-of-star-table',
		weapon: 'unknown',

		slug: 'demiphoelia',
		title: null,
		fullName: 'Demiphoelia Ursoth',
		nickName: 'demiphoelia',
		sprite: '/res/characters/sprites/ursoth.webp',
		desc: 'The Druid of Castle Vrosk carries a primal terror within her skin, the ability to transform into the Ursoth beast. Even though she’s the newest member, the other knights don’t just respect her; they fear her, forever haunted by the day she dominated Trixarina in combat, ripping the grandmaster’s leg from her body and eating it.',

		voiceline: '/res/characters/voicelines/unknown.ogg',
		VA: 'Terra Ashe',
		customImageClassName: 'left-2 top-15! xl:top-24! scale-300!'
	},
];

export default characters;