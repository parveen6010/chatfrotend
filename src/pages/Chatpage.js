import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Chatpage = () => {

    const [chats, statechat] = useState([]);

    const fatachdata = async () => {
        const { data } = await axios.get("/api/chat");
        statechat(data);
    };

    useEffect(() => {
        fatachdata();

    }, []);


    return <div>{chats.map(chat => <div key={chat._id}>{chat.chatName}</div>)}</div>;

};

export default Chatpage
