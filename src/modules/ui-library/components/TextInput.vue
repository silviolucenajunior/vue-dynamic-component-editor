<script>
   export default {
     props: {
       label: {
         type: String,
         required: true
       }
     }
   }
</script>
<template>
  <v-text-field type="text" :label="label"></v-text-field>
</template>