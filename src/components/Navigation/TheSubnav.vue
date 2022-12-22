<template>
  <section
    class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white"
  >
    <section class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage" class="flex">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <p><span class="text-brand-green-1">2180</span> jobs matched</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "TheSubnav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
