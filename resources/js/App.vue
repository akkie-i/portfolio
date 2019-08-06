<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <div class="container">
        <RouterView />
        <About />
        <Service />
        <Work />
        <Contact />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

export default {
  
  components: {
    Header,
    Footer,
    About,
    Service,
    Work,
    Contact
  }
}
</script>