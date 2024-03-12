import { useContext } from "react";
import LoginDialog from "./account/LoginDialog"
import { AppBar, Box, Toolbar, styled } from "@mui/material"
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const LoginHeader = styled(AppBar)`
    background-color: #00A884;
    height: 220px;
    box-shadow: none;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;


const Messenger = () => {


    const { account } = useContext(AccountContext);

    return (
        <Component>{
            account ?
                <>
                    <Header >
                        <Toolbar>
                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader >
                        <Toolbar>
                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
        }
        </Component>
    )
}

export default Messenger