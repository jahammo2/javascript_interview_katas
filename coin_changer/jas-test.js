describe("createChange()", function () {
  it("should create nothing if 0 change", function () {
    expect(app.createChange(0)).toEqual([]);
  });

  it("should create 4 quarters if 100 change", function () {
    expect(app.createChange(100)).toEqual([25,25,25,25]);
  });

  it("should create 1 quarter, 2 dimes, 1 penny if 46 change", function () {
    expect(app.createChange(46)).toEqual([25,10,10,1]);
  });

  it("should create 1 quarter, 1 dime, 1 nickel, 1 penny if 41 change", function () {
    expect(app.createChange(41)).toEqual([25,10,5,1]);
  });
});
