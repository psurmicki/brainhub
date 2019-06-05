import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import { NewUser } from "./NewUser";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("NewUser", () => {
  it("should render NewUser component", () => {
    // Given
    const wrapper = shallow(<NewUser />);

    // Then
    expect(wrapper.find("div")).to.have.length(6);
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  it("should change state on input name change", () => {
    // Given
    const wrapper = shallow(<NewUser />);
    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });

    // when
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "testInputName" } });

    // Then
    expect(wrapper.state().name).to.be.equal("testInputName");
  });

  it("should change state on input surname change", () => {
    const wrapper = shallow(<NewUser />);
    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });

    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "surname", value: "testInputSurname" }
      });

    expect(wrapper.state().surname).to.be.equal("testInputSurname");
  });

  it("should change state on input email change", () => {
    const wrapper = shallow(<NewUser />);
    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });

    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        target: { name: "email", value: "testInput@email" }
      });

    expect(wrapper.state().email).to.include("@");
  });

  it("should change state on input eventDate", () => {
    const wrapper = shallow(<NewUser />);
    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });

    wrapper
      .find("input")
      .at(3)
      .simulate("change", {
        target: { name: "eventDate", value: "01.06.2019" }
      });
    expect(wrapper.state().eventDate).to.be.equal("01.06.2019");
  });

  it("should clear state on reset", () => {
    // Given
    const initialState = {
      id: "testId",
      name: "test",
      surname: "test",
      email: "test@test.pl",
      eventDate: "01.01.2000"
    };
    const wrapper = shallow(<NewUser />);
    wrapper.setState(initialState);
    expect(wrapper.state()).to.be.deep.equal(initialState);

    // when
    wrapper
      .find("button")
      .find(".btn-warning")
      .simulate("click");

    // Then
    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });
  });
});
