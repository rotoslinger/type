controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("h")
    light.setAll(0x00ffff)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("o")
    light.setAll(0x65471f)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("b")
    light.setAll(0xff8000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("a")
    light.setAll(0x0000ff)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("r")
    light.setAll(0x00ff00)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("i")
    light.setAll(0xffff00)
})
let strip = light.createStrip(pins.LED, 5)
forever(function () {
    strip.showAnimation(light.cometAnimation, 500)
})
