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
 * Represents a geographic location expressed as latitude and longitude.
 *
 * Both values are expressed in decimal degrees using the WGS-84
 * coordinate reference system.
 *
 * This type is used as the return value of DIGIPIN decoding operations.
 */
export type Location = {
  /**
   * Latitude in decimal degrees.
   */
  latitude: number;

  /**
   * Longitude in decimal degrees.
   */
  longitude: number;
}
