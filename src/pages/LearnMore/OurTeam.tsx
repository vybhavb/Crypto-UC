import * as React from "react";
import {
    Box,
    Heading,
    HStack,
    Grid,
    VStack,
} from "@chakra-ui/react";
import TeamMemberCard from "components/Card/TeamMemberCard";
import david_haddad from "assets/img/avatars/david_haddad.jpg";
import seongwoo from "assets/img/avatars/seongwoo2.jpg";
import sai from "assets/img/avatars/sai.jpg";
import vybhav from "assets/img/avatars/Vybhav.jpg";
import jeju3 from "assets/img/jeju3.jpg";
import jeju2 from "assets/img/jeju2.jpg";
import jeju1 from "assets/img/jeju1.jpg";
import lebanon from "assets/img/lebanon.jpg";

const OurTeam = () => {
    return (


        <Box textAlign="center" fontSize="xl">
            <Grid minH="90vh" p={3}>
                <VStack>
                    <Heading size='xl' pt='8' pb='8'>Our Team</Heading>
                    <HStack spacing={10}>
                        <TeamMemberCard image={vybhav} name={"Vybhav Bhargav"} role={"Full Stack Developer"} email={"vacharbh@ucdavis.edu"} imageSrc={jeju3} linkedIn={"https://www.linkedin.com/in/vybhavb"} github={"https://github.com/vybhavb/"} website={"https://www.vybhavb.com"}></TeamMemberCard>
                        <TeamMemberCard image={seongwoo} name={"Seongwoo Choi"} role={"Frontend Developer"} email={"shjchoi@ucdavis.edu"} imageSrc={jeju1} linkedIn={"https://www.linkedin.com/in/swchoi1994"} github={"https://github.com/swchoi1994"}></TeamMemberCard>
                        <TeamMemberCard image={david_haddad} name={"David Haddad"} role={"Full Stack Developer"} email={"davhaddad@ucdavis.edu"} imageSrc={lebanon} linkedIn={"https://www.linkedin.com/in/davidhaddad7"} github={"https://github.com/davidhaddad7"}></TeamMemberCard>
                        <TeamMemberCard image={sai} name={"Sairamvinay V."} role={"Backend Developer"} email={"saivijay@ucdavis.edu"} imageSrc={jeju2} linkedIn={"https://www.linkedin.com/in/sairamvinay"} github={"https://github.com/Sairamvinay/"}></TeamMemberCard>
                    </HStack>
                    <Heading>
                        <Heading size='md' pt='8' pb='8' color='gray.500'>Made with <span role="img">🫀</span>  by Vybhav, Seongwoo, David, and Sai</Heading>
                    </Heading>
                </VStack>
            </Grid>
        </Box>

    );
}

export default OurTeam;
