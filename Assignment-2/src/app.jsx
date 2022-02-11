const Products = [];

class ProductTable extends React.Component {
    render() {
        const productRows = this.props.products.map(product => <ProductRow key={product.id} product={product}/>);
        return (
            <table className="borderedTable">
                <thead align="left">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const prd = this.props.product;
        return(
            <tr>
                <td>{prd.productName}</td>
                <td>${prd.productPrice}</td>
                <td>{prd.productCategory}</td>
                <td><a href={prd.productImage} target="_blank">View</a></td>
            </tr>
        )
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
        const prd = {productName: form.prdName.value, productPrice: price, productCategory: form.prdCat.value, productImage: form.prdImg.value};
        this.props.createProduct(prd);
        form.prdName.value="";   
        form.prdPrice.value="$";
        form.prdImg.value="";
    }

    render() {
        return (
            <div>
                <form name="productAdd" className="formAdd" onSubmit={this.handleSubmit}>
                    <div>
                        <p>
                            <label>Category<br/>
                            <select id="prdCat" name="category">
                                <option value="shirts">Shirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="jackets">Jackets</option>
                                <option value="sweaters">Sweaters</option>
                                <option value="accessories">Accessories</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Price Per Unit<br/> 
                            <input type="text" name="prdPrice" defaultValue="$"/></label>
                        </p>
                        <p>
                            <input type="submit" id="btnAdd" value="Add Product"></input>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>Product Name<br/> 
                            <input type="text" name="prdName"/></label>
                        </p>
                        <p>
                            <label>Image URL<br/> 
                            <input type="text" name="prdImg"/></label>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

class Product extends React.Component {
    constructor() {
        super();
        this.state = {products:[]}
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }
    
    loadData() {
        setTimeout(() => {
            this.setState({products:Products})
        }, 500)
    }

    createProduct(product) {
        product.id = this.state.products.length + 1;
        const newProductList = this.state.products.slice();
        newProductList.push(product);
        this.setState({products:newProductList})
    }

    render() {
        return (
            <div id="mainDiv">
                <h1>My Company Inventory</h1>
                <h3>Showing all availble products</h3>
                <hr/><br/>
                <ProductTable products={this.state.products}/>
                <h3>Add a new product to inventory</h3>
                <hr/>
                <AddProduct createProduct={this.createProduct}/>
            </div>
        )
    }   
}
   
ReactDOM.render(<Product/>, document.getElementById('section1'));