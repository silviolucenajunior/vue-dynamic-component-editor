<script>
   export default {
     props: {
       component: {
         type: Object,
         required: true
       }
     }
   }
</script>
<template>
   <div>
     {{ component.placeholder }}
   </div>
</template>