import Triangle from './../src/triangle.js';

describe('Age Calculator', () => {

  test('should return user input with multiplied result for age on Mercury', () => {
    const planetAge = new Age();
    expect(triangle.side1).toEqual(2);
  });
  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});