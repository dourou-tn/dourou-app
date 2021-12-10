function validateEmail(email) {
  if (email === null) {
    return null;
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateForm (obj, rules) {
  var errors = {};
  for (var key in rules) {
    var rule = rules[key];
    var value = obj[key];
    var ruleArray = rule.split('|');
    var ruleName = ruleArray[0];
    if (ruleName.includes(':')) {
      var [ruleName, ruleParams] = ruleName.split(':');
    }

    if (ruleName === 'required' && !value) {
      errors[key] = 'This field is required';
    } else if (ruleName === 'email' && !validateEmail(value)) {
      errors[key] = 'This field must be a valid email';
    } else if (ruleName === 'numeric' && !value.match(/^\d+$/)) {
      errors[key] = 'This field must be a number';
    } else if (ruleName === 'min' && value && value.length < ruleParams) {
      errors[key] = 'This field must be at least ' + ruleParams[0] + ' characters long';
    } else if (ruleName === 'same' && value !== obj[ruleParams]) {
      errors[key] = 'This field must match the ' + ruleParams + ' field';
    }

  }
  return errors;
}




export {
  validateForm
}