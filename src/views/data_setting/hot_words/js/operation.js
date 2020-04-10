export default {
	methods: {
		initialPage(totalElements) {
		  this.totalElements = totalElements;
		},
		initialHotWordsList(list) {
		  this.hotWordsList.splice(0);
		  list.forEach(value => {
				value.value = JSON.parse(value.value)
				Object
					.keys(value.value)
					.forEach(val => {
						if(val !== 'id') {
							value[val] = value.value[val]
						}
					})
		    this.hotWordsList.push(value);
		  });
		},
		getHotWordsList(page, size) {
		  this.$http_normal({
		    url: `/api/groupData/page?page=${page - 1}&size=${
		      size
		      }&sort=sort,asc&groupName=routine_hot_search${this.searchVal ? `&value=${this.searchVal}` : ""}`,
		    method: "get"
		  }).then(result => {
        const data = result.data;
        this.$refs.table.clearSelection()
		    this.initialPage(data.totalElements);
		    this.initialHotWordsList(data.content);
		  });
		},
		deleteAllHotWords() {
			if (this.selectList.length == 0) {
			  this.$warnMsg("请勾选热词进行批量删除")
			  return
			}
			this.$showMsgBox({
			  msg: `<p>是否删除选中热词?</p>`,
			  isHTML: true
			}).then(() => {
			  this.$http_json({
			    url: `/api/groupData/del`,
			    method: "post",
			    data: this.selectList.map(val => val.id)
			  }).then(() => {
			    this.$successMsg("删除成功");	    
			    this.getHotWordsList(this.nowPage, this.nowSize)
			  });
			});
		},
		deleteHotWords(item) {
			this.$showMsgBox({
			  msg: `<p>是否删除选中热词?</p>`,
			  isHTML: true
			}).then(() => {
			  this.$http_json({
			    url: `/api/groupData/del`,
			    method: "post",
			    data: [ item.id ]
			  }).then(() => {
			    this.$successMsg("删除成功");
					this.getHotWordsList(this.nowPage, this.nowSize)
			  });
			});
		},
		getRowKey(row) {
		  return row.id;
		},
		handleSelectionChange(val) {
		  this.selectList = val;
		},
		showAddBox() {
			const form = this.$refs.form
			form.dialog = true
			form.isAdd = true
		},
		showEditBox(item) {
			const form = this.$refs.form
			form.form.id = item.id
			form.getDetail()
			form.dialog = true
			form.isAdd = false
		},
		// 重置
		refresh() {
		  this.searchVal = ""
		  this.$refs.pagination.toFirstPage()
		},
		// 点击搜索
		search() {
		  this.$refs.pagination.toFirstPage()
		}
	}
}