import { defineConfig, devices } from "@playwright/test";
import { MOCK_SHEET_SECRET, MOCK_SHEET_URL } from "./tests/e2e/support/mock-sheet";

const PORT = 3300;
const baseURL = `http://localhost:${PORT}`;

/**
 * End-to-end tests against a production build.
 * - Uses the locally installed Google Chrome (no browser download needed).
 * - Enquiries are delivered to a local mock of the Google Sheets Apps Script (tests/e2e/support/mock-sheet.ts),
 *   so form submissions are verified end-to-end without touching real sheets or sending email.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  // Each worker runs a full Chrome next to the production server — 2 keeps an average machine responsive
  workers: 2,
  timeout: 90_000,
  expect: { timeout: 15_000 },
  reporter: [["list"], ["html", { open: "never" }]],
  globalSetup: "./tests/e2e/support/global-setup.ts",
  use: {
    baseURL,
    trace: "retain-on-failure",
    navigationTimeout: 30_000,
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome", viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"], channel: "chrome" },
    },
  ],
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: baseURL,
    timeout: 300_000,
    reuseExistingServer: false,
    stdout: "ignore",
    stderr: "pipe",
    env: {
      GOOGLE_SHEETS_WEBHOOK_URL: MOCK_SHEET_URL,
      GOOGLE_SHEETS_SECRET: MOCK_SHEET_SECRET,
      ENQUIRY_RATE_LIMIT: "1000",
      // Allows the local mock sheet URL (http://127.0.0.1) in the production build used by tests
      E2E_ALLOW_LOCAL_SHEET: "1",
      // Never send real email from tests
      RESEND_API_KEY: "",
      ENQUIRY_FROM_EMAIL: "",
    },
  },
});
