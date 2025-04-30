import "./TeaSubscriptionDetails.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSubscriptionById } from "../../services/teaSubscriptionService";

const TeaSubscriptionDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getSubscriptionById(id)
        .then((response) => {
            setSubscription(response.data);
            setLoading(false)
        })
        .catch((err) => {
            setError("Oh god, what do we do now? I'm scared.");
            setLoading(false);
        })
    }, [id])

    if (loading) return <div>Picky, picky, we pick this Subscription to look at.</div>
    if (error) return <div className="error-message">"Oh god, what do we do now? I'm scared.</div>
console.log(subscription)
    return (
        <div className="tea_subscription_details">
            <h2>Oi, mate. Here be the deats for tea subbie {subscription.id}.</h2>
            {subscription && (
                <div>
                    <h3>Customer Name: <strong>{subscription.attributes.customer_details.full_name}</strong></h3>
                    <p>Customer Email: {subscription.attributes.customer_details.email}</p>
                    <p>Customer Address: {subscription.attributes.customer_details.address}</p>
                    <h4>Tea: <strong>{subscription.attributes.tea_details.name}</strong></h4>
                    <p>Description: {subscription.attributes.tea_details.description}</p>
                    <p>Brewing Time: {subscription.attributes.tea_details.brew_time}</p>
                    <p>Brewing Temperature: {subscription.attributes.tea_details.temperature} Freedom Degrees</p>
                </div>
            )}
            <button onClick={() => navigate("/")} className='back-button'> Click here to go back</button>
        </div>
    )
}

export default TeaSubscriptionDetails