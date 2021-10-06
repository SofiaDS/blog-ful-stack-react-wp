import react from "react";

export class ArticleModel {
  constructor(id, date, img, title, excerpt, content, cat, link) {
    this.id = id;
    this.date = date;
    this.img = img;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.cat = cat;
    this.link = link;
  }
}
export function objectToArt(article){
  return new ArticleModel(article.id, article.date, article.img, article.title.rendered, article.excerpt.rendered, article.content.rendered, article.cat, article.link);
}
