input.onButtonPressed(Button.A, function () {
    varken.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let varken: game.LedSprite = null
varken = game.createSprite(2, 4)
basic.forever(function () {
    if (game.score() == 100) {
        basic.showString("Winner")
    }
})
basic.forever(function () {
    if (game.score() == 30) {
        for (let index = 0; index < 4; index++) {
            basic.pause(700)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        fruit.change(LedSpriteProperty.Y, 1)
    }
    if (fruit.isTouching(varken)) {
        fruit.delete()
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
basic.forever(function () {
    if (game.score() == 90) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 10) {
        for (let index = 0; index < 4; index++) {
            basic.pause(900)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 20) {
        for (let index = 0; index < 4; index++) {
            basic.pause(800)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 80) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 40) {
        for (let index = 0; index < 4; index++) {
            basic.pause(600)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 50) {
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 60) {
        for (let index = 0; index < 4; index++) {
            basic.pause(400)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (game.score() == 70) {
        for (let index = 0; index < 4; index++) {
            basic.pause(300)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
})
