<script>
   import draggable from 'vuedraggable'
   export default {
      components: {
         draggable
      }
   }
</script>
<template>
   <div>
      <h1>Component Editor</h1>
      <draggable class="componentEditor" group="dynamicComponents"></draggable>
   </div>
</template>
<style scoped>
   .componentEditor {
      border: red 1px solid;
      min-width: 200px;
      min-height: 100px;
      width: 200px;
      height: 200px;
   }
</style>