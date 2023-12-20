//% fixedInstances decompileIndirectFixedInstances
interface Image {
    /**
     * Fill a rectangle
     */
    fillRect(x: number, y: number, w: number, h: number, c: color): void;

    /**
     * Replace colors in a rectangle
     */
    mapRect(x: number, y: number, w: number, h: number, colorMap: Buffer): void;

    /**
     * Draw a line
     */
    drawLine(x0: number, y0: number, x1: number, y1: number, c: color): void;

    /**
     * Draw an empty rectangle
     */
    drawRect(x: number, y: number, w: number, h: number, c: color): void;

    /**
     * Set pixel color
     */
    setPixel(x: int32, y: int32, c: int32): void;

    /**
     * Get a pixel color
     */
    getPixel(x: int32, y: int32): int32;

    /**
     * Fill entire image with a given color
     */
    fill(c: int32): void;

    /**
     * Return a copy of the current image
     */
    clone(): Image;

    /**
     * Flips (mirrors) pixels horizontally in the current image
     */
    flipX(): void;

    /**
     * Flips (mirrors) pixels vertically in the current image
     */
    flipY(): void;

    /**
     * Every pixel in image is moved by (dx,dy)
     */
    scroll(dx: int32, dy: int32): void;

    /**
     * Replaces one color in an image with another
     */
    replace(from: int32, to: int32): void;

    /**
     * Returns true if the provided image is the same as this image,
     * otherwise returns false.
     */
    //% shim=ImageMethods::equals
    //% blockNamespace="images" group="Compare"
    //% block="$this is equal to image $other"
    //% this.shadow=variables_get
    //% this.defl="picture"
    //% other.shadow=screen_image_picker
    //% help=images/image/equals
    equals(other: Image): boolean;

    //% shim=ImageMethods::isStatic
    isStatic(): boolean;

    //% shim=ImageMethods::revision
    revision(): number;
}

declare namespace image {
    function create(width: number, height: number): Image;
}
