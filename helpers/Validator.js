const TEXTS = {
  FIELD_REQUIRED: 'This field is required',
  FIELD_EMAIL: 'This field must be a valid email',
  FIELD_NUMERIC: 'This field must be a number',
  FIELD_MIN: 'This field must be at least {0} characters long',
  FIELD_SAME: 'This field must match the {0} field'
};

const isSet = (value) => (value ? String(value).replaceAll(' ', '') : value) ? true : false;

// TODO: for isMin() & isMax() maybe if its a string we should try with the lenght
const isMin = (value, min) => value && value >= min;
const isMax = (value, max) => value && value <= max;

const isSame = (value, otherValue) => !!value && value === otherValue; // TODO: need more work on this check test isSame('', '')
const isNumeric = (value) => !!value && Number(value) && (value.toString().match(/^\d+$/) !== null); // TODO: Add float support 
const isEmail = (email) => email && (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null);

/**
 * For instance we have only: required, email, numeric, min and same
 * @param {Object} obj object to validate
 * @param {String} rules string with rules
 * @returns {Object} errors
 */
const validateInputs = (obj, rules) => {
  var errors = {};
  for (var key in rules) {
    var rule = rules[key], value = obj[key];
    var ruleArray = rule.split('|');
    var ruleName = ruleArray[0];
    if (ruleName.includes(':')) {
      var [ruleName, ruleParams] = ruleName.split(':');
    }

    if (ruleName === 'required' && !isSet(value)) {
      errors[key] = TEXTS.FIELD_REQUIRED;
    } else if (ruleName === 'email' && !isEmail(value)) {
      errors[key] = TEXTS.FIELD_EMAIL;
    } else if (ruleName === 'numeric' && !isNumeric(value)) {
      errors[key] = TEXTS.FIELD_NUMERIC;
    } else if (ruleName === 'min' && !isMin(value)) {
      errors[key] = TEXTS.FIELD_MIN.replace('{0}', ruleParams[0]);
    } else if (ruleName === 'same' && !isSame(value, obj[ruleParams])) {
      errors[key] = TEXTS.FIELD_SAME.replace('{0}', ruleParams);
    }

  }

  return errors;
}



module.exports = {
  isSet,
  isMin,
  isMax,
  isSame,
  isNumeric,
  isEmail,
  validateInputs
}