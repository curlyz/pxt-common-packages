enum ControllerLightCondition {
    //% block="dark"
    Dark = 1,  // SENSOR_THRESHOLD_LOW
    //% block="bright"
    Bright = 2,  // SENSOR_THRESHOLD_HIGH
}

//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller {
    /**
     * Read the light level applied to the LED screen in a range from 0 (dark) to 255 (bright).
     */
    //% blockId=ctrllightlevel block="light level"
    //% parts="lightsensor"
    //% weight=30 blockGap=8
    //% group="Extras"
    //% blockHidden=true //gb.override: hide the irrelevant block
    export function lightLevel(): number {
        return controller.__internal.lightLevel();
    }


    /**
     * Register an event that runs when light conditions (darker or brighter) change.
     * @param condition the condition that event triggers on
     */
    //% blockId=ctrlonlightcondition block="on light %condition"
    //% parts="lightsensor"
    //% weight=84 blockGap=12
    //% group="Extras"
    //% blockHidden=true //gb.override: hide the irrelevant block
    export function onLightConditionChanged(condition: ControllerLightCondition, handler: () => void): void {
        controller.__internal.onLightConditionChanged(condition, handler);
    } 
}