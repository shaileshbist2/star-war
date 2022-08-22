import { useSelector } from 'react-redux'
import { State } from '../state'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CharacterDetail = () => {
    let i = useSelector((c: State) => c.info)

    return (
        <Card sx={{ minWidth: 275, marginTop: "90px", width: "33%", marginLeft: "420px", background: "#f9f9f9" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Name: <span>{i.name}</span>
                </Typography>
                <hr />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Mass: {i.mass}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Gender: {i.gender}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Height: {i.height}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Skin Color: {i.skin_color}
                </Typography>

            </CardContent>
        </Card>
    )
}

export default CharacterDetail
