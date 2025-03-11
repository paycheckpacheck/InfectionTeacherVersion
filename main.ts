radio.onReceivedString(function (receivedString) {
    if (receivedString == "im alive") {
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "youre infected") {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.setGroup(0)
    basic.pause(100)
    radio.setGroup(1)
    basic.pause(100)
})
