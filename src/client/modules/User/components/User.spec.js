import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import { User } from "./User";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NewUser", () => {
  it("should render User component", () => {
    // Given
    const user = {
      id: "213",
      name: "testname",
      surname: "testsurname",
      email: "test@test",
      eventDate: "01.01.2000"
    };
    const wrapper = shallow(<User user={user} />);

    // Then
    expect(wrapper.find("p")).to.have.length(4);
    expect(wrapper.find("h2")).to.have.length(1);
    expect(wrapper.find(".userDetail")).to.have.length(1);
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).to.be.equal("Name: testname");
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).to.be.equal("Surname: testsurname");
    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).to.be.equal("Email: test@test");
    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).to.be.equal("Event Date: 01.01.2000");
  });
});
