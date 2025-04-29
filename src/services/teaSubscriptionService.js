const BE_Url = "http://localhost:3000/api/v1/tea_subscriptions"

export const getAllSubscriptions = (query = "") => {
    let url = BE_Url
        if (query) {
            url += `?query=${encodeURIComponent(query)}`;
    }

    return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error("Uh oh! Where all da subscriptions?");
            return response.json();
    })
}

export const getSubscriptionById = (id) => {
    return fetch(`${BE_Url}/${id}`)
        .then((response) => {
            if (!response.ok) throw new Error("Uh oh! Where dis subscription?");
            return response.json();
    })
}

// export const createSubscription = (newSubscriptionData) => {
// is this one needed for MVP?
// }

export const updateSubscription = (id, updateData) => {
    return fetch(`${BE_Url}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tea_subscription: updateData }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("No no no, no can do, no updoot subscription like this.");
            return response.json();
    })
}