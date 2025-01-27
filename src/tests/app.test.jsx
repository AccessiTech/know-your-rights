import App from "../App/App";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").exists()).toBe(true);
  });
});