
// -PLAYER-
let player = {
    isAlive: true,
    inventory: []
};

// -ROOMS-
let rooms = {
    currentRoom: 'strangeRoom',

    strangeRoom: { doors: { n: 'guardianRoom', e: 'catRoom', s: 'dungeonEntrance', w: 'statueRoom' }, name: 'Strange Room', desc: 'You are in a strange, dimly lit room. You can see four wooden doors, one in each direction.' },

    dungeonEntrance: { doors: { n: 'strangeRoom' }, items: 'catRing', name: 'Exit Room', desc: 'You are at the entrance of the Dungeon, in what seems like the main hall. Heavy ramshackled tapestries cover the walls. There is a massive Iron Gate to the South, but it seems to be locked. On closer inspection, you see a black and gold cat-shaped ring on a half-broken shelf not far from the door. You take the ring. [Received Black Cat Ring]' },

    catRoom: { doors: { s: 'mysticRoom', w: 'strangeRoom' }, npc: 'cat', name: 'Green Light Room', desc: 'You arrive in a room filled with silver furniture. The room glows from a strange green light emanating from the ceiling. There is a black cat with glowing purple eyes on a chair at the center of the room, and as soon as you make eye-contact, the cat starts talking!' },

    statueRoom: { doors: { e: 'strangeRoom', n: 'trapRoom1', s: 'trapRoom2' }, npc: 'statue', name: 'Gargoyle Statue Room', desc: "You arrive in a dark room, filled with tall gargoyle-shaped statues. Suddenly, one of the statues start moving and before you know it is facing towards you. You feel petrified by the statue's red glowing eyes. It speaks to you." },

    trapRoom1: { doors: { s: 'statueRoom' }, isTrapped: true, name: 'Trap Room', desc: 'As soon as you arrive in the room, the door locks behind you and deadly poisonous gas starts filling up the room. In a matter of seconds, the gas infiltrates your lungs and you collapse on the ground feeling the life fleeing from your body as your eyes close.' },

    trapRoom2: { doors: { n: 'statueRoom' }, isTrapped: true, name: 'Trap Room', desc: 'As soon as you arrive in the room, the door locks behind you and deadly poisonous gas starts filling up the room. In a matter of seconds, the gas infiltrates your lungs and you collapse on the ground feeling the life fleeing from your body as your eyes close.' },

    trapRoom3: { doors: { w: 'guardianRoom' }, isTrapped: true, name: 'Trap Room', desc: 'As soon as you arrive in the room, the door locks behind you and deadly poisonous gas starts filling up the room. In a matter of seconds, the gas infiltrates your lungs and you collapse on the ground feeling the life fleeing from your body as your eyes close.' },

    mysticRoom: { doors: { n: 'catRoom' }, npc: 'owl', name: 'Mystical Room', desc: 'You arrive in a mystical room filled with books, and bookcases. Further into the room there is a fireplace. An inhumanly big owl is sitting on a chair next to it, wearing glasses and reading a parchment. As I come closer it turns to me and speak.' },

    guardianRoom: { doors: { s: 'strangeRoom', n: 'treasureRoom', e: 'trapRoom3' }, npc: 'guardian', name: 'Guardian Room', desc: 'You arrive in a beautiful and uncanny room, filled with vegetation, you can hear birds singing, and before your eyes realise it, a strange panda-like creature wearing a traditionnal japanese kimono stands in front of you. It moved so quickly that you eyes could not even follow it. It speaks to you.' },

    treasureRoom: { doors: { s: 'guardianRoom' }, npc: 'chest', name: 'Treasure Room', desc: 'You arrived in a small, well decorated room, with a golden chest at the center of it. The chest starts talking, but a this point nothing surprises you anymore, you just want to leave this Dungeon and get on with it.' }
};

