# Inter self-hosted font provenance

Retrieved 2026-11-08 for approved Phase 1 English UI. One normal Latin variable WOFF2, weight range 400-800; **48,256 bytes**. Original binary preserved unchanged. SHA-256: `3100e775e8616cd2611beecfa23a4263d7037586789b43f035236a2e6fbd4c62`.

- Official [Google Fonts CSS request](https://fonts.googleapis.com/css2?family=Inter:wght@400..800&display=swap), modern browser response, Latin subset.
- Official [font binary](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2).
- [Upstream SIL Open Font License](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt), preserved locally as OFL-Inter.txt. Distribution follows that license; no modified font or ownership claim.

Next's local font loader preloads one hashed copy, with swap and Arial metric-adjusted fallback. No third-party font CSS or font request at runtime. Public source binary and Next hashed output do not imply two page transfers; browser tests measure one 48,256-byte WOFF2 response. No italic or unused second family. Additional language subsets are not introduced.
