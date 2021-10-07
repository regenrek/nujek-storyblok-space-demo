import Vue from 'vue'
import Nujek from '~nujek-ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      variants: {
        'with-yellow-bg': {
          wrapper: 'flex justify-center bg-yellow-200 border-t border-yellow-400 items-center',
          container: 'max-w-2xl w-full mx-auto px-10'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)
