export default  {
  //TO be Implemented
  //getComponentPlaceholder(componentDescriptor) {
  //  ...
  //},

  getComponent(componentDescriptor){
    let props = {}
    componentDescriptor.props.forEach( (prop) => {
      props[prop['name']] = prop['value']
    })

    return {
      component: componentDescriptor.component,
      props: props
    }
  }
}
