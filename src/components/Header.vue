<template>
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">ROCKIES GAMEDAY</a>
  </li>
</ul>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
.nav {
    background-color: black;
    height: 65px;
    display: flex;
    align-items: center;
}

a {
    color: white;
}

a:hover {
    color: white;
    background-color: rgb(20, 20, 20);
}

</style>