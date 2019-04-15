<template>
  <div class="layout">
    <header class="header">
      <nav>
        <g-link to="/">
          <g-image alt="Native Logo" src="~/images/ntv__logo--primary.png" width="135" />
        </g-link>
        <g-link class="nav__link" to="/communities">Communities</g-link>
        <g-link class="nav__link" to="/help">Help</g-link>
      </nav>
      <nav>
        <g-link class="nav__link" to="/login">Sign In</g-link>
      </nav>
    </header>
    <slot/>
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
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
