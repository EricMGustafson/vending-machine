

export class CartItem {
  constructor(data) {
    this.name = data.name
    this.img = data.img
  }

  get CartTemplate() {
    return `
    <div class="col-1 m-1">
      <img class="img-thumbnail remove" src="${this.img}" title="${this.name}" onclick="removeSnack()">
    </div>`
  }
}

