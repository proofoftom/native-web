<template>
  <div class="layout">
    <header class="header">
      <nav>
        <g-link to="/">
          <g-image alt="Native Logo" class="logo" src="~/images/ntv__logo--horizontal.png" width="150" fit="inside" quality="100" />
        </g-link>
        <g-link class="nav__link" to="/communities">Communities</g-link>
        <g-link class="nav__link" to="/help">Help</g-link>
      </nav>
      <nav>
        <g-link class="nav__link" to="/login">Sign In</g-link>
      </nav>
    </header>
    <div class="inner">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 80px;
}

nav {
  display: flex;
  align-items: center;
}

.nav__link {
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none;
  font-weight: bold;
  color: darkslategray;
  margin-left: 40px;
}

.inner {
  max-width: 760px;
  align-self: center;
}
</style>
