

export class Cart {
  constructor(data) {
    this.name = data.name
    this.img = data.item
  }

  get Template() {
    return `
    <div class="col-1 m-1">
      <img class="img-thumbnail" src="${this.img}" title="${this.name} onclick="removeSnack(${this.name})">
    </div>`
  }
}

