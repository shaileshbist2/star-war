import React, { useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Stack, Pagination } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API } from "./constant"
import { useSelector, useDispatch } from 'react-redux'
import { State, characterInfo } from '../state'
import { bindActionCreators } from 'redux'
import "./style.css"

interface ResultType { name: string, gender: string, height: string, birth_year: string, mass: string, skin_color: string }
interface CharacterType {
    count: number,
    next: string,
    previous: string,
    results: ResultType[],
    loader: boolean
}

const Characters: React.FC = () => {
    let character: string = useSelector((c: State) => c.character)

    const dispatch = useDispatch()
    const { setCharacterInfo } = bindActionCreators(characterInfo, dispatch)

    const [page, setPage] = React.useState<number>(1);
    const [state, setState] = React.useState<CharacterType>({
        count: 0,
        next: "",
        previous: "",
        results: [],
        loader: false
    })

    const switchPageBySearch = async (char = "") => {
        setState(prevState => ({ ...prevState, loader: true }))
        const data = await axios.get(`${API}/?search=${char}`).then(res => res.data)
        setState(prevState => ({ ...prevState, ...data, loader: false }))
    }

    useEffect(() => {
        switchPageBySearch(character)
    }, [character])

    const switchPage = async (num: number = 1) => {
        setState(prevState => ({ ...prevState, loader: true }))
        const data = await axios.get(`${API}/?page=${num}`).then(res => res.data)
        setState(prevState => ({ ...prevState, ...data, loader: false }))
    }

    useEffect(() => {
        if (character) {
            switchPageBySearch(character)
        } else {
            switchPage(1)
        }
    }, [])

    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
        switchPage(value)
        setPage(value)
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: "90px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table" size="small">
                    <TableHead sx={{ background: "#dbdbdb" }}>
                        <TableRow sx={{ "& th": { fontWeight: "800" } }}>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Height</TableCell>
                            <TableCell align="left">Birth Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.loader
                                ?
                                <tr style={{ height: "330px" }}>
                                    <td className="lds-ripple">
                                        <div></div>
                                        <div></div>
                                    </td>
                                </tr>
                                :
                                state.results.map((row: ResultType, indx: number) => (
                                    <TableRow key={indx}>
                                        <TableCell align="left" sx={{ fontWeight: "600" }}>
                                            <Link to="/info" style={{ color: "#505050" }} onClick={() => {
                                                setCharacterInfo({
                                                    name: row.name,
                                                    height: row.height,
                                                    mass: row.mass,
                                                    skin_color: row.skin_color,
                                                    gender: row.gender
                                                })
                                            }}>{row.name}</Link>
                                        </TableCell>
                                        <TableCell align="left">{row.gender}</TableCell>
                                        <TableCell align="left">{row.height}</TableCell>
                                        <TableCell align="left">{row.birth_year}</TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2}>
                <Pagination count={state.count} page={page} onChange={handleChange} />
            </Stack>
        </>
    )
}

export default Characters