import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { debounce } from "lodash";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { changeCharacter, State } from '../../state'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import Button, { ButtonProps } from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#000"),
    backgroundColor: "#2c4b58",
    '&:hover': {
        backgroundColor: "#405056",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export default function SearchBar() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { search } = bindActionCreators(changeCharacter, dispatch)
    let character: string = useSelector((c: State) => c.character)
    const [searchVal, setSearchVal] = useState<string>("")
    const debouncedSearch = debounce(async (criteria) => {
        search(criteria)
    }, 1000)

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchVal(e.target.value)
        debouncedSearch(e.target.value)
    }

    useEffect(() => {
        setSearchVal(character)
    }, [character])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ background: "#17323e" }}>
                <Toolbar>
                    <a href="/">
                        <img src="./logo512.png" style={{ width: "34%" }} alt="logo" />
                    </a>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    </Typography>
                    {
                        location.pathname === "/"
                            ? <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    value={searchVal}
                                    onChange={handleChange}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }} />
                            </Search>
                            : <ColorButton onClick={() => navigate("/")}>Back</ColorButton>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
