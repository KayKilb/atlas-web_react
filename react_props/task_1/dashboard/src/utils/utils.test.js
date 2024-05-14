import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
import { expect } from '@testing-library/jest-dom';

describe("Utility Functions", () => {
  // Test getFullYear function
  test("getFullYear function returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  // Test getFooterCopy function for index page
  test("getFooterCopy function returns correct text for index page", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  // Test getFooterCopy function for non-index page
  test("getFooterCopy function returns correct text for non-index page", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  // Test getLatestNotification function
  test("getLatestNotification function returns the correct notification", () => {
    const expectedNotification =
      "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toEqual(expectedNotification);
  });
});
