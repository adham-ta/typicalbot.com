export async function fetchGetJson(url: string) {
    try {
        return await fetch(url).then((res) => res.json());
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function fetchPostJson(url: string, data?: {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data || {})
        });

        return await response.json();
    } catch (err) {
        throw new Error(err.message);
    }
}
