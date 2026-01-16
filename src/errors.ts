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
 * Custom error class for DIGIPIN-related errors.
 * @category Errors
 *
 */
export class DigipinError extends Error {
  /**
   * Error code indicating the type of DIGIPIN error.
   */
  public readonly code:
    | "InvalidLatitude"
    | "InvalidLongitude"
    | "OutsideSupportedTerritory"
    | "InvalidDigipinLength"
    | "InvalidDigipinFormat";

  /**
   * Creates a new DigipinError instance.
   * @param code Error code indicating the type of error
   * @param message Human-readable error message
   */
  public constructor(code: DigipinError["code"], message: string) {
    super(message);
    this.name = "DigipinError";
    this.code = code;
  }

  /**
   * Creates an error for invalid latitude values.
   * @returns DigipinError instance for invalid latitude
   */
  static invalidLatitude(): DigipinError {
    return new DigipinError(
      "InvalidLatitude",
      "Latitude is outside geodetic bounds."
    );
  }
  /**
   * Creates an error for invalid longitude values.
   * @returns DigipinError instance for invalid longitude
   */
  static invalidLongitude(): DigipinError {
    return new DigipinError(
      "InvalidLongitude",
      "Longitude is outside geodetic bounds."
    );
  }
  /**
   * Creates an error for locations outside the DIGIPIN supported territory.
   * @returns DigipinError instance for locations outside the supported territory
   */
  static outsideSupportedTerritory(): DigipinError {
    return new DigipinError(
      "OutsideSupportedTerritory",
      "Location is outside the DIGIPIN supported territory."
    );
  }
  /**
   * Creates an error for DIGIPINs with invalid length.
   * @returns DigipinError instance for invalid DIGIPIN length
   */
  static invalidDigipinLength(): DigipinError {
    return new DigipinError(
      "InvalidDigipinLength",
      "DIGIPIN does not conform to required length."
    );
  }

  /**
   * Creates an error for DIGIPINs with invalid format or symbols.
   * @returns DigipinError instance for invalid DIGIPIN format
   */
  static invalidDigipinFormat(): DigipinError {
    return new DigipinError(
      "InvalidDigipinFormat",
      "DIGIPIN contains invalid symbols or format."
    );
  }
}
