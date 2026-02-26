import { expect, test } from "@playwright/test";

test("login page loads", async ({ page }) => {

  await page.route("**/api/login", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ token: "mock-token" }),
      });
    });
  
  await page.goto("/login");
  const emailInput=page.getByPlaceholder("Enter Email");

  await expect(emailInput).toBeVisible() 

  const passwordInput=page.getByPlaceholder("Enter Password");

  await expect(passwordInput).toBeVisible() 

  const loginButton= page.getByRole("button",{name:/login/i});
  await expect (loginButton ).toBeVisible()

});

