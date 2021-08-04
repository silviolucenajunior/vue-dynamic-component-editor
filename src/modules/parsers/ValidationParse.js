import * as Validators from 'vuelidate/lib/validators'

function getValidationRule(field, rule) {
  return {
    field: {
      rule
    }
  }
}

function getValidator(descriptor) {
  if (descriptor instanceof string) {
    return Validators[descriptor];
  } else if (descriptor instanceof Object && Object.keys(descriptor).length === 1) {
    return Validators[ Object.keys()[0] ](descriptor[Object.keys()[0]]);
  }

  return null
}

function getValidations(field, validationDescriptor){
   return {
     field: getRoles(validationDescriptor)
   }
}

export const ValidationParser = function VuelidationParser( fieldsDescriptor ) {
  let validations = {};
  fieldsDescriptor.forEach( (descriptor) => {
    let validator = getValidator(descriptor);
    if (validator) {
      validations = Object.assign(validations, validator);
    }
  })

  return validations;

}