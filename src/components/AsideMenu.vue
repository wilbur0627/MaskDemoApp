<template>
  <div class="aside-menu">
    <div class="wraps">
      <label>
        縣市：<select>
          <option>台北市</option>
        </select>
      </label>
      <label>
        行政區：<select>
          <option>北投區</option>
        </select>
      </label>
    </div>
    <div class="wraps">
      <label>
        <i class="fas fa-search-location"></i> 關鍵字搜尋：
        <input type="text" placeholder="請輸入關鍵字" />
      </label>
    </div>

    <ul class="store-lists">
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">最後更新時間:</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">最後更新時間:</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">最後更新時間:</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">最後更新時間:</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">最後更新時間:</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AsideMenu",
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