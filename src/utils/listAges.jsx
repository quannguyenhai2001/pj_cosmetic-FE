import { MenuItem } from "@mui/material"

export function listAges(type, title) {
    const listAges = []
    for (let i = 1; i <= 100; i++) {
        listAges.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
    }
    return listAges
}

