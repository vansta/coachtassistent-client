// import { Store } from '@/store';// path to store file
import ApiService from '@/services/ApiService'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // $store: Store;
    $api: typeof ApiService
  }
}