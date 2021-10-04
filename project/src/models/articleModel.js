import react from "react";

export default class ArticleModel {
  constructor(id, img, title, preview, body) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.preview = preview;
    this.body = body;
  }
}
