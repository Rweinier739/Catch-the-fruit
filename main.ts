input.onButtonPressed(Button.A, function () {
    varken.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let varken: game.LedSprite = null
varken = game.createSprite(2, 4)
music.playMelody("C5 G B A F A C5 B ", 500)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    if (game.score() >= 0 && game.score() < 10) {
        for (let index = 0; index < 4; index++) {
            basic.pause(1000)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 10 && game.score() < 20) {
        for (let index = 0; index < 4; index++) {
            basic.pause(900)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 20 && game.score() < 30) {
        for (let index = 0; index < 4; index++) {
            basic.pause(800)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 30 && game.score() < 40) {
        for (let index = 0; index < 4; index++) {
            basic.pause(700)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 40 && game.score() < 50) {
        for (let index = 0; index < 4; index++) {
            basic.pause(600)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 50 && game.score() < 60) {
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 60 && game.score() < 70) {
        for (let index = 0; index < 4; index++) {
            basic.pause(400)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 70 && game.score() < 80) {
        for (let index = 0; index < 4; index++) {
            basic.pause(300)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 80 && game.score() < 90) {
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() >= 90 && game.score() < 100) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            fruit.change(LedSpriteProperty.Y, 1)
        }
    }
    if (game.score() == 100) {
        basic.showString("Winner")
        for (let index = 0; index < 4; index++) {
            music.playMelody("F A C A B G A E ", 250)
        }
    }
    if (fruit.isTouching(varken)) {
        fruit.delete()
        game.addScore(1)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else {
        game.gameOver()
    }
})
