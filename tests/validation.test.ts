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

import { describe, it, expect } from "vitest";
import {
  validateGeodeticCoordinates,
  validateDigipinTerritory,
  validateDigipinFormat,
} from "../src/validation.js";
import { DigipinError } from "../src/errors.js";


describe("validation", () => {
  it("accepts valid geodetic coordinates", () => {
    expect(() =>
      validateGeodeticCoordinates({ latitude: 28.6, longitude: 77.2 })
    ).not.toThrow();
  });

  it("rejects invalid latitude", () => {
    expect(() =>
      validateGeodeticCoordinates({ latitude: 120, longitude: 77 })
    ).toThrow(DigipinError);
  });

  it("rejects invalid longitude", () => {
    expect(() =>
      validateGeodeticCoordinates({ latitude: 28, longitude: 200 })
    ).toThrow(DigipinError);
  });

  it("rejects location outside DIGIPIN territory", () => {
    expect(() =>
      validateDigipinTerritory({ latitude: 51.5, longitude: -0.1 })
    ).toThrow(DigipinError);
  });

  it("accepts valid DIGIPIN format", () => {
    expect(() => validateDigipinFormat("39J49LL8T4")).not.toThrow();
  });

  it("rejects valid DIGIPIN format with separators before normalization", () => {
    expect(() => validateDigipinFormat("39J-49L-L8T4")).toThrow();
  });

  it("rejects DIGIPIN with invalid length", () => {
    expect(() => validateDigipinFormat("39J")).toThrow(DigipinError);
  });

  it("rejects DIGIPIN with invalid symbols", () => {
    expect(() => validateDigipinFormat("34SUYDV5GH")).toThrow(DigipinError);
  });
});
