<template>
  <div>
    <div class="text-gray-800 bg-white rounded py-10 px-5 container mx-auto mb-10 mt-10 mx-5">
      <h2
        class="font-bold text-lg mb-3"
      >Dourou, site de ventes aux enchères 0% arnaque, 100% garanti et sécurisé.</h2>
      <p >
        Vous cherchez désespérément un produit à prix cassé ? Ca tombe bien, aujourd'hui on vous présente Dourou le site qui va littéralement bouleverser vos habitudes d'achat sur le web. Pourquoi ? Parcequ'il s'agit d'un site d'enchère. Vous achetez des Dourou qui vous permettenet d'acheter des produits qui vous intéressent en un click.
      <p class="mt-2">Les enchères sont un moyen efficace pour obtenir un produit à bas coût tout en s'amusant.</p>
      </p>

      <h2 class="font-bold text-lg mt-3 mb-3">Chez Dourou la satisafaction de nos clients est prioritaire. C'est pourquoi:</h2>
      <p>
        Nous fournissons le maximum d'infmations disponibles concernant le matériel à vendre:
      </p>
      <p>description, fiches techniques, photos</p>
      <p>Notre équipe est à votre écoute par téléphone et par mail.</p>

      <h2  class="font-bold text-lg mb-3 mt-3">Comment participer à une vente aux enchères ?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore mollitia fugit commodi adipisci suscipit aliquid sapiente molestias ipsa, quia doloremque magnam laudantium incidunt esse repellendus possimus dolores architecto! Accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae velit ab suscipit, ipsam, sequi maxime molestias laboriosam numquam similique adipisci expedita labore dolore eaque! Doloribus pariatur nihil autem facere.
      </p>
    </div>

    <div class="px-5 container mx-auto mx-5 text-center mb-10" v-if="!$auth.user">
      <h3 class="text-3xl font-bold text-gray-800">Vous n'avez pas encore de compte Dourou ?</h3>
      <hr class="mb-8 mt-3">
      <nuxt-link
        to="/auth"
        class="bg-orange-500 px-8 py-3 mt-5 font-semibold text-gray-700"
      >
        Créer votre compte Dourou
      </nuxt-link>
    </div>

    <footer class="bg-purple-600">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <DouLogo light />
            <!-- <span class="text-orange-500 text-xl font-bold leading-tight">DOUROU.tn</span> -->

            <p class="max-w-xs mt-4 text-sm text-gray-50">
              {{ $t('footer.resume') }}
            </p>

            <div class="flex mt-8 text-gray-50">
              <a href="" target="_blank" rel="noreferrer" aria-label="Facebook" class="hover:opacity-75 px-2">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a href="" target="_blank" rel="noreferrer" aria-label="Instagram" class="hover:opacity-75 px-2">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a href="" target="_blank" rel="noreferrer" aria-label="Twitter" class="hover:opacity-75 px-2">
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>

            </div>

          </div>

          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p class="font-medium text-orange-500">
                {{ $t('footer.sells') }}
              </p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <DouLink
                  :to="'/auctions/current'"
                  :text="$t('menu.ventesEnCours')"
                  color="white"
                  normal
                />
                <DouLink
                  :to="'/auctions/ended'"
                  :text="$t('menu.ventesTerminees')"
                  color="white"
                  normal
                />
                
              </nav>
            </div>

            <div>
              <p class="font-medium text-orange-500">
                {{ $t('footer.helpfulLinks') }}
              </p>

              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.contact')"
                  color="white"
                  normal
                />
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.faq')"
                  color="white"
                  normal
                />
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.chat')"
                  color="white"
                  normal
                />
              </nav>
            </div>

            <div>
              <p class="font-medium text-orange-500">
                {{ $t('footer.legal') }}
              </p>

              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.privacy')"
                  color="white"
                  normal
                />
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.terms')"
                  color="white"
                  normal
                />
                <DouLink
                  :to="'/contact'"
                  :text="$t('menu.accessibility')"
                  color="white"
                  normal
                />
              </nav>
            </div>
          </div>
        </div>

        <p class="mt-12 text-xs text-white">
          &copy; 2021 Dourou.tn
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import DouLink from 'dourou-components/DouLink/index.vue';
  import DouLogo from 'dourou-components/DouLogo/index.vue';
  export default {
    name: 'HomeFooter',
    components: { DouLink, DouLogo }
  }
</script>
