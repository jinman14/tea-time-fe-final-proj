import React from "react";

const TeaSubscriptionCard = ({ subscription, toggleStatus }) => {
// console.log(subscription.attributes)
    const teaSub = subscription.attributes

    return (
        <div className="tea-subscription-card">
            <h3>Customer: {teaSub.customer_name} - Tea: {teaSub.tea_type}</h3>
            <p>Order delivery: {teaSub.frequency}</p>
            <p>Subscription status: {teaSub.status}</p>

            <button onClick={() => toggleStatus(id, teaSub.status)}>
                {teaSub.status === "active" ? "Deactivate Subscription" : "Reactivate Subscription"}
            </button>
        </div>
    )
}

export default TeaSubscriptionCard;