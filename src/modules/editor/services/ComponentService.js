export default {
  getAvailableComponentList() {
    return {
      components: [
        {
          name: 'TextField',
          placeholder: 'Text',
          props: [
            {
              label: String
            }
          ]
        },
        {
          name: 'NumberField',
          placeholder: 'Number',
          props: [
            {
              'label': String
            }
          ]
        }
      ]
    }
  },

  getPageDescriptor() {
    return {
      "name": "MyDynamicComponent",
      "content": {
          "component": {
             "type": "Container",
             "props": {
                "flex": "row"
             },
             "content": [
                 {
                    "component": "TextInput",
                    "props": {
                       "label": "Cliente"
                    }
                 },
                 {
                   "component": "NumberInput",
                   "props": {
                      "label": "Total"
                   }
                 }
             ]
          }
       }
    }
  }
}