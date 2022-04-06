

export class Snack {
  constructor(data) {
    this.name = data.name,
    this.price = data.price,
    this.img = data.img
  }

  get Template() {
    return `
    <div class="col-3 text-center m-3 p-3 border border-dark shadow">
      <img class="mb-3 h-50 img-fluid" src="${this.img}" alt="">
      <div class="p-2 d-flex justify-content-between border-top border-dark">
        <h3>${this.name}</h3>
        <h3>${this.price}</h3>
      </div>
      <button class="btn btn-secondary mt-2" onclick="app.snackController.buySnack('${this.name}')">Buy</button>
    </div>`
  }
}