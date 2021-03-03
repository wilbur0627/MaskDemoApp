<template>
  <div class="aside-menu">
    <div class="wraps">
      <label>
        縣市：<select v-model="currCity" :disabled="ignore">
          <option v-for="city of getCityList" :key="city" :value="city">
            {{ city }}
          </option>
        </select>
      </label>
      <label>
        行政區：<select v-model="currDistrict" :disabled="ignore">
          <option
            v-for="district of getDistrictList"
            :key="district.id"
            :value="district.name"
          >
            {{ district.name }}
          </option>
        </select>
      </label>
    </div>
    <div class="wraps">
      <input v-model="ignore" type="checkbox" class="ignoreAll" /><span
        style="font-size: 0.8rem"
        >全台搜尋</span
      >
      <label>
        <i class="fas fa-search-location"></i> 關鍵字搜尋：
        <input v-model="keywords" type="text" placeholder="請輸入關鍵字" />
      </label>
    </div>

    <ul class="store-lists">
      <li class="store-info wraps" v-for="store of stores" :key="store.id" @click="$emit('triggerMarkerPopup', store.id)">
        <h1>{{ store.name }}</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: {{ store.mask_adult }} 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: {{ store.mask_child }} 個</span>
        </div>

        <div class="mask-info">最後更新時間: {{ store.updated }}</div>

        <button class="btn-store-detail" @click="openInfoBox(store)">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "AsideMenu",
  mounted() {
  },
  computed: {
    ...mapGetters([
      "getCurrCity",
      "getCurrDistrict",
      "getCityList",
      "getDistrictList",
      "filteredStores",
      "getKeywords",
      "isIgnore",
      "getShowModal",
      "getCurrStore"
    ]),
    currCity: {
      get() {
        return this.getCurrCity;
      },
      set(value) {
        this.fetchCurrCity(value);
      },
    },
    currDistrict: {
      get() {
        return this.getCurrDistrict;
      },
      set(value) {
        this.fetchCurrDistrict(value);
      },
    },
    stores: {
      get() {
        return this.filteredStores;
      },
    },
    keywords: {
      get() {
        return this.getKeywords;
      },
      set(value) {
        this.SET_KEYWORDS(value);
      },
    },
    ignore: {
      get() {
        return this.isIgnore;
      },
      set(value) {
        this.SET_IGNORE(value);
      },
    },
    showModal: {
      get() {
        return this.getShowModal;
      },
      set(value) {
        this.SET_SHOWMODAL(value);
      }
    }
  },
  watch: {
    currCity() {
      return (this.currDistrict = this.getDistrictList[0].name);
    },
  },
  methods: {
    // mapActions namespaced 作法
    ...mapActions({
      fetchCurrCity: "areaLocation/fetchCurrCity",
      fetchCurrDistrict: "areaLocation/fetchCurrDistrict",
    }),
    // mapMutations namespaced 作法
    ...mapMutations({
      SET_KEYWORDS: "areaLocation/SET_KEYWORDS",
      SET_IGNORE: "areaLocation/SET_IGNORE",
      SET_SHOWMODAL: "pharmacies/SET_SHOWMODAL",
      SET_CURRSTORE: "pharmacies/SET_CURRSTORE"
    }),
    openInfoBox(store) {
      this.showModal = true;
      this.SET_CURRSTORE(store);
    }
  },
};
</script>

<style lang="scss">
.aside-menu {
  width: 25%;
  height: 100vh;
  background-color: #f1f1f1;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .wraps {
    border-bottom: 1px solid #666;
    padding: 2rem;
    label {
      display: block;
      line-height: 2;
      font-size: 1.2rem;
      position: relative;

      select {
        position: absolute;
        left: 6em;
        margin-top: 0.3em;
        min-width: 100px;
        font-size: 1.2rem;
      }

      input {
        display: block;
        padding: 2px 8px;
        line-height: 2;
        font-size: 1.2rem;
      }
      .ignoreAll {
        display: inline;
      }
    }
  }
}

.store-info {
  position: relative;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }
  .mask-info {
    margin-bottom: 20px;
    span {
      position: absolute;
      left: 4em;
    }
  }
  .btn-store-detail {
    position: absolute;
    padding: 8px;
    top: 5.5em;
    right: 2em;
    .fa-info-circle {
      display: block;
      font-size: 2rem;
    }
  }
}
</style>