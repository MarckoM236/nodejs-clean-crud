function rules() {
  return {
    name: 'required',
    description: 'required',
    created_date: 'required',
    updated_date: 'nullable',
    status: 'nullable'
  };
}

function validateCreation(data) {
  let isValid = true;
  const ruleSet = rules();

  for (const key of Object.keys(ruleSet)) {
    if ((!(key in data) || data[key] == '') && ruleSet[key] === 'required') {
      isValid = false;
    }
  }

  return isValid;
}

function validateUpdate(data) {
  let isValid = true;
  const ruleSet = rules();

  ruleSet['name']='nullable';
  ruleSet['description'] = 'nullable';
  ruleSet['created_date'] = 'nullable';
  ruleSet['updated_date'] = 'required';
  ruleSet['status'] = 'required';

  for (const key of Object.keys(ruleSet)) {
    if ((!(key in data) || data[key] == '') && ruleSet[key] === 'required') {
      isValid = false;
    }
  }

  return isValid;
}

export {validateCreation, validateUpdate} ;