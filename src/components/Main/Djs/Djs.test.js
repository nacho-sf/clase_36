import React from "react";
import { shallow } from "enzyme";
import Djs from "./Djs";

describe("Djs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Djs />);
    expect(wrapper).toMatchSnapshot();
  });
});
