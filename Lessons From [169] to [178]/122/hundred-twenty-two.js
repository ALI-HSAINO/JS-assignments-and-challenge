let ajaxReq = new XMLHttpRequest();
ajaxReq.open("get", "../119/articles.json");
ajaxReq.send();
ajaxReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    displayingData(mainData);
  }
};
function displayingData(data) {
  let mainDiv = document.createElement("div");
  mainDiv.id = "data";
  document.body.appendChild(mainDiv);
  for (let i = 0; i < data.length; i++) {
    let minorDiv = document.createElement("div");
    let title = document.createElement("h2");
    let article = document.createElement("p");
    let author = document.createElement("p");
    let category = document.createElement("p");
    mainDiv.append(minorDiv);
    minorDiv.appendChild(title);
    minorDiv.appendChild(article);
    minorDiv.appendChild(author);
    minorDiv.appendChild(category);
    title.append(`Title ${i + 1}`);
    article.append(`Article Number ${data[i].articleId} Body`);
    author.append(`Author: ${data[i].articleAuthor}`);
    category.append(`Category: ${data[i].articleSection}`);
  }
}
