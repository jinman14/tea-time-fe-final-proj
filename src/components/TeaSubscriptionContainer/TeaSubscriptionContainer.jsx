import './TeaSubscriptionContainer.css';
import React, { useEffect, useState } from "react";
import TeaSubscriptionCard from "../TeaSubscriptionCard/TeaSubscriptionCard";
import { getAllSubscriptions, updateSubscription } from "../../services/teaSubscriptionService";

const TeaSubscriptionContainer = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const [searchTerm, setSearchTerm] = useState("");

    const fetchSubscriptions = (query = "") => {
        getAllSubscriptions(query)
            .then((response) => {
                // console.log("Fetched data:", response);
                setSubscriptions(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        fetchSubscriptions(searchTerm)
    }

    const handleClearSearch = () => {
        setSearchTerm("")
        setLoading(true)
        fetchSubscriptions()
    }

    const toggleStatus = (id, currentStatus) => {
        const updatedStatus = currentStatus === "active" ? "inactive" : "active";
        // console.log(`Toggling ${id}`)
        updateSubscription(id, { status: updatedStatus })
            .then(() => {
                setSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.map((sub) =>
                        sub.id === id ? {
                            ...sub,
                            attributes: {
                                ...sub.attributes,
                                status: updatedStatus
                            }
                        } : sub
                    )
                );
            })
        .catch((err) => setError("We had an oopsie on the update."));
    };

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    if (loading) return <div>THE KETTLE IS HOT, THE TEAS(ubscriptions) ARE BREWING</div>

    if (error) return <div className="error-message">"Oh no."</div>
// console.log(subscriptions)
    return (
        <div className="tea-subscription-container">
            <h2>🫖 Tea Subscriptions 🫖</h2>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Want a specific subbie?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <div className="tea-card-wrapper">
                {subscriptions.map((sub) => (
                <TeaSubscriptionCard
                    key={sub.id}
                    subscription={sub}
                    toggleStatus={toggleStatus}
                />
                ))}
            </div>
        </div>
    )
}

export default TeaSubscriptionContainer;