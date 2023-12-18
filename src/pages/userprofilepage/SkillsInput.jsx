import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import skills from '../../config/skills.json'
const SkillsInput = ({ userSkills, formDataDispatch, error, name }) => {
    // console.log(skills);
    const handleChange = ev => {
        const { name, value } = ev.target;
        // console.log(name, value);
    }

    return (
        <FormControl>
            <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
            <Select
                className={`max-w-fit min-w-full`}
                name={name}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={userSkills || []}
                onChange={formDataDispatch}
                input={<OutlinedInput id="select-multiple-chip" label="SKILLS" multiline />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} >
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            // MenuProps={MenuProps}
            >
                {skills.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SkillsInput