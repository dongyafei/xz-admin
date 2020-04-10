import convertHttp from '@/utils/convertHttp'
export default {
  methods: {
    // 分页处理
    initialPage(totalElements) {
      this.totalElements = totalElements;
    },
    // 初始化文件列表
    initialFileList(list) {
      this.fileList.splice(0);
      list.forEach(value => {
        value.url = convertHttp(value.url)
        this.fileList.push(value);
      });
    },
    // 获取文件列表
    getFileList(page, size) {
      this.$http_normal({
        url: `/api/qiNiuContent/page?page=${page - 1}&size=${size}&sort=id,desc${
          this.searchVal ? `&key=${this.searchVal}` : ""
          }${
          this.date
            ? `&greatTime=${this.dateArray[0]}&lessTime=${this.dateArray[1]}`
            : ""
          }`
        ,
        method: "get"
      }).then(result => {
        const data = result.data;
        this.$refs.pictureTable.clearSelection()
        this.initialPage(data.totalElements);
        this.initialFileList(data.content);
      });
    }
  }
}