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
                console.log(newCustomer)
                setCustomerList([...customerList, newCustomer.data])
            })
    }


    const handleDelete = (id) => {
        const customerToDelete = {
            method: "DELETE"
        }
        console.log("selected id", id)
        const deleteUrl = `http://localhost:3030/customers/${id}`;

        console.log("Inside deleteUrl: ", deleteUrl);

        fetch(deleteUrl, customerToDelete);
    }

    return (
        <>
            <header>
                <nav>
                    <p>Logo</p>
                    <p>
                        <a href="http://localhost:3000/customers">Create Customer</a>
                    </p>
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <h2>Create a new customer!</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <label htmlFor="name-input">Name:</label>
                            <input type="text" onChange={handleName} />
                            <label htmlFor="age-input">Age:</label>
                            <input type="text" onChange={handleAge} />
                            <label htmlFor="preferred-genre-input">Favourite Genre:</label>
                            <input type="text" onChange={handlePreferredGenre} />
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </section>
                <section>
                    <ul>
                        {customerList.map((customer, index) => {
                            const { id, name, age, preferredGenre } = customer
                            return (
                                <li key={index}>
                                    <h3>Name: {name}</h3>
                                    <p>Age: {age}</p>
                                    <p>Favourite Genre: {preferredGenre}</p>
                                    <button
                                        onClick={e => handleDelete(id)}>Delete Customer</button>
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