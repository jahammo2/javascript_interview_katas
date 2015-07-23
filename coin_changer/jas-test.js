describe("createChange()", function () {
  it("creates no change if change is 0 cents", function () {
    expect(app.createChange(0)).toEqual([]);
  });

  it("creates 4 quarters if change is 100 cents", function () {
    expect(app.createChange(100)).toEqual([25,25,25,25]);
  });

  it("creates 1 quarter, 2 dimes, 1 penny if change is 46 cents", function () {
    expect(app.createChange(46)).toEqual([25,10,10,1]);
  });

  it("creates 1 quarter, 1 dime, 1 nickel, 1 penny if change is 41 cents", function () {
    expect(app.createChange(41)).toEqual([25,10,5,1]);
  });

  it("creates 1 nickel and 1 penny if change is 6 cents", function () {
    expect(app.createChange(41)).toEqual([5,1]);
  });

  it("creates 7 quarters and 1 nickel if change is 180 cents", function () {
    expect(app.createChange(41)).toEqual([25,25,25,25,25,25,25,5]);
  });
});
