import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
                text="Founder cum Director's Message"
                textAlign="center"
                style={{ fontSize: '2em', marginBottom: '20px' }}
            />
            <Paragraph 
                text={
                    'Recognizing the need for a post-care platform for individuals, families, friends, and associates, I was inspired to create a space for cultivating purpose and meaning in life. \
                    My spiritual inclinations have led me to participate in numerous camps, discourses, and workshops on positive living. These experiences have allowed me to gather valuable insights for myself and those close to me. \
                    However, I noticed that many institutions tend to impose their ideologies rather than offering a buffet of ideas. This realization led to the birth of Prasthan Yatnam. \
                    Prasthan Yatnam is a humble initiative aimed at fostering a community where members gather every Thursday for group meditation sessions accompanied by music from various sects. \
                    Each session includes a brief introduction to the sect whose music is featured, followed by a sharing of experiences by the participants. Prasthan Yatnam was officially registered as a society on 21/10/2022.'
                }
                maxWidth="sm"
                mx={0}
                textAlign="center"
                style={{ lineHeight: '1.6', marginBottom: '20px' }}
            />

            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;