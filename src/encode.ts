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
  DIGIPIN_LATITUDE_MIN,
  DIGIPIN_LATITUDE_MAX,
  DIGIPIN_LONGITUDE_MIN,
  DIGIPIN_LONGITUDE_MAX,
  DIGIPIN_GRID_SIZE,
  DIGIPIN_LENGTH,
  DIGIPIN_LABEL_GRID,
} from "./constants.js";

import {
  validateGeodeticCoordinates,
  validateDigipinTerritory,
} from "./validation.js";

import type { Location } from "./location.js";

function getSymbolAt(row: number, column: number): string {
  const symbol = DIGIPIN_LABEL_GRID[row]?.[column];

  if (symbol === undefined) {
    throw new Error("Internal DIGIPIN grid invariant violated.");
  }

  return symbol;
}

/**
 * Encode geographic coordinates into a canonical DIGIPIN.
 *
 * This function implements the official DIGIPIN hierarchical 4 × 4 grid
 * encoding algorithm exactly as defined by the specification.
 *
 * The returned DIGIPIN contains no separators and is always
 * exactly DIGIPIN_LENGTH characters long.
 *
 * @param location - Geographic location containing latitude and longitude
 * @returns Encoded DIGIPIN string
 * @throws Error if the geodetic coordinates are invalid or if the location is outside the supported territory
 */
export function encode(location: Location): string {
  validateGeodeticCoordinates(location);
  validateDigipinTerritory(location);

  let latitudeMin: number = DIGIPIN_LATITUDE_MIN;
  let latitudeMax: number = DIGIPIN_LATITUDE_MAX;
  let longitudeMin: number = DIGIPIN_LONGITUDE_MIN;
  let longitudeMax: number = DIGIPIN_LONGITUDE_MAX;

  let digipin: string = "";

  for (let level: number = 0; level < DIGIPIN_LENGTH; level++) {
    const latitudeStep: number =
      (latitudeMax - latitudeMin) / DIGIPIN_GRID_SIZE;

    const longitudeStep: number =
      (longitudeMax - longitudeMin) / DIGIPIN_GRID_SIZE;

    let rowIndex: number = Math.floor(
      (latitudeMax - location.latitude) / latitudeStep
    );

    let columnIndex: number = Math.floor(
      (location.longitude - longitudeMin) / longitudeStep
    );

    // Clamp row and column indices to valid grid bounds
    rowIndex = Math.min(rowIndex, DIGIPIN_GRID_SIZE - 1);
    columnIndex = Math.min(columnIndex, DIGIPIN_GRID_SIZE - 1);

    const symbol: string = getSymbolAt(rowIndex, columnIndex);

    digipin += symbol;

    latitudeMax -= rowIndex * latitudeStep;
    latitudeMin = latitudeMax - latitudeStep;

    longitudeMin += columnIndex * longitudeStep;
    longitudeMax = longitudeMin + longitudeStep;
  }

  return digipin;
}
