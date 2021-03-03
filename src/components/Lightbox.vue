<template>
  <transition name="modal">
    <div class="modal-mask" v-show="showModal" @click.self="showModal = false">
      <div class="modal-container">
        <div class="modal-body" v-if="currStore">
          <h1 class="store-name">{{ currStore.name }}</h1>
          <hr />
          <h2 class="title">營業時間</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>早上</th>
                <td v-for="(service, index) of servicePeriods[0]" :key="index">
                  {{ service }}
                </td>
              </tr>
              <tr>
                <th>中午</th>
                <td v-for="(service, index) of servicePeriods[1]" :key="index">
                  {{ service }}
                </td>
              </tr>
              <tr>
                <th>晚上</th>
                <td v-for="(service, index) of servicePeriods[2]" :key="index">
                  {{ service }}
                </td>
              </tr>
            </tbody>
          </table>
          <h2 class="title">
            地址: <span>{{ currStore.address }}</span>
          </h2>
          <h2 class="title">
            電話: <span>{{ currStore.phone }}</span>
          </h2>
          <h2 class="title">
            備註: <span>{{ currStore.custom_note }}</span>
          </h2>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Lightbox",
  computed: {
    ...mapGetters(["getShowModal", "getCurrStore"]),
    showModal: {
      get() {
        return this.getShowModal;
      },
      set(value) {
        this.SET_SHOWMODAL(value);
      },
    },
    currStore() {
      return this.getCurrStore;
    },
    servicePeriods() {
      let servicePeriods = this.getCurrStore.service_periods;
      servicePeriods = servicePeriods.replace(/N/g, "O").replace(/Y/g, "X");
      return servicePeriods
        ? [
            servicePeriods.slice(0, 7).split(""),
            servicePeriods.slice(7, 14).split(""),
            servicePeriods.slice(14, 21).split(""),
          ]
        : servicePeriods;
    },
  },
  methods: {
    ...mapMutations({
      SET_SHOWMODAL: "pharmacies/SET_SHOWMODAL",
    }),
  },
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .modal-container {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    width: 700px;
    .modal-body {
      .store-name {
        text-align: center;
        font-size: 2em;
        padding: 5px;
      }
      .title {
        position: relative;
        font-size: 1.2em;
        font-weight: 600;
        margin: 20px 0;
        &:last-child {
          margin-bottom: 30px;
        }
        span {
          position: absolute;
          margin-left: 5px;
        }
      }
      table {
        overflow: hidden;
        border-radius: 5px;
        th {
          background-color: #092d48;
          color: white;
          min-width: 80px;
          padding: 15px;
          border: 1px solid black;
        }
        td {
          text-align: center;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>