// -CHARACTERS-
let npc = {
    cat: { name: 'Magic Cat', items: 'Bronze Idol', needItems: 'Black Cat Ring', visited: false, dial: ['Magic Cat: Greetings, human. Let me start by saying that a talking cat is only one of many strange things you might encounter in this Dungeon! I can help in your quest, but I need you to bring me my lost ring.', 'Magic Cat: As I said, I you need my lost Ring if you want my help to leave this Dungeon.', 'Magic Cat: You found my ring! Marvelous! Take this Bronze Idol, you will need it on your next step, farewell. [Received Bronze Idol]', 'Magic Cat: I cannot say more, you will have to find the next step by yourself, farewell.'] },

    statue: { name: 'Gargoyle Statue', items: 'Silver Pendant', needItems: 'Bronze Idol', visited: false, dial: ['Gargoyle Statue: Who dares to wander into my lair? I could crush with a blink of an eye, unless you have something I require. You best leave if not.', 'Gargoyle Statue: Still here? Well if you can bring me a Bronze Idol, I might help you on your quest to leave this cursed place!', 'Gargoyle Statue: I see you found my item, well it seems that all hope is not lost for you, human. Take this Silver Pendant, you will need it on your quest. [Received Silver Pendant]', 'Gargoyle Statue: You best leave before I change my mind, human.'] },

    owl: { name: 'Sage Owl', items: 'Jade Medallion', needItems: 'Silver Pendant', visited: false, dial: ['Sage Owl: Greetings, young traveller. Well, at this point I think you know how this works, I have something you need, if you have the thing I want.', 'Sage Owl: As I said, give me what I want, and I will give you what you need.', 'Sage Owl: Alright, here is your next required item, the Jade Medallion. [Received Jade Medallion]', 'Sage Owl: I have nothing more to offer you young traveler, as I do not require anything else, farewell.'] },

    guardian: { name: 'Panda Monk', items: 'Gold Key', needItems: 'Jade Medallion', visited: false, dial: ['Panda Monk: I am the Guardian, and if you got here, that means that you should know the drill by now.', 'Panda Monk: Do not try anything funny, you would instantly regret it.', 'Panda Monk: So you have my medallion, I guess you are nearly there. Take this key. [Received Gold Key', 'Panda Monk: I am getting too old for this sh**.'] },

    chest: { name: 'Golden Chest', items: 'Dungeon Key', needItems: 'Gold Key', visited: false, dial: ['Golden Chest: Hi there! Well I am a talking chest, nothing unusual at this point, and I do contain the Dungeon key you are looking for, but you need a key to open me.', 'Golden Chest: So, do you have the key or not?', 'Golden Chest: Congratulations! here is the key to leave this dungeon!', 'Golden Chest: I think I might retire now.'] }
};

// -ITEMS- Keys & artefacts
let items = {
    catRing: 'Black Cat Ring',
    bronzeIdol: 'Bronze Idol',
    silverPendant: 'Silver Pendant',
    jadeMedallion: 'Jade Medallion',
    goldKey: 'Gold Key',
    dungeonKey: 'Dungeon Key'
};



// ROOM LOGS //

// div creation starting from the initial div
let gameLog = document.getElementById('game-log')
let textLog = document.querySelector('.text-log')
// let textLog = document.createElement('div');
textLog.classList.add('text-log')
gameLog.appendChild(textLog);

// Create a Name
function roomName(textLog) {
    let roomNameLog = document.createElement('h2')
    textLog.appendChild(roomNameLog);
    let logRoomName = `${rooms[rooms.currentRoom].name}<hr>`
    roomNameLog.innerHTML += logRoomName
}

// create the Desc
function roomDesc(textLog) {
    let roomDescLog = document.createElement('p')
    textLog.appendChild(roomDescLog);
    let logRoomDesc = `${rooms[rooms.currentRoom].desc}<br>`
    roomDescLog.innerHTML += logRoomDesc
}

// Create an NPC dialog
function npcDial(textLog, dialogue) {
    let roomNpcDial = document.createElement('h6')
    textLog.appendChild(roomNpcDial);
    roomNpcDial.innerHTML += dialogue
}

// Create the Choose direction text
function chooseDirect(textLog) {
    let chooseDirectLog = document.createElement('h3')
    textLog.appendChild(chooseDirectLog)
    let LogChooseDirect = 'Choose a direction <hr>'

    if (player.inventory.includes(items.dungeonKey) && rooms.currentRoom === 'dungeonEntrance') {
        chooseDirectLog.innerHTML += "Victory!"
    } else if (player.isAlive) {
        chooseDirectLog.innerHTML += LogChooseDirect
    } else {
        chooseDirectLog.innerHTML += "You are dead! You lost!"
    }
}


