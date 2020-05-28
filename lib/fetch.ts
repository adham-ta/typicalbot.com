import fetch from 'node-fetch';

const _fetch = async (...args: any[]) => {
    try {
        // @ts-ignore
        const response = await fetch(...args);

        const data = await response.json();

        if (response.ok) {
            return data;
        }

        throw new Error(response.statusText);
    } catch (error) {
        if (!error.data) {
            error.data = {
                message: error.message
            };
        }

        throw error;
    }
}

export default _fetch;
