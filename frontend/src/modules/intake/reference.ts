/** Read-only receipt formats. A reference alone is never a receipt or access grant. */
export const inquiryReferencePattern =
  /^(?:ARQ-[0-9]{4}-[a-f0-9]{24}|aradun-(?:[wadcsmgv]{1,8}-)?[0-9]{3,16}|aradunq-(?:[wmvgIadcs]{1,9}-)?[0-9]{3,16})$/;
