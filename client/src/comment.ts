export class Comment {
  constructor(
    initialx: number,
    speed: number,
    lane: number,
    comment: string,
    commentlength: number,
    fillStyle: string
  ) {
    this.speed = speed;
    this.lane = lane;
    this.comment = comment;
    this.commentlength = commentlength;
    this.x = initialx;
    this.fillStyle = fillStyle;
  }
  private speed: number;
  public x: number;
  public lane: number;
  public comment: string;
  public commentlength: number;
  public fillStyle: string;

  public move = () => {
    this.x -= this.speed;
  };

  public isShowing = () => {
    if (this.x < this.commentlength * -1.1) return false;
    return true;
  };
}
