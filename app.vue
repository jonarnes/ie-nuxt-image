<template>
  <div>
 <main>
    <!-- https://image.nuxtjs.org/components/nuxt-picture -->
    <!-- https://image.nuxtjs.org/components/nuxt-img -->
    <figure>
      <nuxt-img
        provider="imageengine"
        src="/cld-assets/images/imageengine.png"
        width="650"
        height="500"
        sizes="xs:200px md:500px lg:1024"
      />
    </figure>

    <figure>
      <nuxt-img
      provider="imageengine"
      src="https://images.unsplash.com/photo-1644962986863-d075ee548966?w=1000&q=80"
      sizes="xs:200px md:500px lg:1024px"
      />
    </figure>
  </main>  </div>
</template>

