import React, { Component } from 'react'
import "./ClassForm.css";

export default class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            isEdited: 0,
            indexVal: null,
        };
        this.eName = React.createRef();
        this.ePrice = React.createRef();
        this.eWeight = React.createRef();
        this.eItem = React.createRef();
    }

    handleSubmit = (e) => {
        if (this.state.isEdited === 1) {
            e.preventDefault();
            let newObj = {
                name: e.target.productName.value,
                price: e.target.productPrice.value,
                weight: e.target.productWeight.value,
                item: e.target.productItem.value,
            };
            let newArr = [...this.state.arr];
            console.log(newArr);
            newArr[this.state.indexVal] = newObj;
            this.setState({ arr: newArr });
            this.setState({ isEdited: 0 });

            e.target.productName.value = "";
            e.target.productPrice.value = "";
            e.target.productWeight.value = "";
            e.target.productItem.value = "";

        } else {
            e.preventDefault();
            let obj = {
                name: e.target.productName.value,
                price: e.target.productPrice.value,
                weight: e.target.productWeight.value,
                item: e.target.productItem.value,
            };

            this.setState({ arr: [...this.state.arr, obj] });
            console.log(obj);
            e.target.productName.value = "";
            e.target.productPrice.value = "";
            e.target.productWeight.value = "";
            e.target.productItem.value = "";
        }
    };

    deleteData = (index) => {
        let temp = [...this.state.arr];
        let dt = temp.filter((t, i) => i !== index);
        console.log(dt);
        this.setState({ arr: dt });
    };

    editData = (name, price, weight, item, index) => {

        this.eName.current.value = name;
        this.ePrice.current.value = price;
        this.eWeight.current.value = weight;
        this.eItem.current.value = item;

        this.eName.current.focus();
        this.ePrice.current.focus();
        this.eWeight.current.focus();
        this.eItem.current.focus();

        this.setState({ isEdited: 1 });
        this.setState({ indexVal: index });
    };



    // list of sort asc,des

    sortTaskLTH = () => {
        const sortedTaskLTH = [...this.state.arr].sort((a, b) => a.price - b.price);
        this.setState({ arr: sortedTaskLTH });
        console.log(sortedTaskLTH)
    };

    sortTaskHTL = () => {
        const sortedTaskHTL = [...this.state.arr].sort((a, b) => a.price - b.price);
        this.setState({ arr: sortedTaskHTL.reverse() });
        console.log(sortedTaskHTL)
    };

    sortTaskAsc = () => {
        const sortedAsc = [...this.state.arr].sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        console.log(sortedAsc)
        this.setState({ arr: sortedAsc })


    }
    sortTaskDes = () => {
        const sortedDes = [...this.state.arr].sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        this.setState({ arr: sortedDes.reverse() })
        console.log(sortedDes)
    }

    render() {

        return (
            <div className="forms">
                <div className="inp">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Form Data</h1>
                        <div>
                            <label>Product Name:</label>
                            <input name="productName" ref={this.eName} placeholder="Enter your Product Name"></input>
                        </div>
                        <div>
                            <label>Product Price:</label>
                            <input name="productPrice" ref={this.ePrice} placeholder="Enter your Price"></input>
                        </div>
                        <div>
                            <label> Product Weight :</label>
                            <input name="productWeight" ref={this.eWeight} placeholder="Enter your Product Weight"></input>
                        </div>
                        <div>
                            <label> Product Item :</label>
                            <input name="productItem" ref={this.eItem} placeholder="Enter your Details of Item"></input>
                        </div>
                        <div>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div className="show">
                    {this.state.arr.map((e, i) => {
                        return (
                            <div key={i}>
                                <table border={1} width='100%'>
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                            <th>PRODUCT WEIGHT</th>
                                            <th>PRODUCT ITEM</th>
                                            <th>BUTTON</th>
                                        </tr>
                                        <tr>
                                            <td><p>{i}</p></td>
                                            <td><p>{e.name}</p></td>
                                            <td><p>{e.price}</p></td>
                                            <td><p>{e.weight}</p></td>
                                            <td><p>{e.item}</p></td>
                                            <td><button onClick={() => this.deleteData(i)}> Delete</button>
                                                <button onClick={() =>
                                                    this.editData(e.name, e.price, e.weight, e.item, i)
                                                }
                                                >
                                                    Edit
                                                </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => this.sortTaskAsc()}>Sort By Asc</button>
                <button onClick={() => this.sortTaskDes()}>Sort By Des</button>
                <button onClick={() => this.sortTaskLTH()}>LOW TO HIGH</button>
                <button onClick={() => this.sortTaskHTL()}>HIGH TO LOW</button>
            </div>
        )
    }
}


