controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    User,
    [img`
        . . e e e . . . . . . . . . . . 
        . . e 4 1 1 1 . . . . 1 1 1 . . 
        . . e 1 f f f 2 . . 2 f f f 1 . 
        . . 4 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . . 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . . e 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . . 2 e 1 2 e 4 1 1 4 e 2 1 . . 
        . e 4 4 1 2 2 1 4 4 1 2 2 1 . . 
        . e e e 2 1 1 1 1 1 1 1 1 . . . 
        . 2 4 4 2 4 4 4 f f f 4 4 . . . 
        . . 2 4 2 4 4 4 f f f 4 4 . . . 
        . . . 4 4 f 4 f f f f f . . . . 
        . . . . 4 f f f f f f . . . . . 
        `,img`
        . . e e 1 1 1 . . . . 1 1 1 . . 
        . . e 1 f f f 2 . . 2 f f f 1 . 
        . . . 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . . 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . . . 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . . e e 1 2 e 4 4 4 4 e 2 1 . . 
        . . 2 e 1 2 2 4 1 1 4 2 2 1 . . 
        . e 4 4 2 1 1 1 4 4 1 1 1 . . . 
        . e e e 2 4 4 4 f f f 4 4 . . . 
        . 2 4 4 2 4 4 4 f f f 4 4 . . . 
        . . 2 4 2 4 4 4 f f f 4 4 . . . 
        . . . 4 4 f 4 f f f f f . . . . 
        . . . . 4 f f f f f f . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.showLongText("Congratulations! You have escaped!", DialogLayout.Bottom)
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    User,
    [img`
        . . 1 1 1 . . . . 1 1 1 4 e e . 
        . 1 f f f 2 . . 2 f f f 1 4 e . 
        . 1 f e 4 4 2 2 4 4 e f 1 4 e . 
        . 1 f 4 4 4 4 4 4 4 4 f 1 . . . 
        . 2 2 1 1 4 4 4 4 1 1 2 2 4 . . 
        . 1 2 1 4 4 4 4 4 4 1 2 1 e e . 
        . . 2 2 e 4 1 1 4 e 2 2 e 4 2 . 
        . . 1 2 2 1 e e 1 2 2 1 4 4 e . 
        . . . 1 1 1 1 1 1 1 1 . e e e . 
        . . . 4 f f f f f 4 4 4 4 4 e . 
        . . . 4 f f f f f 4 4 4 4 4 2 . 
        . . . f f f f f f f f 4 4 4 . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . 1 1 1 e e . . 
        . 1 f f f 2 . . 2 f f f 1 e . . 
        . 1 f e 4 4 2 2 4 4 e f 1 . . . 
        . 1 f 4 4 4 4 4 4 4 4 f 1 . . . 
        . 2 2 1 1 4 4 4 4 1 1 2 2 e e . 
        . 1 1 1 4 4 4 4 4 4 1 1 e e 2 . 
        . . 2 2 e 1 1 1 1 e 2 2 4 4 2 . 
        . . 1 2 2 1 4 4 1 2 2 1 4 e e . 
        . . . 1 1 1 1 1 1 1 1 2 4 e 2 . 
        . . . 4 4 f f f 4 4 4 2 4 4 2 . 
        . . . 4 f f f f f 4 4 4 4 2 . . 
        . . . f f f f f f f f f . . . . 
        . . . f f f f f . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . e e e . . 
        . . 1 1 1 . . . . 1 1 1 4 e . . 
        . 1 f f f 2 . . 2 f f f 1 e . . 
        . 1 f e 4 4 2 2 4 4 e f 1 4 . . 
        . 1 f 4 4 4 4 4 4 4 4 f 1 . . . 
        . 2 2 1 1 4 4 4 4 1 1 2 2 . . . 
        . 1 2 1 4 4 4 4 4 4 1 2 1 e . . 
        . . 1 2 e 4 1 1 4 e 2 1 e 2 . . 
        . . 1 2 2 1 4 4 1 2 2 1 4 4 e . 
        . . . 1 1 1 1 1 1 1 1 2 e e e . 
        . . . 4 4 f f f 4 4 4 2 4 4 2 . 
        . . . 4 4 f f f 4 4 4 2 4 2 . . 
        . . . . f f f f f 4 f 4 4 . . . 
        . . . . . f f f f f f 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 1 1 2 4 4 4 4 4 2 1 1 . . 
        . . 1 f f 4 4 4 4 4 4 2 f f 1 . 
        . . 1 e f 4 4 4 1 4 4 1 f e 1 . 
        . . . 1 4 4 4 1 1 4 4 1 1 1 . . 
        . . . 1 2 2 2 e 1 1 1 e 2 1 . . 
        . . . 1 1 2 2 1 1 1 1 2 1 1 . . 
        . . . . 1 1 1 1 1 e e 1 1 2 . . 
        . . . . . f f f f 1 1 f 4 4 2 . 
        . . . . . f f f f f f f 4 4 2 2 
        . . . . . f f f f f f f 4 4 4 2 
        . . . . . f f f f f f 4 4 4 4 2 
        . . . . . f f 4 4 4 4 2 e e 4 2 
        . . . . . . f 4 e e 2 e 4 e e 2 
        . e e 4 4 e e f 4 4 e e 4 2 e 2 
        e e e e 2 2 e e 2 2 2 e e e 2 2 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    User,
    [img`
        . e e 4 1 1 1 . . . . 1 1 1 . . 
        . e 4 1 f f f 2 . . 2 f f f 1 . 
        . e 4 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . 4 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . e e 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . 2 4 e 2 2 e 4 1 1 4 e 2 2 . . 
        . e 4 4 1 2 2 1 e e 1 2 2 1 . . 
        . e e e . 1 1 1 1 1 1 1 1 . . . 
        . e 4 4 4 4 4 f f f f f 4 . . . 
        . 2 4 4 4 4 4 f f f f f 4 . . . 
        . . 4 4 4 f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . f f . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . e e 1 1 1 . . . . 1 1 1 . . 
        . . e 1 f f f 2 . . 2 f f f 1 . 
        . . . 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . e e 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . 2 e e 1 1 4 4 4 4 4 4 1 1 1 . 
        . 2 4 4 2 2 e 1 1 1 1 e 2 2 . . 
        . e e 4 1 2 2 1 4 4 1 2 2 1 . . 
        . 2 e 4 2 1 1 1 1 1 1 1 1 . . . 
        . 2 4 4 2 4 4 4 f f f 4 4 . . . 
        . . 2 4 4 4 4 f f f f f 4 . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f . . f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . e e e . . . . . . . . . . . 
        . . e 4 1 1 1 . . . . 1 1 1 . . 
        . . e 1 f f f 2 . . 2 f f f 1 . 
        . . 4 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . . 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . . e 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . . 2 e 1 2 e 4 1 1 4 e 2 1 . . 
        . e 4 4 1 2 2 1 4 4 1 2 2 1 . . 
        . e e e 2 1 1 1 1 1 1 1 1 . . . 
        . 2 4 4 2 4 4 4 f f f 4 4 . . . 
        . . 2 4 2 4 4 4 f f f 4 4 . . . 
        . . . 4 4 f 4 f f f f f . . . . 
        . . . . 4 f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . 1 1 2 4 4 4 4 4 2 1 1 . . . 
        . 1 f f 2 4 4 4 4 4 4 f f 1 . . 
        . 1 e f 1 4 4 1 4 4 4 f e 1 . . 
        . . 1 1 1 4 4 1 1 4 4 4 1 . . . 
        . . 1 2 e 1 1 1 e 2 2 2 1 . . . 
        . . 1 1 2 1 1 1 1 2 2 1 1 . . . 
        . . 2 1 1 e e 1 1 1 1 1 . . . . 
        . 2 4 4 f 1 1 f f f f . . . . . 
        2 2 4 4 f f f f f f f . . . . . 
        2 4 4 4 f f f f f f f . . . . . 
        2 4 4 4 4 f f f f f f . . . . . 
        2 4 e e 2 4 4 4 4 f f . . . . . 
        2 e e 4 e 2 e e 4 f . . . . . . 
        2 e 2 4 e e 4 4 f e e 4 4 e e . 
        2 2 e e e 2 2 2 e e 2 2 e e e e 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.showLongText("Oh no! Its locked, find another way out!", DialogLayout.Bottom)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    User,
    [img`
        . . e e e . . . . . . . . . . . 
        . . e 4 1 1 1 . . . . 1 1 1 . . 
        . . e 1 f f f 2 . . 2 f f f 1 . 
        . . 4 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . . 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . . e 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . . 2 e 1 2 e 4 1 1 4 e 2 1 . . 
        . e 4 4 1 2 2 1 4 4 1 2 2 1 . . 
        . e e e 2 1 1 1 1 1 1 1 1 . . . 
        . 2 4 4 2 4 4 4 f f f 4 4 . . . 
        . . 2 4 2 4 4 4 f f f 4 4 . . . 
        . . . 4 4 f 4 f f f f f . . . . 
        . . . . 4 f f f f f f . . . . . 
        `],
    500,
    false
    )
})
function GameMode (enemiesNum: number) {
    tiles.setCurrentTilemap(tilemap`level1`)
    enemiesList = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `, img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    SpawnTiles = tiles.getTilesByType(sprites.castle.tileDarkGrass1)
    for (let index = 0; index < enemiesNum; index++) {
        enemies = sprites.create(enemiesList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemies, SpawnTiles.removeAt(randint(0, SpawnTiles.length - 1)))
        if (Delay) {
            enemies.follow(User, 20)
        } else {
            enemies.follow(User, 100)
        }
    }
}
info.onLifeZero(function () {
    game.splash("Oh no! Youve died.")
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.showLongText("Oh no! Its locked, find another way out!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    User,
    [img`
        . e e 4 1 1 1 . . . . 1 1 1 . . 
        . e 4 1 f f f 2 . . 2 f f f 1 . 
        . e 4 1 f e 4 4 2 2 4 4 e f 1 . 
        . . . 1 f 4 4 4 4 4 4 4 4 f 1 . 
        . . 4 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . e e 1 2 1 4 4 4 4 4 4 1 2 1 . 
        . 2 4 e 2 2 e 4 1 1 4 e 2 2 . . 
        . e 4 4 1 2 2 1 e e 1 2 2 1 . . 
        . e e e . 1 1 1 1 1 1 1 1 . . . 
        . e 4 4 4 4 4 f f f f f 4 . . . 
        . 2 4 4 4 4 4 f f f f f 4 . . . 
        . . 4 4 4 f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . e c 4 1 1 c . . . . 1 1 1 . . 
        . e c 1 c f c 2 . . 2 f f f 1 . 
        . e c 1 c e c 4 2 2 4 4 e f 1 . 
        . . c 1 c 4 c 4 4 4 4 4 4 f 1 . 
        . . 4 2 2 1 1 4 4 4 4 1 1 2 2 . 
        . e e 1 2 1 e 4 4 4 4 e 1 2 1 . 
        . 2 4 e 2 2 e 4 1 1 4 e 2 2 . . 
        . e 4 4 1 2 2 1 3 3 1 2 2 1 . . 
        . e e e . 1 1 1 3 3 1 1 1 . . . 
        . e 4 4 4 4 4 f f f f f 4 . . . 
        . 2 4 4 4 4 4 f f f f f 4 . . . 
        . . 4 4 4 f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . f f . . f f . . . 
        `],
    500,
    false
    )
})
let enemies: Sprite = null
let SpawnTiles: tiles.Location[] = []
let enemiesList: Image[] = []
let User: Sprite = null
let Delay = false
game.showLongText("Escape the maze while avoiding enemies.", DialogLayout.Bottom)
let Gamemode = 0
Delay = game.ask("GameMode Easy(A) Hard(B)")
User = sprites.create(assets.image`RedPanda`, SpriteKind.Player)
controller.moveSprite(User)
scene.cameraFollowSprite(User)
info.setLife(5)
GameMode(4)
game.onUpdateInterval(10000000, function () {
    GameMode(4)
})
