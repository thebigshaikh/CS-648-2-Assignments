const Products = [];

class ProductTable extends React.Component {
  render() {
    const productRows = this.props.products.map(product => React.createElement(ProductRow, {
      key: product.id,
      product: product
    }));
    return React.createElement("table", {
      className: "borderedTable"
    }, React.createElement("thead", {
      align: "left"
    }, React.createElement("tr", null, React.createElement("th", null, "Product Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows));
  }

}

class ProductRow extends React.Component {
  render() {
    const prd = this.props.product;
    return React.createElement("tr", null, React.createElement("td", null, prd.Name), React.createElement("td", null, "$", prd.Price), React.createElement("td", null, prd.Category), React.createElement("td", null, React.createElement("a", {
      href: prd.Image,
      target: "_blank"
    }, "View")));
  }

}

class AddProduct extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    var price = form.prdPrice.value;
    price = price.slice(1);
    const prd = {
      productName: form.prdName.value,
      productPrice: price,
      productCategory: form.prdCat.value,
      productImage: form.prdImg.value
    };
    this.props.createProduct(prd);
    form.prdName.value = "";
    form.prdPrice.value = "$";
    form.prdImg.value = "";
  }

  render() {
    return React.createElement("div", null, React.createElement("form", {
      name: "productAdd",
      className: "formAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "Category", React.createElement("br", null), React.createElement("select", {
      id: "prdCat",
      name: "category"
    }, React.createElement("option", {
      value: "shirts"
    }, "Shirts"), React.createElement("option", {
      value: "jeans"
    }, "Jeans"), React.createElement("option", {
      value: "jackets"
    }, "Jackets"), React.createElement("option", {
      value: "sweaters"
    }, "Sweaters"), React.createElement("option", {
      value: "accessories"
    }, "Accessories")))), React.createElement("p", null, React.createElement("label", null, "Price Per Unit", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdPrice",
      defaultValue: "$"
    }))), React.createElement("p", null, React.createElement("input", {
      type: "submit",
      id: "btnAdd",
      value: "Add Product"
    }))), React.createElement("div", null, React.createElement("p", null, React.createElement("label", null, "Product Name", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdName"
    }))), React.createElement("p", null, React.createElement("label", null, "Image URL", React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "prdImg"
    }))))));
  }

}

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query{
            productList{
                id Name Price Image Category
            }
        }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const resposeResult = await response.json();
    this.setState({
      products: resposeResult.data.productList
    });
  }

  async createProduct(newProduct) {
    const query = `mutation {
            productAdd(product:{
                Name: "${newProduct.productName}",
                Price: ${newProduct.productPrice},
                Image: "${newProduct.productImage}",
                Category: ${newProduct.productCategory},
            }) {id}
        }`;
    const response = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    this.loadData();
  }

  render() {
    return React.createElement("div", {
      id: "mainDiv"
    }, React.createElement("h1", null, "My Company Inventory"), React.createElement("h3", null, "Showing all availble products"), React.createElement("hr", null), React.createElement("br", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("h3", null, "Add a new product to inventory"), React.createElement("hr", null), React.createElement(AddProduct, {
      createProduct: this.createProduct
    }));
  }

}

ReactDOM.render(React.createElement(Product, null), document.getElementById('section1'));