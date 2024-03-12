import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";



const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;


const Conversations = ({text}) => {
    const [users, setUsers] = useState([]);
    const {account,socket,setActiveUsers} = useContext(AccountContext)

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
           const fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => ( 
                    user.sub  !== account.sub && 
                    <>
                    <Conversation user={user} />
                    <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;