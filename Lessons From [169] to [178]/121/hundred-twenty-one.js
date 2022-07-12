let ajaxReq = new XMLHttpRequest();
ajaxReq.open("get", "../119/articles.json");
ajaxReq.send();
ajaxReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].articleSection = "All";
    }
    console.log(mainData);
    updateData = JSON.stringify(mainData);
    console.log(updateData);
  }
};
