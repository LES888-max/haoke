<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <Select></Select>
    <Team></Team>
  </div>
</template>

<script>
import Header from "./Header";
import Banner from "./Banner";
import Select from "./Select";
import Team from "./Team";
export default {
  name: "Home",
  components: {
    Banner,
    Select,
    Team,
    Header,
  },
};
</script>

<style></style>
