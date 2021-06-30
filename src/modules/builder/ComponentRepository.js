let components = [];

export default {
  saveForm(form) {
    components = form;
  },
  loadForm(){
    console.log(components)
    return components.splice(0);
  }
}