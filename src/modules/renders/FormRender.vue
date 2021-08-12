<template>
  <div>
    <h1>Form Render</h1>
    <div class="steps">
      <StepRender v-for="step in this.getSteps" 
         :key="step.order"
         :step=step
         :ref="step.name"
         :validation="$v"
      ></StepRender>
      <input v-model="formData.nome" name="nome" placeholder="nome">
    </div>
  </div>
</template>
<script>
   import StepRender from './StepRender';
   import { ValidationParser } from '../parsers/ValidationParse'; //eslint-disable-line
   /*
   Steps:
     Criar o meu modelo/estrutura de dados com base no meu schema
     Criar o meu modelo/estrutura de validação com base no meu schema
     Renderizar componentes com base no meu schema
     Validar reatividade do modele/estutura de dados gerados gerados do schema
   */

  function parseFormData(rootProperty, models) {
    models.forEach( model => {
      rootProperty[model] = this.$set(rootProperty, model, '');
    })

    return rootProperty;
  } //O que precisa estar valido é o meu modelo
 // function parseValidation() {} //eslint-disable-line A validações validam os dados não o estado dos inputs

  function getModelsFromSchema(schema) {
    let steps = schema.steps;
    let models = [];
    steps.forEach( step => {
      step.fields.forEach( field => {
        models.push(field.model);
      })
    })

    return models;
  }

  function getValidationsFromSchema(schema) {
    let steps = schema.steps;
    let validations = [];
    steps.forEach( step => {
      step.fields.forEach( field => {
        validations.push(field);
      })
    })

    return validations;
  }

   
export default {
  name: 'FormRender',
  components: {
    StepRender
  },
  provide: function () {
    return {
      'formData': this.formData,
      'validation': this.$v.formData
    }
  },
  data: () => {
    return {
      'formData': {},
      'form': {},
      'model': {},
      "teste": 'vali',
      'jsonSchema': {
        "title": "Create Your Profile",
        "type": "profile", //Verificar se realmente precisa deste campo
        "component": "Register", //Atualmente o formulario é uma view, mudar isto ?
        "recaptcha": true,
        "steps": [
          {
            "fields": [
              {
                "order": 1,
                "component": "BaseInput",
                "props": {
                  "default": {
                    "label": "Nome",
                    "name": "nome",
                    "value": null
                  }
                },
                "model": 'nome',
                validation: {
                  nome: ['required']
                }
              },
              {
                "order": 2,
                "component": "BaseInput",
                "props": {
                  "default": {
                    "label": "Email",
                    "name": "email",
                    "value": null
                  }
                },
                "model": 'email',
                validation: {
                  email: ['required']
                }
              }
            ]

          }
        ]
      }
    }
  },

  created() {
    let models = getModelsFromSchema(this.jsonSchema);
    parseFormData.call(this, this.formData, models);
  },
  methods: {
    debug() {
      debugger; //eslint-disable-line
      console.log(this.$v);
    },
    getModel() {
      if (!this.model.nome) {
        this.model.nome = this.$set(this.model, 'nome', "Silvio")
      }

      return this.model
    }
  },

  validations() {
    debugger; //eslint-disable-line
    let validators = ValidationParser(getValidationsFromSchema(this.jsonSchema));
    return {
      formData: validators
    }
  },
  /*
  validations() {
    console.log(this.fields);
    let validators= ValidationParser(this.fields);
    console.log(this.$refs['profile'][0].getValues())
    console.log("Pei")
    console.log(validators);
    console.log("Validators")
    return {
      form: validators
    }
  },
  computed: {
    formTitle() {
      return this.jsonSchema.title;
    },
    fields() {
      let fields = [];
      this.jsonSchema.steps.forEach( (step) => {
        fields = fields.concat(step.fields);
      })
      return fields;
    },
    getSteps() {
       return this.jsonSchema.steps;
    },
    getStep(number) {
      return this.jsonSchema.steps.filter( (step) => {
        step.order === number
      });
    }
  }
  */

 computed: {
   getSteps() {
     return this.jsonSchema.steps;
   }
 }
}
</script>