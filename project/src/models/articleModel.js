import react from "react";

export default class ArticleModel {
  constructor(img, title, preview, body) {
    this.img = img;
    this.title = title;
    this.preview = preview;
    this.body = body;
  }
}
