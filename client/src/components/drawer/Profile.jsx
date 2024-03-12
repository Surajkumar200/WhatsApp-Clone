import { Box, Typography, styled } from "@mui/material"
import { useContext } from "react"
import { AccountContext } from "../../context/AccountProvider"


const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
 
`;

const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;


const Profile = () => {
    const { account } = useContext(AccountContext)
    return (<>
        <ImageContainer>
            <Image src={account.picture} alt="dp" />
        </ImageContainer>

        <BoxWrapper >
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>

        <DescriptionContainer>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DescriptionContainer>

        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Eat! Sleep! Code! Repeat</Typography>
        </BoxWrapper >
    </>
    )
}

export default Profile
