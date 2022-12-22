<template>
  <section class="w-full border-b border-solid border-brand-gray-1">
    <article class="mx-auto my-16 text-center">
      <slot name="title">sample title</slot>
      <slot name="subtitle">sample subtitle</slot>
    </article>
  </section>
</template>

<script>
export default {
  name: "HeaderContainer",
};
</script>
