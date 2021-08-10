<template>
   <div>
     <h1>Step {{step.title}}</h1>
     <ul>
       <component v-for="(field, index) in step.fields" 
         :key="index"
         :is="field.component"
         v-model="model[field.model]"
         :model="model"
         v-bind="field.props.default"
       >
         {{ field.order }}
       </component>

          <!-- <input  v-for="(field, index) in step.fields" 
                v-model="model[field.model]"
                :key="index"
                placeholder="teste"
             />-->

     </ul>
   </div>
</template>
<script>
   import BaseInput from '../ui-library/components/BaseInput'
   
   export default {
     name: "StepRender",
     components: {
       BaseInput
     },
     props: {
        step: {
          type: Object,
          required: true
        },
        model: {
          type: Object,
          required: false
        }
      },
      methods: {
        getValues(){
          console.log("getValues from stepRender")
          return "teste";
        }
      }
     }
</script>