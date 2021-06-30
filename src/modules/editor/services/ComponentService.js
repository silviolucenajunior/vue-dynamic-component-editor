export default {
  getAvailableComponentList() {
    return {
      components: [
        {
          name: 'TextField',
          component: 'VTextField',
          placeholder: 'Text',
          props: [
            {
                name: 'label',
                type: 'String',
                label: 'Label',
                component: 'v-text-field',
                value: ''
              }
          ]
        },
        {
          name: 'NumberField',
          component:'VTextField',
          placeholder: 'Number',
          props: [
            {
                name: 'label',
                type: 'String',
                label: 'Label',
                component: 'v-text-field',
                value: ''
            }
          ]
        }
      ]
    }
  },

  getPageDescriptor() {
    return {
      "name": "MyDynamicComponent",
      "content": [{
          "component": {
             "type": "Container",
             "title": "Get Familiar",
             "description": "description",
             "props": {
                "flex": "row",
                "id": "teste"
             },
             "content": [
                 {
                    "component": "TextInput",
                    "order": 0,
                    "uuid": 'ss',
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
       }]
    }
  }
}