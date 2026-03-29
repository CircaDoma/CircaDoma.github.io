export const textNodes = [
    {
        id: 1100,
        nodetitle: `Day 1`,
        text: `<h1>DAY 1</h1><h2>PRIMUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 1
            }
        ]
    },
    {
        id: 1201,
        text: `<h1>DAY 2</h1><h2>SECUNDUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 46
            }
        ]
    },
    {
        id: 1202,
        text: `<h1>DAY 2</h1><h2>SECUNDUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 48
            }
        ]
    },
    {
        id: 1203,
        text: `<h1>DAY 2</h1><h2>SECUNDUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 50
            }
        ]
    },
    {
        id: 1301,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 130
            }
        ]
    },
    {
        id: 1302,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 134
            }
        ]
    },
    {
        id: 1303,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 138
            }
        ]
    },
    {
        id: 1304,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 142
            }
        ]
    },
    {
        id: 1305,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 146
            }
        ]
    },
    {
        id: 1306,
        text: `<h1>DAY 3</h1><h2>TERTIUS</h2>`,
        image: `Forest`,
        options: [
            {
                text: `Begin`,
                nextText: 150
            }
        ]
    },
    // ##################################### START OF BASIC NODES ##################################### //
    {
        id: 1,
        nodetitle: `1.1.1.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. <em>Where am I?</em> Sitting up, you see you are in a forest of huge trees. It must be late in the evening, the overcast sky beginning its descent into night.</p>  <p>You stand, and something glints in the underbrush. Half buried in leaves is a sword, the blade a straight mirror of steel. Engraved at the crossguard is a head with two faces, each disturbed by unknown troubles.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        nodetitle: `1.1.1.2`,
        text: `<p>You hear the sound of water nearby.</p>  <p><em>A river must be close.</em></p>  <p>You take a few steps toward it when you notice a high ridge rising in the distance.</p>  <p><em>Maybe from up there, I could figure out where I am.</em></p>  <p>You decide you'll have to make a choice. Do you explore the river or climb the ridge?</p>`,
        options: [
            {
                text: `Ridge`,
                nextText: 3
            },
            {
                text: `River`,
                nextText: 7
            }
        ]
    },
    {
        id: 3,
        nodetitle: `1.2.1.1`,
        text: `<p><em>I'll try the ridge.</em></p>  <p>Sword in hand, you make your way through the trees. At the base of the cliff, you find a narrow path cut into the stone. The ascent is treacherous, the path barely wide enough for one person, but from the top, you can see for miles.</p>  <p><em>There's the river.</em></p>  <p>A dark ribbon cuts through the forest like a great serpent. You notice a thin column of smoke rising off in the distance.</p>  <p><em>Is there someone there?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        nodetitle: `1.2.1.2`,
        text: `<p>The thought is cut off by a shout. You glance down and see a figure sprint past the base of the ridge. A dozen yards behind him comes a second man, sword raised, giving chase. In their haste, they didn't see you.</p>  <p><em>He looks like he needs help!</em></p>  <p>You pick your way down the cliff as fast as you dare and run in the direction the two disappeared.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        nodetitle: `1.2.1.3`,
        text: `<p>The trees are dense here, the branches pulling at your clothes with each step. The sound of shouts and the ring of metal grows as you approach. The trees open into a clearing before you. From your vantage point, you can see two men locked in battle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        nodetitle: `1.2.1.4`,
        text: `<p>One is shouting "I'm not stealing anything! You don't understand!" The other brings his sword down viciously, sending the first man sprawling.</p>  <p><em>Stealing? Is he a thief?</em></p>  <p>The attacker steps forward, preparing to finish things. The man on the ground is mumbling something you can't hear, but it's clear that he's about to die. They haven't seen you yet, but they will if you step into the clearing.</p>  <p>Do you help the man, or stay hidden?</p>`,
        options: [
            {
                text: `Hide`,
                nextText: 12
            },
            {
                text: `Help`,
                nextText: 17
            }
        ]
    },
    {
        id: 7,
        nodetitle: `1.2.2.1`,
        text: `<p><em>Best to start at the river.</em></p>  <p>Sword in hand, you move toward the sound. The ground slopes down as you approach, the air thick with branches. The roar of fast-moving water grows as you approach.</p>  <p>Stepping onto the bank, you can see that this is no gentle stream. The water is fifty feet across and moving swiftly. Falling in would be dangerous. You're shaken from your thoughts by a new sound: steel striking steel and muffled shouting.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        nodetitle: `1.2.2.2`,
        text: `<p>You decide to investigate. As you round a bend in the bank, you catch a glimpse of a stone bridge spanning the water ahead. The bridge is narrow, only room for one man at a time. Its stones, black with age, balance over the dark water.</p>  <p>On the near side of the bridge, two men are fighting. Sword gripped tight, you move closer, hidden in the trees. Soon you're within earshot. You hear one of the men scream: "Liar!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        nodetitle: `1.2.2.3`,
        text: `<p>He thrusts and his opponent moves just in time to avoid being skewered. You see the second man stagger close to the edge of the water. One more step and the current will have him.</p>  <p>He says something, but the river is too loud to hear. The response from the attacker is full of wrath: "I'm not going to let you trap me here!"</p>  <p>He raises his sword to strike. Now's the time to act.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        nodetitle: `1.2.2.4`,
        text: `<p>You jump from your hiding place with a shout, causing the attacker to turn in surprise. The second man wastes no time. In a moment he's away, scrambling across the bridge. The attacker notices and gives chase. They meet at the apex, struggling over the water.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        nodetitle: `1.2.2.5`,
        text: `<p>You reach the foot of the bridge, but on closer inspection, the stones are more treacherous than you'd assumed. Each of them is slick with spray, and the roaring waves below remind you that even one misstep is certain doom. But the man needs your help!</p>  <p>Do you wait at the base or rush in to save him?</p>`,
        options: [
            {
                text: `Wait here`,
                nextText: 22
            },
            {
                text: `Rush in`,
                nextText: 25
            }
        ]
    },
    {
        id: 12,
        nodetitle: `1.3.1.1`,
        text: `<p><em>I'm not going to risk my life for some thief.</em></p>  <p>You remain out of sight. The sword flashes, there is a sharp cry, and it's over. Horrified despite yourself, you watch as the man kneels down to check for life. Satisfied with what he finds, he stands and walks away... <em>moving toward you!</em></p>  <p>You begin to panic as he moves closer, but if you ran now, he would hear you. So you crouch, waiting for the inevitable, as the murderer descends upon you.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        nodetitle: `1.3.1.2`,
        text: `<p>He's only a few feet away when you decide to act first. Leaping from the trees, you rush at him. He's startled, bringing his blade up in defense, but he's too slow. One flick of your blade, and it's over.</p>  <p>You look down in horror at what you've done.</p>  <p><em>I'm just like him.</em></p>  <p>The thought numbs you. Then, in a moment, you are away, running into the forest.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        nodetitle: `1.3.1.3`,
        text: `<p>The night is closing around you beneath the canopy. You try to make your way back to the ridge, but the trees are unfamiliar, and as the darkness becomes complete, you're soon stumbling on, hand outstretched to push through the next branch.</p>  <p><em>I'm lost out here.</em></p>  <p>The trees in front of you vanish, your foot failing to find the ground, and you fall. You cry out, sword flailing as you tumble end over end.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        nodetitle: `1.3.1.4`,
        text: `<p>Branches lash at you as you crash through them. Somewhere in the chaos, you lose the sword. With a splash, you plunge headlong into a shallow pool.</p>  <p><em>I must have fallen down a hill.</em></p>  <p>Miraculously, you didn't impale yourself on your way down. Scrabbling in the mud of the pond, you find the hilt of the sword, covered in slime. After checking for broken bones, you stagger to your feet in the pitch black.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        nodetitle: `1.3.1.5`,
        text: `<p><em>How am I going to get out of this place?</em></p>  <p>As this thought enters your mind, you notice a point of light up ahead.</p>  <p>Moving closer, the light resolves into an ancient hut wedged between the trees of the forest.</p>  <p><em>Somewhere to rest for the night!</em></p>  <p>Then you remember the men from before, and draw back in apprehension. But the starless night and the silent trees send a shiver through you, and you move to the door. With no other choice at hand, you knock.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 28
            }
        ]
    },
    {
        id: 17,
        nodetitle: `1.3.2.1`,
        text: `<p><em>I have to do something!</em></p>  <p>You cry out, rushing into the clearing with your sword at the ready. The attacker turns in surprise, but the thief seems to have expected this. As soon as his enemy turns away, as if on cue, he is up and running into the trees, out of sight.</p>  <p>You're now alone in the clearing with an armed — and angry — man.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        nodetitle: `1.3.2.2`,
        text: `<p>The man raises his sword. For a moment, you fear he will attack, but he hesitates, then, with a growl of frustration, turns and crashes into the forest in pursuit of his enemy. You stand there a moment, then run into the trees after the two men.</p>  <p>The failing light is darker beneath the canopy. You move forward, following the sounds of branches snapping in front of you, but the trees are thick here, and soon the men are too far away to hear.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        nodetitle: `1.3.2.3`,
        text: `<p>Minutes pass and the forest grows black. With night, the trees become sinister, each one an enemy waiting to strike. You stumble on blindly, hand outstretched to push through the next branch.</p>  <p><em>I'm lost here.</em></p>  <p>The trees in front of you vanish, your foot failing to find the ground, and you fall.</p>  <p>You cry out, sword flailing as you tumble end over end. Branches lash at you as you crash through them. Somewhere in the chaos, you lose the sword. With a splash, you plunge headlong into a shallow pool.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        nodetitle: `1.3.2.4`,
        text: `<p><em>I must have fallen down a hill.</em></p>  <p>Miraculously, you didn't impale yourself on your way down. Scrabbling in the mud of the pond, you find the hilt of the sword, covered in slime. After checking for broken bones, you stagger to your feet in the pitch black.</p>  <p><em>How am I going to get out of this place?</em></p>  <p>As this thought enters your mind, you notice a point of light up ahead.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        nodetitle: `1.3.2.5`,
        text: `<p>Moving closer, the light resolves into an ancient hut wedged between the trees of the forest.</p>  <p><em>Somewhere to rest for the night!</em></p>  <p>Then you remember the men from before, and draw back in apprehension. But the starless night and the silent trees send a shiver through you, and you move to the door. With no other choice at hand, you knock.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 30
            }
        ]
    },
    {
        id: 22,
        nodetitle: `1.3.3.1`,
        text: `<p><em>I can't do this.</em></p>  <p>The two struggle for life over the chasm below. The man tries to turn and run, but his attacker lunges forward. The sword connects. A scream of pain rips through the air. The man hangs for a moment. Then he crashes into the water, and the current takes him.</p>  <p>The air grows still, save the river below you, and the attacker turns, and you see his eyes, empty and cold. He raises his bloodied sword. You run.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 23
            }
        ]
    },
    {
        id: 23,
        nodetitle: `1.3.3.2`,
        text: `<p><em>I have to get out of here!</em></p>  <p>You enter the trees, losing yourself in the gathering darkness. You don't know if he's following you, but you don't dare look. The trees grow thick around you, and soon you're struggling through them. Your path takes you away from the river, deeper into the forest.</p>  <p>Night has truly come, the world around you black as pitch, when the trees open on a small hollow in the forest. You listen for pursuit, but you are alone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        nodetitle: `1.3.3.3`,
        text: `<p>You look around you, seeing nothing, until you notice a point of light up ahead. Moving closer, the light resolves into an ancient hut wedged between the trees of the forest.</p>  <p><em>Somewhere to rest for the night!</em></p>  <p>Then you remember the man at the bridge, and draw back in apprehension. But the starless night and the silent trees send a shiver through you, and you move to the door. With no other choice at hand, you knock.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 32
            }
        ]
    },
    {
        id: 25,
        nodetitle: `1.3.4.1`,
        text: `<p>You rush out onto the bridge, sword raised, but the men's blades are swinging wildly, and you can't find an opening. The slime underfoot threatens a disastrous fall at any moment, but you remain crouched, waiting.</p>  <p>"Let me go! I can end this!" cries the man.</p>  <p>The attacker's response is full of wrath, "Only one can escape, and it won't be you!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 26
            }
        ]
    },
    {
        id: 26,
        nodetitle: `1.3.4.2`,
        text: `<p><em>There!</em></p>  <p>You see it, the attacker's exposed back open before you. And you strike. The man cries out in surprise and pain, then begins falling sideways off the bridge.</p>  <p>In the last moments of life, he twists as he falls, his weapon slicing down toward your feet. It isn't much of a counterattack, but it's enough. You jump back instinctively, your feet losing their grip on the stones.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 27
            }
        ]
    },
    {
        id: 27,
        nodetitle: `1.3.4.3`,
        text: `<p>You hang for a moment, then follow him with a crash into the water. The icy waves close over you. The sword is gone. You rise to the surface once, catching a wild glimpse of the bridge, the man watching you. Your legs are numb. You sink again into the darkness.</p>`,
        options: [
            {
                text: `Try again`,
                nextText: -1
            }
        ]
    },
    {
        id: 28,
        nodetitle: `1.4.1.1`,
        text: `<p>Your sword makes a hollow ring against the wood of the door. A moment passes, then the door swings open, bathing you in light. In the doorway stands a shadow. You step back, but the shadow gestures, and a word cuts through your mind, harsh and clear.</p>  <p><em>Enter.</em></p>  <p>Your legs move against your will. The room is lined with shelves of bottles, jars, plants, and herbs. The center of the room is dominated by a large table covered in the same.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 29
            }
        ]
    },
    {
        id: 29,
        nodetitle: `1.4.1.2`,
        text: `<p>The door closes behind you and the shadow moves to the fire. In its glow you get your first look at the figure before you.</p>  <p>It's a gnarled old woman, wrapped in a cloak. Her hood shrouds her face, but her eyes glow with the light of the embers. When she speaks, her lips make no sound, but in your mind you hear her:</p>  <p><em>A new traveler. What do you seek?</em></p>  <p>How do you answer?</p>`,
        options: [
            {
                text: `Where am I?`,
                nextText: 34
            },
            {
                text: `Who are you?`,
                nextText: 35
            }
        ]
    },
    {
        id: 30,
        nodetitle: `1.4.2.1`,
        text: `<p>Your sword makes a hollow ring against the wood of the door. A moment passes, then the door swings open, bathing you in light. In the doorway stands a shadow. You step back, but the shadow gestures, and a word cuts through your mind, harsh and clear.</p>  <p><em>Enter.</em></p>  <p>Your legs move against your will. The room is lined with shelves of bottles, jars, plants, and herbs. The center of the room is dominated by a large table covered in the same.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        nodetitle: `1.4.2.2`,
        text: `<p>The door closes behind you and the shadow moves to the fire. In its glow you get your first look at the figure before you.</p>  <p>It's a gnarled old woman, wrapped in a cloak. Her hood shrouds her face, but her eyes glow with the light of the embers. When she speaks, her lips make no sound, but in your mind you hear her:</p>  <p><em>A new traveler. What do you seek?</em></p>  <p>How do you answer?</p>`,
        options: [
            {
                text: `Where am I?`,
                nextText: 36
            },
            {
                text: `Who are you?`,
                nextText: 37
            }
        ]
    },
    {
        id: 32,
        nodetitle: `1.4.3.1`,
        text: `<p>Your sword makes a hollow ring against the wood of the door. A moment passes, then the door swings open, bathing you in light. In the doorway stands a shadow. You step back, but the shadow gestures, and a word cuts through your mind, harsh and clear.</p>  <p><em>Enter.</em></p>  <p>Your legs move against your will. The room is lined with shelves of bottles, jars, plants, and herbs. The center of the room is dominated by a large table covered in the same.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        nodetitle: `1.4.3.2`,
        text: `<p>The door closes behind you and the shadow moves to the fire. In its glow you get your first look at the figure before you.</p>  <p>It's a gnarled old woman, wrapped in a cloak. Her hood shrouds her face, but her eyes glow with the light of the embers. When she speaks, her lips make no sound, but in your mind you hear her:</p>  <p><em>A new traveler. What do you seek?</em></p>  <p>How do you answer?</p>`,
        options: [
            {
                text: `Where am I?`,
                nextText: 38
            },
            {
                text: `Who are you?`,
                nextText: 39
            }
        ]
    },
    {
        id: 34,
        nodetitle: `1.5.1.1`,
        text: `<p>"Where am I?"</p>  <p>Her eyes shine with cunning.</p>  <p><em>Perhaps you will succeed, then. But time reveals all. You are in Saltus. You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</em></p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 40
            }
        ]
    },
    {
        id: 35,
        nodetitle: `1.5.2.1`,
        text: `<p>"Who are you?"</p>  <p>Her eyes are cold.</p>  <p><em>A fool seeks what he possesses already. I am the gatekeeper, yet I bear no key. But this knowledge will not aid you in your journey.</em></p>  <p>Her eyes stare into yours.</p>  <p><em>You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</em></p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 40
            }
        ]
    },
    {
        id: 36,
        nodetitle: `1.5.3.1`,
        text: `<p>"Where am I?"</p>  <p>Her eyes shine with cunning.</p>  <p>Perhaps you will succeed, then. But time reveals all. You are in Saltus. You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 42
            }
        ]
    },
    {
        id: 37,
        nodetitle: `1.5.4.1`,
        text: `<p>"Who are you?"</p>  <p>Her eyes are cold.</p>  <p>A fool seeks what he possesses already. I am the gatekeeper, yet I bear no key. But this knowledge will not aid you in your journey.</p>  <p>Her eyes stare into yours.</p>  <p>You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 42
            }
        ]
    },
    {
        id: 38,
        nodetitle: `1.5.5.1`,
        text: `<p>"Where am I?"</p>  <p>Her eyes shine with cunning.</p>  <p>Perhaps you will succeed, then. But time reveals all. You are in Saltus. You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 44
            }
        ]
    },
    {
        id: 39,
        nodetitle: `1.5.6.1`,
        text: `<p>"Who are you?"</p>  <p>Her eyes are cold.</p>  <p>A fool seeks what he possesses already. I am the gatekeeper, yet I bear no key. But this knowledge will not aid you in your journey.</p>  <p>Her eyes stare into yours.</p>  <p>You are in the snare. The gate to freedom is locked. Many seek the key. But know this: only one may find it.</p>  <p>The woman begins to chant aloud, her voice a rasp of air. The language is foreign, but as you listen, the sounds change, pieces falling into place in your mind, and the meaning emerges.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 44
            }
        ]
    },
    {
        id: 40,
        nodetitle: `1.6.1.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 41
            }
        ]
    },
    {
        id: 41,
        nodetitle: `1.6.1.2`,
        text: `<p>With the last word there is a sharp crack, and the door to the hut slams open. The room swims and you stumble to the ground. The fire is dancing in the wind. Your mind begins to fade, but you hear the last words of the witch in your mind as the world slips away:</p>  <p><em>The first of three has passed. Use your time well, traveler.</em></p>  <p>And you remember no more.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1201
            }
        ]
    },
    {
        id: 42,
        nodetitle: `1.6.2.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 43
            }
        ]
    },
    {
        id: 43,
        nodetitle: `1.6.2.2`,
        text: `<p>With the last word there is a sharp crack, and the door to the hut slams open. The room swims and you stumble to the ground. The fire is dancing in the wind. Your mind begins to fade, but you hear the last words of the witch in your mind as the world slips away:</p>  <p><em>The first of three has passed. Use your time well, traveler.</em></p>  <p>And you remember no more.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1202
            }
        ]
    },
    {
        id: 44,
        nodetitle: `1.6.3.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 45
            }
        ]
    },
    {
        id: 45,
        nodetitle: `1.6.3.2`,
        text: `<p>With the last word there is a sharp crack, and the door to the hut slams open. The room swims and you stumble to the ground. The fire is dancing in the wind. Your mind begins to fade, but you hear the last words of the witch in your mind as the world slips away:</p>  <p><em>The first of three has passed. Use your time well, traveler.</em></p>  <p>And you remember no more.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 50
            }
        ]
    },
    {
        id: 46,
        nodetitle: `2.1.1.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You sit up with a start.</p>  <p><em>I'm back where I started!</em></p>  <p>Your mind flashes through the events of yesterday: the forest, the fighting men, the old hut, the woman — some kind of witch. You remember the chanting, a riddle of some kind:</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 47
            }
        ]
    },
    {
        id: 47,
        nodetitle: `2.1.1.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 52
            }
        ]
    },
    {
        id: 48,
        nodetitle: `2.1.2.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You sit up with a start.</p>  <p><em>I'm back where I started!</em></p>  <p>Your mind flashes through the events of yesterday: the forest, the fighting men, the old hut, the woman — some kind of witch. You remember the chanting, a riddle of some kind:</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 49
            }
        ]
    },
    {
        id: 49,
        nodetitle: `2.1.2.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 54
            }
        ]
    },
    {
        id: 50,
        nodetitle: `2.1.3.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You sit up with a start.</p>  <p><em>I'm back where I started!</em></p>  <p>Your mind flashes through the events of yesterday: the forest, the fighting men, the old hut, the woman — some kind of witch. You remember the chanting, a riddle of some kind:</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 51
            }
        ]
    },
    {
        id: 51,
        nodetitle: `2.1.3.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1203
            }
        ]
    },
    {
        id: 52,
        nodetitle: `2.2.1.1`,
        text: `<p>But what could it mean?</p>  <p><em>What am I and all the rest?</em></p>  <p>You glance down at the gleaming silver in the grass.</p>  <p><em>Swords. The riddle is talking about swords. This is a game of some kind: a competition.</em></p>  <p>You think back to the men in the clearing yesterday, and the witch's words flash in your memory:</p>  <p><em>Only one may escape. Those men must have been trapped in here as well!</em></p>  <p>You remember the fighting yesterday and your resolve hardens into determination.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 53
            }
        ]
    },
    {
        id: 53,
        nodetitle: `2.2.1.2`,
        text: `<p><em>I'm not going to die in this forest. If only one of us can escape, it's going to be me.</em></p>  <p>You stand, sword at the ready.</p>  <p><em>What did the witch say? The gate to freedom is locked.</em></p>  <p>And the riddle is the key. Solve the riddle, find the gate.</p>  <p><em>I know what the riddle means, but where is the gate? I've got to get to that ridge. I'll be able to see it from there.</em></p>  <p>You start walking.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 58
            }
        ]
    },
    {
        id: 54,
        nodetitle: `2.2.2.1`,
        text: `<p>But what could it mean?</p>  <p><em>What am I and all the rest?</em></p>  <p>You glance down at the gleaming silver in the grass.</p>  <p><em>Swords. The riddle is talking about swords. This is a game of some kind: a competition.</em></p>  <p>You think back to the men yesterday, fighting for their lives, and the witch's words flash in your memory:</p>  <p><em>Only one may escape.</em></p>  <p>The others must be trapped here as well! You remember running for your life and your resolve hardens into determination.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 55
            }
        ]
    },
    {
        id: 55,
        nodetitle: `2.2.2.2`,
        text: `<p><em>I'm not going to die in this forest. If only one of us can escape, it's going to be me.</em></p>  <p>You stand, sword at the ready.</p>  <p><em>What did the witch say? The gate to freedom is locked.</em></p>  <p>And the riddle is the key. Solve the riddle, find the gate.</p>  <p><em>I know what the riddle means, but where is the gate?</em></p>  <p>It could be at the ridge or the river. No way to tell without looking.</p>  <p>What will it be?</p>`,
        options: [
            {
                text: `Ridge`,
                nextText: 63
            },
            {
                text: `River`,
                nextText: 68
            }
        ]
    },
    {
        id: 56,
        nodetitle: `2.2.3.1`,
        text: `<p>But what could it mean?</p>  <p><em>What am I and all the rest?</em></p>  <p>You glance down at the gleaming silver in the grass.</p>  <p><em>Swords. The riddle is talking about swords. This is a game of some kind: a competition.</em></p>  <p>You think back to the men yesterday, fighting for their lives, and the witch's words flash in your memory:</p>  <p><em>Only one may escape.</em></p>  <p>The others must be trapped here as well! You remember running for your life and your resolve hardens into determination.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 57
            }
        ]
    },
    {
        id: 57,
        nodetitle: `2.2.3.2`,
        text: `<p><em>I'm not going to die in this forest. If only one of us can escape, it's going to be me.</em></p>  <p>You stand, sword at the ready.</p>  <p><em>What did the witch say? The gate to freedom is locked.</em></p>  <p>And the riddle is the key. Solve the riddle, find the gate.</p>  <p><em>I know what the riddle means, but where is the gate?</em></p>  <p>It could be at the ridge or the river. No way to tell without looking.</p>  <p>What will it be?</p>`,
        options: [
            {
                text: `Ridge`,
                nextText: 71
            },
            {
                text: `River`,
                nextText: 76
            }
        ]
    },
    {
        id: 58,
        nodetitle: `2.3.1.1`,
        text: `<p>You march off in the right direction, pondering what your next move will be.</p>  <p><em>Could the gate be at the top of the cliff?</em></p>  <p>You hear running footsteps ahead of you. You duck into the shadow of a tree. You see a figure emerge from the trees, sword in hand. He's almost past you when you shout, stepping from your hiding place.</p>  <p>The man jumps back, surprised at your sudden appearance.</p>  <p>"Who are you?" you demand, your voice coming out harsher than you'd anticipated.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 59
            }
        ]
    },
    {
        id: 59,
        nodetitle: `2.3.1.2`,
        text: `<p>The stranger stares at you for a moment, seeming to fight within himself for how to answer. "No one. Please, let me pass," he says.</p>  <p>He tries to move past you, but you block his way. "You're looking for the gate. Where is it?"</p>  <p>If the man was frightened before, he looks terrified now, glancing past you nervously. "You have to let me pass! There isn't much time!"</p>  <p><em>So he does know where it is.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 60
            }
        ]
    },
    {
        id: 60,
        nodetitle: `2.3.1.3`,
        text: `<p>"Tell me where the gateway is and I'll let you pass."</p>  <p>He shuffles, sword ready to ward off any coming attacks. "I don't know where it is."</p>  <p>Your anger flares. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself!"</p>  <p>You begin moving forward, sword raised. He hesitates a moment, then turns and runs. You charge after him.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 61
            }
        ]
    },
    {
        id: 61,
        nodetitle: `2.3.1.4`,
        text: `<p>You chase him past the base of the ridge, but there's no time to check for the gate. He enters the forest, and you follow. Branches whip past you, stinging your arms and face.</p>  <p>In a moment, the trees fall away and you are running in a large open space of some kind. The man trips, crashing to the ground. You try to strike at him, but he's up in a flash, and your swords connect with a clang of metal.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 62
            }
        ]
    },
    {
        id: 62,
        nodetitle: `2.3.1.5`,
        text: `<p>"You would leave me here to die!" You shout, wrenching your weapon away and swinging it around, only to be stopped by another parry.</p>  <p>He gives no response, his face a mask of determination and strain.</p>  <p>"You'd steal my only chance at escaping this blasted place!" Another blow, and he is stumbling back.</p>  <p>In desperation he cries "I'm not stealing anything! You don't understand!"</p>  <p>Not listening, you bring your sword down hard, throwing him to the ground. You advance, filled with rage, preparing to end this. You raise your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 79
            }
        ]
    },
    {
        id: 63,
        nodetitle: `2.3.2.1`,
        text: `<p>You march off in the right direction, pondering what your next move will be.</p>  <p><em>Could the gate be at the top of the cliff?</em></p>  <p>You hear running footsteps ahead of you. You duck into the shadow of a tree. You see a figure emerge from the trees, sword in hand. He's almost past you when you shout, stepping from your hiding place.</p>  <p>The man jumps back, surprised at your sudden appearance.</p>  <p>"Who are you?" you demand, your voice coming out harsher than you'd anticipated.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 64
            }
        ]
    },
    {
        id: 64,
        nodetitle: `2.3.2.2`,
        text: `<p>The stranger stares at you for a moment, seeming to fight within himself for how to answer. "No one. Please, let me pass," he says.</p>  <p>He tries to move past you, but you block his way. "You're looking for the gate. Where is it?"</p>  <p>If the man was frightened before, he looks terrified now, glancing past you nervously. "You have to let me pass! There isn't much time!"</p>  <p><em>So he does know where it is.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 65
            }
        ]
    },
    {
        id: 65,
        nodetitle: `2.3.2.3`,
        text: `<p>"Tell me where the gateway is and I'll let you pass."</p>  <p>He shuffles, sword ready to ward off any coming attacks. "I don't know where it is."</p>  <p>Your anger flares. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself!"</p>  <p>You begin moving forward, sword raised. He hesitates a moment, then turns and runs. You charge after him.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 66
            }
        ]
    },
    {
        id: 66,
        nodetitle: `2.3.2.4`,
        text: `<p>You chase him past the base of the ridge, but there's no time to check for the gate. He enters the forest, and you follow. Branches whip past you, stinging your arms and face.</p>  <p>In a moment, the trees fall away and you are running in a large open space of some kind. The man trips, crashing to the ground. You try to strike at him, but he's up in a flash, and your swords connect with a clang of metal.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 67
            }
        ]
    },
    {
        id: 67,
        nodetitle: `2.3.2.5`,
        text: `<p>"You would leave me here to die!" You shout, wrenching your weapon away and swinging it around, only to be stopped by another parry.</p>  <p>He gives no response, his face a mask of determination and strain.</p>  <p>"You'd steal my only chance at escaping this blasted place!" Another blow, and he is stumbling back.</p>  <p>In desperation he cries "I'm not stealing anything! You don't understand!"</p>  <p>Not listening, you bring your sword down hard, throwing him to the ground. You advance, filled with rage, preparing to end this. You raise your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 82
            }
        ]
    },
    {
        id: 68,
        nodetitle: `2.3.3.1`,
        text: `<p>You move downhill toward the sound of running water. You've caught sight of the water when you see a man running along the bank of the river. You pause for a moment to watch him. No one is chasing him.</p>  <p><em>It seems like he knows where he's going. The gateway!</em></p>  <p>Fearing that he will escape before you can, you follow him, running through the trees, but keeping the water in sight. Soon you see the man's destination: the only bridge across the river, thin and shadowy in the late evening.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 69
            }
        ]
    },
    {
        id: 69,
        nodetitle: `2.3.3.2`,
        text: `<p><em>This must be the gate!</em></p>  <p>With a start you remember the witch's words from yesterday:</p>  <p><em>Only one may find it.</em></p>  <p>And you are suddenly desperate to be rid of this cursed forest and the fear of death at any moment. You break free from the trees and call out. "Stop!" The man turns in surprise, but on seeing you, he picks up speed.</p>  <p><em>He wants it for himself.</em></p>  <p>Your blood runs hot with anger.</p>  <p><em>We'll see about that.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 70
            }
        ]
    },
    {
        id: 70,
        nodetitle: `2.3.3.3`,
        text: `<p>You run toward him, sword raised. You catch him as he reaches the bridge. Before he can cross, you're swinging at him, and he is forced to block your blow. You can see desperation in his eyes, confirming that this indeed must be the gate.</p>  <p>"Think you can run off and leave the rest of us here, can you?" Your sword dances in the air, but he manages to counter your strikes.</p>  <p>He speaks through heavy breaths, "Please, let me go! I'm doing this for all of us!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 83
            }
        ]
    },
    {
        id: 71,
        nodetitle: `2.3.4.1`,
        text: `<p>You march off in the right direction, pondering what your next move will be.</p>  <p><em>Could the gate be at the top of the cliff?</em></p>  <p>You hear running footsteps ahead of you. You duck into the shadow of a tree. You see a figure emerge from the trees, sword in hand. He's almost past you when you shout, stepping from your hiding place.</p>  <p>The man jumps back, surprised at your sudden appearance.</p>  <p>"Who are you?" you demand, your voice coming out harsher than you'd anticipated.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 72
            }
        ]
    },
    {
        id: 72,
        nodetitle: `2.3.4.2`,
        text: `<p>The stranger stares at you for a moment, seeming to fight within himself for how to answer. "No one. Please, let me pass," he says.</p>  <p>He tries to move past you, but you block his way. "You're looking for the gate. Where is it?"</p>  <p>If the man was frightened before, he looks terrified now, glancing past you nervously. "You have to let me pass! There isn't much time!"</p>  <p><em>So he does know where it is.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 73
            }
        ]
    },
    {
        id: 73,
        nodetitle: `2.3.4.3`,
        text: `<p>"Tell me where the gateway is and I'll let you pass."</p>  <p>He shuffles, sword ready to ward off any coming attacks. "I don't know where it is."</p>  <p>Your anger flares. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself!"</p>  <p>You begin moving forward, sword raised. He hesitates a moment, then turns and runs. You charge after him.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 74
            }
        ]
    },
    {
        id: 74,
        nodetitle: `2.3.4.4`,
        text: `<p>You chase him past the base of the ridge, but there's no time to check for the gate. He enters the forest, and you follow. Branches whip past you, stinging your arms and face.</p>  <p>In a moment, the trees fall away and you are running in a large open space of some kind. The man trips, crashing to the ground. You try to strike at him, but he's up in a flash, and your swords connect with a clang of metal.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 75
            }
        ]
    },
    {
        id: 75,
        nodetitle: `2.3.4.5`,
        text: `<p>"You would leave me here to die!" You shout, wrenching your weapon away and swinging it around, only to be stopped by another parry.</p>  <p>He gives no response, his face a mask of determination and strain.</p>  <p>"You'd steal my only chance at escaping this blasted place!" Another blow, and he is stumbling back.</p>  <p>In desperation he cries "I'm not stealing anything! You don't understand!"</p>  <p>Not listening, you bring your sword down hard, throwing him to the ground. You advance, filled with rage, preparing to end this. You raise your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 86
            }
        ]
    },
    {
        id: 76,
        nodetitle: `2.3.5.1`,
        text: `<p>You move downhill toward the sound of running water. You've caught sight of the water when you see a man running along the bank of the river. You pause for a moment to watch him. No one is chasing him.</p>  <p><em>It seems like he knows where he's going. The gateway!</em></p>  <p>Fearing that he will escape before you can, you follow him, running through the trees, but keeping the water in sight. Soon you see the man's destination: the only bridge across the river, thin and shadowy in the late evening.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 77
            }
        ]
    },
    {
        id: 77,
        nodetitle: `2.3.5.2`,
        text: `<p><em>This must be the gate!</em></p>  <p>With a start you remember the witch's words from yesterday:</p>  <p><em>Only one may find it.</em></p>  <p>And you are suddenly desperate to be rid of this cursed forest and the fear of death at any moment. You break free from the trees and call out. "Stop!" The man turns in surprise, but on seeing you, he picks up speed.</p>  <p><em>He wants it for himself.</em></p>  <p>Your blood runs hot with anger.</p>  <p><em>We'll see about that.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 78
            }
        ]
    },
    {
        id: 78,
        nodetitle: `2.3.5.3`,
        text: `<p>You run toward him, sword raised. You catch him as he reaches the bridge. Before he can cross, you're swinging at him, and he is forced to block your blow. You can see desperation in his eyes, confirming that this indeed must be the gate.</p>  <p>"Think you can run off and leave the rest of us here, can you?" Your sword dances in the air, but he manages to counter your strikes.</p>  <p>He speaks through heavy breaths, "Please, let me go! I'm doing this for all of us!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 87
            }
        ]
    },
    {
        id: 79,
        nodetitle: `2.4.1.1`,
        text: `<p>Your blade falls in the blink of an eye. The man in front of you lets out a cry, then is silent. For a moment you stand there, uncertain. You kneel down and check for a pulse, but there is none to be found. Heart cold, you stand, turning away from the body.</p>  <p><em>I am committed.</em></p>  <p>You tell yourself that it had to be done, but a small part of you doubts if you did the right thing.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 80
            }
        ]
    },
    {
        id: 80,
        nodetitle: `2.4.1.2`,
        text: `<p><em>There's nothing more for me here.</em></p>  <p>You realize with a start how dark it has become.</p>  <p><em>I have to get back to the ridge!</em></p>  <p>You begin walking back the way you came. As you do, you take stock of your surroundings for the first time.</p>  <p><em>This must be some sort of clearing.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 81
            }
        ]
    },
    {
        id: 81,
        nodetitle: `2.4.1.3`,
        text: `<p>You've reached the edge of the trees when a figure leaps from the bushes in front of you with a strangled cry. Running forward with death in his eyes, he raises his sword.</p>  <p>Adrenaline pumping in your veins, you try to block, but his blade slips past you. His aim is true, and now it's your turn to slump to the ground. From your position you can make out the form of the other dead man in the clearing. Then all goes dark.</p>`,
        options: [
            {
                text: `Try again`,
                nextText: -1
            }
        ]
    },
    {
        id: 82,
        nodetitle: `2.4.2.1`,
        text: `<p>There is a shout from behind you. You whirl around, finding another man emerging from the forest. He rushes toward you at first, but his confidence soon withers, and he slows.</p>  <p><em>Coward.</em></p>  <p>Turning back to your rival, you see him at the edge of the clearing, disappearing into the falling dusk. Anger rises within you.</p>  <p><em>He let him escape!</em></p>  <p>You turn toward the newcomer, itching to attack, but remember the running man. You have to decide: stay and fight, or pursue the runner?</p>`,
        options: [
            {
                text: `Stay`,
                nextText: 90
            },
            {
                text: `Leave`,
                nextText: 93
            }
        ]
    },
    {
        id: 83,
        nodetitle: `2.4.3.1`,
        text: `<p>Rage bubbles up inside you at his words. "Liar!"</p>  <p>You bring your sword down with all your might, and though he manages to block your blow, the force throws him off balance, and he staggers back, right to the edge of the river.</p>  <p>His eyes are cold. "Kill me and you'll never escape on your own. Let me go, and you might have a chance."</p>  <p>You don't buy it. "I'm not going to let you trap me here!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 84
            }
        ]
    },
    {
        id: 84,
        nodetitle: `2.4.3.2`,
        text: `<p>You raise your sword again, about to end this, when from behind you comes a shout. You turn to see a second man emerging from the trees behind you.</p>  <p><em>Someone else trying to leave me here to die.</em></p>  <p>But you remember your opponent, and spin to see him climbing the broken stones of the bridge. With a roar you follow. The stones are dark in the fading light, each slick with water. One wrong move and the gate is lost forever.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 85
            }
        ]
    },
    {
        id: 85,
        nodetitle: `2.4.3.3`,
        text: `<p>But your fear of being left in the forest is strong, and you meet the man at the apex of the bridge. He turns, and your swords lock again with a clang. He makes no attempt to knock you off, but blocks all your attacks. You can sense he is growing tired.</p>  <p><em>A little longer, and I'll have him, but the man behind me...</em></p>  <p>Do you risk a glance behind you or continue the fight?</p>`,
        options: [
            {
                text: `Glance back`,
                nextText: 95
            },
            {
                text: `Fight on`,
                nextText: 98
            }
        ]
    },
    {
        id: 86,
        nodetitle: `2.4.4.1`,
        text: `<p>There is a shout from behind you. You whirl around, finding another man emerging from the forest. He rushes toward you at first, but his confidence soon withers, and he slows.</p>  <p><em>Coward.</em></p>  <p>Turning back to your rival, you see him at the edge of the clearing, disappearing into the falling dusk. Anger rises within you.</p>  <p><em>He let him escape!</em></p>  <p>You turn toward the newcomer, itching to attack, but remember the running man. You have to decide: stay and fight, or pursue the runner?</p>`,
        options: [
            {
                text: `Stay`,
                nextText: 99
            },
            {
                text: `Leave`,
                nextText: 102
            }
        ]
    },
    {
        id: 87,
        nodetitle: `2.4.5.1`,
        text: `<p>Rage bubbles up inside you at his words. "Liar!"</p>  <p>You bring your sword down with all your might, and though he manages to block your blow, the force throws him off balance, and he staggers back, right to the edge of the river.</p>  <p>His eyes are cold. "Kill me and you'll never escape on your own. Let me go, and you might have a chance."</p>  <p>You don't buy it. "I'm not going to let you trap me here!"</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 88
            }
        ]
    },
    {
        id: 88,
        nodetitle: `2.4.5.2`,
        text: `<p>You raise your sword again, about to end this, when from behind you comes a shout. You turn to see a second man emerging from the trees behind you.</p>  <p><em>Someone else trying to leave me here to die.</em></p>  <p>But you remember your opponent, and spin to see him climbing the broken stones of the bridge. With a roar you follow. The stones are dark in the fading light, each slick with water. One wrong move and the gate is lost forever.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 89
            }
        ]
    },
    {
        id: 89,
        nodetitle: `2.4.5.3`,
        text: `<p>But your fear of being left in the forest is strong, and you meet the man at the apex of the bridge. He turns, and your swords lock again with a clang. He makes no attempt to knock you off, but blocks all your attacks. You can sense he is growing tired.</p>  <p><em>A little longer, and I'll have him, but the man behind me...</em></p>  <p>Do you risk a glance behind you or continue the fight?</p>`,
        options: [
            {
                text: `Glance back`,
                nextText: 104
            },
            {
                text: `Fight on`,
                nextText: 107
            }
        ]
    },
    {
        id: 90,
        nodetitle: `2.5.1.1`,
        text: `<p>Your eyes are cold as you turn to stare at the newcomer.</p>  <p>"You let him get away," you say, the words low and menacing. "You'll pay for that."</p>  <p>You step toward him.</p>  <p>"Wait, I was only trying to —" You don't let him finish.</p>  <p>The strike comes from frustration at losing your chance to escape. Your blade falls in the blink of an eye. The man falls to the ground. You kneel down and check for a pulse, but you find none.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 91
            }
        ]
    },
    {
        id: 91,
        nodetitle: `2.5.1.2`,
        text: `<p>Heart cold, you stand, turning away.</p>  <p><em>I am committed.</em></p>  <p>You tell yourself that it had to be done, but a small part of you doubts if you did the right thing. You remember the other man.</p>  <p><em>I might still catch him!</em></p>  <p>You turn and run into the forest.</p>  <p>The forest is thick here. As you pause, unsure of where to go, you catch the sound of snapping branches far ahead in the distance. In a rage you follow, hacking at the forest with your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 92
            }
        ]
    },
    {
        id: 92,
        nodetitle: `2.5.1.3`,
        text: `<p>You can tell that you are gaining on him, and the revelation gives you new energy. You are close to him, maybe only a dozen yards when the trees fall silent. For a moment you stop and listen, but there is no sound.</p>  <p><em>Hiding, the coward.</em></p>  <p>But as you think this, you spot a small point of light up ahead.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 108
            }
        ]
    },
    {
        id: 93,
        nodetitle: `2.5.2.1`,
        text: `<p><em>I can't waste my time on him!</em></p>  <p>With a growl of anger, you turn and run into the trees. The forest is thick here, and you fear you've lost him, when from up ahead you hear the sound of snapping branches. In a rage you follow, hacking at the forest with your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 94
            }
        ]
    },
    {
        id: 94,
        nodetitle: `2.5.2.2`,
        text: `<p>You can tell that you are gaining on him, and the revelation gives you new energy. You are close to him, maybe only a dozen yards when the trees fall silent. For a moment you stop and listen, but there is no sound.</p>  <p><em>Hiding, the coward.</em></p>  <p>But as you think this, you spot a small point of light up ahead.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 111
            }
        ]
    },
    {
        id: 95,
        nodetitle: `2.5.3.1`,
        text: `<p><em>I have to know!</em></p>  <p>But looking over your shoulder, you see the man still at the edge of the bridge, hesitating. You turn back, triumphant.</p>  <p><em>Now I have him.</em></p>  <p>Your opponent tries to run, but you are too fast for him. Your sword falls like lightning. He hangs for a moment in the air, then falls, disappearing into the chaos below.</p>  <p><em>I've done it!</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 96
            }
        ]
    },
    {
        id: 96,
        nodetitle: `2.5.3.2`,
        text: `<p>You turn, but the newcomer is still at the base of the bridge. Your eyes lock for a moment, and then, without a word, he's off, running away into the trees.</p>  <p><em>Coward.</em></p>  <p>You turn and move on, down the far side of the bridge.</p>  <p>Leading away from the bridge on this side of the river, a narrow path leads into the forest.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 97
            }
        ]
    },
    {
        id: 97,
        nodetitle: `2.5.3.3`,
        text: `<p>You hurry down it, unsure whether this is the way to freedom. The night is thick under the trees.</p>  <p>Within minutes, it's too dark to see. The path fades to a trail, a narrow track, then nothing. You stand for a moment in the silent forest, unsure what to do next, when you notice far ahead in the distance a pinpoint of light.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 114
            }
        ]
    },
    {
        id: 98,
        nodetitle: `2.5.4.1`,
        text: `<p><em>A little more time. I'm so close!</em></p>  <p>Your opponent cries out in desperation, "Let me go! I can end this!"</p>  <p>You sense weakness in his words. "Only one can escape, and it won't be you!"</p>  <p>There is the sound of rushing air behind you and pain ignites in your back.</p>  <p><em>I should have turned.</em></p>  <p>Your mind is clouded by pain, and you fall sideways. In a last moment of clarity, you twist, swinging at your murderer. Then the waters take you.</p>`,
        options: [
            {
                text: `Try again`,
                nextText: -1
            }
        ]
    },
    {
        id: 99,
        nodetitle: `2.5.5.1`,
        text: `<p>Your eyes are cold as you turn to stare at the newcomer.</p>  <p>"You let him get away," you say, the words low and menacing. "You'll pay for that."</p>  <p>You step toward him.</p>  <p>"Wait, I was only trying to —" You don't let him finish.</p>  <p>The strike comes from frustration at losing your chance to escape. Your blade falls in the blink of an eye. The man falls to the ground. You kneel down and check for a pulse, but you find none.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 100
            }
        ]
    },
    {
        id: 100,
        nodetitle: `2.5.5.2`,
        text: `<p>Heart cold, you stand, turning away.</p>  <p><em>I am committed.</em></p>  <p>You tell yourself that it had to be done, but a small part of you doubts if you did the right thing. You remember the other man.</p>  <p><em>I might still catch him!</em></p>  <p>You turn and run into the forest.</p>  <p>The forest is thick here. As you pause, unsure of where to go, you catch the sound of snapping branches far ahead in the distance. In a rage you follow, hacking at the forest with your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 101
            }
        ]
    },
    {
        id: 101,
        nodetitle: `2.5.5.3`,
        text: `<p>You can tell that you are gaining on him, and the revelation gives you new energy. You are close to him, maybe only a dozen yards when the trees fall silent. For a moment you stop and listen, but there is no sound.</p>  <p><em>Hiding, the coward.</em></p>  <p>But as you think this, you spot a small point of light up ahead.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 116
            }
        ]
    },
    {
        id: 102,
        nodetitle: `2.5.6.1`,
        text: `<p><em>I can't waste my time on him!</em></p>  <p>With a growl of anger, you turn and run into the trees. The forest is thick here, and you fear you've lost him, when from up ahead you hear the sound of snapping branches. In a rage you follow, hacking at the forest with your sword.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 103
            }
        ]
    },
    {
        id: 103,
        nodetitle: `2.5.6.2`,
        text: `<p>You can tell that you are gaining on him, and the revelation gives you new energy. You are close to him, maybe only a dozen yards when the trees fall silent. For a moment you stop and listen, but there is no sound.</p>  <p><em>Hiding, the coward.</em></p>  <p>But as you think this, you spot a small point of light up ahead.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 119
            }
        ]
    },
    {
        id: 104,
        nodetitle: `2.5.7.1`,
        text: `<p><em>I have to know!</em></p>  <p>But looking over your shoulder, you see the man still at the edge of the bridge, hesitating. You turn back, triumphant.</p>  <p><em>Now I have him.</em></p>  <p>Your opponent tries to run, but you are too fast for him. Your sword falls like lightning. He hangs for a moment in the air, then falls, disappearing into the chaos below.</p>  <p><em>I've done it!</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 105
            }
        ]
    },
    {
        id: 105,
        nodetitle: `2.5.7.2`,
        text: `<p>You turn, but the newcomer is still at the base of the bridge. Your eyes lock for a moment, and then, without a word, he's off, running away into the trees.</p>  <p><em>Coward.</em></p>  <p>You turn and move on, down the far side of the bridge.</p>  <p>Leading away from the bridge on this side of the river, a narrow path leads into the forest.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 106
            }
        ]
    },
    {
        id: 106,
        nodetitle: `2.5.7.3`,
        text: `<p>You hurry down it, unsure whether this is the way to freedom. The night is thick under the trees.</p>  <p>Within minutes, it's too dark to see. The path fades to a trail, a narrow track, then nothing. You stand for a moment in the silent forest, unsure what to do next, when you notice far ahead in the distance a pinpoint of light.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 122
            }
        ]
    },
    {
        id: 107,
        nodetitle: `2.5.8.1`,
        text: `<p><em>A little more time. I'm so close!</em></p>  <p>Your opponent cries out in desperation, "Let me go! I can end this!"</p>  <p>You sense weakness in his words. "Only one can escape, and it won't be you!"</p>  <p>There is the sound of rushing air behind you and pain ignites in your back.</p>  <p><em>I should have turned.</em></p>  <p>Your mind is clouded by pain, and you fall sideways. In a last moment of clarity, you twist, swinging at your murderer. Then the waters take you.</p>`,
        options: [
            {
                text: `Try again`,
                nextText: -1
            }
        ]
    },
    {
        id: 108,
        nodetitle: `2.6.1.1`,
        text: `<p>You creep forward, and as you do, the light materializes into a campfire set at the base of a vast stone rising up into the shadows of the night, its peak somewhere high above. Standing between you and the fire is the man, facing away from you.</p>  <p><em>This must be the gate!</em></p>  <p>Filled with determination, you spring forward, yelling. The man tries to turn, but is too slow, and your blow strikes him to the ground. You wait, panting for breath, but there is no movement from the man.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 109
            }
        ]
    },
    {
        id: 109,
        nodetitle: `2.6.1.2`,
        text: `<p>Your mind becomes aware of a third person nearby. Seated across the fire, eyes the color of blood, sits the witch. She must have seen you approach, but she gave no warning to the man. Her voice appears in your mind, almost reflective.</p>  <p><em>So Saltus claims its own.</em></p>  <p>You speak, your voice louder and harsher than you had planned: "I've found your gate and solved your riddle, you old witch! Now release me!"</p>  <p>She stares at you for a moment, then, without warning, the woman throws back her head and cackles, the grating sound reverberating off the stone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 110
            }
        ]
    },
    {
        id: 110,
        nodetitle: `2.6.1.3`,
        text: `<p>You shudder and draw back, raising the sword as a talisman against evil, but the woman remains seated.</p>  <p><em>You have learned nothing. The way remains shut. Farewell, traveler. Your doom is written in blood, and by your own hand.</em></p>  <p>And with that, somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 124
            }
        ]
    },
    {
        id: 111,
        nodetitle: `2.6.2.1`,
        text: `<p>Remembering the cabin from the previous night, you rush forward, but the light is different, and it reveals itself to be not a hut, but a campfire.</p>  <p>Beyond the flames sits an enormous stone pillar. The surface is cracked and pitted from years of exposure. Seated against it is the witch, unmoving and observant as the stone behind her.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 112
            }
        ]
    },
    {
        id: 112,
        nodetitle: `2.6.2.2`,
        text: `<p>You are struck again by the witch's eyes, somehow always flashing with the red light of her fire. The silence of the night is broken only by the cracking of the fire and the wind in the trees. Then, with the same unearthly voice in your mind, you hear her:</p>  <p><em>Your time grows short. Yet the gate still stands unopened. What is the key? What are you and your fellows?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 113
            }
        ]
    },
    {
        id: 113,
        nodetitle: `2.6.2.3`,
        text: `<p>"Swords," you reply, "We are weapons locked in battle."</p>  <p>Without warning, the witch throws back her head and cackles, the grating sound reverberating off the stone. You shudder and draw back, raising the sword as a talisman against evil, but the woman remains seated.</p>  <p><em>The way remains shut, and the sword prepares to fall. The third day comes. Use it well, young traveler.</em></p>  <p>Somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 125
            }
        ]
    },
    {
        id: 114,
        nodetitle: `2.6.3.1`,
        text: `<p>The light materializes into a campfire set at the base of a vast stone rising up into the night. With a start, you notice the witch sitting across the fire. Her eyes glow red, and you shudder, thinking of the man on the bridge. Her voice appears in your mind.</p>  <p><em>Yes, the river has done its work. But what say you? Can you answer my riddle?</em></p>  <p><em>How does she know about the river?</em></p>  <p>You try to sound confident, but your voice shakes as you speak. "We're swords. Enemies locked in battle."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 114
            }
        ]
    },
    {
        id: 115,
        nodetitle: `2.6.3.2`,
        text: `<p>She stares at you for a moment, then the woman throws back her head and laughs, the awful sound reverberating off the stone.</p>  <p>You step back, raising the sword to ward off an attack, but the woman remains motionless.</p>  <p><em>Drowning men are most dangerous. Farewell, traveler. Your doom is written in blood.</em></p>  <p>From somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 126
            }
        ]
    },
    {
        id: 116,
        nodetitle: `2.6.4.1`,
        text: `<p>You creep forward, and as you do, the light materializes into a campfire set at the base of a vast stone rising up into the shadows of the night, its peak somewhere high above. Standing between you and the fire is the man, facing away from you.</p>  <p><em>This must be the gate!</em></p>  <p>Filled with determination, you spring forward, yelling. The man tries to turn, but is too slow, and your blow strikes him to the ground. You wait, panting for breath, but there is no movement from the man.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 117
            }
        ]
    },
    {
        id: 117,
        nodetitle: `2.6.4.2`,
        text: `<p>Your mind becomes aware of a third person nearby. Seated across the fire, eyes the color of blood, sits the witch. She must have seen you approach, but she gave no warning to the man. Her voice appears in your mind, almost reflective.</p>  <p><em>So Saltus claims its own.</em></p>  <p>You speak, your voice louder and harsher than you had planned: "I've found your gate and solved your riddle, you old witch! Now release me!"</p>  <p>She stares at you for a moment, then, without warning, the woman throws back her head and cackles, the grating sound reverberating off the stone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 118
            }
        ]
    },
    {
        id: 118,
        nodetitle: `2.6.4.3`,
        text: `<p>You shudder and draw back, raising the sword as a talisman against evil, but the woman remains seated.</p>  <p><em>You have learned nothing. The way remains shut. Farewell, traveler. Your doom is written in blood, and by your own hand.</em></p>  <p>And with that, somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 127
            }
        ]
    },
    {
        id: 119,
        nodetitle: `2.6.5.1`,
        text: `<p>Remembering the cabin from the previous night, you rush forward, but the light is different, and it reveals itself to be not a hut, but a campfire.</p>  <p>Beyond the flames sits an enormous stone pillar. The surface is cracked and pitted from years of exposure. Seated against it is the witch, unmoving and observant as the stone behind her.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 120
            }
        ]
    },
    {
        id: 120,
        nodetitle: `2.6.5.2`,
        text: `<p>You are struck again by the witch's eyes, somehow always flashing with the red light of her fire. The silence of the night is broken only by the cracking of the fire and the wind in the trees. Then, with the same unearthly voice in your mind, you hear her:</p>  <p><em>Your time grows short. Yet the gate still stands unopened. What is the key? What are you and your fellows?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 121
            }
        ]
    },
    {
        id: 121,
        nodetitle: `2.6.5.3`,
        text: `<p>"Swords," you reply, "We are weapons locked in battle."</p>  <p>Without warning, the witch throws back her head and cackles, the grating sound reverberating off the stone. You shudder and draw back, raising the sword as a talisman against evil, but the woman remains seated.</p>  <p><em>The way remains shut, and the sword prepares to fall. The third day comes. Use it well, young traveler.</em></p>  <p>Somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 128
            }
        ]
    },
    {
        id: 122,
        nodetitle: `2.6.6.1`,
        text: `<p>The light materializes into a campfire set at the base of a vast stone rising up into the night. With a start, you notice the witch sitting across the fire. Her eyes glow red, and you shudder, thinking of the man on the bridge. Her voice appears in your mind.</p>  <p><em>Yes, the river has done its work. But what say you? Can you answer my riddle?</em></p>  <p><em>How does she know about the river?</em></p>  <p>You try to sound confident, but your voice shakes as you speak. "We're swords. Enemies locked in battle."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 123
            }
        ]
    },
    {
        id: 123,
        nodetitle: `2.6.6.2`,
        text: `<p>She stares at you for a moment, then the woman throws back her head and laughs, the awful sound reverberating off the stone.</p>  <p>You step back, raising the sword to ward off an attack, but the woman remains motionless.</p>  <p><em>Drowning men are most dangerous. Farewell, traveler. Your doom is written in blood.</em></p>  <p>From somewhere deep in the woods around you, a wind picks up. Leaves begin to swirl around the fire, and over the sound of the noise, in a voice unnatural and stony, come the words...</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 129
            }
        ]
    },
    {
        id: 124,
        nodetitle: `2.7.1.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1301
            }
        ]
    },
    {
        id: 125,
        nodetitle: `2.7.2.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1302
            }
        ]
    },
    {
        id: 126,
        nodetitle: `2.7.3.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1303
            }
        ]
    },
    {
        id: 127,
        nodetitle: `2.7.4.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1304
            }
        ]
    },
    {
        id: 128,
        nodetitle: `2.7.5.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1305
            }
        ]
    },
    {
        id: 129,
        nodetitle: `2.7.6.1`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>  <p>With the final word, you fall to the ground, and the world slips away.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 1306
            }
        ]
    },
    {
        id: 130,
        nodetitle: `3.1.1.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 131
            }
        ]
    },
    {
        id: 131,
        nodetitle: `3.1.1.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 132
            }
        ]
    },
    {
        id: 132,
        nodetitle: `3.1.1.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 133
            }
        ]
    },
    {
        id: 133,
        nodetitle: `3.1.1.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 154
            }
        ]
    },
    {
        id: 134,
        nodetitle: `3.1.2.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 135
            }
        ]
    },
    {
        id: 135,
        nodetitle: `3.1.2.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 136
            }
        ]
    },
    {
        id: 136,
        nodetitle: `3.1.2.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 137
            }
        ]
    },
    {
        id: 137,
        nodetitle: `3.1.2.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Ridge`,
                nextText: 162
            },
            {
                text: `River`,
                nextText: 174
            }
        ]
    },
    {
        id: 138,
        nodetitle: `3.1.3.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 139
            }
        ]
    },
    {
        id: 139,
        nodetitle: `3.1.3.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 140
            }
        ]
    },
    {
        id: 140,
        nodetitle: `3.1.3.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 141
            }
        ]
    },
    {
        id: 141,
        nodetitle: `3.1.3.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 187
            }
        ]
    },
    {
        id: 142,
        nodetitle: `3.1.4.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 143
            }
        ]
    },
    {
        id: 143,
        nodetitle: `3.1.4.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 144
            }
        ]
    },
    {
        id: 144,
        nodetitle: `3.1.4.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 145
            }
        ]
    },
    {
        id: 145,
        nodetitle: `3.1.4.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 193
            }
        ]
    },
    {
        id: 146,
        nodetitle: `3.1.5.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 147
            }
        ]
    },
    {
        id: 147,
        nodetitle: `3.1.5.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 148
            }
        ]
    },
    {
        id: 148,
        nodetitle: `3.1.5.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 149
            }
        ]
    },
    {
        id: 149,
        nodetitle: `3.1.5.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 201
            }
        ]
    },
    {
        id: 150,
        nodetitle: `3.1.6.1`,
        text: `<p>You wake lying on your back, staring up into a ceiling of branches. You jump to your feet, sword in hand, but the woods around you are empty.</p>  <p><em>The third day. My last chance to escape.</em></p>  <p>Your mind flashes through the events of yesterday, settling on the witch's riddle.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 151
            }
        ]
    },
    {
        id: 151,
        nodetitle: `3.1.6.2`,
        text: `<p><em>The key you seek</em><br>  <em>Lies in what I speak:</em><br>  <em>You scratch and bite till it is done,</em><br>  <em>The victor of this game is one,</em><br>  <em>Dull and chipped, split in twain,</em><br>  <em>Within a crucible you are contained,</em><br>  <em>Your uttermost mettle to test,</em><br>  <em>What are you and all the rest?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 152
            }
        ]
    },
    {
        id: 152,
        nodetitle: `3.1.6.3`,
        text: `<p><em>Not swords.</em></p>  <p>That much is clear from the witch's response.</p>  <p><em>But what then?</em></p>  <p>You sit down, back resting against a tree, trying to sort things out.</p>  <p><em>The victor of this game is one... Split in twain...</em></p>  <p>A germ of an idea begins to grow in your mind.</p>  <p><em>You and all the rest...</em></p>  <p>A growing sense of horror creeps over you.</p>  <p><em>What are you and all the rest? The same.</em></p>  <p>All of you, trying to escape, seeking the gate.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 153
            }
        ]
    },
    {
        id: 153,
        nodetitle: `3.1.6.4`,
        text: `<p><em>So similar. Too similar.</em></p>  <p>You jump to your feet, realizing at last the true nature of this prison.</p>  <p><em>We are all one. We — I... am alone here.</em></p>  <p>The revelation comes like a lightning strike. You realize for the first time that everyone you've met here has been difficult to remember, their faces slipping from your memory.</p>  <p><em>I have been enchanted.</em></p>  <p>But this is the third day. If you fail to escape today, the knowledge will die with you. You must succeed.</p>  <p><em>But where is the gate?</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 201
            }
        ]
    },
    {
        id: 154,
        nodetitle: `3.2.1.1`,
        text: `<p><em>It must be at the ridge.</em></p>  <p>There's no time to waste. You grab your sword and run into the trees. You've gone no more than a hundred yards, when someone leaps out from behind a tree and stops you. He's got his sword raised, and his eyes are hard.</p>  <p>You stumble back as his words reach you: "Who are you?"</p>  <p><em>He must be from yesterday.</em></p>  <p>You stare at him for too long, horrified at what he means.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 155
            }
        ]
    },
    {
        id: 155,
        nodetitle: `3.2.1.2`,
        text: `<p>Then you come to yourself: "No one. Please, let me pass."</p>  <p>You try to move past him, but he raises his blade. "You're looking for the gate. Where is it?"</p>  <p><em>The gate! He's after it too, of course! He's me!</em></p>  <p>You're desperate now to get away. "You have to let me pass! There isn't much time!"</p>  <p>"Tell me where the gate is and I'll let you pass."</p>  <p>You begin sidling away.</p>  <p><em>I'll try to delay him.</em></p>  <p>"I don't know where it is."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 156
            }
        ]
    },
    {
        id: 156,
        nodetitle: `3.2.1.3`,
        text: `<p>But this only makes him angry. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself."</p>  <p>He advances.</p>  <p><em>I can't fight him! If I lose, all is lost. If I win...</em></p>  <p>You turn and run.</p>  <p>He's close on your heels. You pass the ridge, but if the gate is at the top, there's no time to check now. You enter the trees. The branches whip past you, stinging your arms and face.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 157
            }
        ]
    },
    {
        id: 157,
        nodetitle: `3.2.1.4`,
        text: `<p>In a moment, the trees fall away and you are running in a large open space.</p>  <p><em>The clearing.</em></p>  <p>A root appears beneath you, and you trip, crashing to the ground.</p>  <p><em>I have only seconds.</em></p>  <p>You twist and jump up, catching the descending sword just in time. The man facing you is white with rage. "You would leave me here to die!"</p>  <p>He jerks his weapon away and swings again, but you block his second blow.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 158
            }
        ]
    },
    {
        id: 158,
        nodetitle: `3.2.1.5`,
        text: `<p>You see an opening as he overextends himself, but you don't dare take it.</p>  <p>He screams out, "You'd steal my only chance at escaping this blasted place!"</p>  <p><em>How do I explain to him?</em></p>  <p>Another blow, this one with more force behind it, and you stumble back.</p>  <p>"I'm not stealing anything! You don't understand!" you cry out, in a final attempt to persuade him.</p>  <p>But he isn't listening. His next strike throws you to the ground, the blade slipping from your fingers.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 159
            }
        ]
    },
    {
        id: 159,
        nodetitle: `3.2.1.6`,
        text: `<p>He advances on you, raising his weapon.</p>  <p><em>This is the end.</em></p>  <p>There is a shout from the edge of the trees. He whirls in surprise, and you see over his shoulder another man emerging from the forest. It's all you need. In a moment you are up, grabbing your sword, racing away into the forest.</p>  <p>You don't care about the gate, you don't care about the witch's riddle, your only thought is escape. Branches lash your face and arms, but you push on.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 160
            }
        ]
    },
    {
        id: 160,
        nodetitle: `3.2.1.7`,
        text: `<p>The forest is growing darker by the second, when you spot a pinpoint of light in the distance.</p>  <p><em>Could that be the gate?</em></p>  <p>You move forward, the light materializing into the campfire from yesterday. As before, the witch is seated on the far side, eyes staring into yours.</p>  <p>You speak first. "I've solved your riddle, witch! There's no one here but me. I'm alone here!"</p>  <p>You wait for a response, but she offers none. Her staring eyes remind you of a cat's eyes watching a helpless mouse.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 161
            }
        ]
    },
    {
        id: 161,
        nodetitle: `3.2.1.8`,
        text: `<p>"Well?" you ask.</p>  <p>She speaks, but her words are strange.</p>  <p><em>You have only your enemies left, then.</em></p>  <p>You're trying to understand what this could mean when a shout comes from behind. You try to turn, but there's no time, and the deed is done before you can react. You slump to the ground, the last thing you see being the witch's cold red eyes.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: -1
            }
        ]
    },
    {
        id: 162,
        nodetitle: `3.2.2.1`,
        text: `<p><em>It must be at the ridge.</em></p>  <p>There's no time to waste. You grab your sword and run into the trees. You've gone no more than a hundred yards, when someone leaps out from behind a tree and stops you. He's got his sword raised, and his eyes are hard.</p>  <p>You stumble back as his words reach you: "Who are you?"</p>  <p><em>He must be from yesterday.</em></p>  <p>You stare at him for too long, horrified at what he means.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 163
            }
        ]
    },
    {
        id: 163,
        nodetitle: `3.2.2.2`,
        text: `<p>Then you come to yourself: "No one. Please, let me pass."</p>  <p>You try to move past him, but he raises his blade.</p>  <p>"You're looking for the gate. Where is it?"</p>  <p><em>The gate! He's after it too, of course! He's me!</em></p>  <p>You're desperate now to get away.</p>  <p>"You have to let me pass! There isn't much time!"</p>  <p>"Tell me where the gate is and I'll let you pass," he responds.</p>  <p>You begin sidling away.</p>  <p><em>I'll try to delay him.</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 164
            }
        ]
    },
    {
        id: 164,
        nodetitle: `3.2.2.3`,
        text: `<p>"I don't know where it is."</p>  <p>But this only makes him angry. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself."</p>  <p>He advances.</p>  <p><em>I can't fight him! If I lose, all is lost. If I win...</em></p>  <p>You turn and run.</p>  <p>He's close on your heels. You pass the ridge, but if the gate is at the top, there's no time to check now. You enter the trees. The branches whip past you, stinging your arms and face.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 165
            }
        ]
    },
    {
        id: 165,
        nodetitle: `3.2.2.4`,
        text: `<p>In a moment, the trees fall away and you are running in a large open space.</p>  <p><em>The clearing.</em></p>  <p>A root appears beneath you, and you trip, crashing to the ground.</p>  <p><em>I have only seconds.</em></p>  <p>You twist and jump up, catching the descending sword just in time. The man facing you is white with rage. "You would leave me here to die!"</p>  <p>He jerks his weapon away and swings again, but you block his second blow.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 166
            }
        ]
    },
    {
        id: 166,
        nodetitle: `3.2.2.5`,
        text: `<p>You see an opening as he overextends himself, but you don't dare take it.</p>  <p>He screams out, "You'd steal my only chance at escaping this blasted place!"</p>  <p><em>How do I explain to him?</em></p>  <p>Another blow, this one with more force behind it, and you stumble back.</p>  <p>"I'm not stealing anything! You don't understand!" you cry out, in a final attempt to persuade him.</p>  <p>But he isn't listening. His next strike throws you to the ground, the blade slipping from your fingers. He advances on you, raising his weapon.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 167
            }
        ]
    },
    {
        id: 167,
        nodetitle: `3.2.2.6`,
        text: `<p><em>This is the end.</em></p>  <p>There is a shout from the edge of the trees. He whirls in surprise, and you see over his shoulder another man emerging from the forest. It's all you need. In a moment you are up, grabbing your sword, racing away into the forest.</p>  <p>You don't care about the gate, you don't care about the witch's riddle, your only thought is escape. Branches lash your face and arms, but you push on.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 168
            }
        ]
    },
    {
        id: 168,
        nodetitle: `3.2.2.7`,
        text: `<p>The forest is growing darker by the second, when you spot a pinpoint of light in the distance.</p>  <p><em>Could that be the gate?</em></p>  <p>You become aware of the sounds of movement behind you. Panicked, you rush forward toward the light. As you approach, you recognize the campfire from yesterday, but there's no time to see if the witch is there.</p>  <p>The sound of breaking branches is almost upon you. In a moment of self-preservation, you fling yourself to the ground, rolling under a bush as he passes by you.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 169
            }
        ]
    },
    {
        id: 169,
        nodetitle: `3.2.2.8`,
        text: `<p>He stops in front of the fire. You remember the witch from yesterday, and seek out her form on the other side of the flames. You've made out her shadow in the darkness, when you notice something that makes your blood run cold.</p>  <p>She must be speaking to the yesterday man, but her eyes are looking <em>right at you.</em></p>  <p>You hear that same terrible laugh, and the chanting begins. The man sways, the wind pulling at his clothes, and then he... vanishes.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 170
            }
        ]
    },
    {
        id: 170,
        nodetitle: `3.2.2.9`,
        text: `<p>You come out from your hiding place and move to stand where he stood. Before you can speak, her voice comes to your mind.</p>  <p><em>Time is short, traveler. Can you answer my riddle? This will be your last opportunity.</em></p>  <p>You answer. "I'm alone! Everyone here is myself!"</p>  <p>The air grows still, even the roaring river fading to a whisper. The silence of the forest grows somehow, a dark power menacing over you. Something has changed, as if the trees have turned to watch you.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 171
            }
        ]
    },
    {
        id: 171,
        nodetitle: `3.2.2.10`,
        text: `<p>You shiver, not daring to look away from the red glow of the fire, fearing what you might see in the shadows of the trees. You shout, "I've solved your riddle, witch! Now let me go!"</p>  <p>Her eyes flash in the twilight as she answers.</p>  <p><em>You've solved my riddle. But this is not the gate.</em></p>  <p>Your eyes go wide with horror.</p>  <p><em>Farewell traveler. The cycle begins anew.</em></p>  <p>A peal of thunder breaks the silence, and the sky opens in a downpour of rain.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 172
            }
        ]
    },
    {
        id: 172,
        nodetitle: `3.2.2.11`,
        text: `<p>Great raindrops, soaking your clothes, causing the fire to sputter and flicker, blinding you in the darkness. A cold wind picks up, seeming to pull you back into Saltus.</p>  <p>You yell a protest, but the storm is cacophonous. You stumble forward, losing your sword. You try to reclaim it, but in your haste you plunge your hand into the smoldering embers of the fire. A white-hot pain and like a curtain falling away, you remember.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 173
            }
        ]
    },
    {
        id: 173,
        nodetitle: `3.2.2.12`,
        text: `<p><em>This is not my first cycle.</em></p>  <p>With growing horror your mind recalls the same scenes, fighting, running, the ridge, the river, and over and throughout it all, the concealed truth. Months, years, decades of treelines and vast stones in the night. And you understand everything.</p>  <p><em>I am the traveler. Always approaching. Never arriving.</em></p>  <p>You scream, lunging forward, to grab the witch, attack her, anything, but she's gone, and your hands wrap around cold stone.</p>  <p><em>I am alone.</em></p>  <p>And all goes dark.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: -1
            }
        ]
    },
    {
        id: 174,
        nodetitle: `3.2.3.1`,
        text: `<p><em>It has to be the river.</em></p>  <p>You break into a run, knowing time is of the essence. Thankfully, you meet no one on your way to the bridge. The water drowns out almost all sound, but the treeline to the side of you is motionless. As the bridge comes into sight, you let out a sigh of relief.</p>  <p><em>Almost there.</em></p>  <p>A loud voice from behind stops you in your tracks. "Stop!"</p>  <p>You turn instinctively, and your blood runs cold. Somehow, you're looking at yourself from yesterday.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 175
            }
        ]
    },
    {
        id: 175,
        nodetitle: `3.2.3.2`,
        text: `<p>At least, some version of you.</p>  <p><em>What do I do?</em></p>  <p>You remember the past two days and realize words are useless. All you can do now is run.</p>  <p>You're fast, but not fast enough. He catches you as you reach the bridge. With growing panic, you try to think of how to convince him to let you go. While your mind races, you turn, just in time to block his descending blow. His eyes are full of wrath.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 176
            }
        ]
    },
    {
        id: 176,
        nodetitle: `3.2.3.3`,
        text: `<p>"Think you can run off and leave the rest of us here, can you?" He growls.</p>  <p>In desperation you try reasoning with him. "Please, let me go! I'm doing this for all of us!"</p>  <p>Your words have the opposite effect.</p>  <p>"Liar!" he screams, and his next attack forces you to the edge of the water.</p>  <p>You try a different tactic. "Kill me and you'll never escape on your own. Let me go, and you might have a chance."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 177
            }
        ]
    },
    {
        id: 177,
        nodetitle: `3.2.3.4`,
        text: `<p>He lets out a sound like a caged tiger. "I'm not going to let you trap me here!"</p>  <p>He lunges forward, but a voice from the treeline catches him off guard. He turns instinctively. You see your opening, his back exposed.</p>  <p><em>But if I kill him, do I die too?</em></p>  <p>Too risky. You decide escape is the only solution. In a moment you are scrambling up the crumbling bridge, moving as fast as you dare over the slimy stone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 178
            }
        ]
    },
    {
        id: 178,
        nodetitle: `3.2.3.5`,
        text: `<p>A shout from behind you tells you he's not far behind.</p>  <p>At the apex of the bridge, with his breathing audible over the rapids, you turn, just in time to catch the falling attack on the edge of your sword. The attack makes you sway over the water, but you keep your balance. For now. You feel the weight of the past three days.</p>  <p><em>I can't die here. I won't die here!</em></p>  <p>You notice a third man creeping up the bridge behind the yesterday man.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 179
            }
        ]
    },
    {
        id: 179,
        nodetitle: `3.2.3.6`,
        text: `<p>This might be the chance you need!</p>  <p><em>If only I can keep his focus on me...</em></p>  <p>"Let me go! I can end this!" you call.</p>  <p>He won't listen, but all you need is a little more time. The newcomer is almost upon him.</p>  <p>But yesterday doesn't notice, instead calling back, "Only one can escape, and it won't be you!"</p>  <p>As the words leave his mouth, there is a flash of steel from the newcomer, plunging down at your attacker.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 180
            }
        ]
    },
    {
        id: 180,
        nodetitle: `3.2.3.7`,
        text: `<p>He screams, twisting sideways off the bridge. You watch with horror as his sword swings back, knocking the newcomer off balance. They both fall.</p>  <p>You stand on the empty bridge, shocked by the new stillness. The men are nowhere to be seen.</p>  <p><em>I'm free!</em></p>  <p>But you remember who those men were, and your blood runs cold.</p>  <p><em>If they are my past, and they are gone, what happens now?</em></p>  <p>Your thoughts are cut off by a new voice, this time from the far side of the river.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 181
            }
        ]
    },
    {
        id: 181,
        nodetitle: `3.2.3.8`,
        text: `<p>The witch stands before you in the fading light, eyes gleaming.</p>  <p><em>Time is short, traveler. The noose is tightening. Can you answer my riddle? This will be your last opportunity.</em></p>  <p>You answer. "I'm alone! We're all me!"</p>  <p>The air grows still, and even the roaring river seems to fade to a whisper. The silence of the forest grows, a dark menacing power behind you on the shore. Something has changed, as if the trees have turned to watch you. You shiver, not daring to look back.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 182
            }
        ]
    },
    {
        id: 182,
        nodetitle: `3.2.3.9`,
        text: `<p>Some primal instinct tells you that a backward glance and you would be lost. You shout, "I've solved your riddle, witch! Now let me go!"</p>  <p>Her eyes flash in the twilight as she answers.</p>  <p><em>You've solved my riddle. The gate stands open. Flee —</em> she raises a desiccated hand to the sky — <em>while you can.</em></p>  <p>A glare of crimson light illuminates the scene, turning the river to blood. The accompanying crash of thunder shakes the foundations of the bridge. Rain begins to fall. The witch has vanished in the night.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 183
            }
        ]
    },
    {
        id: 183,
        nodetitle: `3.2.3.10`,
        text: `<p>Great raindrops, soaking your clothes, covering the stones, blinding you in the dark. A cold wind picks up from the far side of the forest, seeming to pull you back, back toward Saltus.</p>  <p>You run across the far side of the bridge. Before you is a narrow path of white stones extending in a straight line into the trees. You run down the path, the trees bending inward, trying to stop you. You're shoving aside branches with each step.</p>  <p><em>I'm not going to make it!</em></p>`,
        options: [
            {
                text: `Continue`,
                nextText: 184
            }
        ]
    },
    {
        id: 184,
        nodetitle: `3.2.3.11`,
        text: `<p>In their wrath the trees slide and twist, being first around you, then under you. The path becomes smooth glass. You stumble and fall, branches ripping at you. But the ground has vanished. You descend. The trees shift, warping impossibly, and you remember no more.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 185
            }
        ]
    },
    {
        id: 185,
        nodetitle: `3.2.3.12`,
        text: `<p>You wake lying on the ground, branches filling your view.</p>  <p><em>Back where I started. I didn't escape.</em></p>  <p>Then you notice something isn't right. The branches are strange, warped. You sit up and the trees bend away off the polished blade of a sword. You were looking at a reflection.</p>  <p><em>Odd.</em></p>  <p>You are aware of a new sound. You look up to see a sparrow chirping on a branch above you. Birdsong.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 186
            }
        ]
    },
    {
        id: 186,
        nodetitle: `3.2.3.13`,
        text: `<p>Then a thought occurs to you: <em>I can't hear the river.</em></p>  <p>You stand to get a better look, grasping the sword as you rise. Something about its shape in your hand is strange, and you glance down to examine it. You stand there a long while staring, the bird singing overhead as you wonder what it could mean.</p>  <p>The blade in your hand is identical to the one you've carried these past three days, with one key difference. The hilt has no face.</p>`,
        options: [
            {
                text: `You win`,
                nextText: -1
            }
        ]
    },
    {
        id: 187,
        nodetitle: `3.2.4.1`,
        text: `<p><em>It has to be the river.</em></p>  <p>You break into a run, knowing time is of the essence. Thankfully, you meet no one on your way to the bridge. The water drowns out almost all sound, but the treeline to the side of you is motionless. As the bridge comes into sight, you let out a sigh of relief.</p>  <p><em>Almost there.</em></p>  <p>A loud voice from behind stops you in your tracks. "Stop!"</p>  <p>You turn instinctively, and your blood runs cold. Somehow, you're looking at yourself from yesterday.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 188
            }
        ]
    },
    {
        id: 188,
        nodetitle: `3.2.4.2`,
        text: `<p>At least, some version of you.</p>  <p><em>What do I do?</em></p>  <p>You remember the past two days and realize words are useless. All you can do now is run.</p>  <p>You're fast, but not fast enough. He catches you as you reach the bridge. With growing panic, you try to think of how to convince him to let you go. While your mind races, you turn, just in time to block his descending blow. His eyes are full of wrath.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 189
            }
        ]
    },
    {
        id: 189,
        nodetitle: `3.2.4.3`,
        text: `<p>"Think you can run off and leave the rest of us here, can you?" He growls.</p>  <p>In desperation you try reasoning with him. "Please, let me go! I'm doing this for all of us!"</p>  <p>Your words have the opposite effect.</p>  <p>"Liar!" he screams, and his next attack forces you to the edge of the water.</p>  <p>You try a different tactic. "Kill me and you'll never escape on your own. Let me go, and you might have a chance."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 190
            }
        ]
    },
    {
        id: 190,
        nodetitle: `3.2.4.4`,
        text: `<p>He lets out a sound like a caged tiger. "I'm not going to let you trap me here!"</p>  <p>He lunges forward, but a voice from the treeline catches him off guard. He turns instinctively. You see your opening, his back exposed.</p>  <p><em>But if I kill him, do I die too?</em></p>  <p>Too risky. You decide escape is the only solution. In a moment you are scrambling up the crumbling bridge, moving as fast as you dare over the slimy stone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 191
            }
        ]
    },
    {
        id: 191,
        nodetitle: `3.2.4.5`,
        text: `<p>A shout from behind you tells you he's not far behind.</p>  <p>At the apex of the bridge, with his breathing audible over the rapids, you turn, just in time to catch his attack on the edge of your sword. The attack makes you sway over the water, but you keep your balance. For now. You feel the weight of the past three days.</p>  <p><em>I can't die here. I won't die here!</em></p>  <p>You notice for the first time a third man at the base of the bridge.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 192
            }
        ]
    },
    {
        id: 192,
        nodetitle: `3.2.4.6`,
        text: `<p><em>He must have been the voice we heard.</em></p>  <p>He looks like he wants to help, but is too frightened to attempt the narrow bridge. Your attacker glances back. You try to use this chance to escape. But you've hardly moved when your back erupts in pain. You fall, hitting the water. You sink below the depths.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: -1
            }
        ]
    },
    {
        id: 193,
        nodetitle: `3.2.5.1`,
        text: `<p><em>It must be at the ridge.</em></p>  <p>There's no time to waste. You grab your sword and run into the trees. You've gone no more than a hundred yards, when someone leaps out from behind a tree and stops you. He's got his sword raised, and his eyes are hard.</p>  <p>You stumble back as his words reach you: "Who are you?"</p>  <p><em>He must be from yesterday.</em></p>  <p>You stare at him for too long, horrified at what he means.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 194
            }
        ]
    },
    {
        id: 194,
        nodetitle: `3.2.5.2`,
        text: `<p>Then you come to yourself: "No one. Please, let me pass."</p>  <p>You try to move past him, but he raises his blade. "You're looking for the gate. Where is it?"</p>  <p><em>The gate! He's after it too, of course! He's me!</em></p>  <p>You're desperate now to get away. "You have to let me pass! There isn't much time!"</p>  <p>"Tell me where the gate is and I'll let you pass."</p>  <p>You begin sidling away.</p>  <p><em>I'll try to delay him.</em></p>  <p>"I don't know where it is."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 195
            }
        ]
    },
    {
        id: 195,
        nodetitle: `3.2.5.3`,
        text: `<p>But this only makes him angry. "Liar! I'm not going to let you escape first. If you won't tell me, I'll find it myself."</p>  <p>He advances.</p>  <p><em>I can't fight him! If I lose, all is lost. If I win...</em></p>  <p>You turn and run.</p>  <p>He's close on your heels. You pass the ridge, but if the gate is at the top, there's no time to check now. You enter the trees. The branches whip past you, stinging your arms and face.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 196
            }
        ]
    },
    {
        id: 196,
        nodetitle: `3.2.5.4`,
        text: `<p>In a moment, the trees fall away and you are running in a large open space.</p>  <p><em>The clearing.</em></p>  <p>A root appears beneath you, and you trip, crashing to the ground.</p>  <p><em>I have only seconds.</em></p>  <p>You twist and jump up, catching the descending sword just in time. The man facing you is white with rage. "You would leave me here to die!"</p>  <p>He jerks his weapon away and swings again, but you block his second blow.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 197
            }
        ]
    },
    {
        id: 197,
        nodetitle: `3.2.5.5`,
        text: `<p>You see an opening as he overextends himself, but you don't dare take it.</p>  <p>He screams out, "You'd steal my only chance at escaping this blasted place!"</p>  <p><em>How do I explain to him?</em></p>  <p>Another blow, this one with more force behind it, and you stumble back.</p>  <p>"I'm not stealing anything! You don't understand!" you cry out, in a final attempt to persuade him.</p>  <p>But he isn't listening. His next strike throws you to the ground, the blade slipping from your fingers.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 198
            }
        ]
    },
    {
        id: 198,
        nodetitle: `3.2.5.6`,
        text: `<p>He advances on you, raising his weapon.</p>  <p><em>This is the end.</em></p>  <p>There is a shout from the edge of the trees. He whirls in surprise, and you see over his shoulder another man emerging from the forest. It's all you need. In a moment you are up, grabbing your sword, racing away into the forest.</p>  <p>You don't care about the gate, you don't care about the witch's riddle, your only thought is escape. Branches lash your face and arms, but you push on.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 199
            }
        ]
    },
    {
        id: 199,
        nodetitle: `3.2.5.7`,
        text: `<p>The forest is growing darker by the second, when you spot a pinpoint of light in the distance.</p>  <p><em>Could that be the gate?</em></p>  <p>You move forward, the light materializing into the campfire from yesterday. As before, the witch is seated on the far side, eyes staring into yours.</p>  <p>You speak first. "I've solved your riddle, witch! There's no one here but me. I'm alone here!"</p>  <p>You wait for a response, but she offers none. Her staring eyes remind you of a cat's eyes watching a helpless mouse.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 200
            }
        ]
    },
    {
        id: 200,
        nodetitle: `3.2.5.8`,
        text: `<p>"Well?" you ask.</p>  <p>She speaks, but her words are strange.</p>  <p><em>You have only your enemies left, then.</em></p>  <p>You're trying to understand what this could mean when a shout comes from behind. You try to turn, but there's no time, and the deed is done before you can react. You slump to the ground, the last thing you see being the witch's cold red eyes.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: -1
            }
        ]
    },
    {
        id: 201,
        nodetitle: `3.2.6.1`,
        text: `<p><em>It has to be the river.</em></p>  <p>You break into a run, knowing time is of the essence. Thankfully, you meet no one on your way to the bridge. The water drowns out almost all sound, but the treeline to the side of you is motionless. As the bridge comes into sight, you let out a sigh of relief.</p>  <p><em>Almost there.</em></p>  <p>A loud voice from behind stops you in your tracks. "Stop!"</p>  <p>You turn instinctively, and your blood runs cold. Somehow, you're looking at yourself from yesterday.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 202
            }
        ]
    },
    {
        id: 202,
        nodetitle: `3.2.6.2`,
        text: `<p>At least, some version of you.</p>  <p><em>What do I do?</em></p>  <p>You remember the past two days and realize words are useless. All you can do now is run.</p>  <p>You're fast, but not fast enough. He catches you as you reach the bridge. With growing panic, you try to think of how to convince him to let you go. While your mind races, you turn, just in time to block his descending blow. His eyes are full of wrath.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 203
            }
        ]
    },
    {
        id: 203,
        nodetitle: `3.2.6.3`,
        text: `<p>"Think you can run off and leave the rest of us here, can you?" He growls.</p>  <p>In desperation you try reasoning with him. "Please, let me go! I'm doing this for all of us!"</p>  <p>Your words have the opposite effect.</p>  <p>"Liar!" he screams, and his next attack forces you to the edge of the water.</p>  <p>You try a different tactic. "Kill me and you'll never escape on your own. Let me go, and you might have a chance."</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 204
            }
        ]
    },
    {
        id: 204,
        nodetitle: `3.2.6.4`,
        text: `<p>He lets out a sound like a caged tiger. "I'm not going to let you trap me here!"</p>  <p>He lunges forward, but a voice from the treeline catches him off guard. He turns instinctively. You see your opening, his back exposed.</p>  <p><em>But if I kill him, do I die too?</em></p>  <p>Too risky. You decide escape is the only solution. In a moment you are scrambling up the crumbling bridge, moving as fast as you dare over the slimy stone.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 205
            }
        ]
    },
    {
        id: 205,
        nodetitle: `3.2.6.5`,
        text: `<p>A shout from behind you tells you he's not far behind.</p>  <p>At the apex of the bridge, with his breathing audible over the rapids, you turn, just in time to catch his attack on the edge of your sword. The attack makes you sway over the water, but you keep your balance. For now. You feel the weight of the past three days.</p>  <p><em>I can't die here. I won't die here!</em></p>  <p>You notice for the first time a third man at the base of the bridge.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: 206
            }
        ]
    },
    {
        id: 206,
        nodetitle: `3.2.6.6`,
        text: `<p><em>He must have been the voice we heard.</em></p>  <p>He looks like he wants to help, but is too frightened to attempt the narrow bridge. Your attacker glances back. You try to use this chance to escape. But you've hardly moved when your back erupts in pain. You fall, hitting the water. You sink below the depths.</p>`,
        options: [
            {
                text: `Continue`,
                nextText: -1
            }
        ]
    }
]