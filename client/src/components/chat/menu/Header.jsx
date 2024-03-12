import { useContext } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
import { useState } from "react";

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    const [openDrawer,setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const  toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (<>
        <Component>
            <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
            <Wrapper>
                    <MessageIcon />
                 <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
                <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </Component>
    </>
    )
}

export default Header
