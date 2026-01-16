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
 * Geodetic coordinate limits (WGS-84 compatible).
 *
 * These constants define the full valid range of latitude and longitude
 * values supported by the WGS-84 coordinate reference system.
 */

/**
 *  Minimum latitude for geodetic coordinates
 */
export const GEODETIC_LATITUDE_MIN: number = -90;
/**
 * Maximum latitude for geodetic coordinates
 */
export const GEODETIC_LATITUDE_MAX: number = 90;
/**
 * Minimum longitude for geodetic coordinates
 */
export const GEODETIC_LONGITUDE_MIN: number = -180;
/**
 * Maximum longitude for geodetic coordinates
 */
export const GEODETIC_LONGITUDE_MAX: number = 180;


/**
 * Official DIGIPIN supported territory bounds.
 *
 * Only geographic coordinates within these bounds are valid inputs
 * for DIGIPIN encoding.
 */

/** Minimum latitude for DIGIPIN supported territory */
export const DIGIPIN_LATITUDE_MIN: number = 2.5;
/** Maximum latitude for DIGIPIN supported territory */
export const DIGIPIN_LATITUDE_MAX: number = 38.5;
/** Minimum longitude for DIGIPIN supported territory */
export const DIGIPIN_LONGITUDE_MIN: number = 63.5;
/** Maximum longitude for DIGIPIN supported territory */
export const DIGIPIN_LONGITUDE_MAX: number = 99.5;

/**
 * Official DIGIPIN symbol set (base-16).
 *
 * The order of symbols is significant and MUST NOT be changed.
 * This array represents the canonical DIGIPIN symbol sequence
 * as defined by the specification.
 */

/**
 * Flattened array of valid DIGIPIN symbols.
 */
export const DIGIPIN_SYMBOLS: readonly string[] = [
  "F",
  "C",
  "9",
  "8",
  "J",
  "3",
  "2",
  "7",
  "K",
  "4",
  "5",
  "6",
  "L",
  "M",
  "P",
  "T",
];

/**
 * Length of a DIGIPIN code in characters.
 */
export const DIGIPIN_LENGTH: number = 10;

/**
 * Size of the DIGIPIN grid along one axis.
 *
 * DIGIPIN uses a fixed 4 × 4 hierarchical grid at each level.
 */
export const DIGIPIN_GRID_SIZE: number = 4;

/**
 * 2D array representing the DIGIPIN label grid.
 *
 * This grid defines the mapping between grid cell indices and
 * DIGIPIN symbols.
 *
 * - Row index corresponds to latitude subdivision (south → north)
 * - Column index corresponds to longitude subdivision (west → east)
 *
 * The structure and ordering match the official specification.
 */
export const DIGIPIN_LABEL_GRID: readonly (readonly string[])[] = [
  ["F", "C", "9", "8"],
  ["J", "3", "2", "7"],
  ["K", "4", "5", "6"],
  ["L", "M", "P", "T"],
];

/**
 * Maximum possible positional error after DIGIPIN decoding, in degrees.
 *
 * This value is derived from the specification:
 *   36° / 4¹⁰ / 2
 *
 * It represents the maximum deviation between the decoded centroid
 * and any point within the corresponding DIGIPIN grid cell.
 *
 * This constant is primarily intended for testing and conformance checks.
 */
export const DIGIPIN_MAX_DECODE_ERROR_DEGREES: number = 0.0000171661376953125;
