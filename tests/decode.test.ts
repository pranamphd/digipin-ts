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
import { decode } from "../src/decode.js";
import { DigipinError } from "../src/errors.js";

describe("decode", () => {
  it("decodes a valid DIGIPIN into a location", () => {
    const location = decode("39J49LL8T4");

    expect(location.latitude).toBeTypeOf("number");
    expect(location.longitude).toBeTypeOf("number");
  });

  it("accepts lowercase and separated DIGIPIN", () => {
    const location = decode("39j-49l-l8t4");
    expect(location.latitude).toBeTypeOf("number");
  });

  it("rejects invalid DIGIPIN", () => {
    expect(() => decode("4H6-DF4-85FQ")).toThrow(DigipinError);
  });
});
