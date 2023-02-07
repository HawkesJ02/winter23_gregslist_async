
export class House{
constructor(data){
  this.bedrooms = data.bedrooms
  this.bathrooms = data.bathrooms
  this.levels = data.levels
  this.imgUrl = data.imgUrl
  this.year = data.number
  this.price = data.price
  this.description = data.description
}

get house_template(){
  return `
  <div class="col-md-4 mb-3">
  <div class="card">
    <img src="${this.imgUrl}" class="card-img-top"
      alt="House">
    <div class="card-body">
      <div class="card-title fs-5">Bedrooms:'${this.bedrooms}, Bathrooms: ${this.bedrooms}, Floors: ${this.levels}'</div>
      <p>${this.description ? this.description : "A lovely house :)"}</p>
      <p>${this.year}</p>
      <p>${this.price}</p>
      <div class="d-flex justify-content-between">
      <button class="btn ms-1 btn-danger" type="button" onclick="">Remove House</button>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn ms-1 btn-info" type="button">Edit House</button>
      </div>
      </div>
  </div>
</div>
  `
}

}