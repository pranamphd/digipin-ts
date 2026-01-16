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
  DIGIPIN_GRID_SIZE,
  DIGIPIN_LABEL_GRID,
  DIGIPIN_LATITUDE_MIN,
  DIGIPIN_LATITUDE_MAX,
  DIGIPIN_LONGITUDE_MIN,
  DIGIPIN_LONGITUDE_MAX,
} from "./constants.js";

import { DigipinError } from "./errors.js";
import type { Location } from "./location.js";
import { normalize } from "./normalize.js";
import { validateDigipinFormat } from "./validation.js";

/**
 * Mapping from DIGIPIN symbol to its grid position.
 *
 * Key: DIGIPIN symbol
 * Value: [row, column]
 */
const DIGIPIN_SYMBOL_POSITION_MAP: ReadonlyMap<
  string,
  readonly [number, number]
> = new Map(
  DIGIPIN_LABEL_GRID.flatMap((row, rowIndex) =>
    row.map((symbol, columnIndex) => [symbol, [rowIndex, columnIndex]] as const)
  )
);

/**
 * Decodes a DIGIPIN into geodetic coordinates.
 *
 * @param digipin - DIGIPIN string (separators allowed)
 * @returns The geodetic coordinates of the DIGIPIN
 * @throws Error if the DIGIPIN is invalid
 */
export function decode(digipin: string): Location {
  const normalized: string = normalize(digipin);
  validateDigipinFormat(normalized);

  let latitudeMin: number = DIGIPIN_LATITUDE_MIN;
  let latitudeMax: number = DIGIPIN_LATITUDE_MAX;
  let longitudeMin: number = DIGIPIN_LONGITUDE_MIN;
  let longitudeMax: number = DIGIPIN_LONGITUDE_MAX;

  for (const symbol of normalized) {
    const position = DIGIPIN_SYMBOL_POSITION_MAP.get(symbol);

    if (position === undefined) {
      throw DigipinError.invalidDigipinFormat();
    }

    const [row, column] = position;

    const latitudeStep: number =
      (latitudeMax - latitudeMin) / DIGIPIN_GRID_SIZE;
    const longitudeStep: number =
      (longitudeMax - longitudeMin) / DIGIPIN_GRID_SIZE;

    latitudeMax -= row * latitudeStep;
    latitudeMin = latitudeMax - latitudeStep;

    longitudeMin += column * longitudeStep;
    longitudeMax = longitudeMin + longitudeStep;
  }

  return {
    latitude: (latitudeMin + latitudeMax) / 2,
    longitude: (longitudeMin + longitudeMax) / 2,
  };
}
