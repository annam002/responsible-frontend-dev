<template>
<div class="footer">
  <a class="small-gap footer-link" href="/imprint">Imprint</a>
  <a class="footer-link" href="/terms">Terms & Conditions</a>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
  display: flex;
  padding: 1rem;
  background-color: darkblue;
  justify-content: center;
}
.footer-link {
  color: white;
  text-decoration: underline;
  padding: 0 0.5rem;
}

.footer-link:hover, .footer-link:focus {
  color: white;
  text-decoration: underline;
  border: 1px solid white;

}

</style>
