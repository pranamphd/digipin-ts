/**
 * Copyright (c) 2026 Pranam
 * ORCID: https://orcid.org/0009-0007-9316-3616
 *
 * This code is licensed under the Apache License, Version 2.0.
 *
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * QR Code:
 * ![QR Code](/ORCID.png)
 * Scan the QR code to access my ORCID profile.
 */

/**
 * This library provides functions to encode geodetic coordinates into 10 character DIGIPINs
 * and decode DIGIPINs back into geodetic coordinates.
 * The DIGIPIN system divides the Earth's surface into a grid of cells, each represented by a unique 10 character code.
 * The library includes functions for normalization and validation of DIGIPINs.
 * It is implemented in TypeScript and can be used in both Node.js and browser environments.
 * 
 * @packageDocumentation
 * 
 * @example
 * ```ts
 * import { encode, decode } from "@pranamphd/digipin";
 * 
 * const digipin = encode(28.6139, 77.209); // Encode coordinates to DIGIPIN
 * console.log(digipin); // Example output: "39J438TJC7"
 * 
 * const location = decode(digipin); // Decode DIGIPIN back to coordinates
 * console.log(location); // Example output: { latitude: 28.6139, longitude: 77.209 }
 * ```
 */
export { encode } from "./encode.js";
export { decode } from "./decode.js";
export type { Location } from "./location.js";
