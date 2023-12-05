//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    export function onGesture(gesture: ControllerGesture, handler: () => void) {
    }

    export function onCustomGesture(id: number, update: () => boolean, handler: () => void) {
    }

    export function acceleration(dimension: ControllerDimension): number {
        return 0;
    }
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    export function crankPosition(): number {
        return 0;
    }

    //export function setCrankPins(pinA: DigitalInOutPin, pinB: DigitalInOutPin) {
    //}
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    //export function startLightAnimation(animation: light.NeoPixelAnimation, duration: number) {
    //}

    export function startLightPulse(rgb: number, duration: number) {
    }
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    export function lightLevel(): number {
        return 0;
    }


    export function onLightConditionChanged(condition: ControllerLightCondition, handler: () => void): void {
    }
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    export function temperature(unit: ControllerTemperatureUnit): number {
        return 0;
    }
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller.__internal {
    export function vibrate(millis: number) {
    }
}