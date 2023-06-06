    
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";


kaboom();

loadSprite("balwan", "balwan.png")

loadSprite("kartka", "kartka.png")

loadSound("muzyka", "jingle_bells.mp3")

add ([
    sprite("kartka")
])

const balwan = add([
    sprite("balwan"),
    pos(0,150)
])


let wprawo = true


balwan.onUpdate(() => {
    if(wprawo && balwan.pos.x < 600)
    balwan.pos.x += 1

    else if(!wprawo && balwan.pos.x > 50)
    balwan.pos.x -= 1

    else wprawo ^= true
})

onMouseRelease(()=>play("muzyka"))