import './TeaSubscriptionCard.css';
import React from "react";
import { Link } from "react-router-dom";
import bagOfLeaves from "../../assets/bag_of_tea.jpg";
import pinkLeaves from "../../assets/pink_leaves.jpeg";
import leafFellow from "../../assets/tea_fellow.jpeg";
import realLeaves from "../../assets/real_tea_leaves.png";


const TeaSubscriptionCard = ({ subscription, toggleStatus }) => {
// console.log(subscription.attributes)
    const teaSub = subscription.attributes
    const subId = subscription.id

    const teaImages = [
        bagOfLeaves,
        pinkLeaves,
        leafFellow,
        realLeaves
    ]

    const randomTeaImage = teaImages[Math.floor(Math.random() * teaImages.length)];

    const handleStatusToggle = (e) => {
        e.stopPropagation();
        toggleStatus(subId, teaSub.status)
    }
    return (
        <div className="tea-subscription-card">
            <Link to={`/subscriptions/${subId}`} >
                <h3>Customer: {teaSub.customer_name} - Tea: {teaSub.tea_type}</h3>
                <p>Order delivery: {teaSub.frequency}</p>
                <p>Subscription status: {teaSub.status}</p>
            </Link>
            <button onClick={handleStatusToggle}>
                {teaSub.status === "active" ? "Deactivate Subscription" : "Reactivate Subscription"}
            </button>

            <div className="tea-image_wrapper">
                <img src={randomTeaImage} alt="Tea Item" className="tea-leaf-img" />
            </div>
        </div>
    )
}

export default TeaSubscriptionCard;