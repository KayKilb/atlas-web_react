import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  // Test that Notifications renders without crashing
  test("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders three list items
  test("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });

  // Verify that Notifications renders the text "Here is the list of notifications"
  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains("Here is the list of notifications")).toBe(true);
  });
});
