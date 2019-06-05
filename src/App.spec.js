import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import { App } from "./App";

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CreateNewUser from "./client/modules/User/containers/NewUserContainer";
import EditUser from "./client/modules/User/components/EditUser";
import UserListContainer from "./client/modules/User/containers/UserListContainer";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const user = [
  {
    id: "567",
    name: "testname1",
    surname: "testsurname1",
    email: "test@test1",
    eventDate: "31.12.2000"
  }
];

const mockStore = configureMockStore();
const store = mockStore({ user });

describe("App", () => {
  it("should render App component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper
      .find(UserListContainer)
      .find(".btn-warning")
      .simulate("click");

    expect(wrapper.find(CreateNewUser).length).to.be.equal(1);
    expect(wrapper.find(EditUser).length).to.be.equal(1);
    expect(wrapper.find(UserListContainer).length).to.be.equal(1);
  });

  it("should unmount child Edit component", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper
      .find(UserListContainer)
      .find(".btn-warning")
      .simulate("click");
    expect(wrapper.find(EditUser).length).to.be.equal(1);
    wrapper
      .find(EditUser)
      .find("button")
      .find(".btn-danger")
      .simulate("click");

    expect(wrapper.find(EditUser).length).to.be.equal(0);
  });
});
