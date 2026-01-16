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
import { normalize } from "../src/normalize.js";

describe("normalize", () => {
  it("removes separators and uppercases characters", () => {
    expect(normalize("39j-49l-l8t4")).toBe("39J49LL8T4");
  });

  it("does not modify already normalized DIGIPIN", () => {
    expect(normalize("39J49LL8T4")).toBe("39J49LL8T4");
  });

  it("keeps non-separator characters unchanged except case", () => {
    expect(normalize("a-b-c")).toBe("ABC");
  });
});
