<template>
   <div>
      <input :name="name" v-model="model[name]" :placeholder="placeholder" />

      <h1 v-if="hasError2()">Error</h1>
   </div>
</template>
<script>
   export default{
     name: 'BaseInput',
     inject: 
     {
       validation: {default: {}}
     },
     data: function () {
       return {
         'value': {},
       }
     },
     props: {
       name: {
         required: true
       },
       placeholder: {
         default: "Placeholder"
       },
       model: {
         required: true,
         type: Object
       },
       hasError: {
         type: Boolean,
         default: false
       }
     },
     methods: {
       hasError2() {
         console.log("----");
         console.log(this.validation);
         if (this.validation[this.$props.name].$invalid) {
           return true;
         }
         return false;
       }
     }

   }
</script>