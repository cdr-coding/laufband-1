basic.forever(function () {
    for (let Index = 0; Index <= 4; Index++) {
        led.toggle(Index, 2)
        basic.pause(100)
    }
})
