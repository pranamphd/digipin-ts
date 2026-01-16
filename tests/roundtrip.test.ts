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
import { encode, decode } from "../src/index.js";

const MAX_DECODE_ERROR_DEGREES = 0.0000171661376953125;

describe("DIGIPIN roundtrip", () => {
  it("encode → decode preserves location within tolerance", () => {
    const original = {
      latitude: 28.6139,
      longitude: 77.209,
    };

    const digipin = encode(original);
    const decoded = decode(digipin);

    expect(Math.abs(decoded.latitude - original.latitude)).toBeLessThan(
      MAX_DECODE_ERROR_DEGREES
    );

    expect(Math.abs(decoded.longitude - original.longitude)).toBeLessThan(
      MAX_DECODE_ERROR_DEGREES
    );
  });
});
