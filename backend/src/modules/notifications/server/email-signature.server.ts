import { readFileSync } from "node:fs";
export const signatureLogo = readFileSync(
  new URL("../../../../assets/aradun-signature-symbol.png", import.meta.url),
).toString("base64");
const signatureText =
  "Best regards,\n\nARADUN Team\nTechnology & Digital Solutions\nEmail: hello@aradun.com\nWhatsApp: +880 1302-601121\nWebsite: https://aradun.com\n\nBuild. Automate. Grow.";
export function escapeEmailHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );
}
export function clientAcknowledgement(
  reference: string,
  type: string,
  clientName?: string,
) {
  const name =
    clientName
      ?.replace(/[\r\n]/g, " ")
      .trim()
      .slice(0, 120) || "there";
  const request =
    type === "contact"
      ? "message"
      : type === "quote"
        ? "project brief"
        : "consultation request";
  const next =
    type === "consultation"
      ? " We'll agree a suitable time with you by email."
      : type === "quote"
        ? " We'll clarify your needs and prepare a proposal for your review."
        : "";
  const paragraphs = [
    `Hi ${name},`,
    `Thank you for getting in touch with ARADUN. We've received your ${request} and look forward to learning more about what you have in mind.`,
    `Your reference: ${reference}`,
    `Our team will review your details and reply to discuss the next step.${next}`,
    "If you'd like to add anything, reply to this email and mention your reference.",
  ];
  const signatureHtml = `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;color:#18232d;font:14px Arial,sans-serif"><tr><td><table role="presentation" cellpadding="0" cellspacing="0"><tr><td><img src="cid:aradun-signature" width="48" height="48" alt="ARADUN symbol" style="display:block;border:0"></td><td style="font-size:25px;font-weight:700;padding-left:2px">ARADUN</td></tr></table><p style="margin:8px 0 20px">Best regards,</p><strong>ARADUN Team</strong><br>Technology &amp; Digital Solutions<br>Email: <a href="mailto:hello@aradun.com">hello@aradun.com</a><br>WhatsApp: <a href="https://wa.me/8801302601121">+880 1302-601121</a><br>Website: <a href="https://aradun.com">https://aradun.com</a><p style="margin-top:16px"><em>Build. Automate. Grow.</em></p></td></tr></table>`;
  return {
    subject: `ARADUN received your ${type} request`,
    text: paragraphs.join("\n\n") + "\n\n" + signatureText,
    html: `<!doctype html><html><body style="margin:24px;color:#202c36;font:15px/1.6 Arial,sans-serif">${paragraphs.map((text) => `<p>${escapeEmailHtml(text)}</p>`).join("")}${signatureHtml}</body></html>`,
    inlineLogo: true,
  };
}
