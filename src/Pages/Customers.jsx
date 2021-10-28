import { useEffect, useState } from "react";

function Customers() {
    const [customerList, setCustomerList] = useState([])
    const [name, setName] = useState([])
    const [age, setAge] = useState([])
    const [preferredGenre, setPreferredGenre] = useState([])


    useEffect(() => {
        const url = `http://localhost:3030/customers`;
        fetch(url)
            .then((res) => res.json())
            .then((Data) => {
                console.log("customers", Data)
                setCustomerList(Data.data);
            });
    }, []);

    const handleName = (event) => {
        console.log("inside Name", event.target.value)
        setName(event.target.value)
    }

    const handleAge = (event) => {
        console.log("inside Age", event.target.value)
        setAge(event.target.value)
    }

    const handlePreferredGenre = (event) => {
        console.log("inside PreferredGenre", event.target.value)
        setPreferredGenre(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newCustomer = {
            name,
            age,
            preferredGenre
        }
        console.log("new customer", newCustomer)

        const fetchOptions = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newCustomer)
        }

        fetch("http://localhost:3030/customers", fetchOptions)
            .then((res) => res.json())
            .then((newCustomer) => {

            })
    }


    const handleDelete = (event) => {
        const customerToDelete = {
            method: "DELETE"
        }

    }

    return (
        <>
            <header>
                <nav>
                    <p>Logo</p>
                    <p>
                        <a href="http://localhost:3030/customers">Create Customer</a>
                    </p>
                </nav>
            </header>
            <main>
                <section>
                    <ul>
                        {customerList.map((customer, index) => {
                            const { name, age, preferredGenre } = customer
                            return (
                                <li key={index}>
                                    <h3>Name: {name}</h3>
                                    <p>Age: {age}</p>
                                    <p>Favourite Genre: {preferredGenre}</p>
                                    <button
                                        onClick={handleDelete}>Delete Customer</button>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Customers;