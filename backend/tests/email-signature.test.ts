import { expect, it } from "vitest";
import {
  clientAcknowledgement,
  signatureLogo,
} from "../src/modules/notifications/server/email-signature.server.js";
it("renders the owner signature with matched contact links, inline logo and plain-text fallback", () => {
  const value = clientAcknowledgement(
    "aradunq-wIa-001",
    "quote",
    "<img src=x onerror=alert(1)>",
  );
  expect(value.html).toContain("&lt;img");
  expect(value.html).not.toContain("<img src=x");
  expect(value.html).toContain('src="cid:aradun-signature"');
  expect(value.html).toContain('href="mailto:hello@aradun.com"');
  expect(value.html).toContain('href="https://wa.me/8801302601121"');
  expect(value.text).toContain("ARADUN Team");
  expect(value.text).toContain("WhatsApp: +880 1302-601121");
  expect(value.text).toContain("aradunq-wIa-001");
  expect(value.text).not.toContain("binding quote or payment confirmation");
  expect(Buffer.from(signatureLogo, "base64").subarray(1, 4).toString()).toBe(
    "PNG",
  );
});
