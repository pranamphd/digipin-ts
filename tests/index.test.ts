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
import * as digipin from "../src/index.js";

describe("public API surface", () => {
  it("exports encode and decode", () => {
    expect(digipin.encode).toBeTypeOf("function");
    expect(digipin.decode).toBeTypeOf("function");
  });
});
