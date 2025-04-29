import React from "react";
import { Link } from "react-router-dom";

const TeaSubscriptionCard = ({ subscription, toggleStatus }) => {
// console.log(subscription.attributes)
    const teaSub = subscription.attributes
    const subId = subscription.id

    return (
        <div className="tea-subscription-card">
            <Link to={`/subscriptions/${subId}`} >
                <h3>Customer: {teaSub.customer_name} - Tea: {teaSub.tea_type}</h3>
                <p>Order delivery: {teaSub.frequency}</p>
                <p>Subscription status: {teaSub.status}</p>
            </Link>
            <button onClick={() => toggleStatus(id, teaSub.status)}>
                {teaSub.status === "active" ? "Deactivate Subscription" : "Reactivate Subscription"}
            </button>
        </div>
    )
}

export default TeaSubscriptionCard;