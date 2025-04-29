import React, { useEffect, useState } from "react";
import TeaSubscriptionCard from "./TeaSubscriptionCard";
import { getAllSubscriptions } from "../../services/teaSubscriptionService";

const TeaSubscriptionContainer = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    const fetchSubscriptions = () => {
        getAllSubscriptions()
        .then((data) => {
            setSubscriptions(data.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        })
    }

    const toggleStatus = (id, currentStatus) => {
        const updatedStatus = currentStatus === "active" ? "inactive" : "active";
        updateSubscription(id, { status: updatedStatus })
            .then(() => fetchSubscriptions())
            .catch((err) => setError("We had an oopsie on the update."))
    }

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    return (
        <div className="tea-subscription-container">
            <h2>🫖 Tea Subscriptions</h2>
            <div className="tea-card-wrapper">
                {subscriptions.map((sub) => (
                <TeaSubscriptionCard
                    key={sub.id}
                    subscription={sub}
                    onToggleStatus={toggleStatus}
                />
                ))}
            </div>
        </div>
    )
}