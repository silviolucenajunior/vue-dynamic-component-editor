import * as Validators from 'vuelidate/lib/validators'
import { required } from 'vuelidate/lib/validators'


function getValidator(descriptor) {

  console.log(required);

  if (typeof descriptor === "string") {
    let value = Validators[descriptor];
    let returnValue = {};
    returnValue[descriptor] = value;
    return returnValue;
  } else if (descriptor instanceof Object && Object.keys(descriptor).length === 1) {
    return Validators[ Object.keys()[0] ](descriptor[Object.keys()[0]]);
  }

  return null
}

function getValidators(validations) {
  let validators = {};
  validations.forEach( (rule) => {
    let validation = getValidator(rule)
    validators = Object.assign(validators, validation);
  })

  return validators;
}

/*
{
          "order": 1,
          "component": "BaseInput",
          "props": {
            "email": {
              "label": "Email",
              "value": null
            }
          },
          "validation": {
            "email": ["required", "email"]
          }
        }
*/
export const ValidationParser = function VuelidationParser( fieldsDescriptor ) {
  let validations = {};
  debugger; //eslint-disable-line
  fieldsDescriptor.forEach( (fieldDescriptor) => {
    if (fieldDescriptor.validation) {
      for ( let rule in fieldDescriptor.validation) {
        validations[rule] = getValidators(fieldDescriptor.validation[rule] );
      }
    }
  })

  return validations;

}