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
import { encode } from "../src/encode.js";
import { DigipinError } from "../src/errors.js";

describe("encode", () => {
  it("encodes a valid location into a DIGIPIN", () => {
    const digipin = encode({ latitude: 28.6139, longitude: 77.209 });
    expect(digipin).toHaveLength(10);
    expect(digipin).eq("39J438TJC7")
  });

  it("throws for invalid latitude", () => {
    expect(() => encode({ latitude: 120, longitude: 77 })).toThrow(
      DigipinError
    );
  });

  it("throws for location outside supported territory", () => {
    expect(() => encode({ latitude: 51.5, longitude: -0.1 })).toThrow(
      DigipinError
    );
  });
});