// ROOM EVENT FUNCTION
function checkRoom(roomContent, textLog) {
    const npcExist = Boolean(roomContent.npc)
    const itemExist = Boolean(roomContent.items)
    // Variable containing object npc within room - Ex cat[string] => cat object
    let currentNpc = npc[roomContent.npc]
    // Variable containing string items within room - Ex catRing[string] => catRing string
    let currentItem = items[roomContent.items]
    // Conditional to kill the player if room is trapped
    if (rooms[rooms.currentRoom].isTrapped) {
        player.isAlive = false
    }

    if (npcExist) {
        let dialogue = ''

        if (player.inventory.includes(currentNpc.items)) {
            dialogue = currentNpc.dial[3]
            // console.log(currentNpc.dial[3])
        } else if (player.inventory.includes(currentNpc.needItems)) {
            player.inventory.push(currentNpc.items)
            dialogue = currentNpc.dial[2]
            // console.log(currentNpc.dial[2])
        } else if (!player.inventory.includes(currentNpc.needItems) && currentNpc.visited) {
            dialogue = currentNpc.dial[1]
            // console.log(currentNpc.dial[1])
        } else {
            dialogue = currentNpc.dial[0]
            currentNpc.visited = true
            // console.log(currentNpc.dial[0])
        }
        npcDial(textLog, dialogue)
    } else {
        console.log("There is no NPC in this room.")
    }

    if (itemExist) {
        if (player.inventory.includes(currentItem)) {
            console.log("Player already picked up Item in this room.")
        } else {
            player.inventory.push(currentItem)
            console.log(currentItem, 'is the current Item in the room')
        }
    } else {
        console.log("There is no Item in this room.")
    }
}


// AUTOSCROLL FUNCTION
function bottomScroll() {
    let bottom = document.getElementById('bottom')
    bottom.scrollIntoView();
};

// MOVEMENT FUNCTION >> TRIGGERED WITH MOVEMENT DIRECTION EVENTS
function moveRoom(dir) {
    textLog = document.createElement('div')
    textLog.classList.add('text-log')
    gameLog.appendChild(textLog)
    // variable containing object doors turned boolean - Ex catRoom[string].doors => doors object within catroom object
    const directionExist = Boolean(rooms[rooms.currentRoom].doors[dir])

    if (directionExist) {
        rooms.currentRoom = rooms[rooms.currentRoom].doors[dir]
        checkRoom(rooms[rooms.currentRoom], textLog)
        console.log('You can move there.')
    } else {
        console.log('You cannot move there.')
    }
    roomName(textLog)
    roomDesc(textLog)
    chooseDirect(textLog)
    bottomScroll()
}


// MOVEMENT DIRECTION EVENTS
document.addEventListener('keydown', function keyDirection(event) {
    // MOVEMENT LOGS >> TRIGGERED WITH MOVEMENT DIRECTION EVENTS
    textLog = document.querySelector('div:last-child.text-log')

    const preventDef = event.preventDefault()
    const key = event.key;
    let compass;

    if (!player.isAlive) {
        // Prevents the player from moving when dead
        throw new Error('You lost!');
    } else if (player.inventory.includes(items.dungeonKey) && rooms.currentRoom === 'dungeonEntrance') {
        throw new Error('You won!');
    }

    if (key === 'ArrowLeft') {
        let directionLog = document.createElement('h4')
        textLog.appendChild(directionLog)
        preventDef
        compass = 'w'
        let west = 'Go West<br>'
        directionLog.innerHTML += west
        // console.log('LEFT');
    } else if (key === 'ArrowRight') {
        let directionLog = document.createElement('h4')
        textLog.appendChild(directionLog)
        preventDef
        compass = 'e'
        let east = 'Go East<br>'
        directionLog.innerHTML += east
        // console.log('RIGHT');
    } else if (key === 'ArrowUp') {
        let directionLog = document.createElement('h4')
        textLog.appendChild(directionLog)
        preventDef
        compass = 'n'
        let north = 'Go North<br>'
        directionLog.innerHTML += north
        // console.log('UP');
    } else if (key === 'ArrowDown') {
        let directionLog = document.createElement('h4')
        textLog.appendChild(directionLog)
        preventDef
        compass = 's'
        let south = 'Go South<br>'
        directionLog.innerHTML += south
        // console.log('DOWN');
    } else {
        throw new Error('Use Arrow keys to move!');
    }
    moveRoom(compass);
    console.log(player.inventory, 'Inventory')
    console.log(player.isAlive, 'Life Status');
    return key;
});