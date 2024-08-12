const API_KEY = "AIzaSyA0RWDWbvI-3-bE7S1jPwifSCWBi4hw_PM";

const createUser = async (email, password) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        throw new Error(error.message);
    }
}

const signInUser = async (email, password) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        throw new Error(error.message);
    }
}

export { createUser, signInUser };
