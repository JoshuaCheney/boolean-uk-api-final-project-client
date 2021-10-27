import { useEffect, useState } from "react";

function Customers() {
    const [customers, setCustomers] = useState([])


    useEffect(() => {
        const url = `http://localhost:3000/customers`;
        fetch(url)
            .then((res) => res.json())
            .then((Data) => {
                console.log("customers", Data)
                setCustomers(Data);
            });
    }, []);

    const handleDelete = (event) => {
        const customerToDelete = {
            method: "DELETE"
        }

    }

    return (
        <>
            <header>
                <h1>"HELLO"</h1>
            </header>
            <main>
                <section>
                    <ul>
                        {customers.map((customer, index) => {
                            const { name, age, preferredGenre } = customer
                            return (
                                <li>
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