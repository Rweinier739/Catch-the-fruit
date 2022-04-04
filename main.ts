input.onButtonPressed(Button.A, function () {
    varken.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let varken: game.LedSprite = null
varken = game.createSprite(2, 4)
let punt = 1000
music.playMelody("C5 G B A F A C5 B ", 500)
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(punt)
        fruit.change(LedSpriteProperty.Y, 1)
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
        if (game.score() % 10 == 0) {
            punt += -100
        }
    } else {
        game.gameOver()
    }
})
