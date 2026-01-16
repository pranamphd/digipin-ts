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
 * Normalize a DIGIPIN string.
 *
 * Normalization applies the following rules:
 * - Removes '-' separator characters
 * - Converts all characters to uppercase
 *
 * @param digipin - DIGIPIN string to normalize
 * @returns Normalized DIGIPIN string
 */
export function normalize(digipin: string): string {
  let normalizedDigipin: string = "";

  for (const character of digipin) {
    if (character !== "-") {
      normalizedDigipin += character.toUpperCase();
    }
  }

  return normalizedDigipin;
}
