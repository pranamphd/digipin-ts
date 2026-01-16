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

import {
  GEODETIC_LATITUDE_MIN,
  GEODETIC_LATITUDE_MAX,
  GEODETIC_LONGITUDE_MIN,
  GEODETIC_LONGITUDE_MAX,
  DIGIPIN_LATITUDE_MIN,
  DIGIPIN_LATITUDE_MAX,
  DIGIPIN_LONGITUDE_MIN,
  DIGIPIN_LONGITUDE_MAX,
  DIGIPIN_LENGTH,
  DIGIPIN_SYMBOLS,
} from "./constants.js";
import { DigipinError } from "./errors.js";
import type { Location } from "./location.js";

/**
 * Check if a value is within a range.
 *
 * @param value - The value to check
 * @param min - The minimum allowed value
 * @param max - The maximum allowed value
 * @returns True if the value is within the range, false otherwise
 */
function isWithin(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Validate geodetic latitude and longitude.
 *
 * This function checks whether the provided coordinates fall within
 * the valid WGS-84 geodetic bounds.
 *
 * @param location - Geographic location containing latitude and longitude
 * @throws Error if geodetic coordinates are out of bounds
 */
export function validateGeodeticCoordinates(location: Location): void {
  if (
    !isWithin(location.latitude, GEODETIC_LATITUDE_MIN, GEODETIC_LATITUDE_MAX)
  ) {
    throw DigipinError.invalidLatitude();
  }

  if (
    !isWithin(
      location.longitude,
      GEODETIC_LONGITUDE_MIN,
      GEODETIC_LONGITUDE_MAX
    )
  ) {
    throw DigipinError.invalidLongitude();
  }
}
/**
 * Validate that a geographic location lies within the DIGIPIN
 * supported territory.
 *
 * @param location - Geographic location containing latitude and longitude
 * @throws Outside supported territory error if location is out of supported bounds
 */
export function validateDigipinTerritory(location: Location): void {
  if (
    location.latitude < DIGIPIN_LATITUDE_MIN ||
    location.latitude > DIGIPIN_LATITUDE_MAX ||
    location.longitude < DIGIPIN_LONGITUDE_MIN ||
    location.longitude > DIGIPIN_LONGITUDE_MAX
  ) {
    throw DigipinError.outsideSupportedTerritory();
  }
}

/**
 * Validate the format of a DIGIPIN string.
 *
 * This function checks:
 * - Exact DIGIPIN length
 * - Allowed DIGIPIN symbol set
 *
 * The input must already be normalized (no separators, uppercase).
 *
 * @param digipin - DIGIPIN string to validate
 * @throws Invalid DIGIPIN length error if length is incorrect
 * @throws Invalid DIGIPIN format error if invalid symbols are found
 */
export function validateDigipinFormat(digipin: string): void {
  if (digipin.length !== DIGIPIN_LENGTH) {
    throw DigipinError.invalidDigipinLength();
  }

  for (const character of digipin) {
    if (!DIGIPIN_SYMBOLS.includes(character)) {
      throw DigipinError.invalidDigipinFormat();
    }
  }
}
