import Validator from '../helpers/Validator';

describe('Validator Object is correctly imported and used', () => {
  expect(Validator).toBeDefined();
  expect(Validator.isEmail).toBeDefined();

  test('Validator.isSet', () => {
    expect(Validator.isSet).toBeDefined();
    expect(typeof Validator.isSet).toBe('function');

    expect(Validator.isSet(null)).toBe(false);
    expect(Validator.isSet(undefined)).toBe(false);
    expect(Validator.isSet('')).toBe(false);
    expect(Validator.isSet(' ')).toBe(false);
    expect(Validator.isSet('true')).toBe(true);
    
    expect(Validator.isSet(0)).toBe(false); // is it what we want?
    expect(Validator.isSet('false')).toBe(true); // is it what we want ?
    expect(Validator.isSet('0')).toBe(true);
    expect(Validator.isSet(1)).toBe(true);
    expect(Validator.isSet('a')).toBe(true);
    expect(Validator.isSet('b')).toBe(true);
  });

  test('Validator.isMin', () => {
    expect(Validator.isMin).toBeDefined();
    expect(typeof Validator.isMin).toBe('function');
    expect(Validator.isMin(1, 2)).toBe(false);
    expect(Validator.isMin(2, 2)).toBe(true);
    expect(Validator.isMin(2, 1)).toBe(true);
    expect(Validator.isMin('xyz', 3)).toBe(false);
  });

  test('Validator.isMax', () => {
    expect(Validator.isMax).toBeDefined();
    expect(typeof Validator.isMax).toBe('function');
    expect(Validator.isMax(1, 2)).toBe(true);
    expect(Validator.isMax(2, 2)).toBe(true);
    expect(Validator.isMax(2, 1)).toBe(false);
    expect(Validator.isMax('xyz', 3)).toBe(false);
  });

  test('Validator.isSame', () => {
    expect(Validator.isSame).toBeDefined();
    expect(typeof Validator.isSame).toBe('function');
    expect(Validator.isSame('xyz', 'xyz')).toBe(true);
    expect(Validator.isSame('xyz', 'abc')).toBe(false);
    expect(Validator.isSame('1', '1')).toBe(true);
    expect(Validator.isSame('1', 1)).toBe(false);
    expect(Validator.isSame('', 'xyz')).toBe(false);
    // expect(Validator.isSame('', '')).toBe(true); TODO: more work on this!
  });

  // TODO: WORK more on this !!!
  // test('Validator.isNumeric', () => {
  //   expect(Validator.isNumeric).toBeDefined();
  //   expect(typeof Validator.isNumeric).toBe('function');
  //   expect(Validator.isNumeric('1')).toBe(true);
  //   // expect(Validator.isNumeric('1.1')).toBe(true); TODO: Add float support
  //   // expect(Validator.isNumeric('1.1.1')).toBe(false); TODO: Add float support
  //   expect(Validator.isNumeric('')).toBe(false);
  //   expect(Validator.isNumeric(' ')).toBe(false);
  //   expect(Validator.isNumeric('abc')).toBe(false);
  //   expect(Validator.isNumeric(1)).toBe(true);
  //   expect(Validator.isNumeric(0)).toBe(true);
  //   expect(Validator.isNumeric(123)).toBe(true);
  // });

  test('Validator.isEmail', () => {
    expect(Validator.isEmail).toBeDefined();
    expect(typeof Validator.isEmail).toBe('function');
    expect(Validator.isEmail('jrb.youssef@gmail.com')).toBe(true);
    expect(Validator.isEmail('abc')).toBe(false);
    expect(Validator.isEmail('abc@')).toBe(false);
    expect(Validator.isEmail('abc@abc')).toBe(false);
    // expect(Validator.isEmail('')).toBe(false); TODO: Add empty string support
  });
  

  test('ValidateInputs', () => {
    expect(Validator.validateInputs).toBeDefined();
    expect(typeof Validator.validateInputs).toBe('function');
    expect(Validator.validateInputs({}, '')).toMatchObject({});

    expect(
      Validator.validateInputs({ email: 'abc' }, { email: 'email' })
      .hasOwnProperty('email')
    ).toBe(true);

    expect(
      Validator.validateInputs({ email: 'abc@email.com' }, { email: 'email' })
    ).toMatchObject({});
  })
});

