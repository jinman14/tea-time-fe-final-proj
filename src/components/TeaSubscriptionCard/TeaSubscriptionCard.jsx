import React from "react";

const TeaSubscriptionCard = ({ subscription, toggleStatus }) => {
    const { id, customer_name, tea_type, frequency, status } = subscription;

    return (
        <div className="tea-subscription-card">
            <h3>Customer: {customer_name} - Tea: {tea_type}</h3>
            <p>Order delivery {frequency}</p>
            <p>Subscription status: {status}</p>

            <button onClick={() => toggleStatus(id, status)}>
                {status === "active" ? "Deactivate Subscription" : "Reactivate Subscription"}
            </button>
        </div>
    )
}

export default TeaSubscriptionCard;