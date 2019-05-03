import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() postDate: Date;

  public counter: number = 0;

  constructor() {}

  ngOnInit() {}

  onCountLike() {
    this.counter += 1;
    console.log(this.counter);
  }

  onCountUnlike() {
    this.counter -= 1;
    console.log(this.counter);
  }

  getColor() {
    if (this.counter > 0) {
      return "lightgreen";
    } else if (this.counter < 0) {
      return "tomato";
    }
  }
}
