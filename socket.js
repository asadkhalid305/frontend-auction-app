import io from 'socket.io-client';

let socket;
export const initializeSocket = (user) => {
    socket = io('http://10.0.32.228:3011', {
        query: `user=${JSON.stringify(user)}`
    });

    console.log('socket initialized');
}

// export const emit = (event, payload, callback) =>
//     socket.emit(event, payload, callback);

export const listen = (event, callback) => {
    // console.log('socket listener');
    socket.on(event, (data) => callback(data));
}