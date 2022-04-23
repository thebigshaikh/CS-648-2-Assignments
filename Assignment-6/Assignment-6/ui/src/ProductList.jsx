/* eslint linebreak-style: ["error","windows"] */
/* eslint "react/jsx-no-undef": "off" */
// import ProductFilter from './productFilter.jsx';

import React from 'react';
import Toast from './Toast.jsx';
import ProductTable from './ProductTable.jsx';
import AddProduct from './ProductAdd.jsx';

export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      toastVisible: false,
      toastMessage: ' ',
      toastType: 'info',
    };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount() {
    document.forms.productAddForm.price.value = '$';
    this.loadData();
  }

  async loadData() {
    const query = `query{
              productList{
                  id Name Price Image Category
              }
          }`;

    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    this.setState({ products: result.data.productList });
  }

  async createProduct(product) {
    const newProduct = product;
    const query = `mutation {
            productAdd(product:{
              Name: "${newProduct.Name}",
              Price: ${newProduct.Price},
              Image: "${newProduct.Image}",
              Category: ${newProduct.Category},
            }) {
              _id
            }
        }`;
    await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    this.loadData();
    this.showSuccess(`Product ${newProduct.Name} created successfully`);
  }

  async deleteProduct(id) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const variables = { id };
    await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    this.loadData();
    this.showSuccess(`Deleted product ${id} successfully`);
  }

  showSuccess(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'success',
    });
  }

  showError(message) {
    this.setState({
      toastVisible: true, toastMessage: message, toastType: 'danger',
    });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
  }

  render() {
    const { products } = this.state;
    const { toastVisible, toastType, toastMessage } = this.state;
    return (
      <div id="mainDiv">
        <Toast
          showing={toastVisible}
          onDismiss={this.dismissToast}
          bsStyle={toastType}
        >
          {toastMessage}
        </Toast>
        <h3>Showing all availble products</h3>
        <hr />
        <br />
        <ProductTable products={products} deleteProduct={this.deleteProduct} />
        <h3>Add a new product to inventory</h3>
        <hr />
        <AddProduct createProduct={this.createProduct} />
      </div>
    );
  }
}
