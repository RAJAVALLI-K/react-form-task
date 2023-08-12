import { useState } from "react";
import "./Form.css";
import ShowItem from "./ShowItem";

const Form = () => {
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice] = useState('');
    const [ProductWeight, setProductWeight] = useState('');
    const [ProductItem, setProductItem] = useState('');
    const [task, setTask] = useState([]);
    const [duplicatAry, setAry] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false)

    // submit function

    const handleSubmit = (e) => {
        e.preventDefault();
        setTask([...task, { ProductName, ProductPrice, ProductWeight, ProductItem, id: task.length + 1 }]);
        // console.log(task);
        setProductName("")
        setProductPrice("")
        setProductWeight("")
        setProductItem("")
    }
    console.log(task);

    // delete function

    const deleteItem = (remove) => {
        const reject = task.filter((a) => {
            return remove !== a
        })
        setTask([...reject])
    }

    // update function

    const updateData = () => {
        setIsUpdate(false)
        const d = duplicatAry
        const isExit = task.some((data) =>
            data.id === d.id
        )
        if (isExit) {
            const replace = task.map((data) => {
                console.log(data);
                if (data.id === d.id) {
                    console.log(data.id === d.id);
                    return { ...data, ProductName: ProductName, ProductPrice: ProductPrice, ProductWeight: ProductWeight, ProductItem: ProductItem }
                }
                else {
                    return { ...data }
                }
            })
            setTask(replace)
            setProductName("")
            setProductPrice("")
            setProductWeight("")
            setProductItem("")
        };
    }

    // edit function

    const editItem = (e) => {
        setIsUpdate(true)
        setAry(e)
        console.log(duplicatAry);
        setProductName(e.ProductName);
        setProductPrice(e.ProductPrice);
        setProductWeight(e.ProductWeight)
        setProductItem(e.ProductItem)

    }

    // input function

    const handle = (event) => {

        if (event.target.name === "productName") {
            setProductName(event.target.value);
        }
        if (event.target.name === "productPrice") {
            setProductPrice(event.target.value);
        }
        if (event.target.name === "productWeight") {
            setProductWeight(event.target.value);
        }
        if (event.target.name === "productItem") {
            setProductItem(event.target.value);
        }
    };

    // list of sort asc,des

    const sortTaskLTH = () => {
        const sortedTaskLTH = [...task].sort((a, b) => a.ProductPrice - b.ProductPrice);
        setTask(sortedTaskLTH);
        console.log(sortedTaskLTH)
    };

    const sortTaskHTL = () => {
        const sortedTaskHTL = [...task].sort((a, b) => a.ProductPrice - b.ProductPrice);
        setTask(sortedTaskHTL.reverse());
        console.log(sortedTaskHTL)
    };

    const sortTaskAsc = () => {
        const sortedAsc = [...task].sort((a, b) => {
            if (a.ProductName.toLowerCase() < b.ProductName.toLowerCase()) {
                return -1;
            }
            if (a.ProductName.toLowerCase() > b.ProductName.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        console.log(sortedAsc)
        setTask(sortedAsc)
    }

    const sortTaskDes = () => {
        const sortedDes = [...task].sort((a, b) => {
            if (a.ProductName.toLowerCase() < b.ProductName.toLowerCase()) {
                return -1;
            }
            if (a.ProductName.toLowerCase() > b.ProductName.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        setTask(sortedDes.reverse())
        console.log(sortedDes)
    }

    return (
        <div className="forms">
            <div className="inp">

                <h1>Form Data</h1>
                <div>
                    <label>Product Name:</label>
                    <input name="productName" placeholder="Enter your Product Name" value={ProductName} onChange={handle} ></input>
                </div>
                <div>
                    <label>Product Price:</label>
                    <input name="productPrice" placeholder="Enter your Price" value={ProductPrice} onChange={handle} ></input>
                </div>
                <div>
                    <label> Product Weight :</label>
                    <input name="productWeight" placeholder="Enter your Product Weight" value={ProductWeight} onChange={handle} ></input>
                </div>
                <div>
                    <label> Product Item :</label>
                    <input name="productItem" placeholder="Enter your Details of Item" value={ProductItem} onChange={handle} ></input>
                </div>
                <div>
                    {!isUpdate ? <button onClick={handleSubmit}>Submit</button> : <button onClick={updateData}>UpdateData</button>}
                </div>

            </div>
            <div className="show">
                {task.map((a, int) =>
                    <ShowItem item={a} key={int} remove={deleteItem} edit={editItem} />
                )}
                <button onClick={() => sortTaskAsc()}>Sort By Asc</button>
                <button onClick={() => sortTaskDes()}>Sort By Des</button>
                <button onClick={() => sortTaskLTH()}>LOW TO HIGH</button>
                <button onClick={() => sortTaskHTL()}>HIGH TO LOW</button>
            </div>
        </div>
    );
};

export default Form;




