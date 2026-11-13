import { afterEach, it, expect, vi } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import {
  StaffAccessBoundary,
  useStaffAccess,
} from "@/modules/identity/components/staff-access-boundary";
import { ContentShell } from "@/components/layout/content-shell";
vi.mock("next/navigation", () => ({ usePathname: () => "/dashboard/account" }));
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
const actor = (role = "admin") => ({
  displayName: "SAMPLE Staff",
  roles: [role],
  areas: role === "sales" ? ["staff"] : ["staff", "content"],
});
const response = (body: unknown) => ({
  ok: true,
  status: 200,
  json: async () => body,
});
it("does not mount private children while loading or denied and keeps a usable main/skip target", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 401 }));
  render(
    <StaffAccessBoundary apiBaseUrl="http://127.0.0.1:4000">
      {() => <p>SAMPLE PRIVATE BODY</p>}
    </StaffAccessBoundary>,
  );
  expect(screen.queryByText("SAMPLE PRIVATE BODY")).toBeNull();
  await screen.findByRole("alert");
  expect(screen.queryByText("SAMPLE PRIVATE BODY")).toBeNull();
  expect(screen.getByRole("main").id).toBe("main-content");
  expect(document.activeElement).toBe(screen.getByRole("alert"));
});
it("Content shell admits current Editor but denies Sales without a synthetic content page", async () => {
  const fetchMock = vi.fn().mockResolvedValueOnce(response(actor("editor")));
  vi.stubGlobal("fetch", fetchMock);
  const view = render(
    <ContentShell apiBaseUrl="http://127.0.0.1:4000">
      <p>SAMPLE CONTENT SLOT</p>
    </ContentShell>,
  );
  await screen.findByText("SAMPLE CONTENT SLOT");
  expect(fetchMock.mock.calls[0]![0]).toContain("area=content");
  view.unmount();
  fetchMock.mockResolvedValue({ ok: false, status: 403 });
  render(
    <ContentShell apiBaseUrl="http://127.0.0.1:4000">
      <p>SAMPLE CONTENT SLOT</p>
    </ContentShell>,
  );
  await screen.findByRole("alert");
  expect(screen.queryByText("SAMPLE CONTENT SLOT")).toBeNull();
  expect(screen.queryByRole("main")).toBeNull();
});
function Deny() {
  const access = useStaffAccess();
  return <button onClick={access.onDenied}>SAMPLE deny access</button>;
}
it("a late revalidation cannot restore private shell after a denied child operation", async () => {
  let complete!: (value: unknown) => void;
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce(response(actor()))
    .mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          complete = resolve;
        }),
    );
  vi.stubGlobal("fetch", fetchMock);
  render(
    <StaffAccessBoundary apiBaseUrl="http://127.0.0.1:4000">
      {() => (
        <>
          <p>SAMPLE PRIVATE BODY</p>
          <Deny />
        </>
      )}
    </StaffAccessBoundary>,
  );
  await screen.findByText("SAMPLE PRIVATE BODY");
  fireEvent(window, new Event("focus"));
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
  fireEvent.click(screen.getByRole("button", { name: "SAMPLE deny access" }));
  await screen.findByRole("alert");
  await act(async () => {
    complete(response(actor()));
  });
  expect(screen.queryByText("SAMPLE PRIVATE BODY")).toBeNull();
});
it("rejects malformed actor data and recovers through an explicit retry", async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce(
      response({ ...actor(), providerSecret: "SAMPLE_INVALID_EXTRA" }),
    )
    .mockResolvedValueOnce(response(actor("sales")));
  vi.stubGlobal("fetch", fetchMock);
  render(
    <StaffAccessBoundary apiBaseUrl="http://127.0.0.1:4000">
      {(value) => <p>{value.displayName}</p>}
    </StaffAccessBoundary>,
  );
  await screen.findByRole("alert");
  expect(document.body.textContent).not.toContain("SAMPLE_INVALID_EXTRA");
  fireEvent.click(screen.getByRole("button", { name: "Try again" }));
  await screen.findByText("SAMPLE Staff");
});
