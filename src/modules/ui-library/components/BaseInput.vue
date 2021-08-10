<template>
   <input :name="name" v-model="model[name]" :placeholder="placeholder" />
</template>
<script>
   export default{
     name: 'BaseInput',
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
       }
     }

   }
</script>