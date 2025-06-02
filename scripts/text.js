export const textNodes = [
    {
        id: 0,
        nodetitle: `Day 1 - Forest`,
        text: `<h1>Day 1</h1><p>You wake lying on your back, staring up into a ceiling of branches. You sit up and find yourself in a forest, alone.</p><p>Half buried in the leaves beside you is a long sword. On closer inspection, the blade is free of all markings, save the hilt, where a human face is wrought in silver, expression inscrutable.</p><p>You have no memory of where you are or how you came here. There’s a river nearby: you can hear it off to your left. You stand and notice a ridge of stone in the distance that wasn’t visible from the ground.</p><p><em>There must be something here to tell me where I am.</em></p><p><em>I just need to get my bearings.</em></p><p>With no sign of a trail, you decide you’ll have to make a choice. Do you explore the river or search the ridge?</p>`,
        image: `Forest`,
        options: [
            {
                nodetitle: 'Node 1',
                text: `River`,
                oldChoice: false,
                wrongPath: false,
                nextText: 1
            },
            {
                nodetitle: 'Node 2',
                text: `Ridge`,
                oldChoice: false,
                wrongPath: true,
                nextText: 2
            }
        ]
    },
    {
        id: 1,
        nodetitle: `Day 1 - Forest - River`,
        text: `<h1>Day 1</h1><p>Best to start at the river. Sword in hand, you move toward the sound. A hundred yards downhill you see it, dark water fifty feet across, deep and powerful.</p><p>You’ve just stepped onto the bank when you hear the sound of footfalls behind you. A man is running through the trees above you. When he sees you, he stops and shouts.</p><p>“Have you solved it yet?”</p><p>You stand there, uncomprehending. He glances at the sword, mutters to himself, and begins moving off. You have to say something.</p><p>“Wait! Who are you?”</p><p>He looks back, with pity or contempt you can’t say.</p><p>“Stay away from the bridge!”</p><p>He turns and disappears into the trees. Alone again, you consider his words. Though his question is meaningless, the warning is clear enough.</p><p><em>But which way is the bridge?</em></p><p>You decide you’ll have to make a choice. Do you walk upstream or down?`,
        image: `River`,
        options: [
            {
                nodetitle: "Node 3",
                text: `Downstream`,
                nextText: 3
            },
            {
                nodetitle: "Node 4",
                text: `Upstream`,
                nextText: 4
            }
        ]
    },
    {
        id: 2,
        nodetitle: `Day 1 - Forest - Ridge`,
        text: `<h1>Day 1</h1><p>You decide the ridge offers the best vantage point. Sword in hand, you make your way through the trees.</p><p>At the base of the cliff, you find a narrow path cut into the stone. The ascent is treacherous, the path barely wide enough for one person.</p><p>You were right, you can see for miles up here. The river is a grey serpent cutting through the forest. You notice a thin column of smoke rising in the distance.</p><p><em>Could that be a person?</em></p><p>The thought is cut off as you hear a shout below you. You glance down and see a man sprint past the base of the ridge. A hundred yards behind him comes a second man, sword in hand, giving chase.</p><p>In their haste, they didn’t notice you. Do you follow them, or head toward the smoke?`,
        image: `Ridge`,
        options: [
            {
                nodetitle: "Node 5",
                text: `Follow`,
                nextText: 5
            },
            {
                nodetitle: "Node 6",
                text: `Flee`,
                nextText: 6
            }
        ]
    }, 
    {
        id: 3,
        nodetitle: `Day 1 - Forest - River - Stone`,
        text: `<h1>Day 1</h1>You decide to walk downstream. A mile down you come to a path overgrown with creepers bending away from the river. You choose to follow it, and it soon widens into a clear trail. The sun is high overhead by the time you come to a clearing with a great stone jutting from the earth. It’s pitted surface is too steep to climb. You’re only a stone’s throw from the rock when you notice a crumpled form at its base. You recoil in fear, remembering the warning of the man at the river, but the shape before you poses no threat now. You approach carefully and see the lifeless hand still clutching his weapon, but the hold is strange, almost as if… You examine the rock above him and you find what you were looking for: letters carved crudely into its surface. “BRIDGE. ONLY ONE. ESCA‒” You’ve just begun to wonder what they could mean when from the far side of the rock leaps a man, wild in rage. He swings, but you jump back. You have only a moment to decide: do you stand and fight, or run for your life?`,
        image: `Stone`,
        options: [
            {
                nodetitle: "Node 7",
                text: `Fight`,
                nextText: 7
            },
            {
                nodetitle: "Node 8",
                text: `Run`,
                nextText: 8
            }
        ]
    }, 
    {
        id: 4,
        nodetitle: `Day 1 - Forest - River - Bridge`,
        text: `<h1>Day 1</h1>You decide to walk upstream. After walking for an hour you round a bend and spot the curve of a stone bridge spanning the water. You duck into the trees and stand breathless, watching for any sign of danger. Seeing no one, you creep closer, concealed in the shade of the forest. As you approach, you get a better look at the bridge. It is narrower than you’d assumed, only wide enough for a single person to cross at a time. Its stones are black with age, and run down into the churning water to rest on some ancient foundation. You’re almost parallel with the structure when a rustle in the leaves behind you draws your attention. You spin just in time to see the figure rise from the cover of the undergrowth. At first you think it is the man from before, but you notice the sword in his hand as he advances. You stumble backward onto the gravel of the beach, then feel slimy stone under your feet. “I’m not going to let you find it first.” He growns. You start to reply as you back up on the causeway, but he swings at you. You block the blow, but it knocks you off balance. You hang for a moment in the air, then crash into the river. The icy water closes over you in a flash. Your sword is gone. You rise to the surface once, cathcing a wild glimpse of the bridge moving away from you, the man standing at the apex. You try to swim, but the current is too strong. You sink again into the darkness.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node -1",
                text: `Continue`,
                nextText: -1
            }
        ]
    }, 
    {
        id: 5,
        nodetitle: `Day 1 - Forest - Ridge - Clearing`,
        text: `<h1>Day 1</h1>He needs help! You scramble down the cliff and run after the two men. The trees grow dense, branches tugging at your clothes as you push through, when suddenly the forest falls away, and you stumble into a wide clearing of tall grass. As you look up, you see the swordsman a few yards in front of you, standing over something in the grass. He turns at the sound of your footsteps, and seeing you, rushes forward. You scramble backward, but the branches are a wall behind you, hemming you in. He swings at you, and you throw your own sword up in defense. The fight is short and decisive. A quick movement on his part and you fall to the ground. As your vision fades, you hear him say “I’m sorry. Only one of us‒” And you remember no more.`,
        image: `Clearing`,
        options: [
            {
                nodetitle: "Node -1",
                text: `Continue`,
                nextText: -1
            }
        ]
    }, 
    {
        id: 6,
        nodetitle: `Day 1 - Forest - Ridge - Hut`,
        text: `<h1>Day 1</h1>You crouch out of sight to make sure they are gone before scrambling down the cliff and hurrying into the relative concealment of the trees. Those two spell trouble, the smoke is a safer bet. You move through the trees slowly until you cross a path that seems to head in the direction of the smoke. After some time the path widens and you can just make out the edge of a roof through the branches. A sudden movement to your left makes you turn to see a man lunging from a thicket, sword-first. You have no time to block the blow. As you fall, you wonder if it was the same man back at the ridge. You don’t live long enough to ask.`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node -1",
                text: `Try Again`,
                nextText: -1
            }
        ]
    }, 
    {
        id: 7,
        nodetitle: `Day 1 - Forest - River - Stone - Bridge`,
        text: `<h1>Day 1</h1>As his next blow falls, you bring your sword up to parry. He’s stronger than you’d thought. His swing knocks you off balance. The followup comes moments later, and you barely get your blade up in time. With a ring of steel on steel, your sword flies from your hands. You turn to run, but he’s anticipated you, and he strikes before you can take a step. It was hardly a fair fight. You can see the determination in his eyes as you fall to your knees, along with contempt, or is that pain? You try to speak, but can’t. He turns and walks away. You remember no more.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node -1",
                text: `Try Again`,
                nextText: -1
            }
        ]
    }, 
    {
        id: 8,
        nodetitle: `Day 1 - Forest - River - Stone - Hut`,
        text: `<h1>Day 1</h1>As his next blow falls, you lunge out of the way, and the blade cuts into the turf of the clearing. By the time he pulls it free you’re at the trees. You crash through the forest, branches whipping your face and arms and you run. You don’t look back. The woods are too thick to see far. You can lose him if you are fast enough. The earth bends down into a shallow gully curving to the right. You round a bend and suddenly the ground under you vanishes and you tumble down a steep hill, sword flailing. You slide to a stop at the bottom, and all grows silent. No major injuries; you’re lucky you didn’t fall on the sword. You scan the crest above you, but see no one. You lost him. After catching your breath, you stand and move on, away from the stone. Whoever he was, you have no intention of crossing paths with him again. As you walk, the day wanes, the trees wrap themselves in shadow, and you find yourself in a field of black pillars and gray light. You are just wondering where you should spend the night when you see a light peaking through the dusk. As you approach, the light reveals itself as the window of a small hut nestled in the trees.`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node 9",
                text: `Continue`,
                nextText: 9
            }
        ]
    }, 
    {
        id: 9,
        nodetitle: `Day 1 - Forest - River - Stone - Hut - Witch`,
        text: `<h1>Day 1</h1>Apprehensive, you move forward carefully. Around the other side of the house you see a simple door. Fear of your earlier assailant rises up, and you almost walk away, but he couldn’t have gotten here faster than you. Regardless, you aren’t taking any chances. You move silently to the door, sword first, and knock loudly on the frame with the flat of the blade. A tense moment passes with no reaction, and then a bolt slides and the door swings inward, throwing a red light across the step. You find yourself confronted not by a man, but a woman, bent with age, a glint in her eye that somehow matches the red of her fire. “Come in.” She says, and despite your fears, you find her command impossible to refuse. You step inside. The interior is densely packed with narrow shelves filled with bottles, jars, bundles of plants, small pouches and large vessels. The center of the room is dominated by a large table covered in the same. The door closes behind you and she moves to the far side of the room, her eyes somehow never leaving you for a moment. “It appears you’ve met some of the others… WHAT NEXT? WHAT DOES SHE SAY?`,
        image: `Witch`,
        options: [
            {
                nodetitle: "Node 10",
                text: `Continue`,
                nextText: 10
            }
        ]
    }, 
    {
        id: 10,
        nodetitle: `Day 2 - Forest`,
        text: `<h1>Day 2</h1>You wake up in the forest like yesterday. You guess sword for the riddle and think you are in competition with the other people you meet. You need to find the gate and stop others from finding it. Choose river or ridge.`,
        image: `Forest`,
        options: [
            {
                nodetitle: "Node 11",
                text: `river`,
                nextText: 11
            },
            {
                nodetitle: "Node 12",
                text: `ridge`,
                nextText: 12
            }
        ]
    }, 
    {
        id: 11,
        nodetitle: `Day 2 - Forest - River`,
        text: `<h1>Day 2</h1>Decide to go to the river, thinking the gate might be at either the stone or the bridge.`,
        image: `River`,
        options: [
            {
                nodetitle: "Node 13",
                text: `stone`,
                nextText: 13
            },
            {
                nodetitle: "Node 14",
                text: `bridge`,
                nextText: 14
            }
        ]
    }, 
    {
        id: 12,
        nodetitle: `Day 2 - Forest - Ridge`,
        text: `<h1>Day 2</h1>On the way to the ridge, you see a man walking through the forest. Do you chase him or leave him alone?`,
        image: `Ridge`,
        options: [
            {
                nodetitle: "Node 15",
                text: `clearing`,
                nextText: 15
            },
            {
                nodetitle: "Node 16",
                text: `hut`,
                nextText: 16
            }
        ]
    }, 
    {
        id: 13,
        nodetitle: `Day 2 - Forest - River - Stone`,
        text: `<h1>Day 2</h1>You think it must be the stone. You go there, find 3 doing something with a rock, think he’s found the gate. You argue with him, then kill him.`,
        image: `Stone`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    }, 
    {
        id: 14,
        nodetitle: `Day 2 - Forest - River - Bridge`,
        text: `<h1>Day 2</h1>You think it must be the bridge. You get there, then hide in the bushes to see if anyone will try crossing it. 1 comes and looks like he’s going to cross it, so you jump out and kill him.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    }, 
    {
        id: 15,
        nodetitle: `Day 2 - Forest - Ridge - Clearing`,
        text: `<h1>Day 2</h1>You chase him to the clearing, kill him, then another man comes behind you and you fight and kill him.`,
        image: `Clearing`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    }, 
    {
        id: 16,
        nodetitle: `Day 2 - Forest - Ridge - Hut`,
        text: `<h1>Day 2</h1>You arrive early, then hear a man coming through the trees. Do you ambush him or let him pass?`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node 17",
                text: `kill`,
                nextText: 17
            },
            {
                nodetitle: "Node 18",
                text: `spare`,
                nextText: 18
            }
        ]
    }, 
    {
        id: 17,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Kill`,
        text: `<h1>Day 2</h1>You kill him.`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node 31",
                text: `witch`,
                nextText: 31
            },
        ]
    }, 
    {
        id: 18,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Spare`,
        text: `<h1>Day 2</h1>You let him pass. He moves on out of sight. You try to find the witch at the hut, but you can’t find her, so you follow the trail leading out. It takes you past the stone to the bridge`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node 19",
                text: `bridge`,
                nextText: 19
            },
        ]
    }, 
    {
        id: 19,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Spare - Bridge`,
        text: `<h1>Day 2</h1>At the bridge, a man comes running and tries getting past you. Kill or spare?`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node 20",
                text: `kill`,
                nextText: 20
            },
            {
                nodetitle: "Node 21",
                text: `spare`,
                nextText: 21
            }
        ]
    }, 
    {
        id: 20,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Spare - Bridge - Kill`,
        text: `<h1>Day 2</h1>You kill him.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node 31",
                text: `witch`,
                nextText: 31
            },
        ]
    },
    {
        id: 21,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Spare - Bridge - Spare`,
        text: `<h1>Day 2</h1>You let him pass. You wander off into the forest, unsure what to do.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node 22",
                text: `witch`,
                nextText: 22
            },
        ]
    },
    {
        id: 22,
        nodetitle: `Day 2 - Forest - Ridge - Hut - Spare - Bridge - Spare - Witch`,
        text: `<h1>Day 2</h1>The witch comes and you tell her sword is the answer. She says you’re wrong, but you aren’t doomed yet. You have one day left. You fall asleep.`,
        image: `Witch`,
        options: [
            {
                nodetitle: "Node 23",
                text: `forest`,
                nextText: 23
            },
        ]
    },
    {
        id: 23,
        nodetitle: `Day 3 W - Forest`,
        text: `<h1>Day 3</h1>Wake up in forest, but not in the morning, but late afternoon. You realize you are alone here and are running into yourself. Now you have to figure out how to escape before the sun sets. `,
        image: `Forest`,
        options: [
            {
                nodetitle: "Node 24",
                text: `river`,
                nextText: 24
            },
            {
                nodetitle: "Node 25",
                text: `ridge`,
                nextText: 25
            }
        ]
    }, 
    {
        id: 24,
        nodetitle: `Day 3 W - Forest - River`,
        text: `<h1>Day 3</h1>Go to the river, run into yourself, get scared thinking it is 2, but it is 1. You warn them from anyone with a sword, then run off. Where do you think the gate is? The stone or the bridge`,
        image: `River`,
        options: [
            {
                nodetitle: "Node 26",
                text: `stone`,
                nextText: 26
            },
            {
                nodetitle: "Node 27",
                text: `bridge`,
                nextText: 27
            }
        ]
    }, 
    {
        id: 25,
        nodetitle: `Day 3 W - Forest - Ridge`,
        text: `<h1>Day 3</h1>Approach the ridge, see 2 before he sees you. Do you call out and try explaining things to him to warn him or stay hidden?`,
        image: `Ridge`,
        options: [
            {
                nodetitle: "Node 28",
                text: `clearing`,
                nextText: 28
            },
            {
                nodetitle: "Node 29",
                text: `hut`,
                nextText: 29
            }
        ]
    }, 
    {
        id: 26,
        nodetitle: `Day 3 W - Forest - River - Stone`,
        text: `<h1>Day 3</h1>Go there, realize it isn’t the gate, but decide you can try leaving a note for yourself in case you don’t make it out. Before you finish writing the hint, 2 comes. You try reasoning with him, but he kills you.`,
        image: `Stone`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    },
    {
        id: 27,
        nodetitle: `Day 3 W - Forest - River - Bridge`,
        text: `<h1>Day 3</h1>Go there, face off with 2. Try reasoning with him. At first, it seems like he is going to kill you, but he relents and lets you pass.`,
        image: `Bridge`,
        options: [
            {
                nodetitle: "Node 30",
                text: `win`,
                nextText: 30
            },
        ]
    },
    {
        id: 28,
        nodetitle: `Day 3 W - Forest - Ridge - Clearing`,
        text: `<h1>Day 3</h1>Call out. He won’t listen, chases you to the clearing, then kills you.`,
        image: `Clearing`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    },
    {
        id: 29,
        nodetitle: `Day 3 W - Forest - Ridge - Hut`,
        text: `<h1>Day 3</h1>Don’t call out. Sneak to the hut, where you think the gate is hidden, but the witch isn’t there. Instead, you are ambushed by 2 and killed.`,
        image: `Hut`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    },
    {
        id: 30,
        nodetitle: `Day 3 W - Forest - River - Bridge - Far Side`,
        text: `<h1>Day 3</h1>You rush across the far side of the bridge as the last of the sun dips below the horizon. Before you is a narrow path of white stones extending in a straight line back into the forest. There is no time to decide. You run down the path, trees enveloping you in deeper shadow as you enter the wood. You move farther down the parth, and as you do, the branches bend inward, drawing tight, like the darkness of night, or the edges of a trap. Now you’re fighting your way through, shoving leaves away with each step. I’m not going to make it! I’m not going to make it! In their wrath the trees seem to slide and twist, being first around you, then under you. The path becomes smooth as glass, Suddenly you stumble and come crashing to the ground, branches ripping at your clothes as you descend. But you don’t land, instead falling forward for too long, too long. The path and trees shift, bend impossibly, and you remember no more.`,
        image: `Freedom`,
        options: [
            {
                nodetitle: "Node 100",
                text: `Continue`,
                nextText: 35
            },
        ]
    },
    {
        id: 31,
        nodetitle: `Day 3 L - Witch`,
        text: `<h1>Day 2</h1>The witch comes and you tell her sword is the answer. She is disappointed in you. She tells you you still haven’t figured it out and you’ll never make it across the bridge by tomorrow night. You fall asleep.`,
        image: `Witch`,
        options: [
            {
                nodetitle: "Node 32",
                text: `forest`,
                nextText: 32
            },
        ]
    },
    {
        id: 32,
        nodetitle: `Day 3 L - Witch - Forest`,
        text: `<h1>Day 3</h1>Wake up, realize that the correct answer is we are all the same person. Now you have to try to fix things. Do you try leaving yourself a note or try hiding and waiting it out?`,
        image: `Forest`,
        options: [
            {
                nodetitle: "Node 33",
                text: `ridge`,
                nextText: 33
            },
            {
                nodetitle: "Node 34",
                text: `river`,
                nextText: 34
            }
        ]
    }, 
    {
        id: 33,
        nodetitle: `Day 3 L - Witch - Forest - Ridge`,
        text: `<h1>Day 3</h1>On your way to the ridge, you run into yourself from yesterday with a sword. He chases you, and though you try to reason with him, he kills you.`,
        image: `Ridge`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    },
    {
        id: 34,
        nodetitle: `Day 3 L - Witch - Forest - River`,
        text: `<h1>Day 3</h1>You go to the river, see yourself from day one, get scared, but then realize they are from the first day. You tell them to stay away from anyone with a sword, since you know what will happen if they fight 2. You run to the stone, hoping to leave yourself a message so you can escape in the next three days. You write out ESCAPE, ONE, BRIDGE, when you are attacked and killed by yourself from yesterday.`,
        image: `River`,
        options: [
            {
                nodetitle: "Node -1",
                text: `lose`,
                nextText: -1
            },
        ]
    },
    {
        id: 35,
        nodetitle: `Day 3 W - Forest - River - Bridge - Far Side - Freedom`,
        text: `<h1>Day 4</h1>You wake lying on the ground, branches filling your view. I failed, you think. Another three days. Then you notice something isn’t right. The branches are strange, warped. You sit up and the trees bend away off the polished blade of a sword. You were looking at a reflection. Odd. Suddenly you are aware of the sound of a bird. You look up and see it, small but very real. Birdsong, but the rushing of the river has gone silent. You stand to get a better look, instinctively grasping the sword as you rise. Something about its feel in your hand is unfamiliar, and you glance down at it to examine it more closely. You stand there a long while staring at it, the bird chirping overhead as you wonder what it could mean. The blade in your hand is identical to the one you’ve carried these past three days, with one key difference. The hilt has no face.`,
        image: `River`,
        options: [
            {
                nodetitle: "Node -1",
                text: `You win.`,
                nextText: -11
            },
        ]
    },
    {
        id: 100,
        nodetitle: `Landing Page`,
        text: `<h1>Forest Quest</h1>`,
        image: `River`,
        options: [
            {
                nodetitle: "Node -1",
                text: `Start`,
                nextText: -1
            },
            {
                nodetitle: "Node 101",
                text: `Settings`,
                nextText: 101
            },
            {
                nodetitle: "Node 102",
                text: `About`,
                nextText: 102
            }
        ]
    },
    {
        id: 101,
        nodetitle: `Settings`,
        text: `<h1>Settings</h1>`,
        image: `River`,
        options: [
            {
                nodetitle: "Node 103",
                text: `Character`,
                nextText: 103
            },
            {
                nodetitle: "Node 104",
                text: `Mode`,
                nextText: 104
            }
        ]
    },
    {
        id: 102,
        nodetitle: `About`,
        text: `<h1>About</h1>`,
        image: `River`,
        options: [
            {
                nodetitle: "Node 100",
                text: `Back`,
                nextText: 100
            }
        ]
    },
    
]