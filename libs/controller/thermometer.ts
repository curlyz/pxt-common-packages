const enum ControllerTemperatureUnit {
    //% block="°C"
    Celsius = 0,
    //% block="°F"
    Fahrenheit = 1,
}


//% blockHidden=true //gb.override: hide the irrelevant block
//% blockHidden=true //gb.override: hide the irrelevant block
namespace controller {
    /**
     * Get the temperature in Celsius or Fahrenheit degrees.
     */
    //% blockId=ctrltemperature block="temperature in %unit"
    //% parts="thermometer"
    //% weight=26
    //% group="Extras"
    export function temperature(unit: ControllerTemperatureUnit): number {
        return controller.__internal.temperature(unit);
    }
}