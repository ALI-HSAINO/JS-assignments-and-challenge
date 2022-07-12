let ajaxReq = new XMLHttpRequest();
ajaxReq.open("get", "../119/articles.json");
ajaxReq.send();
ajaxReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
  }
};
