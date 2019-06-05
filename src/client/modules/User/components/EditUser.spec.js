import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import { EditUser } from "./EditUser";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("EditUser", () => {
  it("should render EditUser component", () => {
    // Given
    const user = [
      {
        id: "1",
        name: "testName1",
        surname: "surname1",
        email: "email1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "testName2",
        surname: "surname2",
        email: "email2",
        eventDate: "eventDate2"
      }
    ];
    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    // Then
    expect(wrapper.find("input")).to.have.length(4);
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).to.be.equal("testName1");
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  it("should change state on input name change", () => {
    // Given
    const user = [
      {
        id: "1",
        name: "testName1",
        surname: "surname1",
        email: "email1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "testName2",
        surname: "surname2",
        email: "email2",
        eventDate: "eventDate2"
      }
    ];
    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    // When
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "name", value: "testInputName" } });

    // Then
    expect(wrapper.find("input")).to.have.length(4);
    expect(
      wrapper
        .find("input")
        .at(0)
        .props().value
    ).to.be.equal("testInputName");
    expect(wrapper.state().name).to.be.equal("testInputName");
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  // TODO:  test other buttons like in addUser
  it("should change state on input surname change", () => {
    const user = [
      {
        id: "1",
        name: "name1",
        surname: "testSurname1",
        email: "email1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "name2",
        surname: "testSurname2",
        email: "email2",
        eventDate: "eventDate2"
      }
    ];

    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "surname", value: "testInputSurname" }
      });

    expect(wrapper.find("input")).to.have.length(4);

    expect(wrapper.find({ name: "surname" }).props().value).to.be.equal(
      "testInputSurname"
    );
    expect(wrapper.state().surname).to.be.equal("testInputSurname");
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  it("should change state on input email change", () => {
    const user = [
      {
        id: "1",
        name: "name1",
        surname: "surname1",
        email: "testEmail@1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "name2",
        surname: "surname2",
        email: "testEmail@2",
        eventDate: "eventDate2"
      }
    ];

    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    wrapper
      .find("input")
      .at(2)
      .simulate("change", {
        target: { name: "email", value: "testInputEmail@" }
      });

    expect(wrapper.find("input")).to.have.length(4);

    expect(wrapper.find({ name: "email" }).props().value).to.be.equal(
      "testInputEmail@"
    );
    expect(wrapper.state().email).to.include("@");
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  it("should change state on input eventDate change", () => {
    // Given
    const user = [
      {
        id: "1",
        name: "testName1",
        surname: "surname1",
        email: "email1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "testName2",
        surname: "surname2",
        email: "email2",
        eventDate: "eventDate2"
      }
    ];
    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    // When
    wrapper
      .find("input")
      .at(3)
      .simulate("change", {
        target: { name: "eventDate", value: "testInputDate" }
      });

    // Then
    expect(wrapper.find("input")).to.have.length(4);
    expect(
      wrapper
        .find("input")
        .at(3)
        .props().value
    ).to.be.equal("testInputDate");
    expect(wrapper.state().eventDate).to.be.equal("testInputDate");
    expect(wrapper.find("form")).to.have.length(1);
    expect(wrapper.find(".form-control")).to.have.length(4);
  });

  it("should clear state on click clean btn", () => {
    const user = [
      {
        id: "1",
        name: "testName1",
        surname: "surname1",
        email: "email1",
        eventDate: "eventDate1"
      },
      {
        id: "2",
        name: "testName2",
        surname: "surname2",
        email: "email2",
        eventDate: "eventDate2"
      }
    ];
    const wrapper = shallow(<EditUser editorId="1" user={user} />);
    expect(wrapper.state()).to.deep.equal(user[0]);

    wrapper
      .find("button")
      .find(".btn-warning")
      .at(0)
      .simulate("click");

    expect(wrapper.state()).to.be.deep.equal({
      id: "",
      name: "",
      surname: "",
      email: "",
      eventDate: ""
    });
  });
});
