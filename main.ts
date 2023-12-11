input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("NIKLAS")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})
