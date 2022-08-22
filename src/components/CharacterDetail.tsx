import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State, characterInfo } from '../state'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { bindActionCreators } from 'redux'

interface DetailType {
    name: string,
    mass: string,
    gender: string,
    height: string,
    skin_color: string
}

const CharacterDetail: React.FC = () => {
    const dispatch = useDispatch()
    const { setCharacterInfo } = bindActionCreators(characterInfo, dispatch)
    const [isedit, setIsedit] = useState<boolean>(false)
    const [state, setState] = useState<DetailType>({
        name: "",
        mass: "",
        gender: "",
        height: "",
        skin_color: ""
    })
    let i = useSelector((c: State) => c.info)

    return (
        <Card sx={{ minWidth: 275, marginTop: "90px", width: "33%", marginLeft: "420px", background: "#f9f9f9" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {!isedit && <label>Name: {i.name}</label>}
                    {isedit && <TextField id="standard-basic" label="Name" variant="standard" onChange={e => setState(prevState => ({ ...prevState, name: e.target.value }))} />}
                    <EditIcon sx={{ marginLeft: "150px", cursor: "pointer" }} onClick={() => {
                        setIsedit(prevState => !prevState)
                    }} />
                </Typography>
                <hr />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {!isedit && <label> Mass: {i.mass}</label>}
                    {isedit && <TextField id="standard-basic" label="Mass" variant="standard" onChange={e => setState(prevState => ({ ...prevState, mass: e.target.value }))} />}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {!isedit && <label>Gender: {i.gender}</label>}
                    {isedit && <TextField id="standard-basic" label="Gender" variant="standard" onChange={e => setState(prevState => ({ ...prevState, gender: e.target.value }))} />}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {!isedit && <label>Height: {i.height}</label>}
                    {isedit && <TextField id="standard-basic" label="Height" variant="standard" onChange={e => setState(prevState => ({ ...prevState, height: e.target.value }))} />}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {!isedit && <label>Skin Color: {i.skin_color}</label>}
                    {isedit && <TextField id="standard-basic" label="Skin Color" variant="standard" onChange={e => setState(prevState => ({ ...prevState, skin_color: e.target.value }))} />}
                </Typography>
                {isedit && <Button variant="outlined" onClick={() => {
                    setCharacterInfo(state)
                    setIsedit(false)
                }}>Save</Button>}
            </CardContent>
        </Card>
    )
}

export default CharacterDetail
