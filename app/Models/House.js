
export class House{
constructor(data){
  this.bedrooms = data.bedrooms
  this.bathrooms = data.bathrooms
  this.floors = data.levels
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

static HouseButton(){
  return `
  <button onclick="app.houseController.drawForm()" class="btn btn-success ms-3 mb-2" data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <i class="mdi mdi-plus"></i>
    </button>
  `
}

static HouseForm(editable) {

  return `
  <div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <form onsubmit="app.houseController.create_house()"'}>
    <div class="modal-body">
      <div class="mb-3">
        <label for="make" class="form-label">Bedrooms</label>
        <input required type="number" class="form-control" id="bedrooms" placeholder="Number of Bedrooms" name="bedrooms">
      </div>
      <div class="mb-3">
        <label for="bathrooms" class="form-label">bathrooms</label>
        <input required type="number" class="form-control" id="bathrooms" placeholder="Number of Bathrooms" name="bathrooms">
      </div>
      <div class="mb-3">
        <label for="year" class="form-label">year</label>
        <input required type="number" class="form-control" id="year" placeholder="year..." name="year">
      </div>
      <div class="mb-3">
        <label for="floors" class="form-label">floors</label>
        <input required type="number" class="form-control" id="floors" placeholder="Number of Floors or Levels" name="levels">
      </div>
      <div class="mb-3">
        <label for="imgUrl" class="form-label">imgUrl</label>
        <input required type="text" class="form-control" id="imgUrl" placeholder="Paste IMG URL here" name="imgUrl">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <textarea name="description" class="form-control" id="description" rows="3">
        ${editable.description}
        </textarea>
      </div>
      <div class="mb-3">
        <label for="year" class="form-label">Year</label>
        <input type="number" class="form-control" id="year"
          title="Input Year" name="year">
      </div>
      <div class="mb-3">
      <label for="price" class="form-label">price</label>
      <input type="number" class="form-control" id="price"
        title="Input price" name="price">
    </div>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
  `

}

}