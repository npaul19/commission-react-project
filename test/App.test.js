it("renders without crashing", () => {
  shallow(<App />);
});
it("renders Welcome text", () => {
  const wrapper = shallow(<App />);
  const welcome = "Learn React From Google.com";
  expect(wrapper.contains(welcome)).toEqual(true);
});
